import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsByFilter } from '../../Redux/Actions/ProductsAction';

const GetAllProductsHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const limit = 44;


    const getStorage = () => {
        const word = localStorage.getItem("searchWord") || "";
        const subCatQueryString = localStorage.getItem("subcat") || "{}";
        const priceFrom = localStorage.getItem("pricefrom") || "";
        const priceTo = localStorage.getItem("priceto") || "";

        let subcategories = {};
        try {
            subcategories = JSON.parse(subCatQueryString);
        } catch (e) {
        }

        return { word, subcategories, priceFrom, priceTo };
    };
    const getProducts = async () => {
        setLoading(true);

        const subCatQueryString = localStorage.getItem("subcat") || "{}";
        let subcategories = {};

        try {
            subcategories = JSON.parse(subCatQueryString);
        } catch (e) {
        }

        const filters = {
            subcategories, // Use subcategories directly
            fromPrice: localStorage.getItem("pricefrom") || "",
            toPrice: localStorage.getItem("priceto") || "",
            freeShipping: localStorage.getItem("free") === 'true',
            searchTerm: localStorage.getItem("searchWord") || "",
        };

        await dispatch(getAllProductsByFilter(filters));
        setLoading(false);
    };


    const allProductsRes = useSelector((state) => state.AllProducts.allProducts);
    const allProducts = allProductsRes && allProductsRes.data ? allProductsRes.data : [];
    const pageCount = allProductsRes && allProductsRes.data ? allProductsRes.data.total_pages : [];
    const getPage = async (pageN) => {
        setLoading(true);

        const { word, subcategories, priceFrom, priceTo } = getStorage();

        const queryString = [
            `page_size=${limit}`,
            `page=${pageN}`,
            ...Object.entries(subcategories).flatMap(([cat, subs]) => subs.map(sub => `category=${encodeURIComponent(sub)}`)),
            priceFrom ? `from=${encodeURIComponent(priceFrom)}` : '',
            priceTo ? `to=${encodeURIComponent(priceTo)}` : '',
            localStorage.getItem("free") === 'true' ? 'free_shipping=true' : '',
            word ? `sub_category=${encodeURIComponent(word)}` : ''
        ].filter(param => param).join('&');


        try {
            await dispatch(getAllProductsByFilter({
                subcategories,
                fromPrice: priceFrom,
                toPrice: priceTo,
                freeShipping: localStorage.getItem("free") === 'true',
                searchTerm: word,
                page: pageN
            }));
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);



    return [getProducts, allProducts, pageCount, loading, getPage];
};

export default GetAllProductsHook;
