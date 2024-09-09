import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import notify from "../../Hooks/UseNotification";
import { CreateNewUser } from "../../Redux/Actions/AuthActions";

const RegistereHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangeconfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const onChangePhone = (e) => {
        setPhone(e.target.value);
    };

    const validateValues = () => {
        if (name.trim() === "") {
            notify("Please Enter Your Name", "warning");
            return false;
        }
        if (email.trim() === "") {
            notify("Please Enter Your Email Address", "warn");
            return false;
        }
        if (password.length < 8) {
            notify("This password is too short. It must contain at least 8 characters", "warn");
            return false;
        }
        if (password !== confirmpassword) {
            notify("Passwords do not match. Please try again.", "warn");
            return false;
        }
        if (/^\d+$/.test(password)) {
            notify("This password is too common", "warn");
            return false;
        }
        return true;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validateValues()) 
            return;

        setLoading(true);
        await dispatch(CreateNewUser({
            full_name: name,
            email,
            password,
        }));
        setLoading(false);
    };

    const createUserRes = useSelector((state) => state.AuthReducer.CreateUser);
    useEffect(() => {
        if (loading === false) {
            if (createUserRes) {
                if (createUserRes.status === 201) {
                    notify("Your Account Created Successfully", "success");
                    setName("");
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                    setTimeout(() => {
                        navigate("/login");
                    }, 1000);
                } 
                // else  {
                //     if (createUserRes.data.name) {
                //         notify("The password is too similar to the Email", "error");
                //     }
                //     if (Array.isArray(createUserRes.data.email) && createUserRes.data.email.includes('user with this Email already exists.')) {
                //         notify("User With This Email Already Exists", "error");
                //     }
                // }
            }
        }
    }, [loading, createUserRes, navigate]);

    return [name, email, password, confirmpassword, phone, onChangeName, onChangeEmail, onChangePassword, onChangeconfirmPassword, onChangePhone, onSubmit];
};

export default RegistereHook;
