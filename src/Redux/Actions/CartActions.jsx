import UseDeleteData from "../../Hooks/UseDeleteData"
import UseGetData, { UseGetDataToken } from "../../Hooks/UseGetData"
import  UseInsertDataToken, { UseInsertData } from "../../Hooks/UseInsertData"
import { UseUpdateData } from "../../Hooks/UseUpdateData"
import * as Actions from "../Type"
import Cookies from 'universal-cookie';
const cookie = new Cookies();

export const AddToCart = (body) => async (dispatch) => {
    try{
        let response;
        if (cookie.get("Access Token")) {
            response =  await UseInsertDataToken(`/cart/create/add-to-cart/`,body)
        } else {
            response =  await UseInsertData(`/cart/create/add-to-cart/`,body)
        }

        dispatch({
            type: Actions.ADD_TO_CART,
            payload: response,
            loading: false,
        });
    }
    catch(e) {
        dispatch({
            type:Actions.GET_ERROR,
            payload:"Error" + e ,
        })
    }
};

export const GetUserCart = () => async (dispatch) => {
    try{
        let response;
        if (cookie.get("Access Token")) {
            response =  await UseGetDataToken(`/cart/get/cart-items/`)
        } else {
            response =  await UseGetData(`/cart/get/cart-items/`)
        }

        dispatch({
            type: Actions.GET_USER_CART,
            payload: response,
            loading: false,
        });
    }
    catch(e) {
        dispatch({
            type:Actions.GET_ERROR,
            payload:"Error" + e ,
        })
    }
};
export const DeleteCartItem = (id) => async (dispatch) => {
    try {
        const response =  await UseDeleteData(`/cart/delete/cart-item/${id}/`)
        dispatch (
            {
                type:Actions.DELTE_CART_ITEM,
                payload:response,
                loading:true,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.GET_ERROR,
            payload:"Error" + e ,
        })
    }
}

export const UpdateCartItem = (id,count) => async (dispatch) => {

    try{
        const response =  await UseUpdateData(`/cart/update/cart-items/${id}/`,count)
        dispatch (
            {
                type:Actions.UPDATE_ONE_PRODUCT_CART,
                payload:response,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.UPDATE_ONE_PRODUCT_CART,
                payload: e.response ,
            }
        )
    }

}

// export const UpdateCartItem = (id,count) => async (dispatch) => {
//     try{
//         let response;
//         if (cookie.get("Access Token")) {
//             response =  await UseGetDataToken(`/cart/get/cart-items/`)
//         } else {
//             response =  await UseGetData(`/cart/get/cart-items/`)
//         }

//         dispatch({
//             type:Actions.UPDATE_ONE_PRODUCT_CART,
//             payload: response,
//             loading: false,
//         });
//     }
//     catch(e) {
//         dispatch({
//             type:Actions.GET_ERROR,
//             payload:"Error" + e ,
//         })
//     }
// };