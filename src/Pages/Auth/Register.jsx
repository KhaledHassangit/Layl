import React, { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import First from "../../Images/loginbg.webp";
import Second from "../../Images/loginbg2.webp";
import { CiMail } from "react-icons/ci";
import { IoMdLock } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import RegistereHook from "../../CustomHooks/Auth/Register-Hook";
import { ToastContainer } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import FacebookLogin from 'react-facebook-login';

const RegisterPage = () => {
    const [name, email, password, confirmpassword, phone, onChangeName, onChangeEmail, onChangePassword, onChangeconfirmPassword, onChangePhone, onSubmit] = RegistereHook();

    const nameRef = useRef(null);

    useEffect(() => {
        if (nameRef.current) {
            nameRef.current.focus();
        }
    }, []);

    const responseFacebook = (response) => {
        console.log(response);
    };

    return (
        <section className="login-page" style={{ minHeight: "700px" }}>
            <Helmet>
                <title> Layl | Sign Up </title>
                <meta name="description" content="Sign Up Page" />
            </Helmet>
            <Container>
                <Row className="login d-flex justify-content-between gap-0 align-items-center">
                    <Col xxl="7" lg="5" sm="12" md="12">
                        <div className="d-flex flex-wrap gap-xl-4">
                            <div className="imgs-box d-flex flex-column">
                                <Fade delay={0} triggerOnce={true}>
                                    <img
                                        loading='lazy'
                                        src={Second}
                                        width="300px"
                                        height="250px"
                                        style={{ borderRadius: "12px", marginBottom: "20px" }}
                                    />
                                </Fade>
                                <Fade delay={250} triggerOnce={true}>

                                    <img
                                        loading='lazy'
                                        src={Second}
                                        width="300px"
                                        height="250px"
                                        style={{ borderRadius: "12px" }}
                                    />
                                </Fade>

                            </div>

                            <div>
                                <Fade delay={500} triggerOnce={true}>

                                    <img
                                        loading='lazy'
                                        src={First}
                                        width="400px"
                                        height="520px"
                                        className="full-image"
                                        style={{ borderRadius: "12px" }}
                                    />
                                </Fade>

                            </div>
                        </div>
                    </Col>
                    <Col xxl="5" lg="7" sm="12" md="12" className="d-flex text-center justify-content-center">
                        <div className="login-form pt-3 form " >
                            <div className="login-title">
                                <h3>Welcome To Layl</h3>
                                <p className="my-4">Create New account</p>
                            </div>
                            <form className="form">
                                <div className="flex-column">
                                    <div className="inputForm">
                                        <FaRegUser height={20} width={20} />
                                        <input
                                            ref={nameRef}
                                            value={name}
                                            onChange={onChangeName}
                                            type="text"
                                            className="input"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex-column">
                                    <div className="inputForm">
                                        <CiMail height={20} width={20} />
                                        <input
                                            value={email}
                                            onChange={onChangeEmail}
                                            type="text"
                                            className="input"
                                            placeholder="Write your email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex-column">
                                    <div className="inputForm">
                                        <IoMdLock height={20} width={20} />
                                        <input
                                            value={password}
                                            onChange={onChangePassword}
                                            type="password"
                                            className="input"
                                            required
                                            placeholder="Write a strong password"
                                        />
                                    </div>
                                </div>
                                <div className="flex-column">
                                    <div className="inputForm">
                                        <IoMdLock height={20} width={20} />
                                        <input
                                            value={confirmpassword}
                                            onChange={onChangeconfirmPassword}
                                            type="password"
                                            className="input"
                                            placeholder="Confirm password"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={onSubmit}
                                    type="submit"
                                    className="button-submit"
                                >
                                    Create account
                                </button>
                                <p className="p line">Or sign up with</p>
                                <div className="flex-row">
                                    <button className="btn google">
                                        <FcGoogle />
                                        Google
                                    </button>
                                    {/* <button className="btn facebook">
                                        <PiFacebookLogoBold />
                                        Facebook
                                    </button> */}
                                    <div className="btn">
                                    <FacebookLogin
                                    appId="482943461016292"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                    cssClass="facebook"
                                    textButton="Facebook"
                                    icon={<PiFacebookLogoBold className="me-2" />}/>
                                    </div>

                                </div>
                                <p className="p">Have an Account? <Link to="/login">Log in</Link></p>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </section>
    );
};

export default RegisterPage;
