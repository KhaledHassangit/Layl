import UseDeleteData from "../../Hooks/UseDeleteData"
import UseGetData, { UseGetDataToken } from "../../Hooks/UseGetData"
import { UseInsertDataWithImage} from "../../Hooks/UseInsertData"
import { UseUpdateDataWithImage } from "../../Hooks/UseUpdateData"
import * as Actions from "../Type"
import Cookies from 'universal-cookie';
const cookie = new Cookies();


export const CreateProduct = (formData) => async (dispatch) => {
    try {
        const response =  await UseInsertDataWithImage(`/products/create/product/`,formData)
        dispatch (
            {
                type:Actions.CREATE_PRODUCT,
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

export const getAllTopSelling = () => async (dispatch) => {
    try {
        let response;

        if (cookie.get("Access Token")) {
            response = await UseGetDataToken(`/products/get/top-selling/`);
        } else {
            response = await UseGetData(`/products/get/top-selling/`);
        }

        dispatch({
            type: Actions.GET_ALL_TOP_SELLING,
            payload: response,
            loading: false,
        });
    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: "Error: " + e,
        });
    }
};

export const getAllProductsByFilter = (filters) => async (dispatch) => {
    try {
        const { subcategories, fromPrice, toPrice, freeShipping, searchTerm, page } = filters;

        const subcategoryParams = Object.entries(subcategories)
            .flatMap(([cat, subs]) => subs.map(sub => `category=${encodeURIComponent(sub)}`))
            .join('&');
    
        const priceParams = [
            fromPrice ? `from=${encodeURIComponent(fromPrice)}` : '',
            toPrice ? `to=${encodeURIComponent(toPrice)}` : ''
        ].filter(param => param).join('&');

        const shippingParam = freeShipping ? `free_shipping=true` : '';
        const pageSizeParam = 'page_size=44'; 
        const pageParam = page ? `page=${encodeURIComponent(page)}` : '';
        const searchParam = searchTerm ? `sub_category=${encodeURIComponent(searchTerm)}` : ''; 

        const queryString = [
            subcategoryParams,
            priceParams,
            shippingParam,
            pageSizeParam,
            pageParam,
            searchParam
        ]
            .filter(param => param)
            .join('&');

        let response;
        if (cookie.get("Access Token")) {
            response = await UseGetDataToken(`/products/get/products-filter/?${queryString}`);
        } else {
            response = await UseGetData(`/products/get/products-filter/?${queryString}`);
        }

        dispatch({
            type: Actions.GET_ALL_PRODUCTS,
            payload: response,
            loading: false,
        });
    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: "Error: " + e,
        });
    }
};


export const getAllProductsPage = (pageN) => async (dispatch) => {
    try {
        const response =  await UseGetData(`/products/get/products-filter/?page=${pageN}&page_size=1`)
        dispatch (
            {
                type:Actions.GET_ALL_PRODUCTS,
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
export const getAllAdminProducts = (search) => async (dispatch) => {
    try {
        const response =  await UseGetDataToken(`/products/get/products-for-admin/?search=${search}`)
        dispatch (
            {
                type:Actions.GET_ALL_ADMIN_PRODUCTS,
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


export const getSingleProduct = (id) => async (dispatch) => {
    try {
        let response;
        if (cookie.get("Access Token")) {
            response = await UseGetDataToken(`/products/get/single-product/${id}/`);
        } else {
            response = await UseGetData(`/products/get/single-product/${id}/`);
        }
        dispatch({
            type: Actions.SINGLE_PRODUCT,
            payload: response, 
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: "Error: " + e,
        });
    }
}



export const getSingleProductAdmin = (id) => async (dispatch) => {
    try {
        const response =  await UseGetDataToken(`/products/get/single-product-for-admin/${id}/`)
        dispatch (
            {
                type:Actions.ADMIN_SIGLE_PRODUCT,
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
export const UpdateProduct = (id,formData) => async (dispatch) => {
    try {
        const response =  await UseUpdateDataWithImage(`/products/update/product/${id}/`,formData)
        dispatch (
            {
                type:Actions.UPDATE_PRODUCT,
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
export const DeleteProduct = (id) => async (dispatch) => {
    try {
        const response =  await UseDeleteData(`/products/delete/product/${id}/`)
        dispatch (
            {
                type:Actions.DELETE_PRODUCT,
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

export const SimilarProducts = (cat) => async (dispatch) => {
    try {
        let response;
        if (cookie.get("Access Token")) {
            response = await UseGetDataToken(`/products/get/products-filter/?category=${cat}`);
        } else {
            response = await UseGetData(`/products/get/products-filter/?category=${cat}`);
        }

        dispatch({
            type: Actions.SIMILAR_PRODUCTS,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: Actions.GET_ERROR,
            payload: "Error: " + e,
        });
    }
};

// export const ProductsSearch = (queryString) => async (dispatch) => {
//     try {
//         let response;
//         if (cookie.get("Access Token")) {
//             response = await UseGetDataToken(`/products/get/products-filter/?${queryString}`);
//         } else {
//             response = await UseGetData(`/products/get/products-filter/?${queryString}`);
//         }
//         dispatch({
//             type: Actions.GET_ALL_PRODUCTS,
//             payload: response,
//             loading: true,
//         });
//     } catch (e) {
//         dispatch({
//             type: Actions.GET_ERROR,
//             payload: "Error: " + e,
//         });
//     }
// };
// export const getAllProducts = (limit) => async (dispatch) => {
//     try {
//         let response;
//         if (cookie.get("Access Token")) {
//             response = await UseGetDataToken(`/products/get/products-filter/?page_size=${limit}`);
//         } else {
//             response = await UseGetData(`/products/get/products-filter/?page_size=${limit}`);
//         }

//         dispatch({
//             type: Actions.GET_ALL_PRODUCTS,
//             payload: response,
//             loading: true,
//         });
//     } catch (e) {
//         dispatch({
//             type: Actions.GET_ERROR,
//             payload: "Error: " + e,
//         });
//     }
// };
// export const getFilteredProducts = (filters, page = 1) => async (dispatch) => {
//     try {
//         const { subcategories, fromPrice, toPrice, freeShipping, searchWord } = filters;

//         const subcategoryParams = Object.entries(subcategories)
//             .flatMap(([cat, subs]) => subs.map(sub => `category=${encodeURIComponent(sub)}`))
//             .join('&');
//         const priceParams = fromPrice && toPrice ? `from=${fromPrice}&to=${toPrice}` : '';
//         const shippingParam = freeShipping ? `free_shipping=true` : '';
//         const searchParam = searchWord ? `search=${encodeURIComponent(searchWord)}` : '';
//         const pageParam = `page=${page}`;
//         const pageSizeParam = 'page_size=2';

//         const queryString = [
//             subcategoryParams,
//             priceParams,
//             shippingParam,
//             searchParam,
//             pageParam,
//             pageSizeParam,
//         ]
//             .filter(param => param)
//             .join('&');

//         let response;
//         if (cookie.get("Access Token")) {
//             response = await UseGetDataToken(`/products/get/products-filter/?${queryString}`);
//         } else {
//             response = await UseGetData(`/products/get/products-filter/?${queryString}`);
//         }

//         dispatch({
//             type: Actions.GET_ALL_PRODUCTS,
//             payload: response,
//             loading: false,
//         });
//     } catch (e) {
//         dispatch({
//             type: Actions.GET_ERROR,
//             payload: "Error: " + e,
//         });
//     }
// };
