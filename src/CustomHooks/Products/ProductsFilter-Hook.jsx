import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../Redux/Actions/CategoryActions';
import { getAllSubCategory } from '../../Redux/Actions/SubCategoryActions';
import GetAllProductsHook from './GetAllProducts-Hook';
import { useEffect, useState } from 'react';

const ProductsFilterHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [getProducts,,,,] = GetAllProductsHook();
    const initialFilters = JSON.parse(localStorage.getItem('filters')) || {
        checkedSubCategories: {},
        from: '',
        to: '',
        freeShipping: false
    };

    const [show, setShow] = useState(false);
    const [activeAccordionKeys, setActiveAccordionKeys] = useState([]);
    const [checkedSubCategories, setCheckedSubCategories] = useState(initialFilters.checkedSubCategories);
    const [freeShipping, setFreeShipping] = useState(initialFilters.freeShipping);
    const [from, setPriceFrom] = useState(initialFilters.from);
    const [to, setPriceTo] = useState(initialFilters.to);
    const [error, setError] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAccordionToggle = (accordionKey) => {
        setActiveAccordionKeys(prevKeys =>
            prevKeys.includes(accordionKey)
                ? prevKeys.filter(key => key !== accordionKey)
                : [...prevKeys, accordionKey]
        );
    };

    const handleSubCategoryChange = (category, subCategoryName) => {
        setCheckedSubCategories(prevSubCategories => {
            const subCategories = prevSubCategories[category] || [];
            const newSubCategories = subCategories.includes(subCategoryName)
                ? subCategories.filter(item => item !== subCategoryName)
                : [...subCategories, subCategoryName];
    
            const updatedSubCategories = {
                ...prevSubCategories,
                [category]: newSubCategories
            };
            localStorage.removeItem('newUrl');
            localStorage.setItem("subcat", JSON.stringify(updatedSubCategories));
            return updatedSubCategories;
        });

        setTimeout(() => {
            const query = new URLSearchParams(location.search);
            const pageN = parseInt(query.get('page')) || 1;
            getProducts(pageN);
        }, 1000);
    };
    const priceFrom = (e) => {
        const value = parseInt(e.target.value);
        setPriceFrom(value);
    
        if (value && to && value > to) {
            setError("To price must be ≥ From price.");
        }
        localStorage.setItem("pricefrom", value);
        localStorage.removeItem('newUrl');
    
        setTimeout(() => {
            const query = new URLSearchParams(location.search);
            const pageN = parseInt(query.get('page')) || 1;
            getProducts(pageN);
        }, 1000);
    };
    
    const priceTo = (e) => {
        const value = parseInt(e.target.value);
        setPriceTo(value);
    
        if (value && from && value < from) {
            setError("To price must be ≥ From price.");
        }
    
        localStorage.setItem("priceto", value);
        localStorage.removeItem('newUrl');
    
        setTimeout(() => {
            const query = new URLSearchParams(location.search);
            const pageN = parseInt(query.get('page')) || 1;
            getProducts(pageN);
        }, 1000);
    };
    

    const toggleFreeShipping = () => {
        const newFreeShipping = !freeShipping;
        setFreeShipping(newFreeShipping);
        localStorage.setItem("free", newFreeShipping);
        localStorage.removeItem('newUrl');

        setTimeout(() => {
            const query = new URLSearchParams(location.search);
            const pageN = parseInt(query.get('page')) || 1;
            getProducts(pageN);
        }, 1000);
    };

    const updateURL = (filters, pageN = 1) => {
        const { subcategories, fromPrice, toPrice, freeShipping } = filters;

        const subcategoryParams = Object.entries(subcategories)
            .flatMap(([cat, subs]) => subs.map(sub => `category=${encodeURIComponent(sub)}`))
            .join('&');
        const priceParams = fromPrice || toPrice ? `from=${encodeURIComponent(fromPrice)}&to=${encodeURIComponent(toPrice)}` : '';
        const shippingParam = freeShipping ? `free_shipping=true` : '';
        const pageParam = `page=${pageN}`;

        const queryString = [subcategoryParams, priceParams, shippingParam, pageParam]
            .filter(param => param)
            .join('&');
            const storedUrl = localStorage.getItem("newUrl");

            const newUrl = storedUrl || `${location.pathname}?${queryString}`;
        
            navigate(newUrl, { replace: false });
        };
        
    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllSubCategory());

        const filters = {
            subcategories: checkedSubCategories,
            fromPrice: from,
            toPrice: to,
            freeShipping: freeShipping
        };

        const query = new URLSearchParams(location.search);
        const pageN = parseInt(query.get('page')) || 1;
        updateURL(filters, pageN);
        getProducts(pageN);
    }, [dispatch,  checkedSubCategories, from, to, freeShipping]);

    useEffect(() => {
        localStorage.setItem('filters', JSON.stringify({
            checkedSubCategories,
            from,
            to,
            freeShipping
        }));
    }, [ checkedSubCategories, from, to, freeShipping]);

    const CategoryResponse = useSelector(state => state.AllCategory.allCategory);
    const SubCategoryResponse = useSelector(state => state.AllSubCategory.allSubCategory);
    // Clear Filters
    const clearFilters = () => {
        setCheckedSubCategories({});
        setPriceFrom('');
        setPriceTo('');
        setFreeShipping(false);
        setError('');
        localStorage.removeItem('filters');
        localStorage.removeItem('subcat');
        localStorage.removeItem('pricefrom');
        localStorage.removeItem('priceto');
        localStorage.removeItem('free');
        localStorage.removeItem('newUrl');

        // Fetch products without filters
        const query = new URLSearchParams(location.search);
        const pageN = parseInt(query.get('page')) || 1;
        getProducts(pageN);
    };


    return {
        CategoryResponse,
        SubCategoryResponse,
        show,
        activeAccordionKeys,
        checkedSubCategories,
        freeShipping,
        handleClose,
        handleShow,
        handleAccordionToggle,
        handleSubCategoryChange,
        priceFrom,
        priceTo,
        error,
        toggleFreeShipping,
        from,
        to,
        clearFilters
    };
};

export default ProductsFilterHook;
