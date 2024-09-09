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
