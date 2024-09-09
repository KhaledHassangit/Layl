import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import AdminSidebar from '../../Components/Admin/AdminSideBar';
import AdminProfile from '../../Components/Admin/AdminProfile';

const AdminProfilePage = () => {
    return (
        <Container fluid style={{ minHeight: "600px" }} >
            <Row>
                <Col xs={12} md={12} className="px-0 ">
                    <AdminSidebar />
                </Col>
                <Col xs={12} md={12} className="px-0">
                    <AdminProfile />
                </Col>
            </Row>
        </Container>
    );
}

export default AdminProfilePage;
