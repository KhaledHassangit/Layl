import baseURL from "../Api/BaseURL";
import Cookies from 'universal-cookie';

const cookie = new Cookies();

export const UseUpdateData = async (url,params)=>{

    if(cookie.get("Access Token"))
        {
        const config = {
            headers: { 
                "Authorization": `Bearer ${cookie.get("Access Token")}` },
        }
        const response = await baseURL.put(url,params,config)
        return response;
    }
    

}


export const UseUpdateDataWithImage = async (url,params)=>{
    const config = {
        headers:{"Content-Type":"multipart/form-data",  
        Authorization: `Bearer ${cookie.get("Access Token")}`
    }
    }
    const response = await baseURL.put(url,params,config)

    return response;
    

}

