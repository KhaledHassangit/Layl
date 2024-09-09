import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
import statics from "../../Images/statics.png"
import { Col, Container, Row } from 'react-bootstrap';

const AdminHome = () => {
    return (
        <main className='mt-5 admin-home admin-bg' dir='rtl' >
            <Container>
                <Row>
                    <Col md="12">
                        <div className='text-container' >
                            <div className='admin-text'>
                                <span className='mb-2 d-block'>المبيعات</span>
                                <div className='d-flex align-items-center'>
                                    <FaArrowUpLong className='ms-1 mb-2' color="#32AF1E" />
                                    <h2>1650 <span>جنية</span></h2>
                                </div>
                            </div>
                            <div className='admin-text'>
                                <span className='mb-2 d-block'>الطلبات</span>
                                <h2>1000 <span>طلب</span></h2>
                            </div>
                            <div className='admin-text'>
                                <span className='mb-2 d-block'>العملاء</span>
                                <h2>3.000 <span>عميل</span></h2>
                            </div>
                            <div className='admin-text'>
                                <span className='mb-2 d-block'>العروض و الخصومات</span>
                                <h2>50 <span>عرض</span></h2>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row >
                    <Col md="12">
                        <div className='statics  '>
                            <div className='box d-flex flex-column justify-content-center'>
                                <p>تفاصيل العائد</p>
                                <img src={statics} alt="statics" />
                                <div className='d-flex justify-content-center gap-5 mt-2'>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span style={{ color: "#07E098" }}>الشهر الحالي</span>
                                        <span>1650 جنية</span>
                                    </div>
                                    <span>|</span>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span style={{ color: "#0095FF" }}>الشهر الماضي</span>
                                        <span>1650 جنية</span>
                                    </div>
                                </div>
                            </div>
                            <div className='box d-flex flex-column justify-content-center'>
                                <p>تفاصيل العائد</p>
                                <img src={statics} alt="statics" />
                                <div className='d-flex justify-content-center gap-5 mt-2'>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span style={{ color: "#07E098" }}>الشهر الحالي</span>
                                        <span>1650 جنية</span>
                                    </div>
                                    <span>|</span>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span style={{ color: "#0095FF" }}>الشهر الماضي</span>
                                        <span>1650 جنية</span>
                                    </div>
                                </div>
                            </div>
                            <div className='box d-flex flex-column justify-content-center'>
                                <p>تفاصيل العائد</p>
                                <img src={statics} alt="statics" />
                                <div className='d-flex justify-content-center gap-5 mt-2'>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span style={{ color: "#07E098" }}>الشهر الحالي</span>
                                        <span>1650 جنية</span>
                                    </div>
                                    <span>|</span>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span style={{ color: "#0095FF" }}>الشهر الماضي</span>
                                        <span>1650 جنية</span>
                                    </div>
                                </div>
                            </div>
                            <div className='box d-flex flex-column justify-content-center'>
                                <p>تفاصيل العائد</p>
                                <img src={statics} alt="statics" />
                                <div className='d-flex justify-content-center gap-5 mt-2'>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span style={{ color: "#07E098" }}>الشهر الحالي</span>
                                        <span>1650 جنية</span>
                                    </div>
                                    <span>|</span>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        <span style={{ color: "#0095FF" }}>الشهر الماضي</span>
                                        <span>1650 جنية</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default AdminHome;
