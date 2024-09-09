import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, UpdateUserProfile, ChangePassword } from "../../Redux/Actions/AuthActions";
import notify from "../../Hooks/UseNotification";
import Cookie from 'universal-cookie';

const ProfileHook = () => {
    const cookie = new Cookie();
    let userData = cookie.get('UserData') || "";

    const [name, setName] = useState(userData.full_name || "");
    const [initialName] = useState(userData.full_name || "");
    const [email, setEmail] = useState(userData.email || "");
    const [initialEmail] = useState(userData.email || "");
    const [phoneNumber, setPhoneNumber] = useState(userData.phone_number || "");
    const [initialPhoneNumber] = useState(userData.phone_number || "");
    const [phoneNumber2, setphoneNumber2] = useState(userData.phone_number_2 || "")
    const [initialPhoneNumber2] = useState(userData.phone_number_2 || "")
    const [address, setAddress] = useState(userData.address || "");
    const [initialAddress] = useState(userData.address || "");
    const [image, setImage] = useState(null);
    const [initialImage, setInitialImage] = useState(userData.profile_img || null);
    const [loading, setLoading] = useState(true);
    const [loadingpassword, setloadingpassword] = useState(true);
    const dispatch = useDispatch();

    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangeAdress = (e) => setAddress(e.target.value);
    const onChangeNumber = (e) => setPhoneNumber(e.target.value);
    const onChangeSecondNumber = (e) => setphoneNumber2(e.target.value);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const formatPhoneNumber = (number) => {
        if (number.startsWith("+2")) {
            return number;
        }
        return `+2${number}`;
    };

    const handleEdit = async () => {
        const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
        const formattedPhoneNumber2 = phoneNumber2 ? formatPhoneNumber(phoneNumber2) : phoneNumber2;
        const formData = new FormData();

        if (name !== initialName) {
            formData.append('full_name', name);
        }
        if (email !== initialEmail) {
            formData.append('email', email);
        }
        if (phoneNumber !== initialPhoneNumber) {
            formData.append('phone_number', formattedPhoneNumber);
        }
        if (phoneNumber2 !== initialPhoneNumber2) {
            formData.append('phone_number_2', formattedPhoneNumber2);
        }
        if (address !== initialAddress) {
            formData.append('address', address);
        }
        if (image !== initialImage) {
            formData.append('profile_img', image);
        }
        formData.append('account_type', userData.account_type);

        setLoading(true);
        await dispatch(UpdateUserProfile(formData));
        setLoading(false);
    };

    const ProfileData = useSelector((state) => state.AuthReducer.UpdateUser);
    const UserDataRes = useSelector(state => state.AuthReducer.UserData);
    useEffect(() => {
        if (!loading) {
            if (ProfileData && ProfileData.status === 200) {
                dispatch(getUserData());
                notify("Profile is Updated Successfully", "success");
            }
            else if (ProfileData && ProfileData.status === 400) {
                const errorMsg = ProfileData.message || "An unknown error occurred";
                notify(`Error: ${errorMsg}`, "error");
            }
        }
    }, [ProfileData, loading, dispatch]);
    useEffect(() => {
        if (UserDataRes && UserDataRes.status === 200) {
            cookie.set("UserData", UserDataRes.data);
            const updatedUserData = UserDataRes.data;
            setName(updatedUserData.full_name);
            setEmail(updatedUserData.email);
            setPhoneNumber(updatedUserData.phone_number);
            setphoneNumber2(updatedUserData.phone_number_2);
            setAddress(updatedUserData.address);
            setImage(updatedUserData.profile_img);
            setInitialImage(updatedUserData.profile_img);
        }
    }, [UserDataRes]);



    // Change Password
    const [passwordModalShow, setPasswordModalShow] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordModalClose = () => setPasswordModalShow(false);
    const handlePasswordModalShow = () => setPasswordModalShow(true);

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
        if (loadingpassword) {
            if (PasswordChangeRes && PasswordChangeRes.status === 200) {
                notify("Password Changed Successfully", "success");
                handlePasswordModalClose();
            }
            else if (PasswordChangeRes && PasswordChangeRes.status === 400) {
                notify("Error", "error");
            }
        }
    }, [loadingpassword, PasswordChangeRes]);

    return {
        name,
        email,
        address,
        phoneNumber,
        phoneNumber2,
        loading,
        onChangeName,
        onChangeEmail,
        onChangeAdress,
        onChangeSecondNumber,
        onChangeNumber,
        handleImageChange,
        handleEdit,
        handlePasswordChange,
        passwordModalShow,
        handlePasswordModalShow,
        oldPassword,
        newPassword,
        setOldPassword,
        setNewPassword,
        handlePasswordModalClose,
        image,
        setConfirmPassword,
        confirmPassword
    };
};

export default ProfileHook;
