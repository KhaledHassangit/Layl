    import React, { useState } from 'react';
    import { Container, Row, Col } from 'react-bootstrap';
    import Button from 'react-bootstrap/Button';
    import Form from 'react-bootstrap/Form';
    import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

    const CheckOut = () => {
        const [inputValue, setInputValue] = useState('');
        const [counterCode, setCounterCode] = useState('+20');
        
            const handleInputChange = (event) => {
            const value = event.target.value;
            setInputValue(value);
        
            if (!isNaN(value)) {
                setCounterCode("+" + (parseInt(value) + 20));
            } else {
                setCounterCode('+20');
            }
            };
        
        return (
        <section className="checkout" style={{ minHeight: "800px" }}>
            <Container >
            <Row>
                <Col md="12" className="d-flex justify-content-center align-items-center flex-column ">
                
                <Form className="w-75 " >
                <div className='head-title mb-1 text-left '>
                        <h3 >Complete Your Information </h3>
                    </div>
                    <Form.Group className="mb-3 mt-3 " controlId="formBasicEmail">
                    <Form.Label> Full Name* </Form.Label>
                    <Form.Control type="text" placeholder=" User Name" className='name' />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-1 " controlId="formBasicEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" className='email'placeholder=" write your email here " />
                    </Form.Group>

                    <Form.Group className="mt-1" controlId="formBasicEmail">
                    <Form.Label> Phone Number* </Form.Label>
                    <Form.Control type="number" placeholder="write your Phone Number (required) " />
                    <Form.Control className='mt-2' type="number" placeholder="write another Phone Number ( optional)" />
                    </Form.Group>

                    

                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label> Address* </Form.Label>
                    <Form.Control type="text" placeholder="write your address  here" />
                    </Form.Group>

                    <Form.Group  controlId="formBasicCheckbox">
                    <Form.Label> Add Note </Form.Label>
                        <Form.Control as="textarea"  />
                    </Form.Group>
                    <Button type="submit" className='next-step w-100'>
                        Submit
                    </Button>
                    {/* <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <div className="d-flex align-items-center">
                        <Button className="phone-btn mr-2">+20</Button>
                        <Form.Control
                        className="phone-input"
                        type="text"
                        placeholder="Phone Number"
                        />
                    </div>
                    </Form.Group> */}
                    
                </Form>
                </Col>

                {/* <Col md="4">
                <div className="total-cart ">
                    <div className='p-3'>
                        <h6 className='mt-2 mb-2  fw-bold'>Cart Details</h6>
                    </div>
                    <div className=' headline p-2 d-flex justify-content-between align-items-center '>
                        <h6>Product</h6>
                        <span>#</span>
                        <h6>Price</h6>
                    </div>

                    <div className=' details p-2  d-flex justify-content-between align-items-center '>
                        <h6>BackPack</h6>
                        <span>1</span>
                        <h6>250</h6>
                    </div>

                    <div className=' details p-2  d-flex justify-content-between align-items-center '>
                        <h6>BackPack</h6>
                        <span>1</span>
                        <h6>250</h6>
                    </div>

                    <div className=' details p-2  d-flex justify-content-between align-items-center '>
                        <h6>BackPack</h6>
                        <span>1</span>
                        <h6>250</h6>
                    </div>

                    <div className=' details p-2  d-flex justify-content-between align-items-center '>
                        <h6>BackPack</h6>
                        <span>1</span>
                        <h6>250</h6>
                    </div>

                    <div className='subtotal d-flex p-2  justify-content-between align-items-center '>
                        <h6>Subtotal</h6>
                        <h6>2,000 EGP</h6>
                    </div>

                    <div className='shipping d-flex p-2  justify-content-between  align-items-center'>
                        <h6>Shipping</h6>
                        <h6>200 EGP</h6>
                    </div>

                    <div className='discount-button p-2'>
                    <Form.Group className="borderss" controlId="formBasicEmail">
                    <div className="d-flex align-items-center">
                        <Form.Control
                        className="discount"
                        type="text"
                        placeholder="Enter Code Here"
                        />
                        <Button className="discount-btn">Enter</Button>
                    </div>
                    </Form.Group>
                    </div>

                    <div className='total d-flex p-2 mt-4 mb-4 justify-content-between  align-items-center'>
                        <h6>Total</h6>
                        <h6>2,200 EGP </h6>
                    </div>
                    <div className='checkout-button'>
                        <Link to="/Cart/Checkout/PaymentMethods" style={{textDecoration:"none"}}>Checkout</Link>
                    </div>
                </div>
            </Col> */}
            </Row>
            </Container>
        </section>
        );
    }

    export default CheckOut
