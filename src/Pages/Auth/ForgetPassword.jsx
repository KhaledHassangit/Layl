import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { CiMail } from 'react-icons/ci';
import ForgetPasswordHook from '../../CustomHooks/Auth/ForgetPassword-Hook';
import { Link } from 'react-router-dom';
import image from '../../Images/EmailRecieve.svg';
import image2 from '../../Images/forgetimage.svg';
const ForgetPassword = () => {
    const [email, onChangeEmail, handelSend, response, loading] = ForgetPasswordHook();
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (loading === false) {
            if (response && response.status === 204) {
                setShowSuccess(true);
            }
        }
    }, [loading, response]);

    const handleResendClick = () => {
        setShowSuccess(false);
    };

    if (showSuccess) {
        return (
            <section style={{ minHeight: "630px" }} className='forgetp bg text-center d-flex justify-content-center align-items-center'>
                <Container className='text-center d-flex justify-content-center align-items-center'>
                    <Col md="12">
                        <div className='d-flex justify-content-center align-items-center img'>
                            <img alt="Email Received" src={image}  loading='lazy' style={{height:"150px"}} />
                        </div>
                        <div className='mt-2'>
                            <p style={{ fontFamily: "Poppins", color: "white" }}>
                                An email has been sent to you with password <br /> reset instructions. Please check your email inbox.
                            </p>
                            <p>
                                <span style={{ color: "white", fontSize: "14px" }}>No Email Received? </span>
                                <Link to="#" style={{ color: '#FF9B1B', fontSize: "14px" }} onClick={handleResendClick}>
                                    Resend email
                                </Link>
                            </p>
                        </div>
                    </Col>
                </Container>
            </section>
        );
    }

    return (
        <section style={{ minHeight: "630px" }} className='forgetp bg text-center d-flex justify-content-center align-items-center'>
            <Helmet>
                <title>Layl</title>
                <meta name="description" content="Forget Password Page" />
            </Helmet>
            <Container>
                <Row>
                    <Col md="12">
                    <div className='d-flex justify-content-center align-items-center img'>
                            <img alt="Email Received" src={image2}  loading='lazy'  style={{height:"150px"}}/>
                        </div>
                        <div className='forget-title mt-3'>
                            <h3>Forgot your password?</h3>
                            <p>Recover your account. We will send you a link to <br /> change your password.</p>
                        </div>
                        <div className="flex-column  d-flex justify-content-center align-items-center text-center">
                            <div className="inputForm">
                                <CiMail height={20} width={20} color='white' />
                                <input
                                    style={{ colorScheme:"dark",background: "transparent", color: "white" }}
                                    type="text"
                                    className="input"
                                    placeholder="Enter your Email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    required
                                    autoComplete="off"
                                    name='Recover Email'
                                />
                            </div>
                        </div>
                        <button type="submit" className="button-send" onClick={handelSend}>
                            Send
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ForgetPassword;
