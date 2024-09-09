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
