import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart } from "../../Redux/Actions/CartActions";
import notify from "../../Hooks/UseNotification";
import { useNavigate } from 'react-router-dom';
import GetUserCartHook from "../Cart/GetUserCart-Hook";
import Cookie from 'universal-cookie';

const AddtoCartHook = ({ SingleProduct }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedColor, setSelectedColor] = useState(null);
    const [value, setValue] = useState(1);
    const [loading, setLoading] = useState(false); 
    const [,getAllCart, , , , , , , , ] = GetUserCartHook(); 
    const cookie =  new Cookie()
    let userData = cookie.get('UserData') || "";
    const increaseValue = () => {

        setValue(prevValue => prevValue + 1);
    };

    const decreaseValue = () => {
        setValue(prevValue => prevValue > 1 ? prevValue - 1 : 1);
    };

    const handleChange = (event) => {
        setValue(Number(event.target.value));
    };

    const handleClick = (colorObj) => {
        setSelectedColor(colorObj);
    };

    const selectedColorId = selectedColor ? selectedColor.id : null;

    const handleAddtoCart = async () => {
        if (!userData ) {
            notify("Please login to add products to your cart", "warn", {
                position: "bottom-center",
            });
            setTimeout(() => {
                navigate('/login');
            }, 1500); 
            
            return;
        }

        if (!selectedColor) {
            notify("Please Pick A Color", "warn",{
                position: "bottom-center", 
            });
            return;
        }
        if(value > selectedColor.quantity){
            notify("Sorry, we don't have enough stock for that color", "warn",{
                position: "bottom-center", 
            });            
            return
        }
        setLoading(true); 
        await dispatch(AddToCart({
            product_id: SingleProduct.id,
            color_id: selectedColorId,
            quantity: value,
        }));
        getAllCart(); 
        setLoading(false); 
    };

    const AddedProductres = useSelector(state => state.CartReducer.AddtoCart);

    useEffect(() => {
        if (!loading && AddedProductres) {
            if (AddedProductres.status === 200) {
                notify("Product Added  To Your Cart", "success", {
                    position: "bottom-center", 
                });
                } 
                else if(AddedProductres.status === 400){
                notify("an error occurred", "warn",{
                    position: "bottom-center", 
                });;
            }
        }
    }, [AddedProductres, loading]);

    return [selectedColor, value, increaseValue, decreaseValue, handleChange, handleClick, handleAddtoCart, loading];
};

export default AddtoCartHook;
