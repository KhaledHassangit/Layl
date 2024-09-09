import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import notify from '../../Hooks/UseNotification';
import { CreateSubCategory } from '../../Redux/Actions/SubCategoryActions';
import { getAllCategory } from '../../Redux/Actions/CategoryActions';

const AddSubCategoryHook = () => {
    const dispatch = useDispatch();

    const [SubCatName, setSubCatName] = useState("");
    const [id, setId] = useState(0);
    const [Loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const onChangeSub = (e) => {
        setSubCatName(e.target.value);
    };

    const handelChange = (e) => {
        setId(e.target.value);
    };
    const getCategory = async ()=>{
        await dispatch(getAllCategory())
    }
    useEffect(() => {
        getCategory()
    }, [])
    const handelSaveSub = async (e) => {
        e.preventDefault();
        if (id === 0) {
            notify("من فضلك أَختر فئة أَوَّلًا", "warning");
            return;
        }
        if (SubCatName === "0") {
            notify("من فضلك أَضف فئة فرعية ", "warning");
            return;
        }
        setLoading(true);
        await dispatch(CreateSubCategory(id,SubCatName));
        setLoading(false);
        handleClose(); // Close modal after saving
    };
    const CategoryResponse = useSelector(state => state.AllCategory.allCategory);

    const SubCategoryResponse = useSelector(state => state.AllSubCategory.NewSubCategory);

    useEffect(() => {
        if (Loading === false) {
            if (SubCategoryResponse && SubCategoryResponse.status === 201) {
                setSubCatName("");
                setLoading(true);
                notify("تمت الإضافة بنجاح", "success");
            } 
            else {
                notify("لم تتم الإضافة ", "error");
            }
        }
    }, [Loading]);

    return [id, SubCatName,CategoryResponse, onChangeSub, handelChange, handelSaveSub, showModal, handleShow, handleClose];
};

export default AddSubCategoryHook;
