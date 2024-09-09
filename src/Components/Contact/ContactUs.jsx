import React from 'react'
import { Col, Container ,Row } from 'react-bootstrap'
import { FaTiktok } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Logo from "../../Images/Logo.webp"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section className="contact-us" id="Contact-us">
            <Container >
            <Row > 
                <Col md="12" className='d-flex justify-content-center gap-5 align-items-center flex-wrap '>
                <div className='social '>
                    <div className='logo'>
                    <img src={Logo} alt="Layl " loading='lazy'/>
                    </div>
                    <ul className='d-flex mt-1 '>
                        <li>
                        <Link target='blank' to="" aria-label="Instagram Page">
                            <FaSquareInstagram />
                        </Link>
                        </li>
                        <li>
                        <Link target='blank' to="https://www.facebook.com/layll.eg?mibextid=ZbWKwL"
                        aria-label="Facebook Page">
                            <FaFacebook />
                        </Link>
                        </li>
                        <li>
                        <Link target='blank' to=""aria-label="Tiktok Page">
                            <FaTiktok/>
                        </Link>
                        </li>
    
                    </ul>
                </div>
                <div className='contact-form '>
                    <Form>
                        <div className='d-flex gap-3 '>
                        <Form.Group className="mb-3 mt-5  " controlId="formBasicName">
                        <Form.Label>  Name </Form.Label>
                        <Form.Control type="text" placeholder="your name" />
                        </Form.Group>
                        <Form.Group className="mb-3 mt-5 " controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="simple1345@gmail.com" />
                        </Form.Group>
                        </div>
                        

                        <Form.Group  controlId="formBasicCheckbox">
                        <Form.Control as="textarea"  placeholder='Wrtie Your Message' />
                        </Form.Group>
                        <Button  className='mt-3' type="submit">
                        Submit
                        </Button>
                    </Form>
                    </div>
                </Col>
                {/* <Col md="6">
                 
                </Col> */}
            </Row>
            </Container>
        </section>
    );
}

export default Contact
