import React, { useState } from 'react';
import image1 from '../../Images/img1.webp';
import image2 from '../../Images/img2.webp';
import image3 from '../../Images/img3.webp';
import Magnifier from 'react-magnifier';

const ProductGallery = () => {
    const images = [image1, image2, image3];
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageHover = (image) => {
        setSelectedImage(image);
    };

    return (
        <section>
            <div className="product-gallery mt-3">
                <div className="small-images">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Product ${index + 1}`}
                            onMouseOver={() => handleImageHover(image)}
                            className={selectedImage === image ? "small-image active" : "small-image"}
                        />
                    ))}
                </div>
                <div className="large-image">
                    <div className="magnifier-container">
                        <Magnifier src={selectedImage} alt="Selected Product" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductGallery;
