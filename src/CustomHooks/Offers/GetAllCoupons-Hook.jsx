import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCoupon, getCoupons } from '../../Redux/Actions/OffersActions'
import notify from '../../Hooks/UseNotification'

const GetAllCouponsHook = () => {

    const dispatch = useDispatch()  
    const [loadingDelete, setloadingDelete] = useState(true)
    const [showModaldelete, setShowModaldelete] = useState(false);
    const handleShowModaldelete = () => setShowModaldelete(true);
    const handleCloseModaldelete = () => setShowModaldelete(false);

    const getAllCoupons = async() => {
        await dispatch(getCoupons())
    }
    useEffect(() => {
        getAllCoupons()
        }, [])

    const AllCouponsRes = useSelector ((state) => state.OffersReducer.getCoupon)
    const loading = useSelector(state => state.OffersReducer.loading)
    let allCoupons = []
    try {
        if (AllCouponsRes && AllCouponsRes.data) {
            allCoupons = AllCouponsRes.data;
        } else {
            AllCouponsRes = [];
        }
    } catch (e) {}
// Delete Coupon
    const handelDeleteCoupon = async(id) =>{
        setloadingDelete(true)
        await dispatch(DeleteCoupon(id))
        setloadingDelete(false)
        handleCloseModaldelete()
        getAllCoupons()
    }
    const DeleteRes = useSelector ((state) => state.OffersReducer.DeleteCoupon)

    useEffect(() => {
        if(loadingDelete === false)
        {
            if(DeleteRes && DeleteRes.status === 200){
                notify("تم حذف الكوبون بنجاح  ","success")
            }
            else{
                notify("Error","error")
            }
        }
    }, [loadingDelete])
    return [allCoupons,loading,handelDeleteCoupon,showModaldelete,
        handleShowModaldelete,handleCloseModaldelete]

}

export default GetAllCouponsHook
