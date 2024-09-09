import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import notify from "../../Hooks/UseNotification"
import { CreateNewRequest } from "../../Redux/Actions/AuthActions";
import AllUserOrdersHook from "../Orders/AlUserOrders-Hook";

const NewRequestHook = () => {
    const dispatch = useDispatch()
    const [,,getUserOrders] = AllUserOrdersHook()
    const [loading, setLoading] = useState(true)

    const handelNewRequest = async (e) => {
        if (e){
            e.preventDefault(); 
        }
        setLoading(true)
        await dispatch(CreateNewRequest())
        getUserOrders()
        setLoading(false)
    }

    const NewRequestRes = useSelector(state => state.AuthReducer.NewMerchantRequest)
    useEffect(() => {
        if (loading === false) {
            if (NewRequestRes) {
                if (NewRequestRes && NewRequestRes.status === 201) {
                    notify("Your request has been sent successfully!", "success");
                } 
                else if (NewRequestRes && NewRequestRes.status === 400) {
                    notify("Request already exists", "error");
                } else {
                    notify("Request already exists", "error");
                }

            }
        }
    }, [loading])
    return [handelNewRequest]
}

export default NewRequestHook
