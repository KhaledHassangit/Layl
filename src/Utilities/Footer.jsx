import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../Images/Logo.webp";
import Orange from "../Images/orange.web.webp"
import Vodafone from "../Images/vodafone.web.webp"
import Etisalat from "../Images/eisalat.web.webp"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="text-center">
                <Row className="d-flex justify-content-between align-items-center ">
                    <Col md="12" className="d-flex justify-content-start align-items-start flex-wrap w-100">

                        <Col md="12" lg="2" sm="12" xs="12">
                            <div className="logo-img footer-logo ">
                                <img alt="logo" src={Logo} className="Logo " />
                            </div>
                        </Col>

                        <Col md="6" lg="2" sm="6" xs="6">
                            <div className="links mb-5">
                                <h2>LAYEL - ليل </h2>
                                <ul>
                                    <li style={{ cursor: "pointer" }}>
                                        <Link  >
                                            Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Categories
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col md="6" lg="2" sm="6" xs="6">
                            <div className="links">
                                <h2>My Account</h2>
                                <ul>
                                    <li style={{ cursor: "pinte" }}>
                                        <Link  >
                                            Sign in
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Create account
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col md="6" lg="2" sm="6" xs="6">
                            <div className="links">
                                <h2>
                                    Best Seals
                                </h2>
                                <ul>
                                    <li>
                                        <Link>
                                            Top Selling
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            New Arrivals
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md="6" lg="2" sm="6" xs="6">
                            <div className="links mb-5">
                                <h2>Social</h2>
                                <ul>
                                    <li>
                                        <Link>
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            TikTok
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Instagram</Link>
                                    </li>
                                    <li>
                                        <Link>
                                            WhatsApp
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>



                        <Col md="6" lg="2" sm="6" xs="6" style={{ margin: "0px auto" }}>
                            <div className="links mt-0">
                                <p>
                                    Join To Layl <br /><span>GET 10% OFF</span><br /> YOUR FRIST ORDER
                                </p>
                                <button>Sign up</button>
                            </div>
                        </Col>

                    </Col>

                    <hr />

                    <Row className="d-flex justify-content-between main  align-items-center pt-4 pb-3 w-100 h-100">
                        <Col md="6">
                            <div className="skillzy d-flex flex-column  ">
                                <h2>
                                    Powered by © 2024 Skillzy
                                </h2>
                                <ul className="d-flex ">
                                    <li>
                                        <Link>
                                            Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </Col>
                        <Col md="6">
                            <div className="payment-methods">
                                <ul className=" d-flex justify-content-end  cash-logos ">
                                    <li>
                                        <img alt="" src={Orange} width="50" height="50" />
                                    </li>
                                    <li>
                                        <img alt="" src={Vodafone} width="50" height="50" />
                                    </li>
                                    <li>
                                        <img alt="" src={Etisalat} width="50" height="50" />
                                    </li>
                                </ul>
                            </div>
                        </Col>

                    </Row>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
