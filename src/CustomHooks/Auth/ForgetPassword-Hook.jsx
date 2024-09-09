import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ForgetPassword } from "../../Redux/Actions/AuthActions";

const ForgetPasswordHook = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [loading, setloading] = useState(true);
    const onChangeEmail = (e) => { 
        setEmail(e.target.value);
    };
    const handelSend = async ()=>{
        setloading(true)
        await dispatch((ForgetPassword({
            email,
        })))
        setloading(false)
    }
    const response = useSelector((state) => state.AuthReducer.ForgetPassword);

    return [email,onChangeEmail,handelSend,response,loading]
}

export default ForgetPasswordHook
