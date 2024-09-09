import React, { useState } from "react";
import { Button,Col,Container,Form,Modal,Row,Table} from "react-bootstrap";
import { MdAddBox } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";

const AdminVouchers = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const orders = [
        {
            couponName: "DISCOUNT2024",
            startDate: "01/01/2024",
            expDate: "31/01/2024",
            value: "100 جنية",
            nousers: "150 مستخدم",
        },
        {
            couponName: "SALESPRING",
            startDate: "01/03/2024",
            expDate: "31/03/2024",
            value: "100 جنية",
            nousers: "150 مستخدم",
        },
        {
            couponName: "SUMMERSALE",
            startDate: "01/06/2024",
            expDate: "30/06/2024",
            value: "100 جنية",
            nousers: "150 مستخدم",
        },
        {
            couponName: "AUTUMNDEAL",
            startDate: "01/09/2024",
            expDate: "30/09/2024",
            value: "100 جنية",
            nousers: "150 مستخدم",
        },
        {
            couponName: "WINTERDISCOUNT",
            startDate: "01/12/2024",
            expDate: "31/12/2024",
            value: "100 جنية",
            nousers: "150 مستخدم",
        },
    ];

    return (
        <main
        className="mt-5 admin-discounts  user-orders admin-bg"
        dir="rtl"
        style={{ minHeight: "700px", maxWidth: "100%", margin: "0 auto" }}
        >
        <Container>
            <div>
            <Row className="d-flex align-items-center  gap-4 justify-content-center p-2">
                <div className="admin-add-box" onClick={handleShowModal2}>
                <MdAddBox />
                <h6>أضافة قسيمة شراء</h6>
                </div>
                <div className="admin-add-box" onClick={handleShowModal1}>
                <MdAddBox />
                <h6>أضافة عرض جديد</h6>
                </div>
            </Row>
            {/* Modal for the second add-box */}
            <Modal show={showModal2} onHide={handleCloseModal2}>
                <Modal.Header closeButton>
                <Modal.Title> إضافة قسيمة شراء </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container>
                    <Row>
                    <Col xs={12} md={12}>
                        <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm="12">
                            <Form.Control
                                type="text"
                                placeholder=" كود القسيمة"
                            />
                            </Col>
                        </Form.Group>

                        <div className="d-flex   gap-3 justify-content-between align-items-center">
                            <Form.Group as={Row} className="mb-3 w-100">
                            <Col sm="12">
                                <Form.Control
                                type="date"
                                dir="ltr"
                                placeholder="تاريخ البدء"
                                className="date-picker-left"
                                />
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3 w-100">
                            <Col sm="12">
                                <Form.Control
                                type="date"
                                placeholder="تاريخ الانتهاء"
                                className="date-picker-left"
                                />
                            </Col>
                            </Form.Group>
                        </div>

                        <div className="d-flex   gap-3 justify-content-between align-items-center">
                            <Form.Group as={Row} className="mb-3 w-100">
                            <Col sm="12" className="position-relative">
                                <Form.Control as="select" className="custom-select">
                                <option>اختر القيمة</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                </Form.Control>
                                <TiArrowSortedDown className="select-arrow-icon" />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 w-100">
                            <Col sm="12">
                                <Form.Control type="text" placeholder=" أضف قيمة" />
                            </Col>
                            </Form.Group>
                        </div>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm="12" >
                            <Form.Control
                                type="number"
                                placeholder="عدد المستخدمين"
                            />
                            </Col>
                        </Form.Group>
                        </Form>
                    </Col>
                    </Row>
                </Container>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="save">حفظ </Button>
                <Button variant="cancel" onClick={handleCloseModal2}>
                    إلغاء
                </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal for the first add-box */}
            <Modal show={showModal1} onHide={handleCloseModal1} className="catgory-modal">
                <Modal.Header closeButton>
                <Modal.Title>إضافة عرض </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Container>
                    <Row>
                    <Col xs={12} md={8}>
                        <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm="12">
                            <Form.Control type="text" placeholder="اسم العرض" />
                            </Col>
                        </Form.Group>

                        <div className="d-flex   gap-3 justify-content-between align-items-center">
                            <Form.Group as={Row} className="mb-3 w-100">
                            <Col sm="12">
                                <Form.Control
                                type="date"
                                dir="ltr"
                                placeholder="تاريخ البدء"
                                className="date-picker-left"
                                />
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3 w-100">
                            <Col sm="12">
                                <Form.Control
                                type="date"
                                placeholder="تاريخ الانتهاء"
                                className="date-picker-left"
                                />
                            </Col>
                            </Form.Group>
                        </div>

                        <div className="d-flex   gap-3 justify-content-between align-items-center">
                            <Form.Group as={Row} className="mb-3 w-100">
                            <Col sm="12" className="position-relative">
                                <Form.Control as="select" className="custom-select">
                                <option>اختر القيمة</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                </Form.Control>
                                <TiArrowSortedDown className="select-arrow-icon" />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 w-100">
                            <Col sm="12">
                                <Form.Control type="text" placeholder=" أضف قيمة" />
                            </Col>
                            </Form.Group>
                        </div>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm="12" className="position-relative">
                            <Form.Control
                                as="select"
                                className="custom-select  w-100"
                            >
                                <option>اختر المنتج</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </Form.Control>
                            <TiArrowSortedDown className="select-arrow-icon" />
                            </Col>
                        </Form.Group>
                        </Form>
                    </Col>
                    <Col
                        xs={12}
                        md={4}
                        className="d-flex flex-column align-items-center"
                    >
                        <div className="d-flex flex-column align-items-center justify-content-center upload-container">
                        <MdAddBox size={30} className="add-icon" />
                        <input
                            type="file"
                            className="upload-input"
                            placeholder="اضغط هنا لاضافة صورة"
                        />
                        <label htmlFor="fileUpload" className="upload-label">
                            اضغط هنا لاضافة صورة
                        </label>
                        </div>
                    </Col>
                    </Row>
                </Container>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="save">حفظ </Button>
                <Button variant="cancel" onClick={handleCloseModal1}>
                    إلغاء
                </Button>
                </Modal.Footer>
            </Modal>

            </div>

            <Row>
            <div className="filter-buttons flex-wrap mb-2 mt-2 d-flex align-items-center gap-4 justify-content-center">
                <Link to="/Admin/Discounts">
                <button className={isActive("/Admin/Discounts") ? "active" : ""}>
                    العروض
                </button>
                </Link>
                <Link to="/Admin/Vouchers">
                <button className={isActive("/Admin/Vouchers") ? "active" : ""}>
                    قسائم الشراء
                </button>
                </Link>
            </div>
            </Row>
            <Table responsive>
            <thead>
                <tr className="title">
                <th> أسم الكود </th>
                <th> تاريخ البدء </th>
                <th>تاريخ الانتهاء </th>
                <th>القيمة السعرية</th>
                <th>المستخدمين </th>
                <th>الإجراء</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => (
                <tr key={index}>
                    <td
                    className="email"
                    style={{ color: "#FFFFFF", fontWeight: "700" }}
                    >
                    {order.couponName}
                    </td>
                    <td
                    className="phone"
                    style={{ color: "#FFFFFF", fontWeight: "700" }}
                    >
                    {order.startDate}
                    </td>
                    <td
                    className="name"
                    style={{ color: "#FFFFFF", fontWeight: "700" }}
                    >
                    {order.expDate}
                    </td>
                    <td
                    className="adress"
                    style={{ color: "#FFFFFF", fontWeight: "700" }}
                    >
                    {order.value}
                    </td>
                    <td
                    className="state"
                    style={{ color: "#FFFFFF", fontWeight: "700" }}
                    >
                    {order.nousers}
                    </td>
                    <td className="action" style={{ color: "white" }}>
                    <span className="ms-1 p-1">
                        <AiFillEdit
                        style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                        }}
                        />
                    </span>
                    <span className="me-1 p-1">
                        <MdDelete
                        style={{
                            width: "20px",
                            height: "20px",
                            cursor: "pointer",
                        }}
                        />
                    </span>
                    </td>
                </tr>
                ))}
            </tbody>
            </Table>
        </Container>
        </main>
    );
};

export default AdminVouchers;
