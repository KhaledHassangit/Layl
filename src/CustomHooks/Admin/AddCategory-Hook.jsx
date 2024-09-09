import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import notify from '../../Hooks/UseNotification';
import { CreateCategory, getAllCategory } from '../../Redux/Actions/CategoryActions';

const AddCategoryHook = () => {
    const dispatch = useDispatch();

    const [CatName, setCatName] = useState("");
    const [Loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const onchangeName = (e) => {
        e.preventDefault();
        setCatName(e.target.value);
    };

    const handelSaveCat = async (e) => {
        e.preventDefault();
        if (CatName === "") {
            notify("من فضلك أَضف فئة أَوَّلًا", "warning");
            return;
        }
        setLoading(true);
        await dispatch(CreateCategory(CatName));
        setLoading(false);
        handleClose(); 
    };
    const getCategory = async ()=>{
        await dispatch(getAllCategory())
    }
    const CategoryResponse = useSelector(state => state.AllCategory.NewCategory);
    useEffect(() => {
        if (Loading === false) {
            if (CategoryResponse && CategoryResponse.status === 201) {
                setCatName("");
                setLoading(true);
                getCategory()
                notify("تمت الإضافة بنجاح", "success");
            } else {
                notify("لم تتم الإضافة ", "error");
            }
        }
    }, [Loading]);

    return [CatName, onchangeName, handelSaveCat, showModal, handleShow, handleClose];
};

export default AddCategoryHook;
