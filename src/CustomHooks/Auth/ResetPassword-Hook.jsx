import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import notify from "../../Hooks/UseNotification";
import { ResetConfirmPassword } from "../../Redux/Actions/AuthActions";

const ResetPasswordHook = (uid, token) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        setError("");
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setError("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setLoading(true);
        await dispatch(ResetConfirmPassword({
            uid,
            token,
            new_password: newPassword,
        }));
        setLoading(false);
    };

    const res = useSelector((state) => state.AuthReducer.ResetPassword);

    useEffect(() => {
        if (!loading) {
            if (res && res.status === 204) {
                notify("Password Updated Successfully", "success", { position: "bottom-center" });
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            }
        }
    }, [loading, res, navigate]);

    return [
        newPassword,
        confirmPassword,
        handleNewPasswordChange,
        handleConfirmPasswordChange,
        handleSubmit,
        loading,
        error,
    ];
};

export default ResetPasswordHook;
