// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import VerifyCouponHook from '../../CustomHooks/Orders/VerifyCoupon-Hook';

// const PayInformation = ({ totalPrice }) => {
//     const [handleCoupon, onChangeCoupon, coupon, borderColor, loading, buttonText, removeCoupon, CouponDetails] = VerifyCouponHook();

//     let discountedTotalPrice = totalPrice;
//     if (CouponDetails && CouponDetails.discount_value) {
//         if (CouponDetails.discount_type === 'Percentage') {
//             discountedTotalPrice = totalPrice * (1 - CouponDetails.discount_value / 100);
//         } else {
//             discountedTotalPrice = totalPrice - CouponDetails.discount_value;
//         }
//     }


//     return (
//         <section className="pay-info" style={{ minHeight: "100%" }}>
//             <Container className='text-left'>
//                 <Row>
//                     <Col md="12" className="d-flex justify-content-center align-items-center flex-column">
//                         <div className='total w-75'>
//                             <div className='head-title mb-3 text-left'>
//                                 <h3>Payment Information</h3>
//                             </div>
//                             <div className='d-flex justify-content-between subtotal mt-3'>
//                                 <span>Subtotal</span>
//                                 <span>{totalPrice} EGP</span>
//                             </div>
//                             <div className='d-flex justify-content-between discount mt-3'>
//                                 <div className='coupon-input-wrapper'>
//                                     <input
//                                         type='text'
//                                         placeholder='Discount Code'
//                                         className='w-100'
//                                         value={coupon}
//                                         onChange={onChangeCoupon}
//                                         style={{ borderColor }}
//                                     />
//                                     {coupon && (
//                                         <span className='coupon-clear' onClick={removeCoupon}>×</span>
//                                     )}
//                                 </div>
//                                 <button onClick={handleCoupon} disabled={loading}>
//                                     {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : buttonText}
//                                 </button>
//                             </div>
//                             <div className='d-flex justify-content-between discountprice mt-3'>
//                                 <span>Discount</span>
//                                 <span>
//                                     {CouponDetails.discount_value ? CouponDetails.discount_value : 0}
//                                     {CouponDetails.discount_type === 'Percentage' ? '%' : ' EGP'}
//                                 </span>
//                             </div>
//                             <div className='d-flex justify-content-between total mt-3'>
//                                 <span>Total</span>
//                                 <span>{discountedTotalPrice} EGP</span>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default PayInformation;
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const PayInformation = () => {
    return (
        <section className="pay-info " style={{ minHeight: "100%" }}>
        <Container className='text-left' >
        <Row>
            <Col md="12" className="d-flex justify-content-center align-items-center flex-column">
            
                <div className='total w-75'>
                    <div className='head-title mb-3 text-left '>
                        <h3 >Payment Information</h3>
                    </div>
                    <div className='d-flex justify-content-between  subtotal mt-3'>
                        <span>Subtotal</span>
                        <span>$56.00</span>
                    </div>

                    <div className='d-flex justify-content-between discount mt-3 '>
                        <input type='text' placeholder='Discount Code '/>
                        <button >Apply</button>
                    </div>

                    <div className='d-flex justify-content-between  discountprice mt-3'>
                        <span>Discount</span>
                        <span>0 EGP</span>
                    </div>

                    <div className='d-flex justify-content-between  total mt-3'>
                        <span>Total</span>
                        <span>$51.00</span>
                    </div>
                </div>
            </Col>

        </Row>
        </Container>
    </section>
    
    )
}

export default PayInformation
