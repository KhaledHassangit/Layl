import baseURL from "../Api/BaseURL";
import Cookies from 'universal-cookie';

const cookie = new Cookies();

const UseDeleteData = async (url)=>{
    const config = {
        headers:{
        Authorization: `Bearer ${cookie.get("Access Token")}`
    }

    }
    const response = await baseURL.delete(url,config)
    return response;
    

}

export default UseDeleteData;