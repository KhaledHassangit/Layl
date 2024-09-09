import React, { useState, useEffect } from 'react';
import Magnifier from 'react-magnifier';
import { useParams } from 'react-router';
import ProductDetailsHook from '../../CustomHooks/Products/ProductDetails-Hook';
import Spinner from '../../Utilities/Spinner';
import { Fade } from 'react-awesome-reveal';

const ProductGallery = () => {
    const { id } = useParams();
    const [, imgs, , loadingprod] = ProductDetailsHook(id);
    const initialImage = imgs.length > 0 ? imgs[0] : '';
    const [selectedImage, setSelectedImage] = useState(initialImage);
    const [highResLoaded, setHighResLoaded] = useState(false);

    useEffect(() => {
        if (initialImage) {
            setSelectedImage(initialImage);
            preloadImage(initialImage);
        }
    }, [initialImage]);

    const handleImageHover = (image) => {
        setSelectedImage(image);
        setHighResLoaded(false);
        preloadImage(image);
    };

    const preloadImage = (image) => {
        const img = new Image();
        img.src = image;
        img.onload = () => setHighResLoaded(true);
    };

    return (
        <section>
            {loadingprod ? (
                <Spinner />
            ) : (
                <div className="product-gallery mt-3">
                    <div className="small-images">

                        {imgs.map((image, index) => (
                            <Fade triggerOnce={true} cascade={false} delay={index * 100}>

                                <img
                                    key={index}
                                    src={image}
                                    loading='lazy'
                                    alt={`Product ${index + 1}`}
                                    onMouseOver={() => handleImageHover(image)}
                                    className={selectedImage === image ? "small-image active" : "small-image"}
                                />
                            </Fade>

                        ))}
                    </div>
                    <div className="large-image">
                        <div className="magnifier-container">
                            {selectedImage && (
                                <>
                                    {highResLoaded ? (
                                        <Magnifier
                                            loading='lazy'
                                            src={selectedImage}
                                            alt="Selected Product"
                                            style={{ width: '90%' }}
                                        />
                                    ) : (
                                        <Spinner className="text-center align-items-center" />
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProductGallery;
