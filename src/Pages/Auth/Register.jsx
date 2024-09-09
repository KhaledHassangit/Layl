import React from "react";
import {Container,Row,Col,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import First from "../../Images/loginbg.jpeg";
import Second from "../../Images/loginbg2.jpeg";
import { CiMail } from "react-icons/ci";
import { IoMdLock } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaRegUser ,FaPhoneAlt } from "react-icons/fa";

const LoginPage = () => {


return (
    <section className="login-page" style={{ minHeight: "700px" }}>
    <Helmet>
        <title>Sign Up </title>
        <meta name="description" content="Sign Up Page" />
    </Helmet>
    <Container>
        <Row className="login d-fleX justify-content-between gap-0  align-items-center">
        <Col  xxl="7" lg="5"  sm="12" md="12">
            <div className="d-flex flex-wrap gap-xl-4 ">
            <div className="imgs-box d-flex flex-column">
                <img
                src={Second}
                width="300px"
                height="250px"
                alt="Login Image"
                style={{ borderRadius: "12px", marginBottom: "20px" }}
                />
                <img
                src={Second}
                width="300px"
                height="250px"
                alt="Login Image"
                style={{ borderRadius: "12px" }}
                />
            </div>
            <div>

                <img
                src={First}
                width="400px"
                height="520px"
                className="full-image"
                alt="Login Image"
                style={{ borderRadius: "12px" }}
                />
            </div>
            </div>
        </Col>

        <Col xxl="5"  lg="7" sm="12" md="12" className=" d-flex text-center justify-content-center">
        <div className="login-form pt-3">
    <div className="login-title">
        <h3 className="" >Welcome To Layl</h3>
        <p className="my-4">CreatE New account</p>
    </div>
    <form className="form" >
        <div className="flex-column">
            <div className="inputForm">
                <FaRegUser height={20} width={20} />
                <input
                type="text"
                className="input"
                placeholder="your name"
                />
            </div>
        </div>
        
        <div className="flex-column">
            <div className="inputForm">
                <CiMail height={20} width={20} />
                <input
                type="text"
                className="input"
                placeholder="Write your email"
                />
            </div>
        </div>

        <div className="flex-column">
            <div className="inputForm">
                <IoMdLock height={20} width={20} />
                <input
                type="password"
                className="input"
                placeholder="Write a strong password"
                />
            </div>
        </div>
        <div className="flex-column">
            <div className="inputForm">
                <IoMdLock height={20} width={20} />
                <input
                type="password"
                className="input"
                placeholder="Confirm password"
                />
            </div>
        </div>

        
        <div className="flex-column">
            <div className="inputForm">
                <FaPhoneAlt height={20} width={20} />
                <input
                type="number"
                className="input"
                placeholder="Phone number"
                />
            </div>
        </div>



        <button type="submit" className="button-submit">
            create account
        </button>

        <p className="p line">Or sign up with</p>
        <div className="flex-row ">
        <button className="btn google">
            <FcGoogle />
            Google
        </button>
        <button className="btn facebook">
            <PiFacebookLogoBold />
            Facebook
        </button>
        </div>
        <p className="p">Have an Account? <Link  to="/Login" >Log in</Link></p>
    </form>
    </div>
        </Col>
        </Row>
    </Container>
    </section>
);
};

export default LoginPage;
