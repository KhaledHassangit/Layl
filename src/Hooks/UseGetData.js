import baseURL from "../Api/BaseURL";
import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const UseGetDataToken = async (url) => {
    if (cookie.get("Access Token")) {
        const config = {
            headers: {
                "Authorization": `Bearer ${cookie.get("Access Token")}`
            }
        };
        const response = await baseURL.get(url, config);
        return response;
    }
    throw new Error("No access token found");
}


const UseGetData = async (url,params)=>{

    const response = await baseURL.get(url,params)
    return response;
    

}


export  default UseGetData;