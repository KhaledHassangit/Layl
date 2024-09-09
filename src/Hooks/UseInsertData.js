import baseURL from "../Api/BaseURL";
import Cookies from 'universal-cookie';

const cookie = new Cookies();
const UseInsertData = async (url, params) => {
    const response = await baseURL.post(url, params, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response;
};

const UseInsertDataToken = async (url, params) => {
    try {
        const response = await baseURL.post(url, params, {
            headers: {
                "Authorization": `Bearer ${cookie.get("Access Token")}`,

            },
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export default UseInsertDataToken;

    

const UseInsertDataWithImage = async (url, formData) => {
    if (cookie.get("Access Token")) {
        const config = {
            headers: {
                "Content-Type":"multipart/form-data",
                "Authorization": `Bearer ${cookie.get("Access Token")}`
            },
        };

        try {
            const response = await baseURL.post(url, formData, config);
            return response;
        } catch (error) {
            throw error; 
        }
    }
};

export {UseInsertData,UseInsertDataWithImage,UseInsertDataToken};