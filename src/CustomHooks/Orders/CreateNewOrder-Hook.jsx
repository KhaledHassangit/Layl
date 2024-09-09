import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { CreateOrder } from "../../Redux/Actions/OrdersActions"
import notify from "../../Hooks/UseNotification"
import Cookie from 'universal-cookie';
import { getUserData, UpdateUserProfile } from "../../Redux/Actions/AuthActions"
import GetUserCartHook from "../Cart/GetUserCart-Hook"

const CreateNewOrderHook = () => {
    const cookie = new Cookie();
    let userData = "";
    if (cookie.get('UserData') !== null) {
        userData = cookie.get('UserData');
    }
    const  [AllCartres, getAllCart, ] =GetUserCartHook()
    const [name, setName] = useState(userData.full_name || "");
    const [email, setEmail] = useState(userData.email || "");
    const [phoneNumber, setPhoneNumber] = useState(userData.phone_number || "");
    const [phoneNumber2, setphoneNumber2] = useState(userData.phone_number_2 || "")
    const [address, setAddress] = useState(userData.address || "");
    const [loading, setloading] = useState(false)
    const [Note, setNote] = useState("");
    let coupon =  localStorage.getItem('coupon');

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onChangeName = (e) => setName(e.target.value);
    const onChangeAdress = (e) => setAddress(e.target.value);
    const onChangeNumber = (e) => setPhoneNumber(e.target.value);
    const onChangeSecondNumber = (e) => setphoneNumber2(e.target.value);
    const onChangeNote = (e) => setNote(e.target.value);


    const CreateOrderRes = useSelector(state => state.OrdersReducer.NewOrder);
    const UserDataRes = useSelector(state => state.AuthReducer.UserData);
    const ProfileData = useSelector((state) => state.AuthReducer.UpdateUser);

    const formatPhoneNumber = (number) => {
        if (number.startsWith("+2")) {
            return number;
        }
        return `+2${number}`;
    };

    const handelCreateOrder = async (event) => {
        if (AllCartres.id === "0") {
            notify("Empty Cart !", "warn")
            return
        }
        const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
        const formattedPhoneNumber2 = phoneNumber2 ? formatPhoneNumber(phoneNumber2) : phoneNumber2;
        event.preventDefault()
        const formData = new FormData();
        formData.append('full_name', name);
        formData.append('phone_number', formattedPhoneNumber);
        formData.append('phone_number_2', formattedPhoneNumber2);
        formData.append('address', address);
        if (name === "" || address === "" ||
            formattedPhoneNumber === "" ) {
            notify("Complete Your Information", "info")
            return
        }
        if (userData.account_type === "Blocked") {
            notify("We're sorry, but it looks like your account is currently blocked. Please contact support for assistance.", "error");

            return
        }
        const orderData = {
            notes: Note,
            coupon: coupon,
        };

        setloading(true)
        await dispatch(UpdateUserProfile(formData))
        await dispatch(CreateOrder(orderData))
        setloading(false)
    }

    useEffect(() => {
        if (loading === false) {
            if (ProfileData && ProfileData.status === 200) {
                dispatch(getUserData());
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


        }
    }, [UserDataRes]);

    useEffect(() => {
        if (loading === false) {
            if (CreateOrderRes) {
                if (CreateOrderRes.status === 201) {
                    notify("Order is Created Successfully", "success");
                    getAllCart()
                    navigate("/oderconfirmed")
                    localStorage.removeItem('coupon');
                }
            }
        }
    }, [loading, dispatch, ProfileData])
    return [
        name, email, phoneNumber
        , phoneNumber2, address, onChangeName,
        onChangeAdress, , onChangeSecondNumber
        , onChangeNumber, handelCreateOrder,Note,onChangeNote,loading]
}

export default CreateNewOrderHook
