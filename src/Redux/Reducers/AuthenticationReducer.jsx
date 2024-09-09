
import * as Actions from "../Type"
const initialState = {
    CreateUser: [],
    LoginUser: [],
    UserData: [],
    AllUsers: [],
    SingleUser: [],
    UpdateUser: [],
    BlockUser: [],
    UnBlockUser: [],
    NewMerchantRequest: [],
    AdminRequests: [],
    UpdateUserMerchant: [],
    DeleteRequest: [],
    ChangePassword: [],
    ForgetPassword: [],
    ResetPassword: [],
    Notifications: [],
    DeleteNotification: [],
    Analytics: [],
    ContactUs: null,
    refreshToken: [],
    error: null,
    loading: true,
}


const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CREATE_NEW_USER:
            return {
                ...state,
                CreateUser: action.payload,
                loading: false,
            }
        case Actions.LOGIN_USER:
            return {
                ...state,
                LoginUser: action.payload,
                loading: false,
            }
        case Actions.GET_USER_DATA:
            return {
                ...state,
                UserData: action.payload,
                loading: false,
            }

        case Actions.GET_ALL_USERS:
            return {
                ...state,
                AllUsers: action.payload,
                loading: false,
            }
        case Actions.GET_SINGLE_USER:
            return {
                ...state,
                SingleUser: action.payload,
                loading: false,
            }

        case Actions.UPDATE_USER_DATA:
            return {
                ...state,
                UpdateUser: action.payload,
                loading: false,
            }

        case Actions.BLOCK_USER:
            return {
                ...state,
                BlockUser: action.payload,
                loading: false,
            }

        case Actions.UN_BLOCK_USER:
            return {
                ...state,
                UnBlockUser: action.payload,
                loading: false,
            }
        case Actions.CREATE_NEW_REQUEST:
            return {
                ...state,
                NewMerchantRequest: action.payload,
                loading: false,
            }
        case Actions.GET_ALL_REQUESTS:
            return {
                ...state,
                AdminRequests: action.payload,
                loading: false,
            }
        case Actions.UPDATE_USER_MERCHANT:
            return {
                ...state,
                UpdateUserMerchant: action.payload,
                loading: false,
            }
        case Actions.DELETE_REQUEST:
            return {
                ...state,
                DeleteRequest: action.payload,
                loading: false,
            }
        case Actions.CHANGE_PASSWORD:
            return {
                ...state,
                ChangePassword: action.payload,
                loading: false,
            }
        case Actions.GET_ALL_NOTIFICATIONS:
            return {
                ...state,
                Notifications: action.payload,
                loading: false,
            }
        case Actions.DELETE_NOTIFICATION:
            return {
                ...state,
                DeleteNotification: action.payload,
                loading: false,
            }
        case Actions.FORGET_PASSWORD:
            return {
                ...state,
                ForgetPassword: action.payload,
                loading: false,
            }
        case Actions.RESET_PASSWORD:
            return {
                ...state,
                ResetPassword: action.payload,
                loading: false,
            }
        case Actions.CONTACT_MESSAGE:
            return {
                ...state,
                ContactUs: action.payload,
                loading: false,
            }
        case Actions.GET_ANALYTICS:
            return {
                ...state,
                Analytics: action.payload,
                loading: false,
            }
        case Actions.GET_ERROR:
            return {
                error: action.payload,
                loading: false,
            }
        case Actions.REFRESH_TOKEN:
            return {
                ...state,
                refreshToken: action.payload,
                loading: false,
                error: null,
            };

        default:
            return state;
    }
}

export default AuthenticationReducer;