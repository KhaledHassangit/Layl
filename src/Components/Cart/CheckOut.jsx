// import React from 'react';
// import { Container, Row, Col, Spinner } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import CreateNewOrderHook from '../../CustomHooks/Orders/CreateNewOrder-Hook';
// import { ToastContainer } from 'react-toastify';

//     const CheckOut = () => {
//         const  [
//             name, email, phoneNumber
//             , phoneNumber2, address, onChangeName,
//             onChangeAdress, , onChangeSecondNumber
//             , onChangeNumber, handelCreateOrder,Note,onChangeNote,loading] = 
//         CreateNewOrderHook()
//         return (
//         <section className="checkout" style={{ minHeight: "800px" }}>
//             <Container >
//             <Row>
//                 <Col md="12" className="d-flex justify-content-center align-items-center flex-column ">
                
//                 <Form className="w-75 " >
//                 <div className='head-title mb-1 text-left '>
//                         <h3 >Complete Your Information </h3>
//                     </div>
//                     <Form.Group className="mb-3 mt-3 " controlId="formBasicName">
//                     <Form.Label> Full Name* </Form.Label>
//                     <Form.Control type="text" placeholder=" User Name"onChange={onChangeName}
//                         className='name' value={name} />
//                     </Form.Group>

//                     <Form.Group className="mb-3 mt-1 " controlId="formBasicEmail">
//                     <Form.Label>Email*</Form.Label>
//                     <Form.Control type="email" className='email' readOnly disabled
//                     placeholder=" write your email here " value={email}/>
//                     </Form.Group>

//                     <Form.Group className="mt-1" controlId="formBasicNumber">
//                     <Form.Label> Phone Number* </Form.Label>
//                     <Form.Control type="text"onChange={onChangeNumber}
//                      placeholder="write your Phone Number (required) " value={phoneNumber} />

//                     <Form.Control className='mt-2' type="text" onChange={onChangeSecondNumber}
//                          placeholder="write another Phone Number ( optional)" value={phoneNumber2} />
//                     </Form.Group>

                    

//                     <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
//                     <Form.Label> Address* </Form.Label>
//                     <Form.Control type="text" onChange={onChangeAdress}
//                         placeholder="write your address  here" value={address} />
//                     </Form.Group>

//                     <Form.Group controlId="formBasicNote">
//                                 <Form.Label>Add Note</Form.Label>
//                                 <Form.Control
//                                     as="textarea"
//                                     value={Note}
//                                     onChange={onChangeNote}
//                                     placeholder="Add any notes here"
//                                 />
//                             </Form.Group>
//                             <Button type="submit" className='next-step w-100' onClick={handelCreateOrder} disabled={loading}>
//                             {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Submit'}
//                         </Button>
//                 </Form>
//                 </Col>

//             </Row>
//             </Container>
//             <ToastContainer/>
//         </section>
//         );
//     }

//     export default CheckOut
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
                <Link to='/oderconfirmed'>
                <Button type="submit" className='next-step w-100'>
                    Submit
                </Button>
                </Link>
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
