import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import First from "../../Images/loginbg.webp";
import Second from "../../Images/loginbg2.webp";
import { CiMail } from "react-icons/ci";
import { IoMdLock } from "react-icons/io";
import { TbEyeClosed } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { PiFacebookLogoBold } from "react-icons/pi";
import { FaEye } from "react-icons/fa";
import LoginHook from "../../CustomHooks/Auth/Login-Hook";
import { ToastContainer } from "react-toastify";
import { useGoogleLogin } from '@react-oauth/google';
import Cookie from 'universal-cookie';
import { Fade } from "react-awesome-reveal";
import FacebookLogin from 'react-facebook-login';

const LoginPage = () => {
  const [onSubmit, email, password, loading, onChangeEmail, onChangePassword,] = LoginHook();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const emailRef = useRef(null);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setEmailValid(email !== "");
  }, [email]);

  useEffect(() => {
    setPasswordValid(password !== "");
  }, [password]);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const cookie = new Cookie();
  const loginWithGoogle = useGoogleLogin({
    onSuccess: tokenResponse => {
      cookie.set("Google Token", tokenResponse.access_token);
    },
    onError: error => {
      console.error("Google login error:", error);
    },
  });

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    loginWithGoogle();
  };

  const isLoginButtonDisabled = !emailValid || !passwordValid || loading;
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <section className="login-page" style={{ minHeight: "700px" }}>
      <Helmet>
        <title> Layl | Login </title>
        <meta name="description" content="Login Page" />
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
            <div className="login-form">
              <div className="login-title">
                <h3 className="">Welcome To Layl</h3>
                <p className="my-4">LOG IN</p>
              </div>
              <form className="form" onSubmit={onSubmit}>
                <div className="flex-column">
                  <div className="inputForm">
                    <CiMail height={20} width={20} />
                    <input
                      ref={emailRef}
                      value={email}
                      onChange={onChangeEmail}
                      type="text"
                      className="input"
                      required
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>

                <div className="flex-column">
                  <div className="inputForm">
                    <IoMdLock height={20} width={20} />
                    <input
                      value={password}
                      onChange={onChangePassword}
                      type={showPassword ? "text" : "password"}
                      className="input"
                      required
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
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                      style={{ borderRadius: "5px", verticalAlign: "middle" }}
                    />
                    <label className="ms-1">Remember me</label>
                  </div>
                  <Link to="/forget-password">
                    <span className="span">Forgot password?</span>
                  </Link>
                </div>

                <button
                  type="submit"
                  className="button-submit"
                  disabled={isLoginButtonDisabled}>
                  {loading ? "Logging in..." : "Login"}
                </button>

                <p className="p line">Or log in with</p>
                <div className="flex-row mb-3">
                  <button className="btn google" onClick={handleGoogleLogin}>
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
                      icon={<PiFacebookLogoBold className="me-2" />} />
                  </div>
                </div>
                <p className="p mt-5">Don't have an account? <Link to="/register">Sign Up</Link></p>
              </form>
            </div>
          </Col>

        </Row>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
  <Link
    style={{
      width: "150px",
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "#d2691e",
      border: "2px solid #d2691e",
      borderRadius: "5px",
      marginBottom: "10px",
      fontSize: "16px",
      fontWeight: "bold",
      transition: "background-color 0.3s, color 0.3s",
    }}
    to="/admin/home"
  >
    Admin Home
  </Link>
  
  <Link
    style={{
      width: "150px",
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "#d2691e",
      border: "2px solid #d2691e",
      borderRadius: "5px",
      fontSize: "16px",
      fontWeight: "bold",
      transition: "background-color 0.3s, color 0.3s",
    }}
    to="/users/me"
  >
    User Profile
  </Link>
      </div>




      </Container>
        
      <ToastContainer />
    </section>
  );
};

export default LoginPage;
