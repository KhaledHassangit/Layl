import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserOrders, UpdateOrder } from '../../Redux/Actions/OrdersActions'

const AllUserOrdersHook = () => {

    const dispatch = useDispatch()  

    const getUserOrders = async() => {
        await dispatch(getAllUserOrders())
    }

    useEffect(() => {
        getUserOrders()
        }, [])

    const UserOrderssRes = useSelector ((state) => state.OrdersReducer.UserOrders)
    const loading = useSelector(state => state.OrdersReducer.loading)
    let AllUserOrders = []
    try {
        if (UserOrderssRes && UserOrderssRes.data) {
            AllUserOrders = UserOrderssRes.data;
        } else {
            AllUserOrders = [];
        }
    } catch (e) {
    }
        // Update Order Status 

        const handelUpdateOrder = async(id,status) =>{
            await dispatch(UpdateOrder(id,status))
            getUserOrders()
        }
    

    return [AllUserOrders,loading,getUserOrders,handelUpdateOrder]

}

export default AllUserOrdersHook
