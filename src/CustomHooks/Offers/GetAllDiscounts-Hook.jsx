import  { useEffect ,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteDiscount, getDiscounts } from '../../Redux/Actions/OffersActions'
import notify from '../../Hooks/UseNotification'

const GetAllDiscountsHook = () => {

    const dispatch = useDispatch()  
    const [loadingDelete, setloadingDelete] = useState(true)
    const [showModaldelete, setShowModaldelete] = useState(false);
    const handleShowModaldelete = () => setShowModaldelete(true);
    const handleCloseModaldelete = () => setShowModaldelete(false);

    const getAllDiscounts = async() => {
        await dispatch(getDiscounts())
    }
    useEffect(() => {
        getAllDiscounts()
        }, [])

    const AllDiscountsRes = useSelector ((state) => state.OffersReducer.getDiscount)
    const loading = useSelector(state => state.OffersReducer.loading)
    let allDiscounts = []
    try {
        if (AllDiscountsRes && Array.isArray(AllDiscountsRes.data)) {
            allDiscounts = AllDiscountsRes.data;
        } else {
            allDiscounts = [];
        }
    } catch (e) {}

// Delete Discount
    const handelDeleteDiscount= async(id) =>{
        setloadingDelete(true)
        await dispatch(DeleteDiscount(id))
        setloadingDelete(false)
        handleCloseModaldelete()
        getAllDiscounts()
    }
    const DeleteRes = useSelector ((state) => state.OffersReducer.DeleteDiscount)

    useEffect(() => {
        if(loadingDelete === false)
        {
            if(DeleteRes && DeleteRes.status === 200){
                notify("تم حذف العرض بنجاح  ","success")
            }
            else{
                notify("Error","error")
            }
        }
    }, [loadingDelete])
    return [allDiscounts,handelDeleteDiscount,
        loading,showModaldelete, handleShowModaldelete,handleCloseModaldelete]

}

export default GetAllDiscountsHook
