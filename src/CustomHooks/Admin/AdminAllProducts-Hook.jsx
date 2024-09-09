import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, getAllAdminProducts } from '../../Redux/Actions/ProductsAction';
import notify from '../../Hooks/UseNotification';

const AdminAllProductsHook = (searchTerm) => {
    const dispatch = useDispatch();
    const [deleteProductId, setDeleteProductId] = useState(null);
    const [deleteLoading, setdeleteLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const getAdminProducts = async (search) => {
        await dispatch(getAllAdminProducts(search));
    };

    useEffect(() => {
        getAdminProducts(searchTerm);
    }, [searchTerm]);

    const AdminProductsRes = useSelector((state) => state.AllProducts.AdminProducts);
    const loading = useSelector((state) => state.AllProducts.loading);
    let AllAdminProducts = [];
    try {
        if (AdminProductsRes && AdminProductsRes.data) {
            AllAdminProducts = AdminProductsRes.data;
        } else {
            AllAdminProducts = [];
        }
    } catch (e) {
    }

    // Delete Product
    const handelDeleteProduct = async (id) => {
        setdeleteLoading(true)
        await dispatch(DeleteProduct(id));
        setShowDeleteModal(false);
        setdeleteLoading(false)
        getAdminProducts(searchTerm)

    };

    const handleOpenDeleteModal = (productId) => {
        setDeleteProductId(productId);
        setShowDeleteModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };
    const DeleteProductsRes = useSelector((state) => state.AllProducts.DeleteProduct);
    useEffect(() => {
        if (deleteLoading === false) {
            if (DeleteProductsRes && DeleteProductsRes.status === 200) {
                notify("تم حذف المنتج", "success");
            } else {
                notify("لم يتم الحذف ", "error");
            }
        }
    }, [deleteLoading]);
    return [AllAdminProducts, loading, handelDeleteProduct, showDeleteModal, handleOpenDeleteModal, handleCloseDeleteModal, deleteProductId];
};

export default AdminAllProductsHook;
