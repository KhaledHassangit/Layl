import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import homebg from '../../Images/image-1600x900.webp';
import { getDiscounts } from '../../Redux/Actions/OffersActions';
import { getAllProductsByFilter } from '../../Redux/Actions/ProductsAction';
import { useNavigate } from 'react-router-dom';

const HomeDiscountHook = () => {
    const [backgroundImage, setBackgroundImage] = useState(homebg);
    const [offerImages, setOfferImages] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getDiscounts());
    }, [dispatch]);

    const allDiscountsRes = useSelector((state) => state.OffersReducer.getDiscount);

    useEffect(() => {
        if (allDiscountsRes?.data) {
            const offers = allDiscountsRes.data.filter((offer) => offer.active);
            const mappedOffers = [{ img: homebg }, ...offers.map((offer) => ({
                img: `http://localhost:8000${offer.img}`,
                subCategoryName: offer.sub_category_name,
            }))];

            setOfferImages(mappedOffers);
        } else {
            setOfferImages([{ img: homebg }]);
        }
    }, [allDiscountsRes]);

    useEffect(() => {
        if (offerImages.length <= 1) return;

        const interval = setInterval(() => {
            setBackgroundImage((prevImg) => {
                const currentIndex = offerImages.findIndex((offer) => offer.img === prevImg);
                const nextIndex = (currentIndex + 1) % offerImages.length;
                return offerImages[nextIndex].img;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [offerImages]);

    const handleImageClick = useCallback(async () => {
        if (backgroundImage === homebg) return;

        const currentOffer = offerImages.find((offer) => offer.img === backgroundImage);

        if (currentOffer) {
            const subCategoryName = currentOffer.subCategoryName;

            const storedSubCategories = JSON.parse(localStorage.getItem("subcat")) || {};
            storedSubCategories[subCategoryName] = [subCategoryName];
            localStorage.setItem("subcat", JSON.stringify(storedSubCategories));

            const filters = {
                subcategories: { [subCategoryName]: [subCategoryName] },
            };
            try {
                const newUrl = `/products?category=${encodeURIComponent(subCategoryName)}&page=1`;
                localStorage.setItem("newUrl", newUrl);

                navigate(newUrl, { replace: true });

                await dispatch(getAllProductsByFilter(filters));
            } catch (error) {
            }
        }
    }, [backgroundImage, offerImages, dispatch, navigate]);

    return {
        backgroundImage,
        offerImages,
        handleImageClick,
        homebg
    };
};

export default HomeDiscountHook;
