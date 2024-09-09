// import React from 'react';
// import { Container } from "react-bootstrap";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import UpdateCartHook from '../../CustomHooks/Cart/UpdateCart-Hook';

// const CartItem = ({ cartItem }) => {
//     const [itemCount, increaseValue, decreaseValue, onChangeCount, handleDeleteCartItem, deleteLoading, updateLoading] = UpdateCartHook(cartItem);
//     return (
//         <section>
//             {(deleteLoading || updateLoading) && (
//                 <div className="loading-overlay">
//                     <div className="spinnerdel"></div>
//                 </div>
//             )}
//             <Container className='cart-container'>
//                 <div className='cart-row mb-4 mt-2'>
//                     <div className='main'>
//                         <div className='img-box'>
//                             <img loading='lazy'className='product-img' alt='Product' src={cartItem.imgs && cartItem.imgs.length > 0 ? 
//                                 `http://127.0.0.1:8000${cartItem.imgs[0].img}` : null}/>
//                         </div>
//                         <div className='info'>
//                             <h6>{cartItem.sub_category.name}</h6>
//                             <p>{cartItem.category.name}</p>
//                         </div>
//                         <div className='main-two'>
//                             <div className="input-number">
//                                 <button onClick={decreaseValue} disabled={updateLoading}>-</button>
//                                 <input
//                                     type="number"
//                                     value={itemCount || 0}
//                                     onChange={onChangeCount}
//                                     style={{ textAlign: "center" }}
//                                     disabled={updateLoading}
//                                 />
//                                 <button onClick={increaseValue} disabled={updateLoading}>+</button>
//                             </div>
//                             <div className='color-indicators'>
//                                 {cartItem.colors.map((colorItem, colorIndex) => (
//                                     <div
//                                         key={colorIndex}
//                                         className='color-indicator mt-2'
//                                         style={{ backgroundColor: colorItem.color }}
//                                     ></div>
//                                 ))}
//                             </div>
//                             <div className='total-price'>
//                             <h6>
//                                 {cartItem.new_price ? (
//                                     `${cartItem.new_price} EGP`
//                                 ) : (
//                                     `${cartItem.price} EGP`
//                                 )}
//                             </h6>                            </div>
//                             <div className='delete-button' onClick={handleDeleteCartItem}>
//                                 <RiDeleteBin6Line color="00000" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </section>
//     );
// };

// export default CartItem;
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Backpack from "../../Images/Backbag.jpeg";
import { RiDeleteBin6Line } from "react-icons/ri";

export const CartItem = () => {
    const [value, setValue] = useState(0);

    const increaseValue = () => {
        setValue(value + 1);
    };

    const decreaseValue = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <section>
            <Container className='cart-container'>
                <div className='cart-row'>
                    <div className='main'>
                        <div className='img-box'>
                            <img className='product-img' alt='Backpack' src={Backpack} />
                        </div>
                        <div className='info'>
                            <h6>Product Name</h6>
                            <p>BACKPACK</p>
                        </div>
                        <div className='main-two'>
                            <div className="input-number">
                                <button onClick={decreaseValue}>-</button>
                                <input
                                    type="number"
                                    value={value}
                                    onChange={handleChange}
                                    style={{ textAlign: "center" }}
                                />
                                <button onClick={increaseValue}>+</button>
                            </div>
                            <div className='color-indicator'></div>
                            <div className='total-price'>
                                <h6>250EGP</h6>
                            </div>
                            <div className='delete-button'>
                                <RiDeleteBin6Line color='#000000' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
