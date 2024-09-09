import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookie from 'universal-cookie';
import { getUserData, UpdateUserProfile } from "../../Redux/Actions/AuthActions";
import notify from "../../Hooks/UseNotification";

const AdminEditProfileHook = () => {
    const cookie = new Cookie();
    let userData = cookie.get('UserData') || {};
    const [name, setName] = useState(userData.full_name || "");
    const [initialName] = useState(userData.full_name || "");
    const [phoneNumber, setPhoneNumber] = useState(userData.phone_number || "");
    const [initialPhoneNumber] = useState(userData.phone_number || "");
    const [phoneNumber2, setPhoneNumber2] = useState(userData.phone_number_2 || "");
    const [initialPhoneNumber2] = useState(userData.phone_number_2 || "");
    const [address, setAddress] = useState(userData.address || "");
    const [initialAddress] = useState(userData.address || "");
    const [profileImg, setProfileImg] = useState(userData.profile_img);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const onChangeName = (e) => setName(e.target.value);
    const onChangePhoneNumber = (e) => setPhoneNumber(e.target.value);
    const onChangePhoneNumber2 = (e) => setPhoneNumber2(e.target.value);
    const onChangeAddress = (e) => setAddress(e.target.value);
    const onImageChange = (e) => setProfileImg(e.target.files[0]);

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
        if (formattedPhoneNumber !== initialPhoneNumber) {
            formData.append('phone_number', formattedPhoneNumber);
        }
        if (formattedPhoneNumber2 !== initialPhoneNumber2) {
            formData.append('phone_number_2', formattedPhoneNumber2);
        }
        if (address !== initialAddress) {
            formData.append('address', address);
        }
        if (profileImg) {
            formData.append('profile_img', profileImg);
        }

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
                window.location.href="/admin/profile"
            } else if (ProfileData && ProfileData.status === 401) {
                const errorMsg = ProfileData.message || "An unknown error occurred";
                notify(`Error: ${errorMsg}`, "error");
            }
        }
    }, [loading]);

    useEffect(() => {
        if (UserDataRes && UserDataRes.status === 200) {
            cookie.set("UserData", UserDataRes.data);
            const updatedUserData = UserDataRes.data;
            setName(updatedUserData.full_name);
            setPhoneNumber(updatedUserData.phone_number);
            setPhoneNumber2(updatedUserData.phone_number_2);
            setAddress(updatedUserData.address);
            setProfileImg(updatedUserData.profileImg);

        }
    }, [UserDataRes]);

    return {
        name,

        phoneNumber,
        phoneNumber2,
        address,
        loading,
        onChangeName,
        onChangePhoneNumber,
        onChangePhoneNumber2,
        onChangeAddress,
        handleEdit,
        onImageChange,
        profileImg
    };
};

export default AdminEditProfileHook;
