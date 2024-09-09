import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookie from 'universal-cookie';
import { RefreshToken } from "../Redux/Actions/AuthActions";

const UseRefreshToken = () => {
    const cookie = new Cookie();
    const dispatch = useDispatch();
    const [loadingToken, setLoadingToken] = useState(true);

    const refreshTokenFunction = async () => {
        const refreshToken = cookie.get("Refresh Token");
        if (!refreshToken) {
            return;
        }
        try {
            setLoadingToken(true);
            await dispatch(RefreshToken({ refresh: refreshToken }));
            setLoadingToken(false);
        } catch (error) {
            setLoadingToken(false);
        }
    };

    useEffect(() => {
        const FIVE_DAYS_MS = 5 * 24 * 60 * 60 * 1000; 
        const TEN_MINUTES_MS = 10 * 60 * 1000; 
        const refreshInterval = FIVE_DAYS_MS - TEN_MINUTES_MS;
        const interval = setInterval(() => {
            if (!loadingToken) {
                refreshTokenFunction();
            }
        }, refreshInterval);
        refreshTokenFunction();

        return () => clearInterval(interval); 
    }, [dispatch, loadingToken]);

    const RefreshTokenRes = useSelector((state) => state.AuthReducer.refreshToken);

    useEffect(() => {
        if (!loadingToken && RefreshTokenRes?.data) {
            const { access, refresh } = RefreshTokenRes.data;
            cookie.set("Access Token", access, {
                path: "/",
                secure: true,
                sameSite: "Strict",
            });
            cookie.set("Refresh Token", refresh, {
                path: "/",
                secure: true,
                sameSite: "Strict",
            });
        }
    }, [RefreshTokenRes, loadingToken, cookie]);

    return [refreshTokenFunction, loadingToken];
};

export default UseRefreshToken;
