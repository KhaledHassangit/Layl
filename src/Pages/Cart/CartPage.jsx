// import React, { useEffect, useState } from 'react';
// import { Container, Row } from 'react-bootstrap';
// import PayInformation from '../../Components/Cart/PayInformation';
// import CheckOut from '../../Components/Cart/CheckOut';
// import { Helmet } from 'react-helmet-async';
// import GetUserCartHook from '../../CustomHooks/Cart/GetUserCart-Hook';
// import { Link } from 'react-router-dom';
// import CartItem from '../../Components/Cart/CartItem';
// import Spinner from '../../Utilities/Spinner';
// import CreateNewOrderHook from '../../CustomHooks/Orders/CreateNewOrder-Hook';

// const CartPage = () => {
//     const [AllCartres, getAllCart, loading] = GetUserCartHook();
//     const [isUpdating, setIsUpdating] = useState(false);
//     const [totalPrice, setTotalPrice] = useState(0);

//     useEffect(() => {
//         if (AllCartres && AllCartres.data && AllCartres.data.cart_items.length >= 1) {
//             const total = AllCartres.data.cart_items.reduce((acc, item) => {
//                 const itemPrice = item.new_price ? item.new_price : item.price;
//                 return acc + itemPrice * item.quantity;
//             }, 0);
//             setTotalPrice(total);
//         }
//     }, [AllCartres]);
    
//     return (
//         <div className='cart' style={{ minHeight: "670px" }}>
//             <Helmet>
//                 <title>Layl | Shopping Cart</title>
//                 <meta name="description" content="Shopping Cart Page" />
//             </Helmet>
//             <Row>
//                 <div className='fs-2 fw-semibold cart-title text-center mb-3'>Shopping Cart</div>
//             </Row>
//             {loading || isUpdating ? (
//                 <Spinner />
//             ) : (
//                 AllCartres && AllCartres.data && AllCartres.data.cart_items.length >= 1 ? (
//                     <>
//                         <Row className='d-flex justify-content-center'>
//                             {AllCartres.data.cart_items.map((cartItem, index) => (
//                                 <CartItem
//                                     key={index}
//                                     cartItem={cartItem}
//                                     setUpdating={setIsUpdating}
//                                 />
//                             ))}
//                         </Row>
//                         <Row>
//                             <PayInformation  totalPrice={totalPrice}/>
//                         </Row>
//                         <Row>
//                             <CheckOut />
//                         </Row>
//                     </>
//                 ) : (
//                     <Container fluid className="d-flex justify-content-center align-items-center empty-cart-container">
//                         <div className="text-center">
//                             <h4>Your Cart is Empty</h4>
//                             <div className='confirmation-buttons d-flex flex-wrap justify-content-center align-content-center gap-2 mt-5'>
//                                 <Link to="/">
//                                     <button className='home-btn'>Go To Home</button>
//                                 </Link>
//                                 <Link to="/products">
//                                     <button className='shop-btn'>Continue Shopping</button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </Container>
//                 )
//             )}
//         </div>
//     );
// };

// export default React.memo(CartPage);
import React from 'react'
import { CartItem } from '../../Components/Cart/CartItem'
import {  Row } from 'react-bootstrap'
import PayInformation from '../../Components/Cart/PayInformation'
import CheckOut from '../../Components/Cart/CheckOut'
import { Helmet } from 'react-helmet-async'

const CartPage = () => {
    return (
    <div className='cart ' style={{minHeight:"670px"}} >
        <Helmet>
            <title> Shopping  Cart</title>
            <meta name="description" content=" Shopping Cart Page" />
            </Helmet>
        <Row>
            <div className='fs-2 fw-semibold cart-title text-center mb-3'>Shopping Cart</div>
        </Row>
        <Row className='d-flex justify-content-center'>
                <CartItem/>
        </Row>
        <Row>
            <PayInformation/>
        </Row>
        <Row>
            <CheckOut/>

        </Row>
    </div>
)
}

export default CartPage

