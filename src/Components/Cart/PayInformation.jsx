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
