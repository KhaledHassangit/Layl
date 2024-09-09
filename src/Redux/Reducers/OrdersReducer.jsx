
import * as Actions from "../Type"
const initialState = {
    NewOrder:[],
    AdminOrders:[],
    UserOrders:[],
    UpdatedOrder:[],
    SingleOrder:[],
    VerifyCoupon:[],
    loading:true,
}


const OrdersReducer = (state = initialState , action) => {
    switch(action.type)
    {
        
        case Actions.CREATE_NEW_ORDER:
            return {
                ...state,
                NewOrder:action.payload,
                loading:false,
            }
        
        case Actions.GET_ALL_ADMIN_ORDERS:
            return {
                ...state,
                AdminOrders:action.payload,
                loading:false,
            }
        case Actions.GET_ALL_USERS_ORDERS:
            return {
                ...state,
                UserOrders:action.payload,
                loading:false,
            }
        case Actions.UPDATE_ORDER_STATUS:
            return {
                ...state,
                UpdatedOrder:action.payload,
                loading:false,
            }
        case Actions.SINGLE_ORDER:
            return {
                ...state,
                SingleOrder:action.payload,
                loading:false,
            }
        case Actions.VERIFY_COUPON:
            return {
                ...state,
                VerifyCoupon:action.payload,
                loading:false,
            }

        case Actions.GET_ERROR :
            return{
                AdminOrders:action.payload,
            loading:false,
            }

        default: 
        return state;
    }
}

export default OrdersReducer;