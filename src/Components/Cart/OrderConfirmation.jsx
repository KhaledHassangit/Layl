import React from 'react';
import confirm from "../../Images/confirmation.png";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {

    return (
        <section style={{ minHeight: "500px" }} className='bg pt-4'>
            <div className="order-confirmation">
                <div className="icon">
                    <img src={confirm} alt="Check Icon" loading='lazy'/>
                </div>
                <div>
                    <h1>Thank You</h1>
                    <p>Your order has been Confirmed</p>
                    <p>The Shipping price will in range of 40 to 90 L.E.</p>
                </div>
                <div className='confirmation-buttons d-flex flex-wrap justify-content-center align-content-center gap-2 mt-5'>
                    <Link to="/">
                        <button className='home-btn'>Go To Home</button>
                    </Link>
                    <Link to="/Products">
                        <button className='shop-btn'>Continue Shopping</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default OrderConfirmation;
