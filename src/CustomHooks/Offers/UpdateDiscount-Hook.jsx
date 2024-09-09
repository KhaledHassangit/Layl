import { useState, useEffect } from 'react';
import { getCoupons, getDiscounts, getSingleDiscount, UpdateDiscount } from '../../Redux/Actions/OffersActions';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../../Hooks/UseNotification';
import { getAllSubCategory } from '../../Redux/Actions/SubCategoryActions';

const UpdateDiscountHook = () => {
    const dispatch = useDispatch();
    const [showModaledit, setShowModaledit] = useState(false);
    const handleShowModaledit = () => setShowModaledit(true);
    const handleCloseModaledit = () => setShowModaledit(false);
    const [loadingupdate, setloadingupdate] = useState(true);

    const getAllDiscounts = async () => {
        await dispatch(getDiscounts());
    }

    const getOneDiscount = async (id) => {
        handleShowModaledit();
        await dispatch(getSingleDiscount(id));
    };

    const getSubCategory = async () => {
        await dispatch(getAllSubCategory());
    }

    const OneDiscount = useSelector(state => state.OffersReducer.SingleDiscount);

    const [formDataUpdate, setformDataUpdate] = useState({
        sub_category: "",
        discount_type: "0",
        discount_value: "",
        start_date: "",
        expiry_date: "",
        selectedImage: null,
    });

    useEffect(() => {
        if (OneDiscount && OneDiscount.data) {
            const imageUrl = `http://localhost:8000${OneDiscount.data.img}` || '';
            const parseDate = (dateString) => dateString ? dateString.split("T")[0] : '';
            setformDataUpdate({
                sub_category: OneDiscount.data.sub_category || '',
                discount_type: OneDiscount.data.discount_type || '',
                discount_value: OneDiscount.data.discount_value || '',
                start_date: parseDate(OneDiscount.data.start_date) || '',
                expiry_date: parseDate(OneDiscount.data.expiry_date) || '',
                selectedImage: imageUrl,
                active: OneDiscount.data.active || true,
            });
        }
    }, [OneDiscount]);
    const handleChangeUpdate = (event) => {
        const { name, value, files } = event.target;

        if (name === "start_date" || name === "expiry_date") {
            const formattedDate = `${value}T15:30:00Z`;
            setformDataUpdate((prevData) => ({
                ...prevData,
                [name]: formattedDate,
                [`${name}Raw`]: value,
            }));
        } else if (name === "selectedImage") {
            setformDataUpdate((prevData) => ({
                ...prevData,
                [name]: files && files[0] ? files[0] : null,
            }));
        } else {
            setformDataUpdate((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    useEffect(() => {
        let objectURL;
        if (formDataUpdate.selectedImage && formDataUpdate.selectedImage instanceof File) {
            objectURL = URL.createObjectURL(formDataUpdate.selectedImage);
        }
        return () => {
            if (objectURL) {
                URL.revokeObjectURL(objectURL);
            }
        };
    }, [formDataUpdate.selectedImage]);

    const form = new FormData();
    form.append('sub_category', formDataUpdate.sub_category);
    form.append('discount_type', formDataUpdate.discount_type);
    form.append('discount_value', formDataUpdate.discount_value);
    form.append('start_date', formDataUpdate.start_date);
    form.append('expiry_date', formDataUpdate.expiry_date);
    if (formDataUpdate.selectedImage && formDataUpdate.selectedImage instanceof File) {
        form.append('img', formDataUpdate.selectedImage);
    }
    form.append('active', true);

    const handelUpdateDiscount = async (e) => {
        e.preventDefault();
        setloadingupdate(true);
        await dispatch(UpdateDiscount(OneDiscount.data.id, form));
        setloadingupdate(false);
    }

    const UpdateDiescountRes = useSelector(state => state.OffersReducer.UpdateDiscount);
    useEffect(() => {
        if (loadingupdate === false) {
            if (UpdateDiescountRes && UpdateDiescountRes.status === 200) {
                notify("تم تحديث العرض", "success");
                handleCloseModaledit();
                getAllDiscounts();
                getSubCategory();
            } else {
                notify("فشل في  تحديث العرض", "error");
                handleCloseModaledit();
                getAllDiscounts();
                getSubCategory();
            }
        }
    }, [loadingupdate]);

    return [getOneDiscount, OneDiscount, formDataUpdate, handleChangeUpdate, handelUpdateDiscount, showModaledit, handleShowModaledit, handleCloseModaledit];
};

export default UpdateDiscountHook;
