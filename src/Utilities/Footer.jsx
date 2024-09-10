import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../Images/Logo.webp";
import Orange from "../Images/orange.web.webp";
import Vodafone from "../Images/vodafone.web.webp";
import Etisalat from "../Images/eisalat.web.webp";
import Cookie from 'universal-cookie';
import { Fade } from "react-awesome-reveal";

const Footer = () => {
    const navigate = useNavigate();
    const getUserData = () => {
        const cookie = new Cookie();
        const userData = cookie.get('UserData');
        return userData;
    };

    const userData = getUserData();

    const handleNavigation = (path) => {
        if (userData) {
            if (userData.is_superuser) {
                navigate('/admin/home');
            } else {
                navigate('/users/me');
            }
        } else {
            navigate(path);
        }
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <footer className="footer">
            <Container className="text-center">
                <Row className="d-flex justify-content-between align-items-center ">
                    <Col md="12" className="d-flex justify-content-start align-items-start flex-wrap w-100">
                        <Col md="12" lg="2" sm="12" xs="12">
                            <Fade triggerOnce={true}>

                                <div className="logo-img footer-logo ">
                                    <img alt="logo" src={Logo} className="Logo " />
                                </div>
                            </Fade>

                        </Col>

                        <Col md="6" lg="2" sm="6" xs="6">
                            <div className="links mb-5">
                                <h2>LAYEL - ليل </h2>
                                <ul>
                                    <li>
                                        <Link to="/products">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/products">Categories</Link>
                                    </li>
                                    <li onClick={() => scrollToSection('About-us')}>
                                        <Link to="#">About Us</Link>
                                    </li>
                                    <li onClick={() => scrollToSection('Contact-us')}>
                                        <Link to="#">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>


                        <Col md="6" lg="2" sm="6" xs="6">
                            <div className="links mb-5">
                                <h2>Social</h2>
                                <ul>
                                    <li>
                                        <Link target='blank' to="/">Facebook</Link>
                                    </li>
                                    <li>
                                        <Link target='blank' to="/">TikTok</Link>
                                    </li>
                                    <li>
                                        <Link target='blank' to="/">Instagram</Link>
                                    </li>
                                    <li>
                                        <Link target='blank' rel="noopener noreferrer" to="https://api.whatsapp.com/send/?phone=201004039735&text&type=phone_number&app_absent=0">WhatsApp</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="6" lg="2" sm="6" xs="6">
                            <div className="links">
                                <h2>Best Seals</h2>
                                <ul>
                                    <li onClick={() => scrollToSection('top-selling')}>
                                        <Link to="#">Top Selling</Link>
                                    </li>
                                    <li>
                                        <Link to="/products">New Arrivals</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="6" lg="2" sm="6" xs="6">
                            <div className="links">
                                <h2>My Account</h2>
                                <ul>
                                    <li>
                                        <Link onClick={() => handleNavigation('/login')}>Sign in</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => handleNavigation('/register')}>Create account</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>


                        <Col md="6" lg="2" sm="6" xs="6" style={{ margin: "0px auto" }}>
                            <div className="links mt-0">
                                <p>
                                    Join To Layl <br /><span>GET 10% OFF</span><br /> YOUR FRIST ORDER
                                </p>
                                <button onClick={() => handleNavigation('/register')}>Sign up</button>
                            </div>
                        </Col>
                    </Col>

                    <hr />

                    <Row className="d-flex justify-content-between main align-items-center pt-4 pb-3 w-100 h-100">
                        <Col md="6">
                            <Fade cascade damping={0.3} triggerOnce={true}>

                            <div className="skillzy d-flex flex-column">
                                    <h2>Powered by ©  <a href="https://portfolio-khaled-theta.vercel.app/" target="blank">Khaled Hassan</a></h2>
                                    {/* <ul className="d-flex">
                                        <li><Link to="#">Facebook</Link></li>
                                        <li><Link to="#">Instagram</Link></li>
                                        <li><Link to="#">LinkedIn</Link></li>
                                    </ul> */}
                                </div>

                            </Fade>

                        </Col>
                        <Col md="6">
                            <Fade cascade damping={0.3} triggerOnce={true}>

                                <div className="payment-methods">
                                    <ul className="d-flex justify-content-end cash-logos">
                                        <li><img alt="" src={Orange} width="50" height="50" loading="lazy" /></li>
                                        <li><img alt="" src={Vodafone} width="50" height="50" loading="lazy" /></li>
                                        <li><img alt="" src={Etisalat} width="50" height="50" loading="lazy" /></li>
                                    </ul>
                                </div>
                            </Fade>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer
