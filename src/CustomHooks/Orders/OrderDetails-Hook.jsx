import { useEffect } from 'react'
import { SingleOrder } from '../../Redux/Actions/OrdersActions'
import {useDispatch  , useSelector} from "react-redux"
const OrderDetailsHook = (id) => {
    
    const dispatch = useDispatch()  

    const getOneOrder = async() => {
        await dispatch(SingleOrder(id))
    }
    useEffect(() => {
        getOneOrder()
    }, [id])
    
    const SingleOrderRes = useSelector ((state) => state.OrdersReducer.SingleOrder)
    let OrderData = []
    try {
        if (SingleOrderRes && SingleOrderRes.data) {
            OrderData = SingleOrderRes.data;
        } else {
            OrderData = [];
        }
    } catch (e) {
    }
    return [OrderData]
}

export default OrderDetailsHook
