import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSubCategory } from '../../Redux/Actions/SubCategoryActions';
import { CreateDiscount, getDiscounts } from '../../Redux/Actions/OffersActions';
import notify from '../../Hooks/UseNotification';

const CreateDiscountHook = () => {
    const dispatch = useDispatch();
    const getAllDiscounts = async() => {
        await dispatch(getDiscounts())
    }
    const [loading, setloading] = useState(true)
    const [showModal1, setShowModal1] = useState(false);
    const [formData, setFormData] = useState({
        subcategory: "",
        discountType: "0",
        discountValue: "",
        startDate: "",
        expiryDate: "",
        selectedImage: null,
    });

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    useEffect(() => {
        dispatch(getAllSubCategory());
    }, [dispatch]);

    const SubCategoryResponse = useSelector(state => state.AllSubCategory.allSubCategory);

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        if (name === "startDate" || name === "expiryDate") {
            const formattedDate = `${value}T15:30:00Z`; // Adjust the time as needed
            setFormData((prevData) => ({
                ...prevData,
                [name]: formattedDate,
                [`${name}Raw`]: value, // Store raw date input
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files ? files[0] : value,
            }));
        }
    };

    const handleSubmit = async () => {
        if (!formData.subcategory || formData.discountType === "0" || !formData.discountValue || !formData.startDate || !formData.expiryDate) {
            notify('من فضلك أكمل بيانات العرض', "warn");
            return;
        }
        const form = new FormData();
        form.append('sub_category', formData.subcategory);
        form.append('discount_type', formData.discountType);
        form.append('discount_value', formData.discountValue);
        form.append('start_date', formData.startDate);
        form.append('expiry_date', formData.expiryDate);
        if (formData.selectedImage) {
            form.append('img', formData.selectedImage);
        }
        form.append('active', true);


        try {
            setloading(true)
            await dispatch(CreateDiscount(form));
            setloading(false)
        } catch (error) {}
    };

    const CreateDiscountRes = useSelector(state => state.OffersReducer.NewDiscount);
    useEffect(() => {
        if(loading === false){
            if(CreateDiscountRes && CreateDiscountRes.status === 200){
                notify("تم إضافة العرض بنجاح ", "success")
                handleCloseModal1()
                getAllDiscounts()
            }
            else{
                notify("Error","error")
            }
        }
    }, [loading])
    return {
        formData,
        handleChange,
        handleSubmit,
        showModal1,
        handleShowModal1,
        handleCloseModal1,
        SubCategoryResponse
    };
}

export default CreateDiscountHook;
