import UseGetData from "../../Hooks/UseGetData"
import { UseInsertDataToken } from "../../Hooks/UseInsertData"
import * as Actions from "../Type"

export const CreateCategory = (name) => async (dispatch) => {
    try {
        const response =  await UseInsertDataToken(`/products/create/category/`,{name})
        dispatch (
            {
                type:Actions.CREATE_CATEGORY,
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

export const getAllCategory = () => async (dispatch) => {
    try {
        const response =  await UseGetData(`/products/get/categories/`)
        dispatch (
            {
                type:Actions.GET_ALL_CATEGORIES,
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