import { useEffect, useState } from "react";
import GetAllProductsHook from "../Products/GetAllProducts-Hook";
import { useNavigate } from "react-router-dom";

const NavBarSearchHook = () => {
    const [searchWord, setSearchWord] = useState("")
    const [getProducts, , , , ] = GetAllProductsHook();
    let path = window.location.pathname
    const nagivate = useNavigate()
    const onChangeSearch = (e)=>{
        localStorage.setItem('searchWord', searchWord);
        setSearchWord(e.target.value)
            if(path != "/products"){
                nagivate("/products")
        }
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            if (searchWord) {
                getProducts(searchWord).finally(() => {

                });
            } else {
                getProducts(""); 
            }
        }, 1500);
        localStorage.setItem('searchWord', searchWord);
        return () => clearTimeout(delay);
    }, [searchWord]);

    return [searchWord, setSearchWord,onChangeSearch,getProducts];
};

export default NavBarSearchHook;
