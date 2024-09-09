import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FaBoxArchive } from "react-icons/fa6";
import rotatedbox from "../../Images/3d-rotate.png";
import { useParams } from 'react-router';
import ProductDetailsHook from "../../CustomHooks/Products/ProductDetails-Hook";
import AddtoCartHook from "../../CustomHooks/Cart/AddtoCart-Hook";
import { ToastContainer } from "react-toastify";
import Spinner from "../../Utilities/Spinner";
import Cookie from 'universal-cookie';
import { Fade } from 'react-awesome-reveal';

const ProductDetails = () => {
    const cookie = new Cookie();
    let userData = "";
    if (cookie.get('UserData') !== null) {
        userData = cookie.get('UserData');
    }
    const isMerchant = userData && userData.account_type === 'Merchant';

    const { id } = useParams();
    const [SingleProduct, , , loadingprod] = ProductDetailsHook(id);
    const [selectedColor, value, increaseValue, decreaseValue, handleChange, handleClick, handleAddtoCart, loading] = AddtoCartHook({ SingleProduct });

    const [selectedColorQuantity, setSelectedColorQuantity] = useState(0);

    const handleColorClick = (colorObj) => {
        handleClick(colorObj);
        setSelectedColorQuantity(colorObj.quantity);
    };

    const showStockInfo = selectedColor && selectedColorQuantity <= 10;

    return (
        <section className='product-text'>
            <>
                <div className='title mt-2 ms-2'>
                    <Fade triggerOnce={true}>
                        <h4 className='me-2'>{SingleProduct.name}</h4>
                    </Fade>
                </div>
                <div className='mb-2 category'>
                    <Fade delay={250} triggerOnce={true}>
                        <span className='ms-2'>{SingleProduct.category}</span>
                    </Fade>

                </div>
                <div className='price '>
                    <Fade delay={350} triggerOnce={true}>

                        <h4 className='ms-2 d-flex flex-column'>
                            {isMerchant && SingleProduct.merchant_price ? (
                                <span className="merchant-price">{SingleProduct.merchant_price} EGP</span>
                            ) : (
                                SingleProduct.new_price && SingleProduct.new_price.has_offer ? (
                                    <>
                                        <span className="old-price">{SingleProduct.old_price} EGP</span>
                                        <span className="new-price mt-1">{SingleProduct.new_price.new_price} EGP</span>
                                    </>
                                ) : (
                                    <span>{SingleProduct.old_price} EGP</span>
                                )
                            )}
                        </h4>
                    </Fade>

                </div>
                <div className='d-flex flex-column'>
                    <Fade delay={450}>
                        <span className="mb-3 mt-3 ms-2" style={{ fontSize: "12px", fontWeight: "500" }}>Available colours</span>
                    </Fade>
                    <ul className='colors p-0'>
                        {SingleProduct.colors && SingleProduct.colors
                            .filter(colorObj => colorObj.quantity > 0)
                            .map((colorObj, index) => {
                                const color = colorObj.color;
                                return (
                                    <Fade triggerOnce={true} cascade={false} delay={index * 50}>

                                        <li
                                            key={color}
                                            style={{
                                                backgroundColor: color,
                                                border: selectedColor === colorObj ? "2px solid #FF9B1B" : "2px solid #ddd0d0",
                                            }}
                                            onClick={() => handleColorClick(colorObj)}
                                        />
                                    </Fade>

                                );
                            })}
                    </ul>
                </div>
                <hr />
                <div className="">
                    <div className='text-deatils'>
                        <h6 className="mb-4 mt-4" style={{ fontSize: "20px", fontWeight: "500" }}>Description</h6>
                    </div>
                    <div className='text-deatils ar d-flex align-items-end flex-column'>
                        <Fade delay={500} triggerOnce={true}>
                            <p className="ar mb-4">{SingleProduct.description}</p>
                        </Fade>
                    </div>
                </div>
                <div className={`buttons1 d-flex justify-content-center align-content-center`}>
                    <div className="input-number">
                        <button className="ms-2 mb-2" onClick={decreaseValue} disabled={loading}>-</button>
                        <input
                            type="number"
                            value={value}
                            onChange={handleChange}
                            style={{ textAlign: "center" }}
                            disabled={loading}
                        />
                        <button className="me-2 mb-2" onClick={increaseValue} disabled={loading}>+</button>
                    </div>
                    <button onClick={handleAddtoCart} className="add-button" disabled={loading}>
                        {loading ? <div className="spinneradd"></div> : "Add to Cart"}
                    </button>
                </div>
                <div className="d-flex justify-content-center align-center mt-3"></div>
                <div className="info mt-4">
                    <CSSTransition
                        in={showStockInfo}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >
                        <div className="d-flex align-center text-center info-text">
                            <FaBoxArchive style={{ width: "26px", height: "26px", color: "#FF9B1B", marginLeft: "6px" }} />
                            <p style={{ color: "#D33234" }}>
                                {`${selectedColorQuantity} bags left in stock`}
                            </p>
                        </div>
                    </CSSTransition>
                    <div className="d-flex align-center text-center info-text">
                        <img loading='lazy' alt="" src={rotatedbox} style={{ width: "32px", height: "32px", color: "#FF9B1B" }} />
                        <p>Delivers in: 1-7 Working Days Shipping & Return</p>
                    </div>
                </div>
                <ToastContainer />
            </>
        </section>
    );
};

export default ProductDetails;
