import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeToMerchant, DeleteRequest, getAllAdminRequests } from '../../Redux/Actions/AuthActions';
import notify from '../../Hooks/UseNotification';

const MerchantRequestHook = (searchTerm) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const getAllRequests = async (search) => {
        await dispatch(getAllAdminRequests(search));
    }

    useEffect(() => {
        setLoading(true);
        getAllRequests(searchTerm);
        setLoading(false);
    }, [searchTerm]);

    const handelMerchantRequest = async (id) => {
        setLoading(true);
        await dispatch(ChangeToMerchant(id));
        setLoading(false);
        getAllRequests(searchTerm);
    }

    const handelDeleteMerchantRequest = async (id) => {
        setLoading(true);
        await dispatch(DeleteRequest(id));
        setLoading(false);
        getAllRequests(searchTerm);
    }

    const UpdateRes = useSelector((state) => state.AuthReducer.UpdateUserMerchant);
    const DeleteRequestRes = useSelector((state) => state.AuthReducer.DeleteRequest);
    const AllRequestsRes = useSelector((state) => state.AuthReducer.AdminRequests);

    useEffect(() => {
        if (loading === false) {
            if (UpdateRes) {
                if (UpdateRes.status === 200) {
                    notify("تم قبول الطلب", "success");
                } else if (DeleteRequestRes.status === 400) {
                    notify("an error occurred", "error");
                }
            }
        }
    }, [loading, UpdateRes, DeleteRequestRes]);

    useEffect(() => {
        if (loading === false) {
            if (DeleteRequestRes) {
                if (DeleteRequestRes.status === 200) {
                    notify("تم حذف الطلب", "success");
                } else if (DeleteRequestRes.status === 400) {
                    notify("an error occurred", "error");
                }
            }
        }
    }, [loading, DeleteRequestRes]);

    return [AllRequestsRes, loading, handelMerchantRequest, handelDeleteMerchantRequest];
}

export default MerchantRequestHook;
