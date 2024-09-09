
import * as Actions from "../Type"
const initialState = {
    NewCoupon:[],
    NewDiscount:[],
    getDiscount:[],
    getCoupon:[],
    DeleteDiscount:[],
    DeleteCoupon:[],
    UpdateDiscount:[],
    UpdateCoupon:[],
    SingleCoupon:[],
    SingleDiscount:[],
    loading:true,
}


const OffersReducer = (state = initialState , action) => {
    switch(action.type)
    {
        
        case Actions.CREATE_NEW_COUPON:
            return {
                ...state,
                NewCoupon:action.payload,
                loading:false,
            }
        case Actions.CREATE_NEW_DISCOUNT:
            return {
                ...state,
                NewDiscount:action.payload,
                loading:false,
            }
        
        case Actions.GET_DISCOUNT:
            return {
                ...state,
                getDiscount:action.payload,
                loading:false,
            }
        
        case Actions.GET_COUPON:
            return {
                ...state,
                getCoupon:action.payload,
                loading:false,
            }
        case Actions.DELETE_DISCOUNT:
            return {
                ...state,
                DeleteDiscount:action.payload,
                loading:false,
            }
        case Actions.DELETE_COUPON:
            return {
                ...state,
                DeleteCoupon:action.payload,
                loading:false,
            }
        case Actions.UPDATE_DISCOUNT:
            return {
                ...state,
                UpdateDiscount:action.payload,
                loading:false,
            }
        case Actions.UPDATE_COUPON:
            return {
                ...state,
                UpdateCoupon:action.payload,
                loading:false,
            }
            
            case Actions.GET_SINGLE_DISCOUNT:
                return {
                    ...state,
                    SingleDiscount:action.payload,
                    loading:false,
                }
            case Actions.GET_SINGLE_COUPON:
                return {
                    ...state,
                    SingleCoupon:action.payload,
                    loading:false,
                }
        case Actions.GET_ERROR :
            return{
                getDiscount:action.payload,
                loading:false,
            }

        default: 
        return state;
    }
}

export default OffersReducer;