import React from 'react'
import {Container ,Row , Col} from "react-bootstrap"
import { CiEdit } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

const UserInfo = () => {
    return (
        <section className='account-info mt-5'>
            <Container>
                <Row>
                    <Col md="12" className='text-center'>
                        <div className='mb-4'>
                            <h2>My Account</h2>
                        </div>
                        <div className='user-image'>
                            <h1>K</h1>
                        </div>
                        <div className='user-buttons'>
                            <button><CiEdit  /> Edit Info</button>

                            <button><IoMdMail />Messages</button>

                            <button>Switch to buyer </button>
                        </div>
                        <div className='user-profile '>
                           <div className='d-flex justify-content-center mt-3 user-info '>
                           <ul  className='d-flex flex-column align-items-start me-md-5 '>
                            <li>Name:</li>
                            <li>Email Address:</li>
                            <li>Password:</li>
                            <li>Address:</li>
                            <li>Phone Number:</li>
                            </ul>
                            <ul className='data d-flex flex-column  align-items-start' >
                            <li id="username">User Name</li>
                            <li id="email">User145263@gmail.com</li>
                            <li id="password">**********</li>
                            <li id="address">User Address</li>
                            <li id="phone">Your Number</li>
                            </ul>
                           </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default UserInfo
