import * as Actions from "../Type"
import UseInsertDataToken, { UseInsertDataWithImage } from "../../Hooks/UseInsertData"
import UseGetData, { UseGetDataToken } from "../../Hooks/UseGetData.js"
import UseDeleteData from "../../Hooks/UseDeleteData.js";
import { UseUpdateData, UseUpdateDataWithImage } from "../../Hooks/UseUpdateData.js";

export const CreateCoupon = (body) => async (dispatch) => {
    try {
        const response = await UseInsertDataToken(`/offers/create/coupon-code/`,body);
        dispatch({
            type: Actions.CREATE_NEW_COUPON,
            payload: response,
            loading: true,
        });


    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: e.response,
        });
    }
};

export const CreateDiscount = (formData) => async (dispatch) => {
    try {
        const response = await UseInsertDataWithImage(`/offers/create/product-discount/`,formData);
        dispatch({
            type: Actions.CREATE_NEW_DISCOUNT,
            payload: response,
            loading: true,
        });


    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: e.response,
        });
    }
};

export const getDiscounts = () => async (dispatch) => {
    try {
        const response = await UseGetData(`/offers/get/product-discount/`);
        dispatch({
            type: Actions.GET_DISCOUNT,
            payload: response,
            loading: true,
        });
        
    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: e.response,
        });
    }
};

export const getCoupons = () => async (dispatch) => {
    try {
        const response = await UseGetDataToken(`/offers/get/coupon-code/`);
        dispatch({
            type: Actions.GET_COUPON,
            payload: response,
            loading: true,
        });

    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: e.response,
        });
    }
};
export const DeleteDiscount = (id) => async (dispatch) => {
    try {
        const response = await UseDeleteData(`/offers/delete/product-discount/${id}/`);
        dispatch({
            type: Actions.DELETE_DISCOUNT,
            payload: response,
            loading: true,
        });

    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: e.response,
        });
    }
};

export const DeleteCoupon = (id) => async (dispatch) => {
    try {
        const response = await UseDeleteData(`/offers/delete/coupon-code/${id}/`);
        dispatch({
            type: Actions.DELETE_COUPON,
            payload: response,
            loading: true,
        });

    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: e.response,
        });
    }
};

export const UpdateCoupon = (id,body) => async (dispatch) => {
    try {
        const response = await UseUpdateData(`/offers/update/coupon-code/${id}/`,body);
        dispatch({
            type: Actions.UPDATE_COUPON,
            payload: response,
            loading: true,
        });


    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: e.response,
        });
    }
};

export const UpdateDiscount = (id,formData) => async (dispatch) => {
    try {
        const response = await UseUpdateDataWithImage(`/offers/update/product-discount/${id}/`,formData);
        dispatch({
            type: Actions.UPDATE_DISCOUNT,
            payload: response,
            loading: true,
        });


    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: e.response,
        });
    }
};


export const getSingleDiscount = (id) => async (dispatch) => {
    try {
        const response = await UseGetData(`/offers/get/single-product-discount/${id}/`);
        dispatch({
            type: Actions.GET_SINGLE_DISCOUNT,
            payload: response,
            loading: true,
        });
        
    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: e.response,
        });
    }
};

export const getSingleCoupon = (id) => async (dispatch) => {
    try {
        const response = await UseGetDataToken(`/offers/get/single-coupon-code/${id}/`);
        dispatch({
            type: Actions.GET_SINGLE_COUPON,
            payload: response,
            loading: true,
        });

    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: e.response,
        });
    }
};