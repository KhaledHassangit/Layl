import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  getSingleProductAdmin, UpdateProduct } from '../../Redux/Actions/ProductsAction';
import { useColor } from "react-color-palette";
import { getAllSubCategory } from "../../Redux/Actions/SubCategoryActions";
import { getAllCategory } from "../../Redux/Actions/CategoryActions";
import notify from "../../Hooks/UseNotification";

const UpdateProductHook = (id) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllSubCategory());
        dispatch(getSingleProductAdmin(id))
    }, [dispatch]);

    const CategoryResponse = useSelector(state => state.AllCategory.allCategory);
    const SubCategoryResponse = useSelector(state => state.AllSubCategory.allSubCategory);
    const OneProductRes = useSelector(state => state.AllProducts.AdminSingleProduct)

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [color, setColor] = useColor("hex", "#FFFFFF");
    const [colors, setColors] = useState([{}]);
    const colorPickerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [userPrice, setUserPrice] = useState("");
    const [merchantPrice, setMerchantPrice] = useState("");
    const [freeShipping, setFreeShipping] = useState(false);
    const [viewAtUserStore, setViewAtUserStore] = useState(false);
    const [viewAtMerchantStore, setViewAtMerchantStore] = useState(false);
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState();
    const [imagesToDelete, setImagesToDelete] = useState([]);
    const [updateLoading, setupdateLoading] = useState(false);

    useEffect(() => {
        if (OneProductRes && OneProductRes.data) {
            setCategory(OneProductRes.data.category)
            setSubcategory(OneProductRes.data.name)
            setUserPrice(OneProductRes.data.new_price.new_price)
            setMerchantPrice(OneProductRes.data.merchant_price)
            setDescription(OneProductRes.data.description)
            setColors(OneProductRes.data.colors)
            setImages(OneProductRes.data.imgs)
            setViewAtUserStore(OneProductRes.data.view_at_user_store)
            setViewAtMerchantStore(OneProductRes.data.view_at_merchant_store)
            setFreeShipping(OneProductRes.data.free_shipping)
        }
    }, [OneProductRes])
    const handleCategoryChange = (event) => setCategory(event.target.value);
    const handleSubcategoryChange = (event) => setSubcategory(event.target.value);
    const handleUserPriceChange = (event) => setUserPrice(event.target.value);
    const handleMerchantPriceChange = (event) => setMerchantPrice(event.target.value);
    const handleFreeShippingChange = (event) => setFreeShipping(event.target.checked);
    const handleViewAtUserStoreChange = (event) => setViewAtUserStore(event.target.checked);
    const handleViewAtMerchantStoreChange = (event) => setViewAtMerchantStore(event.target.checked);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(false);
    };

    const handleSaveColor = () => {
        setColors([...colors, { color: color.hex, quantity }]);
        setQuantity();
        setDisplayColorPicker(false);
    };

    const handleRemoveColor = (index) => {
        const newColors = colors.filter((_, i) => i !== index);
        setColors(newColors);
    };

    const handleClickOutside = (event) => {
        if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
            handleClose();
        }
    };

    const onDrop = (acceptedFiles) => {
        if (images.length + acceptedFiles.length > 4) {
            alert("You can only upload up to 4 images", "warning");
            return;
        }
    
        const newImages = acceptedFiles.map((file) => {
            return {
                file,
                preview: URL.createObjectURL(file), 
            };
        });
    
        if (images.length + newImages.length <= 4) {
            setImages((prevImages) => [...prevImages, ...newImages]);
        } else {
            alert("You can only upload up to 4 images", "warning");
            return
        }
    };
    

    const handleRemoveImage = (index) => {
        const imageToRemove = images[index];
        if (imageToRemove.id) {
            setImagesToDelete((prevImagesToDelete) => [...prevImagesToDelete, imageToRemove.id]);
        }
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
    };

    useEffect(() => {
        if (displayColorPicker) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [displayColorPicker]);

    const handleQuantityChange = (event, index) => {
        const newColors = [...colors];
        newColors[index].quantity = event.target.value;
        setColors(newColors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            category === "" ||
            subcategory === "" ||
            userPrice <= 0 ||
            merchantPrice <= 0 ||
            description === "" ||
            images.length === 0 ||
            colors.length === 0 ||
            colors.some(color => color.color === "" || color.quantity <= 0)
        ) {
            notify("من فضلك أكمل البيانات", "warn");
            return;
        }

        const formData = new FormData();
        formData.append("subcategory", subcategory);
        formData.append("user_price", userPrice);
        formData.append("merchant_price", merchantPrice);
        formData.append("free_shipping", freeShipping);
        formData.append("view_at_user_store", viewAtUserStore);
        formData.append("view_at_merchant_store", viewAtMerchantStore);
        formData.append("description", description);
        images.forEach((image) => {
            if (!image.id) {
                formData.append(`imgs`, image.file);
            }
        });
        formData.append('colors', JSON.stringify(colors));
        formData.append('imgs_to_delete', JSON.stringify(imagesToDelete));


        setupdateLoading(true);
        await dispatch(UpdateProduct(id, formData));
        setupdateLoading(false);
    };

    const UpdateProductsRes = useSelector(state => state.AllProducts.UpdateProduct);

    useEffect(() => {
        if (updateLoading === false) {
            if (UpdateProductsRes && UpdateProductsRes.status === 200) {
                notify("تم تعديل المنتج ", "success");
            } 
            else if (UpdateProductsRes && (UpdateProductsRes.status === 400 || UpdateProductsRes.status === 401)) {
                notify(" خطأ لم يتم التعديل ", "error");
            }
        }
    }, [updateLoading, UpdateProductsRes]);
    return {
        displayColorPicker,
        category,
        subcategory,
        userPrice,
        merchantPrice,
        freeShipping,
        viewAtUserStore,
        viewAtMerchantStore,
        description,
        images,
        setImages,
        colors,
        quantity,
        color,
        setColor,
        handleCategoryChange,
        handleSubcategoryChange,
        handleUserPriceChange,
        handleMerchantPriceChange,
        handleFreeShippingChange,
        handleViewAtUserStoreChange,
        handleViewAtMerchantStoreChange,
        handleDescriptionChange,
        handleRemoveImage,
        handleSaveColor,
        handleSubmit,
        handleClick,
        handleClose,
        handleQuantityChange,
        handleRemoveColor,
        colorPickerRef,
        SubCategoryResponse,
        CategoryResponse,
        onDrop,updateLoading
    };
};

export default UpdateProductHook;
