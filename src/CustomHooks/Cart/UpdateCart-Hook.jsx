import { useState, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCartItem, UpdateCartItem } from "../../Redux/Actions/CartActions";
import GetUserCartHook from "./GetUserCart-Hook";

const UpdateCartHook = (cartItem) => {
    const [, getAllCart] = GetUserCartHook();
    const dispatch = useDispatch();
    const [itemCount, setItemCount] = useState(cartItem.quantity);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [updateLoading, setUpdateLoading] = useState(false);
    const updateCartItem = async (newCount) => {
        setUpdateLoading(true);
        await dispatch(UpdateCartItem(cartItem.id, { quantity: newCount }));
        await getAllCart();
        setUpdateLoading(false);
    };

    const increaseValue = async () => {
        const newCount = itemCount + 1;
        setItemCount(newCount);
        await updateCartItem(newCount);
    };

    const decreaseValue = async () => {
        if (itemCount > 1) {
            const newCount = itemCount - 1;
            setItemCount(newCount);
            await updateCartItem(newCount);
        }
    };

    const onChangeCount = async (event) => {
        const newCount = parseInt(event.target.value, 10);
        if (newCount > 0) {
            setItemCount(newCount);
            await updateCartItem(newCount);
        }
    };

    const handleDeleteCartItem = useCallback(async () => {
        try {
            setDeleteLoading(true);
            await dispatch(DeleteCartItem(cartItem.id));
            await getAllCart();
        } finally {
            setDeleteLoading(false);
        }
    }, [dispatch, cartItem.id, getAllCart]);

    const UpdateCartItemRes = useSelector(state => state.CartReducer.UpdateCartItem);
    return [itemCount, increaseValue, decreaseValue, onChangeCount, handleDeleteCartItem, deleteLoading, updateLoading];
}

export default UpdateCartHook;
