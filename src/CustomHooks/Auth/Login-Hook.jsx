import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, getUserData, RefreshToken } from "../../Redux/Actions/AuthActions";
import notify from "../../Hooks/UseNotification";
import Cookie from 'universal-cookie';

const LoginHook = () => {
    const dispatch = useDispatch();
    const cookie = new Cookie();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);

    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            notify("Please Enter Your Email and Password", "warn");
            return;
        }
        setLoading(true);
        await dispatch(LoginUser(email, password));
    };

    const LoginRes = useSelector((state) => state.AuthReducer.LoginUser);
    const UserDataRes = useSelector((state) => state.AuthReducer.UserData);

    useEffect(() => {
        if (loading) {
            if (LoginRes && LoginRes.data) {
                const accessToken = LoginRes.data.access;
                const refreshToken = LoginRes.data.refresh;

                cookie.set("Access Token", accessToken, {
                    path: '/',
                    secure: true,
                    sameSite: 'Strict'
                });
                cookie.set("Refresh Token", refreshToken, {
                    path: '/',
                    secure: true,
                    sameSite: 'Strict',
                });

                notify("Welcome To Layl!", "success");
                setEmail("");
                setPassword("");
                setTimeout(() => {
                    dispatch(getUserData());
                }, 500);
            } 
            else if (!loading && !LoginRes) {
                notify("No active account found with the given credentials", "error");
                setEmail("");
                setPassword("");
                cookie.remove("Access Token");
                cookie.remove("Refresh Token");
                cookie.remove("UserData");
                setLoading(false);
            }
        }
    }, [loading, LoginRes, dispatch]);

    useEffect(() => {
        if (UserDataRes && UserDataRes.data) {
            const userDataString = JSON.stringify(UserDataRes.data);
            cookie.set("UserData", userDataString, {
                path: '/',
                secure: true,
                sameSite: 'Strict'
            });
            setTimeout(() => {
                if (UserDataRes && UserDataRes.data) {
                    const userData = UserDataRes.data;
                    if (userData.is_superuser === true) {
                        window.location.href = "/admin/home";
                    } else {
                        window.location.href = "/";
                    }
                } else {
                    window.location.href = "/";
                }
            }, 1000);
        }
    }, [UserDataRes]);



    return [onSubmit, email, password, loading, onChangeEmail, onChangePassword];
};

export default LoginHook;
