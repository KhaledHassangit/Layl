import UseGetData from "../../Hooks/UseGetData"
import { UseInsertDataToken } from "../../Hooks/UseInsertData"
import * as Actions from "../Type"

export const CreateSubCategory = (category,name) => async (dispatch) => {
    try {
        const response =  await UseInsertDataToken(`/products/create/subcategory/`,{category,name})
        dispatch (
            {
                type:Actions.CREATE_SUB_CATEGORY,
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
export const getAllSubCategory = () => async (dispatch) => {
    try {
        const response =  await UseGetData(`/products/get/subcategories/`)
        dispatch (
            {
                type:Actions.GET_ALL_SUB_CATEGORIES,
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