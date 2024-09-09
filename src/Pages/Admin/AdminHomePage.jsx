import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import AdminSidebar from '../../Components/Admin/AdminSideBar';
import AdminHome from '../../Components/Admin/AdminHome';
import { Helmet } from 'react-helmet-async';

const AdminHomePage = () => {
    return (
        <Container fluid style={{ minHeight: "600px", maxWidth: "100%", margin: "0 auto" }} >
            <Helmet>
            <title> Admin Dashboard </title>
            <meta name="description" content="  Admin Dashboard Page" />
            <link rel="icon" href="/Logo.webp" />

            </Helmet>
            <Row>
                <Col xs={12} md={12} className="px-0 ">
                    <AdminSidebar />
                </Col>
                <Col xs={12} md={12} className="px-0">
                    <AdminHome />
                </Col>
            </Row>
        </Container>
    );
}

export default AdminHomePage;
