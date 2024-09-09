import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GetUserCart } from "../../Redux/Actions/CartActions";

const GetUserCartHook = () => {
    const dispatch = useDispatch();

    const getAllCart = async () => {
        await dispatch(GetUserCart());
    };

    const AllCartres = useSelector(state => state.CartReducer.UserCart);
    const loading = useSelector(state => state.CartReducer.loading);
    useEffect(() => {
        getAllCart();
    }, [dispatch]); 
    
    return [AllCartres, getAllCart, loading];
};

export default GetUserCartHook;
