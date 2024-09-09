
import * as Actions from "../Type"
const initialState = {
    NewProduct:[],
    allProducts:[],
    TopSelling:[],
    FilterProducts:[],
    SingleProduct:[],
    AdminProducts:[],
    AdminSingleProduct:[],
    UpdateProduct:[],
    DeleteProduct:[],
    SimilarProduct:[],
    loading:true,
}


const ProductsReducer = (state = initialState , action) => {
    switch(action.type)
    {
        
        case Actions.CREATE_PRODUCT:
            return {
                ...state,
                NewProduct:action.payload,
                loading:false,
            }
        case Actions.GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts:action.payload,
                loading:false,
            }
        case Actions.GET_ALL_TOP_SELLING:
            return {
                ...state,
                TopSelling:action.payload,
                loading:false,
            }
        case Actions.GET_ALL_PRODUCTS_FILTER:
            return {
                ...state,
                FilterProducts:action.payload,
                loading:false,
            }
        case Actions.SINGLE_PRODUCT:
            return {
                ...state,
                SingleProduct:action.payload,
                loading:false,
            }
        case Actions.GET_ALL_ADMIN_PRODUCTS:
            return {
                ...state,
                AdminProducts:action.payload,
                loading:false,
            }
        case Actions.ADMIN_SIGLE_PRODUCT:
            return {
                ...state,
                AdminSingleProduct:action.payload,
                loading:false,
            }
        case Actions.UPDATE_PRODUCT:
            return {
                ...state,
                UpdateProduct:action.payload,
                loading:false,
            }
        case Actions.DELETE_PRODUCT:
            return {
                ...state,
                DeleteProduct:action.payload,
                loading:false,
            }
        case Actions.SIMILAR_PRODUCTS:
            return {
                ...state,
                SimilarProduct:action.payload,
                loading:false,
            }
        case Actions.GET_ERROR :
            return{
                AllProducts:action.payload,
                loading:false,
            }

        default: 
        return state;
    }
}

export default ProductsReducer;