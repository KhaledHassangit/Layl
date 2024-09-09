import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallAnalytics } from '../../Redux/Actions/AuthActions';

const AnalyticsHook = () => {

    const dispatch = useDispatch();
    const [loading, setloading] = useState(true)

    const getAnalytics = async () => {
        setloading(true)
        await dispatch(getallAnalytics());
        setloading(false)

    };

    useEffect(() => {
        getAnalytics()
    }, [dispatch])

    
    const AnalyticsRes = useSelector((state) => state.AuthReducer.Analytics);

    let Analytics = [];

    try {
        if (AnalyticsRes && AnalyticsRes.data) {
            Analytics = AnalyticsRes.data;
        } else {
            Analytics = [];
        }
    } catch (error) {
        Analytics = [];
    }
    const formatNumber = (number) => {
        return new Intl.NumberFormat().format(number);
    };
    
    return [Analytics,formatNumber,loading]
    
    }

export default AnalyticsHook
