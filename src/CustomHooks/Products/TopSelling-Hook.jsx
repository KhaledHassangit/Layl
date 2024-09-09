import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllTopSelling } from '../../Redux/Actions/ProductsAction'

const TopSellingHook = () => {
    const dispatch = useDispatch()  

    const getTopSelling = async() => {
        await dispatch(getAllTopSelling())
    }
    useEffect(() => {
        getTopSelling()
        }, [])

    const TopSellingRes = useSelector ((state) => state.AllProducts.TopSelling)
    const loading = useSelector(state => state.AllProducts.loading)

    let TopSelling = []
    try {
        if (TopSellingRes && TopSellingRes.data) {
            TopSelling = TopSellingRes.data;
        } else {
            TopSelling = [];
        }
    } catch (e) {
    }

    return [TopSelling,loading]
}

export default TopSellingHook
