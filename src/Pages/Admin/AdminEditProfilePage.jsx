import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import AdminSidebar from '../../Components/Admin/AdminSideBar';
import AdminEditProfile from '../../Components/Admin/AdminEditProfile';

const AdminEditProfilePage = () => {
    return (
        <Container fluid style={{ minHeight: "600px" }} >
            <Row>
                <Col xs={12} md={12} className="px-0 ">
                    <AdminSidebar />
                </Col>
                <Col xs={12} md={12} className="px-0">
                    <AdminEditProfile />
                </Col>
            </Row>
        </Container>
    );
}

export default AdminEditProfilePage;
