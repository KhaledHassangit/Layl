import * as Actions from "../Type"
import { UseGetDataToken } from "../../Hooks/UseGetData"
import UseInsertDataToken from "../../Hooks/UseInsertData"
import { UseUpdateData } from "../../Hooks/UseUpdateData"


export const CreateOrder = (orderData) => async (dispatch) => {
    try {
        const response = await UseInsertDataToken(`/orders/create/order/`,orderData);
        dispatch({
            type: Actions.CREATE_NEW_ORDER,
            payload: response,
            loading: true,
        });

    } catch (e) {
        dispatch({
            type: Actions.CREATE_NEW_ORDER,
            payload: e.response,
        });
    }
};

export const getAllAdminOrders = (search) => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/orders/get/all-orders-for-admin/?search=${search}`)
        dispatch (
            {
                type:Actions.GET_ALL_ADMIN_ORDERS,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_ERROR,
                payload: e.response ,
            }
        )
    }

}


export const getAllUserOrders = () => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/orders/get/all-orders-for-user/`)
        dispatch (
            {
                type:Actions.GET_ALL_USERS_ORDERS,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_ERROR,
                payload: e.response ,
            }
        )
    }

}

export const UpdateOrder = (orderID,status) => async (dispatch) => {
    try{
        const response =  await UseUpdateData(`/orders/update/${orderID}/`,{status})
        dispatch (
            {
                type:Actions.UPDATE_ORDER_STATUS,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_ERROR,
                payload: e.response ,
            }
        )
    }

}

export const SingleOrder = (id) => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/orders/get/single-order/${id}/`)
        dispatch (
            {
                type:Actions.SINGLE_ORDER,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_ERROR,
                payload: e.response ,
            }
        )
    }

}


export const VerifyCoupon = (coupon) => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/offers/verify-coupon-code/?code=${coupon}`)
        dispatch (
            {
                type:Actions.VERIFY_COUPON,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.VERIFY_COUPON,
                payload: e.response ,
            }
        )
    }

}
