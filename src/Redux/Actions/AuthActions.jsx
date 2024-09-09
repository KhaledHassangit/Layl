import UseDeleteData from "../../Hooks/UseDeleteData"
import { UseGetDataToken } from "../../Hooks/UseGetData"
import { UseInsertData, UseInsertDataToken } from "../../Hooks/UseInsertData"
import { UseUpdateData, UseUpdateDataWithImage } from "../../Hooks/UseUpdateData"
import * as Actions from "../Type"
import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const CreateNewUser = (data) => async (dispatch) => {
    try{
        const response =  await UseInsertData(`/auth/users/`,data)
        dispatch (
            {
                type:Actions.CREATE_NEW_USER,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.CREATE_NEW_USER,
                payload: e.response ,
            }
        )
    }

}


export const getSingleUser = (id) => async (dispatch) => {
    try{
        const response =  await UseGetDataToken(`/auth/get-single-user/${id}`)
        dispatch (
            {
                type:Actions.GET_SINGLE_USER,
                payload:response,
                loading:true,
            }
        ) 
        } catch(e) {
        dispatch(
            {
                type:Actions.GET_SINGLE_USER,
                payload: e.response ,
            }
        )
    }

}
export const getAllUsers = (search) => async (dispatch) => {
    try {
        const response = await UseGetDataToken(`/auth/get-users/?search=${search}`);
        dispatch({
            type: Actions.GET_ALL_USERS,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: "Error" + e,
        });
    }
};
export const UpdateUserProfile = (formData) => async (dispatch) => {
    try {
        const response = await UseUpdateDataWithImage(`/auth/update-user-profile/`, formData);
        dispatch({
            type: Actions.UPDATE_USER_DATA,
            payload: response,
            loading: true,
        });

        if (response.status === 200) {
            await dispatch(getUserData());
        }
    } catch (e) {
        dispatch({
            type: Actions.UPDATE_USER_DATA,
            payload: "Error" + e,
        });
    }
};

export const LoginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: Actions.LOGIN_USER_REQUEST, loading: true }); 
        const response = await UseInsertData(`/auth/api/token/`, { email, password });

        dispatch({
            type: Actions.LOGIN_USER,
            payload: response,
            loading: false, 
        });

        dispatch(getUserData());

    } catch (e) {
        dispatch({
            type: Actions.LOGIN_USER_FAIL,
            payload: e.response,
            loading: false, 
        });
    }
}
export const RefreshToken = (refreshToken) => async (dispatch) => {
    try {
        const response = await UseInsertData(`/auth/jwt/refresh/`, refreshToken );

        dispatch({
            type: Actions.REFRESH_TOKEN,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type:Actions.REFRESH_TOKEN,
            payload: e,
        });
    }
};


export const getUserData = () => async (dispatch) => {
    try {
        dispatch({ type: Actions.GET_USER_DATA_REQUEST, loading: true }); 
        const response = await UseGetDataToken(`/auth/get-user-profile/`);

        dispatch({
            type: Actions.GET_USER_DATA,
            payload: response,
            loading: false, 
        });

    } catch (e) {
        dispatch({
            type: Actions.GET_USER_DATA_FAIL,
            payload: e.response,
            loading: false, 
        });
    }
}

export const BlockUser = (id) => async (dispatch) => {
    try {
        const response =  await UseUpdateData(`/auth/block-user/${id}/`)
        dispatch (
            {
                type:Actions.BLOCK_USER,
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

export const UnBlockUser = (id) => async (dispatch) => {
    try {
        const response =  await UseUpdateData(`/auth/unblock-user/${id}/`)
        dispatch (
            {
                type:Actions.UN_BLOCK_USER,
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

export const CreateNewRequest = () => async (dispatch) => {
    try {
        const response =  await UseInsertDataToken(`/auth/create/request/`)
        dispatch (
            {
                type:Actions.CREATE_NEW_REQUEST,
                payload:response,
                loading:true,
            }
        ) 

    } catch(e) {
        dispatch({
            type:Actions.CREATE_NEW_REQUEST,
            payload:"Error" + e ,
        })
    }
}
export const getAllAdminRequests = (search) => async (dispatch) => {
    try {
        const response =  await UseGetDataToken(`/auth/get/request/?search=${search}`)
        dispatch (
            {
                type:Actions.GET_ALL_REQUESTS,
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

export const ChangeToMerchant = (id) => async (dispatch) => {
    try {
        const response =  await UseUpdateData(`/auth/change-user-to-merchant/${id}/`)
        dispatch (
            {
                type:Actions.UPDATE_USER_MERCHANT,
                payload:response,
                loading:true,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.GET_ERROR,
            payload:"Error" + e.response ,
        })
    }
}
export const DeleteRequest = (id) => async (dispatch) => {
    try {
        const response =  await UseDeleteData(`/auth/delete/request/${id}/`)
        dispatch (
            {
                type:Actions.DELETE_REQUEST,
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

export const ChangePassword = (body) => async (dispatch) => {
    try {
        const response =  await UseInsertDataToken(`/auth/create/change-password/`,body)
        dispatch (
            {
                type:Actions.CHANGE_PASSWORD,
                payload:response,
                loading:true,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.CHANGE_PASSWORD,
            payload: e.response ? e.response : "Error " + e.message,
        })
    }
}


export const SerachUser = (term) => async (dispatch) => {
    try {
        const response = await UseGetDataToken(`/auth/search/user/?email=${term}`); 
        dispatch({
            type: Actions.SEARCH_USER,
            payload: response,
            loading: false,  
        });
    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: "Error: " + e.message,
        });
    }
};
export const SerachRequest = (word) => async (dispatch) => {
    try {
        const response =  await UseGetDataToken(`/auth/search/request/`,{word})
        dispatch (
            {
                type:Actions.SEARCH_REQUEST,
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

export const ForgetPassword = ({email}) => async (dispatch) => {
    try {
        const response =  await UseInsertData(`/auth/users/reset_password/`,{email})
        dispatch (
            {
                type:Actions.FORGET_PASSWORD,
                payload:response,
                loading:true,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.FORGET_PASSWORD,
            payload:"Error" + e ,
        })
    }
}
export const ResetConfirmPassword = (body) => async (dispatch) => {
    try {
        const response =  await UseInsertData(`/auth/users/reset_password_confirm/`,body)
        dispatch (
            {
                type:Actions.RESET_PASSWORD,
                payload:response,
                loading:true,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.RESET_PASSWORD,
            payload:"Error" + e ,
        })
    }
}

export const Notifications = () => async (dispatch) => {
    try {
        const response =  await UseGetDataToken(`/notification/get/notifications/`)
        dispatch (
            {
                type:Actions.GET_ALL_NOTIFICATIONS,
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
export const DeleteNotification = (id) => async (dispatch) => {
    try {
        const response =  await UseDeleteData(`/notification/delete/notifications/${id}/`)
        dispatch (
            {
                type:Actions.DELETE_NOTIFICATION,
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
export const ContactMessage = (form) => async (dispatch) => {
    try {
        const response =  await UseInsertData(`/auth/send-email/`,form)
        dispatch (
            {
                type:Actions.CONTACT_MESSAGE,
                payload:response,
                loading:true,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.CONTACT_MESSAGE,
            payload:"Error" + e ,
        })
    }
}

export const getallAnalytics = () => async (dispatch) => {
    try {
        const response =  await UseGetDataToken(`/analytics/`)
        dispatch (
            {
                type:Actions.GET_ANALYTICS,
                payload:response,
                loading:true,
            }
        ) 
    } catch(e) {
        dispatch({
            type:Actions.GET_ANALYTICS,
            payload:"Error" + e ,
        })
    }
}