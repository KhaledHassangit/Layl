import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import notify from "../../Hooks/UseNotification";
import { ChangePassword } from "../../Redux/Actions/AuthActions";


const AdminChangePasswordHook = () => {
const dispatch= useDispatch()
    const [passwordModalShow, setPasswordModalShow] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordModalClose = () => setPasswordModalShow(false);
    const handlePasswordModalShow = () => setPasswordModalShow(true);
    const [loadingpassword, setloadingpassword] = useState(true);


    const handlePasswordChange = async (e) => {
        e.preventDefault();
        if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
            return;
        }
        if(newPassword !== confirmPassword){
            notify("New password and confirm password do not match", "warn");
            return;
        }

        setloadingpassword(true);
        await dispatch(ChangePassword({
            old_password: oldPassword,
            new_password: newPassword,
        }));
        setloadingpassword(false);
    };

    const PasswordChangeRes = useSelector((state) => state.AuthReducer.ChangePassword);
    useEffect(() => {
        if (loadingpassword === true) {
            if (PasswordChangeRes && PasswordChangeRes.status === 200) {
                notify("Password Changed Successfully", "success")
                handlePasswordModalClose();
            }
            else if (PasswordChangeRes && PasswordChangeRes.status === 400) {
                notify("Old Password is not valid", "error")
            }
        }
    }, [loadingpassword])

    return [passwordModalShow, handlePasswordModalShow, handlePasswordModalClose,
        oldPassword, newPassword, setOldPassword, 
        setNewPassword, 
        handlePasswordChange,confirmPassword,setConfirmPassword
    ]
}

export default AdminChangePasswordHook
