import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import notify from '../../Hooks/UseNotification';
import { CreateProduct } from '../../Redux/Actions/ProductsAction';
import { useColor } from "react-color-palette";
import { getAllSubCategory } from "../../Redux/Actions/SubCategoryActions";
import { getAllCategory } from "../../Redux/Actions/CategoryActions";

const AddProductHook = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllSubCategory());
    }, [dispatch]);

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [color, setColor] = useColor("hex", "#FFFFFF");
    const [colors, setColors] = useState([]);
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
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState("");

    const CategoryResponse = useSelector(state => state.AllCategory.allCategory);
    const SubCategoryResponse = useSelector(state => state.AllSubCategory.allSubCategory);
    const CreateProductsRes = useSelector(state => state.AllProducts.NewProduct);
    const filteredSubcategories = 
    SubCategoryResponse && SubCategoryResponse.data
        ? SubCategoryResponse.data.filter(sub => sub.category.toString() === category)
        : [];
    
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setSubcategory(""); 
    };

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
        setQuantity("");
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
        const newImages = acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        );
    
        setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index) => {
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
            notify("من فضلك أكمل البيانات", "warning");
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
        images.forEach(img => {
            formData.append('imgs', img, img.name);
        });
        formData.append('colors', JSON.stringify(colors));
        
        const formDataEntries = [...formData.entries()];

        setLoading(true);
        await dispatch(CreateProduct(formData));
        setLoading(false);
    };

    useEffect(() => {
        if (loading === false) {
            if (CreateProductsRes && CreateProductsRes.status === 201) {
                notify("تمت الاضافه بنجاح", "success");
                setCategory("");
                setSubcategory("");
                setImages([]);
                setColors([]);
                setUserPrice("");
                setMerchantPrice("");
                setFreeShipping(false);
                setViewAtUserStore(false);
                setViewAtMerchantStore(false);
                setDescription("");
                dispatch(getAllCategory());
                dispatch(getAllSubCategory());
            } else if (CreateProductsRes && (CreateProductsRes.status === 400 || CreateProductsRes.status === 401)) {
                notify("لم تتم الاضافه", "error");
            }
        }
    }, [loading, CreateProductsRes, dispatch]);

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
        onDrop,filteredSubcategories,loading
    };
};

export default AddProductHook;
