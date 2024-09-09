import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContactMessage } from "../../Redux/Actions/AuthActions";

const ContactHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false); 
    const [formData, setFormData] = useState({
        name: '',
        from_email: '',
        message: ''
    });
    const [error, setError] = useState(null); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); 
        try {
            await dispatch(ContactMessage({
                from_email: formData.from_email,
                message: formData.message
            }));
        } catch (err) {
            setError('An error occurred while sending the message.');
        }
        setLoading(false);
    };

    const contactResponse = useSelector((state) => state.AuthReducer.ContactUs);

    return [formData,setFormData, handleChange, handleSubmit, loading, contactResponse, error,setError];
};

export default ContactHook;
