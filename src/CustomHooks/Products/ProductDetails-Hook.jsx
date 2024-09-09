import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getSingleProduct, SimilarProducts} from "../../Redux/Actions/ProductsAction"
import { useState } from 'react'

const ProductDetailsHook = (id) => {
    const dispatch = useDispatch()
    const getOneProduct= async () => {
        await dispatch(getSingleProduct(id))
    }

    useEffect(() => {
        getOneProduct()
    }, [id, dispatch]);

    const SingleProductRes = useSelector(state => state.AllProducts.SingleProduct)
    const loadingprod = useSelector(state => state.AllProducts.loading)
    let SingleProduct = []
    try{
        if(SingleProductRes && SingleProductRes.data)
            {
                SingleProduct = SingleProductRes.data
            }
            else{
                SingleProduct = []

            }
        }
        catch(e){}

        // Galley Images
        let imgs ;
        try{
            if(SingleProduct && SingleProduct.imgs)
                {
                    imgs = SingleProduct.imgs.map(img => `http://127.0.0.1:8000${img.img}`);

                    
                }
                else{
                    imgs = []
                }
        }catch(e){}

        // Similiar Products
        const [loading, setLoading] = useState(true)
        const category = SingleProduct.name;
        const getSimiliarProduct = async () => {
            if (category) {
                setLoading(true)
                await dispatch(SimilarProducts(category));
                setLoading(false)
            }
        };
            useEffect(() => {
            getSimiliarProduct()
        }, [dispatch,category])
        const SimilarProductsRes = useSelector(state => state.AllProducts.SimilarProduct)
    return [SingleProduct,imgs,SimilarProductsRes,loading,loadingprod]
}
export default ProductDetailsHook
