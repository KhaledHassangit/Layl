import React, { useState } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import { Helmet } from 'react-helmet-async';
import { IoMdLock } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import ResetPasswordHook from '../../CustomHooks/Auth/ResetPassword-Hook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import forgetsvg from '../../Images/lock.svg';

const ResetPassword = () => {
    const { uid, token } = useParams();
    const [
        newPassword,
        confirmPassword,
        handleNewPasswordChange,
        handleConfirmPasswordChange,
        handleSubmit,
        loading,
        error,
    ] = ResetPasswordHook(uid, token);

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const toggleNewPasswordVisibility = () => setShowNewPassword(!showNewPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    const isPasswordMismatch = error === "Passwords do not match.";

    return (
        <section style={{ minHeight: "630px" }} className='forgetp bg text-center d-flex justify-content-center align-items-center'>
            <Helmet>
                <title>Layl | Reset Password</title>
                <meta name="description" content="Forget Password Page" />
                <link rel="icon" href="/Logo.webp" />
                <link rel="apple-touch-icon" href="/Logo.webp" />
            </Helmet>
            <Container>
                <Row>
                    <Col md="12">
                        <div className='d-flex justify-content-center align-items-center mb-4'>
                            <img alt="Email Received" src={forgetsvg} style={{ height: "70px" }} loading='lazy' />
                        </div>
                        <div className='forget-title'>
                            <h3>Reset Your Password</h3>
                        </div>
                        <div className="flex-column d-flex justify-content-center align-items-center text-center">
                            <div className={`inputForm mb-3  ${isPasswordMismatch ? 'container-error' : ''}`}>
                                <IoMdLock height={20} width={20} color='white' />
                                <input
                                    style={{
                                        colorScheme: "dark",
                                        background: "none",
                                        color: "white",
                                    }}
                                    type={showNewPassword ? "text" : "password"}
                                    className="input"
                                    placeholder="Enter New Password"
                                    value={newPassword}
                                    onChange={handleNewPasswordChange}
                                    required
                                    autoComplete='off'
                                    name='new-password'
                                />
                                {showNewPassword ? (
                                    <FaEye
                                        className="eye-icon me-2"
                                        onClick={toggleNewPasswordVisibility}
                                        height={25}
                                        width={25}
                                        color='white'
                                    />
                                ) : (
                                    <FaEyeSlash
                                        className="eye-icon me-2"
                                        onClick={toggleNewPasswordVisibility}
                                        height={25}
                                        width={25}
                                        color='white'
                                    />
                                )}
                            </div>
                            <div className="inputForm">
                                <IoMdLock height={20} width={20} color='white' />
                                <input
                                    style={{
                                        colorScheme: "dark",
                                        background: "none",
                                        color: "white",
                                    }}
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="input"
                                    placeholder="Confirm New Password"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    required
                                    autoComplete='off'
                                    name='confirm-password'
                                />
                                {showConfirmPassword ? (
                                    <FaEye
                                        className="eye-icon me-2"
                                        onClick={toggleConfirmPasswordVisibility}
                                        height={25}
                                        width={25}
                                        color='white'
                                    />
                                ) : (
                                    <FaEyeSlash
                                        className="eye-icon me-2"
                                        onClick={toggleConfirmPasswordVisibility}
                                        height={25}
                                        width={25}
                                        color='white'
                                    />
                                )}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="button-send"
                            onClick={handleSubmit}
                            disabled={loading}>
                            {loading ? (
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            ) : "Submit"}
                        </button>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </section>
    );
};

export default ResetPassword;
