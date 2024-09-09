import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (msg, type, optionsOverride = {}) => {
    const defaultOptions = {
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
        style: {
            fontSize: '13px',
            fontFamily: 'Poppins',
            maxWidth: 'calc(100vw - 40px)', 
            margin:"auto auto"

        }
    };

    const options = { ...defaultOptions, ...optionsOverride };

    if (msg.match(/[\u0600-\u06FF]/)) { 

        options.style.fontFamily = 'Almarai'; 
    } else {
        options.style.fontFamily = 'Poppins'; 
    }

    switch(type) {
        case "warn":
            toast.warn(msg, options);
            break;
        case "success":
            toast.success(msg, options);
            break;
        case "error":
            toast.error(msg, options);
            break;
        case "info":
            toast.info(msg, options);
            break;
        default:
            toast(msg, options);
            break;
    }

};

export default notify;
