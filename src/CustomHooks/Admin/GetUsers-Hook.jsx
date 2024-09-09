import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlockUser, SerachUser, UnBlockUser, getAllUsers, getSingleUser } from '../../Redux/Actions/AuthActions';
import notify from '../../Hooks/UseNotification';

const GetUsersHook = (userId,searchTerm) => {
    const dispatch = useDispatch();
    const [loadingBlock, setloadingBlock] = useState(true)
    const [loadingUnBlock, setloadingUnBlock] = useState(true)

    const getUsers = async (search) => {
        await dispatch(getAllUsers(search));
    };

    const getOneUser = async () => {
        if (userId) {
            await dispatch(getSingleUser(userId));
        }
    };

    useEffect(() => {
        getUsers(searchTerm);
    }, [searchTerm]);

    useEffect(() => {
        getOneUser();
    }, []);

    const AllUsersRes = useSelector((state) => state.AuthReducer.AllUsers);
    const SingleUsersRes = useSelector((state) => state.AuthReducer.SingleUser);
    const loading = useSelector((state) => state.AuthReducer.loading);

    const handelBlockUser = async (id) => {
        setloadingBlock(true)
        await dispatch(BlockUser(id));
        getUsers();
        setloadingBlock(false)


    };

    const handelUnlockUser = async (id) => {
        setloadingUnBlock(true)
        await dispatch(UnBlockUser(id));
        getUsers();
        setloadingUnBlock(false)

    };

    const BlockRes = useSelector((state) => state.AuthReducer.BlockUser);
    const UnBlockRes = useSelector((state) => state.AuthReducer.UnBlockUser);
    useEffect(() => {
        if (loadingBlock === false) {
            if (BlockRes) {
                if (BlockRes.status === 200) {
                    notify("User blocked successfully", "success")
                    getUsers(searchTerm)
                }
                else {
                    notify('Failed to block user', 'error');
                    getUsers(searchTerm)

                }
            }
        }
    }, [loadingBlock])

    useEffect(() => {
        if (loadingUnBlock === false) {
            if (UnBlockRes) {
                if (UnBlockRes.status === 200) {
                    notify("User unblocked  successfully", "success")
                    getUsers(searchTerm)

                }
                else {
                    notify('Failed to unblock  user', 'error');
                    getUsers(searchTerm)

                }
            }
        }
    }, [loadingUnBlock])



    return [AllUsersRes, handelBlockUser, handelUnlockUser, loading];
};

export default GetUsersHook;
