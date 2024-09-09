import React from 'react'
import {Container , Col ,Row} from "react-bootstrap"
import { Helmet } from 'react-helmet-async';
import { CiMail } from "react-icons/ci";


const ForgetPassword = () => {
    return (
        <section style={{minHeight:"630px"}} className='forgetp bg text-center d-flex justify-content-center align-items-center'>
            <Helmet>
            <title> Layl </title>
            <meta name="description" content=" Forget Password Page" />
            </Helmet>
            <Container >
                <Row>
                    <Col md="12">
                        <div className='forget-title'>
                            <h3>Forget Password!</h3>
                            <p>put your email to send a New code</p>
                        </div>
                        <div  className="flex-column d-flex justify-content-center align-items-center  text-center">
                            <div className="inputForm " >
                            <CiMail height={20} width={20} color='white' />
                            <input
                            style={{background:"transparent"}}
                            type="text"
                            className="input"
                            placeholder="Enter your Email"
                            />
                            </div>
                        </div>
                        <button type="submit" className="button-send">
                        Send
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ForgetPassword
