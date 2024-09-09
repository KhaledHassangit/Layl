import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateNewOrderHook from '../../CustomHooks/Orders/CreateNewOrder-Hook';
import { ToastContainer } from 'react-toastify';

    const CheckOut = () => {
        const  [
            name, email, phoneNumber
            , phoneNumber2, address, onChangeName,
            onChangeAdress, , onChangeSecondNumber
            , onChangeNumber, handelCreateOrder,Note,onChangeNote,loading] = 
        CreateNewOrderHook()
        return (
        <section className="checkout" style={{ minHeight: "800px" }}>
            <Container >
            <Row>
                <Col md="12" className="d-flex justify-content-center align-items-center flex-column ">
                
                <Form className="w-75 " >
                <div className='head-title mb-1 text-left '>
                        <h3 >Complete Your Information </h3>
                    </div>
                    <Form.Group className="mb-3 mt-3 " controlId="formBasicName">
                    <Form.Label> Full Name* </Form.Label>
                    <Form.Control type="text" placeholder=" User Name"onChange={onChangeName}
                        className='name' value={name} />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-1 " controlId="formBasicEmail">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control type="email" className='email' readOnly disabled
                    placeholder=" write your email here " value={email}/>
                    </Form.Group>

                    <Form.Group className="mt-1" controlId="formBasicNumber">
                    <Form.Label> Phone Number* </Form.Label>
                    <Form.Control type="text"onChange={onChangeNumber}
                     placeholder="write your Phone Number (required) " value={phoneNumber} />

                    <Form.Control className='mt-2' type="text" onChange={onChangeSecondNumber}
                         placeholder="write another Phone Number ( optional)" value={phoneNumber2} />
                    </Form.Group>

                    

                    <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label> Address* </Form.Label>
                    <Form.Control type="text" onChange={onChangeAdress}
                        placeholder="write your address  here" value={address} />
                    </Form.Group>

                    <Form.Group controlId="formBasicNote">
                                <Form.Label>Add Note</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    value={Note}
                                    onChange={onChangeNote}
                                    placeholder="Add any notes here"
                                />
                            </Form.Group>
                            <Button type="submit" className='next-step w-100' onClick={handelCreateOrder} disabled={loading}>
                            {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Submit'}
                        </Button>
                </Form>
                </Col>

            </Row>
            </Container>
            <ToastContainer/>
        </section>
        );
    }

    export default CheckOut
