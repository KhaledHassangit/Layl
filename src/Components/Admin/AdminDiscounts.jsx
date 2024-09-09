import React, { useState, useCallback } from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    Modal,
    Row,
    Card,
} from "react-bootstrap";
import { MdAddBox } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import voucherimg from "../../Images/Voucher.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { useDropzone } from 'react-dropzone';

const AdminDiscounts = () => {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleShowModal1 = () => setShowModal1(true);
    const handleCloseModal1 = () => setShowModal1(false);

    const handleShowModal2 = () => setShowModal2(true);
    const handleCloseModal2 = () => setShowModal2(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const options = ['اختر القيمة', 'Option 1', 'Option 2', 'Option 3'];
    const [selectedImage, setSelectedImage] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

    const renderVoucherCard = () => (
        <Col
            xs="12"
            sm="6"
            md="6"
            lg="4"
            xl="3"
            className="mt-3 d-flex justify-content-center   align-items -center flex-wrap gap-2"
        >
            <Card
                className="voucher-card"
                style={{
                    maxWidth: "20rem",
                    maxHeight: "450px",
                    borderRadius: "10px",
                }}
            >
                <Card.Img
                    style={{
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                    }}
                    src={voucherimg}
                />
                <Card.Body className="mb-2 p-2">
                    <div className="d-flex justify-content-between align-items-center mt-2">
                        <Card.Title>عرض عيد الام</Card.Title>
                        <div className="">
                            <span className="ms-1">
                                <AiFillEdit
                                    style={{
                                        width: "25px",
                                        height: "25px",
                                        cursor: "pointer",
                                        color: "white",
                                    }}
                                />
                            </span>
                            <span className="me-1">
                                <MdDelete
                                    style={{
                                        width: "25px",
                                        height: "25px",
                                        cursor: "pointer",
                                        color: "white",
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        {/* <span className="clients">100 عميل</span> */}
                        <span className="exdate">25/4/2024</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );

    return (
        <main
            className="mt-5 admin-discounts user-orders admin-bg"
            dir="rtl"
            style={{ minHeight: "700px", maxWidth: "100%", margin: "0 auto" }}
        >
            <Container>
                <div>
                    <Row className="d-flex  align-items-center gap-4 justify-content-center p-2">
                        <div className="admin-add-box" onClick={handleShowModal1}>
                            <MdAddBox />
                            <h6>أضافة عرض جديد</h6>
                        </div>
                        <div className="admin-add-box" onClick={handleShowModal2}>
                            <MdAddBox />
                            <h6>أضافة قسيمة شراء</h6>
                        </div>
                    </Row>
                    {/* Modal for the first add-box */}
                    <Modal show={showModal1} onHide={handleCloseModal1}>
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
                                                        <Form.Control as="select" className="custom-select"
                                                            onfocus='this.size=10;' onblur='this.size=0;' onchange='this.size=1; this.blur();'>
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
                                    <Col xs={12} md={4} className="d-flex flex-column align-items-center">
                                        <div
                                            {...getRootProps()}
                                            className="d-flex flex-column align-items-center justify-content-center upload-container">
                                            <input {...getInputProps()} className="upload-input" />
                                            {selectedImage ? (
                                                <img src={selectedImage} alt="Selected" style={{ maxHeight: '150px', maxWidth: '165px',borderRadius:"12px" }} />
                                            ) : (
                                                <>
                                                    <MdAddBox size={30} className="add-icon" />
                                                    <label htmlFor="fileUpload" className="upload-label">
                                                        اضغط هنا لاضافة صورة
                                                    </label>
                                                </>
                                            )}
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
                                                        <div className="date-picker-wrapper">
                                                            <Form.Control
                                                                type="date"
                                                                id="date"
                                                                className="date-picker-left"
                                                                required
                                                            />
                                                            <label
                                                                htmlFor="date"
                                                                className="date-picker-placeholder"
                                                            >
                                                                تاريخ البدء                                    </label>
                                                        </div>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12">
                                                        <div className="date-picker-wrapper">
                                                            <Form.Control
                                                                type="date"
                                                                id="date"
                                                                className="date-picker-left"
                                                                required
                                                            />
                                                            <label
                                                                htmlFor="date"
                                                                className="date-picker-placeholder"
                                                            >
                                                                تاريخ الانتهاء
                                                            </label>
                                                        </div>
                                                    </Col>
                                                </Form.Group>
                                            </div>

                                            <div className="d-flex   gap-3 justify-content-between align-items-center">
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12" className="position-relative">
                                                        <Form.Control as="select" className="custom-select">
                                                            {options.map((option, index) => (
                                                                <option key={index} selected={index === 0}>{option}</option>
                                                            ))}
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
                                            <Form.Group as={Row} className="mb-3 ">
                                                <Col sm="12">
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
                <Row>
                    {Array.from({ length: 12 }).map((_, idx) => (
                        <React.Fragment key={idx}>{renderVoucherCard()}</React.Fragment>
                    ))}
                </Row>
            </Container>
        </main>
    );
};

export default AdminDiscounts;
