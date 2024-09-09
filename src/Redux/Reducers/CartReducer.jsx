import * as Actions from "../Type"

const initialState ={
    AddtoCart:[],
    UserCart:[],
    DelteCartItem:[],
    UpdateCartItem:[],
    loading:true,
}


const CartReducer = (state = initialState , action) => {
    switch(action.type)
    {
        case Actions.ADD_TO_CART :
            return{
                AddtoCart:action.payload,
                loading:false,

            }
        case Actions.GET_USER_CART :
            return{
                UserCart:action.payload,
                loading:false,
            }
        case Actions.DELTE_CART_ITEM :
            return{
                DelteCartItem:action.payload,
                loading:false,
            }
        case Actions.UPDATE_ONE_PRODUCT_CART :
            return{
                UpdateCartItem:action.payload,
                loading:false,
            }
        default: 
        return state;
    }
}

export default CartReducer;