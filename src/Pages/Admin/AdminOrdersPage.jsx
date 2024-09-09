import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import AdminSidebar from '../../Components/Admin/AdminSideBar';
import AdminOrders from '../../Components/Admin/AdminOrders';

const AdminOrdersPage = () => {
    return (
    <Container fluid style={{ minHeight: "600px", maxWidth: "100%", margin: "0 auto" }}>
            <Row>
                <Col xs={12} md={12} className="px-0 ">
                    <AdminSidebar />
                </Col>
                <Col xs={12} md={12} className="px-0">
                    <AdminOrders />
                </Col>
            </Row>
        </Container>
    );
}

export default AdminOrdersPage;
