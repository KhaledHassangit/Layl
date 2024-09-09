import { combineReducers } from "redux";
import ProductsReducer from "./Reducers/ProductsReducer";
import AuthenticationReducer from "./Reducers/AuthenticationReducer";
import CategoryReducer from "./Reducers/CategoryReducer";
import SubCategoryReducer from "./Reducers/SubCategoryReducer";
import CartReducer from "./Reducers/CartReducer";
import OrdersReducer from "./Reducers/OrdersReducer";
import OffersReducer from "./Reducers/OffersReducer";

export default combineReducers({
    AllProducts:ProductsReducer,
    AuthReducer:AuthenticationReducer,
    AllCategory:CategoryReducer,
    AllSubCategory:SubCategoryReducer,
    CartReducer:CartReducer,
    OrdersReducer:OrdersReducer,
    OffersReducer:OffersReducer,
})