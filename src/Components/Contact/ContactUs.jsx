import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Alert } from 'react-bootstrap';
import { FaTiktok } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Logo from "../../Images/Logo.webp";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import ContactHook from '../../CustomHooks/Auth/Contact-Hook';

const Contact = () => {
    const [formData,setFormData, handleChange, handleSubmit, loading, contactResponse, error,setError] = ContactHook();
    const [displayMessage, setDisplayMessage] = useState(null); 
    const [isSuccess, setIsSuccess] = useState(null); 
    useEffect(() => {
        if (contactResponse && contactResponse.status === 200) {
            setFormData({
                name: '',
                from_email: '',
                message: ''
            });
            setError(null);
            setIsSuccess(true);
            setDisplayMessage('✔');
            setTimeout(() => {
                setDisplayMessage(null);
                setIsSuccess(null);
            }, 3000); 
        } else if (contactResponse && contactResponse.status === 400) {
            setIsSuccess(false);
            setDisplayMessage(contactResponse.error); 
            setTimeout(() => {
                setDisplayMessage(null);
                setIsSuccess(null);
            }, 1500); 
            setError(contactResponse.error || 'An error occurred.');
        }
    }, [contactResponse]);

    return (
        <section className="contact-us" id="Contact-us">
            <Container>
                <Row>
                    <Col md="12" className='d-flex justify-content-center gap-5 align-items-center flex-wrap '>
                        <div className='social'>
                            <div className='logo'>
                                <img src={Logo} alt="Layl" loading='lazy' />
                            </div>
                            <Fade cascade damping={0.3} triggerOnce={true}>
                                <ul className='d-flex mt-1 '>
                                    <li>
                                        <Link target='blank' to="/" aria-label="Facebook Page">
                                            <FaFacebook />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target='blank' to="/" aria-label="Instagram Page">
                                            <FaSquareInstagram />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link target='blank' to="/" aria-label="Tiktok Page">
                                            <FaTiktok />
                                        </Link>
                                    </li>
                                </ul>
                            </Fade>
                        </div>
                        <div className='contact-form '>
                            <Form onSubmit={handleSubmit} >
                                <div className='d-flex gap-3 '>
                                    <Form.Group className="mb-3 mt-5" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="your name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="simple1345@gmail.com"
                                            name="from_email"
                                            value={formData.from_email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>
                                </div>
                                <Form.Group controlId="formBasicMessage">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Write Your Message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Button className='mt-3' type="submit" disabled={loading}>
                                    {loading ? (
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        (displayMessage ? displayMessage : 'Submit')
                                    )}
                                </Button>

                            </Form>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact
