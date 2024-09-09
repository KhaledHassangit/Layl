import { VerifyCoupon } from "../../Redux/Actions/OrdersActions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const VerifyCouponHook = () => {
    const dispatch = useDispatch();
    const [coupon, setCoupon] = useState("");
    const [loading, setLoading] = useState(false);
    const [borderColor, setBorderColor] = useState("");
    const [buttonText, setButtonText] = useState("Apply");
    const [couponDetails, setCouponDetails] = useState({});

    const onChangeCoupon = (e) => {
        setCoupon(e.target.value);
    };

    const handleCoupon = async () => {
        if (coupon === "") {
            return;
        }
        if (buttonText === "Clear") {
            removeCoupon();
        } else {
            setLoading(true);
            await dispatch(VerifyCoupon(coupon));
            setLoading(false);
        }
    };

    const removeCoupon = () => {
        setCoupon("");
        setBorderColor("");
        setButtonText("Apply");
        setCouponDetails({});
        localStorage.removeItem('coupon');
        window.location.reload();
    };

    const verifyCouponRes = useSelector((state) => state.OrdersReducer.VerifyCoupon);

    useEffect(() => {
        if (!loading && verifyCouponRes) {
            if (verifyCouponRes.status === 200) {
                setBorderColor("#449944");
                setButtonText("Clear");
                setCouponDetails(verifyCouponRes.data);
                localStorage.setItem('coupon', coupon);
            } else if (verifyCouponRes.status === 400) {
                setBorderColor("#cd4848");
                setButtonText("Apply");
                setCouponDetails({});
            }
        }
    }, [verifyCouponRes, loading, coupon]);

    useEffect(() => {
        const storedCoupon = localStorage.getItem('coupon');
        if (storedCoupon) {
            setCoupon(storedCoupon);
            setButtonText("Apply");
        }
    }, []);

    return [handleCoupon, onChangeCoupon, coupon, borderColor, loading, buttonText, removeCoupon, couponDetails];
};

export default VerifyCouponHook;
