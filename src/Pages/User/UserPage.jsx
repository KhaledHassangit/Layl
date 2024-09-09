import React from 'react'
import UserInfo from '../../Components/User/UserInfo'
import UserOrders from '../../Components/User/UserOrders'
import {Row} from "react-bootstrap"
import { Helmet } from 'react-helmet-async';

const UserPage = () => {
    return (
        <section className='bg' style={{minHeight:"600px",color:"white"}}>
            <Helmet>
            <title> User Dashboard </title>
            <meta name="description" content="  User Dashboard Page" />
            <link rel="icon" href="/Logo.webp" />

            </Helmet>
            <Row>
                <UserInfo/>
            </Row>
            <Row>
                <UserOrders/>
            </Row>
            </section>
    )
}

export default UserPage