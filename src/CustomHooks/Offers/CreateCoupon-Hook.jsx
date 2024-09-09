import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCoupon, getCoupons } from '../../Redux/Actions/OffersActions';
import notify from '../../Hooks/UseNotification';

const CreateCouponHook = () => {
    const dispatch = useDispatch();
    const getAllCoupons = async() => {
        await dispatch(getCoupons())
    }
    const [loading, setloading] = useState(true)
    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);
    const [showModal2, setShowModal2] = useState(false);

    const [formData, setFormData] = useState({
        code: '',
        discount_type: '0', 
        discount_value: '',
        users_limit: '',
        start_date: '',
        expiry_date: '',
        active: true,
    });

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === 'start_date' || name === 'expiry_date') {
            formattedValue = formatDateTime(value + 'T15:30:00Z'); 
        }

        setFormData({
            ...formData,
            [name]: formattedValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.discount_type || !formData.code || !formData.expiry_date
            || !formData.start_date || 
            !formData.discount_value || !formData.users_limit) 
            {
            notify(' من فضلك أكمل بيانات قسيمة الشراء ',"warn");
            return;
        }
        setloading(true)
        await dispatch(CreateCoupon(formData));
        setloading(false)
    };
    
    const NewCouponRes = useSelector(state => state.OffersReducer.NewCoupon);
    useEffect(() => {
        if(loading === false){
            if(NewCouponRes && NewCouponRes.status === 200){
                notify("تم إضافة الكوبون بنجاح ", "success")
                handleCloseModal2()
                getAllCoupons()
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
        showModal2,handleCloseModal2,
        handleShowModal2
    };
};

export default CreateCouponHook;
