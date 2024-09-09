import { useState, useEffect } from 'react';
import { getCoupons, getSingleCoupon  ,UpdateCoupon} from '../../Redux/Actions/OffersActions';
import { useDispatch, useSelector } from 'react-redux';
import notify from '../../Hooks/UseNotification';

const UpdateCouponHook = () => {
    const dispatch = useDispatch();
    const [showModaledit, setShowModaledit] = useState(false);
    const handleShowModaledit = () => setShowModaledit(true);
    const handleCloseModaledit = () => setShowModaledit(false);
    const [loadingupdate, setloadingupdate] = useState(true)

    const getAllCoupons = async() => {
        await dispatch(getCoupons())
    }
    const getOneCoupon = async (id) => {
        handleShowModaledit();
        await dispatch(getSingleCoupon(id));
    };

    const OneCoupon = useSelector(state => state.OffersReducer.SingleCoupon);

    const [formDataUpdate, setformDataUpdate] = useState({
        code: '',
        discount_type: '',
        discount_value: '',
        users_limit: '',
        start_date: '',
        expiry_date: '',
        active: true,
    });

    useEffect(() => {
        if (OneCoupon && OneCoupon.data) {
            setformDataUpdate({
                code: OneCoupon.data.code || '',
                discount_type: OneCoupon.data.discount_type || '',
                discount_value: OneCoupon.data.discount_value || '',
                users_limit: OneCoupon.data.users_limit || '',
                start_date: OneCoupon.data.start_date || '',
                expiry_date: OneCoupon.data.expiry_date || '',
                active: OneCoupon.data.active || true,
            });
        }
    }, [OneCoupon]);

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString();
    };

    const handleChangeUpdate = (e) => {
        const { name, value } = e.target;
        let formattedValue = value;

        if (name === 'start_date' || name === 'expiry_date') {
            formattedValue = formatDateTime(value + 'T15:30:00Z');
        }

        setformDataUpdate({
            ...formDataUpdate,
            [name]: formattedValue,
        });
    };

    const handelUpdateCoupon =  async(e) =>{
        e.preventDefault()
        setloadingupdate(true)
        await dispatch(UpdateCoupon(OneCoupon.data.id,formDataUpdate))
        setloadingupdate(false)
    }
    const UpdateCouponRes = useSelector(state => state.OffersReducer.UpdateCoupon);
    useEffect(() => {
        if(loadingupdate === false){
            if(UpdateCouponRes && UpdateCouponRes.status === 200){
                notify("تم تحديث الكوبون","success")
                handleCloseModaledit()
                getAllCoupons()
            }
            else{
                notify("فشل في  تحديث الكوبون","error")
            }
        }
    }, [loadingupdate])    
    return [getOneCoupon, OneCoupon, formDataUpdate, handleChangeUpdate,handelUpdateCoupon, showModaledit, handleShowModaledit, handleCloseModaledit];
};

export default UpdateCouponHook;
