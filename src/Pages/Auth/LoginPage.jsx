    import React, { useState } from "react";
    import { Container , Row, Col } from "react-bootstrap";
    import { Link } from "react-router-dom";
    import { Helmet } from "react-helmet-async";
    import First from "../../Images/loginbg.jpeg";
    import Second from "../../Images/loginbg2.jpeg";
    import { CiMail } from "react-icons/ci";
    import { IoMdLock } from "react-icons/io";
    import { TbEyeClosed } from "react-icons/tb";
    import { FcGoogle } from "react-icons/fc";
    import { PiFacebookLogoBold } from "react-icons/pi";
    import { FaEye } from "react-icons/fa";

    const LoginPage = () => {
        const [showPassword, setShowPassword] = useState(false);
        const [rememberMe, setRememberMe] = useState(false);
        
        const handleRememberMeChange = () => {
            setRememberMe(!rememberMe);
          };
        
        const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
        };
      
    return (
        <section className="login-page" style={{ minHeight: "700px" }}>
        <Helmet>
            <title>Login Page</title>
            <meta name="description" content="Login Page" />
        </Helmet>
        <Container >
            <Row className="login d-fleX justify-content-between gap-0  align-items-center">
            <Col xxl="7" lg="5"  sm="12" md="12">
                <div className="d-flex flex-wrap gap-xl-4 ">
                <div className="imgs-box d-flex flex-column">
                    <img
                    src={Second}
                    width="300px"
                    height="250px"
                    style={{ borderRadius: "12px", marginBottom: "20px" }}
                    />
                    <img
                    src={Second}
                    width="300px"
                    height="250px"
                    style={{ borderRadius: "12px" }}
                    />
                </div>
                <div>
                    <img
                    src={First}
                    width="400px"
                    height="520px"
                    className="full-image"
                    style={{ borderRadius: "12px" }}
                    />
                </div>
                </div>
            </Col>
            <Col xxl="5"   lg="7" sm="12" md="12" className=" d-flex text-center justify-content-center"> 
            <div className="login-form">
        <div className="login-title">
            <h3 className="" >Welcome To Layl</h3>
            <p className="my-4">LOG IN</p>
        </div>
        <form className="form" >
            <div className="flex-column">
            <div className="inputForm">
                <CiMail height={20} width={20} />
                <input
                type="text"
                className="input"
                placeholder="Enter your Email"
                />
            </div>
            </div>

            <div className="flex-column">
      <div className="inputForm">
        <IoMdLock height={20} width={20} />
        <input
          type={showPassword ? "text" : "password"}
          className="input"
          placeholder="Enter your Password"
        />
        {showPassword ? (
          <FaEye  
            className="eye-icon me-2"
            onClick={togglePasswordVisibility}
            height={25}
            width={25}
          />
        ) : (
          <TbEyeClosed 
            className="eye-icon me-2"
            onClick={togglePasswordVisibility}
            height={25}
            width={25}
          />
        )}
      </div>
    </div>



            <div className="flex-row">
            <div>
                <input type="checkbox"
                checked={rememberMe} onChange={handleRememberMeChange}
                 style={{ borderRadius: "5px", verticalAlign: "middle" }} />
                <label className=" ms-1">Remember me</label>
            </div>
            <Link to="/ForgetPassword">
            <span className="span">Forgot password?</span>
            </Link>
            </div>

            <button type="submit" className="button-submit">
            Log In
            </button>

            <p className="p line">Or log in with</p>
            <div className="flex-row mb-3">
            <button className="btn google">
                <FcGoogle />
                Google
            </button>
            <button className="btn facebook">
                <PiFacebookLogoBold />
                Facebook
            </button>
            </div>
            <p className="p mt-5">Don't have an account? <Link  to="/Register" >Sign Up</Link></p>
        </form>
        </div>
            </Col>
            </Row>
        </Container>
        <div className='d-flex justify-content-center align-items-center flex-column'>
                    <Link to="/Admin/Home">
                    Admin
                    </Link>
                    <Link to="/User/Profile">
                    User
                    </Link>
                    </div>
        </section>
    );
    };

    export default LoginPage;
