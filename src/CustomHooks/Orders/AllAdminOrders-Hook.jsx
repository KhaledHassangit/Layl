import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAdminOrders,  UpdateOrder } from '../../Redux/Actions/OrdersActions'

const AllAdminOrdersHook = (searchTerm) => {

    const dispatch = useDispatch()  

    const getAdminOrders = async(search) => {
        await dispatch(getAllAdminOrders(search))
    }

    useEffect(() => {
        getAdminOrders(searchTerm)
        }, [searchTerm])

    const AdminOrderssRes = useSelector ((state) => state.OrdersReducer.AdminOrders)
    const loading = useSelector(state => state.OrdersReducer.loading)
    let AllAdminOrders = []
    try {
        if (AdminOrderssRes && AdminOrderssRes.data) {
            AllAdminOrders = AdminOrderssRes.data;
        } else {
            AllAdminOrders = [];
        }
    } catch (e) {
    }
    // Update Order Status 

    const handelUpdateOrder = async(id,status) =>{
        await dispatch(UpdateOrder(id,status))
        getAdminOrders(searchTerm)
    }
    

    
    return [AllAdminOrders,handelUpdateOrder,loading]

}

export default AllAdminOrdersHook
