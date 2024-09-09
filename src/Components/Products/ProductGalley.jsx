// import React, { useState, useEffect } from 'react';
// import Magnifier from 'react-magnifier';
// import { useParams } from 'react-router';
// import ProductDetailsHook from '../../CustomHooks/Products/ProductDetails-Hook';
// import Spinner from '../../Utilities/Spinner';
// import { Fade } from 'react-awesome-reveal';

// const ProductGallery = () => {
//     const { id } = useParams();
//     const [, imgs, , loadingprod] = ProductDetailsHook(id);
//     const initialImage = imgs.length > 0 ? imgs[0] : '';
//     const [selectedImage, setSelectedImage] = useState(initialImage);
//     const [highResLoaded, setHighResLoaded] = useState(false);

//     useEffect(() => {
//         if (initialImage) {
//             setSelectedImage(initialImage);
//             preloadImage(initialImage);
//         }
//     }, [initialImage]);

//     const handleImageHover = (image) => {
//         setSelectedImage(image);
//         setHighResLoaded(false);
//         preloadImage(image);
//     };

//     const preloadImage = (image) => {
//         const img = new Image();
//         img.src = image;
//         img.onload = () => setHighResLoaded(true);
//     };

//     return (
//         <section>
//             {loadingprod ? (
//                 <Spinner />
//             ) : (
//                 <div className="product-gallery mt-3">
//                     <div className="small-images">

//                         {imgs.map((image, index) => (
//                             <Fade triggerOnce={true} cascade={false} delay={index * 100}>

//                                 <img
//                                     key={index}
//                                     src={image}
//                                     loading='lazy'
//                                     alt={`Product ${index + 1}`}
//                                     onMouseOver={() => handleImageHover(image)}
//                                     className={selectedImage === image ? "small-image active" : "small-image"}
//                                 />
//                             </Fade>

//                         ))}
//                     </div>
//                     <div className="large-image">
//                         <div className="magnifier-container">
//                             {selectedImage && (
//                                 <>
//                                     {highResLoaded ? (
//                                         <Magnifier
//                                             loading='lazy'
//                                             src={selectedImage}
//                                             alt="Selected Product"
//                                             style={{ width: '90%' }}
//                                         />
//                                     ) : (
//                                         <Spinner className="text-center align-items-center" />
//                                     )}
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default ProductGallery;
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
