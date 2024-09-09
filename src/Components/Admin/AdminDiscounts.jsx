import React from "react";
import { Button, Col, Container, Form, Modal, Row, Card } from "react-bootstrap";
import { MdAddBox } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { useDropzone } from "react-dropzone";
import CreateDiscountHook from "../../CustomHooks/Offers/CreateDiscount-Hook";
import GetAllDiscountsHook from "../../CustomHooks/Offers/GetAllDiscounts-Hook";
import Spinner from "../../Utilities/Spinner";
import { ToastContainer } from "react-toastify";
import UpdateDiscountHook from "../../CustomHooks/Offers/UpdateDiscount-Hook";
import { Fade } from "react-awesome-reveal";

const AdminDiscounts = () => {
    const [allDiscounts, handelDeleteDiscount, loading, showModaldelete, handleShowModaldelete, handleCloseModaldelete] = GetAllDiscountsHook();
    const { formData, handleChange, handleSubmit, showModal1, handleShowModal1, handleCloseModal1, SubCategoryResponse } = CreateDiscountHook();
    const [getOneDiscount, OneDiscount, formDataUpdate, handleChangeUpdate, handelUpdateDiscount, showModaledit, handleShowModaledit, handleCloseModaledit] = UpdateDiscountHook()
    const location = useLocation();
    const isActive = (path) => location.pathname === path;


    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            handleChange({ target: { name: 'selectedImage', files: [file] } });
            handleChangeUpdate({ target: { name: 'selectedImage', files: [file] } });
        }
    });

    const renderVoucherCard = (discount,index) => (
        <Col
            xs="12"
            sm="6"
            md="6"
            lg="4"
            xl="3"
            className="mt-3 d-flex justify-content-md-start justify-content-center flex-wrap gap-2"
        >
            <Card
                className="voucher-card"
                style={{
                    maxWidth: "20rem",
                    maxHeight: "450px",
                    borderRadius: "10px",
                }}
            >
                <Fade className='p-1' triggerOnce={true} cascade={false} delay={index * 100}>

                    <Card.Img
                        style={{
                            width: "100%",
                            height: "100%",
                            cursor: "pointer",
                        }}
                        src={`http://localhost:8000${discount.img}` }
                    />
                </Fade>

                <Card.Body className="mb-2 p-2">
                    <div className="d-flex justify-content-between  align-items-center mt-2">
                        <div>
                            <Card.Title style={{ fontSize: "14px" }}>{`نوع الخصم ${discount.discount_type}`}</Card.Title>
                            <Card.Title style={{ fontSize: "14px" }}>{`قيمة الخصم ${discount.discount_value}`}</Card.Title>
                        </div>
                        <div className="">
                            <span className="ms-1">
                                <AiFillEdit
                                    onClick={() => getOneDiscount(discount.id)}
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
                                    onClick={handleShowModaldelete}
                                    style={{
                                        width: "25px",
                                        height: "25px",
                                        cursor: "pointer",
                                        color: "white",
                                    }}
                                />
                            </span>
                            {/* Modal for Delete Confirmation */}
                            <Modal show={showModaldelete} onHide={handleCloseModaldelete}>
                                <Modal.Header closeButton>
                                    <Modal.Title>تأكيد الحذف</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>هل أنت متأكد أنك تريد حذف هذا العرض  ؟</Modal.Body>
                                <Modal.Footer>
                                    <Button  className='btn-save'  onClick={() => handelDeleteDiscount(discount.id)}>
                                        حذف
                                    </Button>
                                    <Button className='btn-cancel'  onClick={handleCloseModaldelete}>
                                        إلغاء
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                        </div>
                    </div>
                    <div className="d-flex flex-column  justify-content-between align-items-start mt-3">
                        <span className="exdate mb-1">تاريخ الإنشاء :{discount.start_date_formatted}</span>
                        <span className="exdate">تاريخ الإنتهاء :{discount.expiry_date_formatted}</span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );

    return (
        <main
            className="mt-5 admin-discounts user-orders admin-bg"
            dir="rtl"
            style={{ maxWidth: "100%", margin: "0 auto" }}
        >
            <Container>
                <div>
                    <Row className="d-flex align-items-center gap-4 justify-content-center p-2">
                        <div className="admin-add-box" onClick={handleShowModal1}>
                            <MdAddBox />
                            <h6>إضافة عرض جديد</h6>
                        </div>
                    </Row>
                    <Row>
                        <div className="filter-buttons flex-wrap mb-2 mt-2 d-flex align-items-center gap-4 justify-content-center">
                            <Link to="/admin/discounts">
                                <button className={isActive("/admin/discounts") ? "active" : ""}>
                                    العروض
                                </button>
                            </Link>
                            <Link to="/admin/vouchers">
                                <button className={isActive("/admin/vouchers") ? "active" : ""}>
                                    قسائم الشراء
                                </button>
                            </Link>
                        </div>
                    </Row>

                    {/* Modal for Add Product Discount */}
                    <Modal show={showModal1} onHide={handleCloseModal1}>
                        <Modal.Header closeButton>
                            <Modal.Title>إضافة عرض </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col xs={12} md={8}>
                                        <Form>
                                            <div className="d-flex gap-3 justify-content-between align-items-center">
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12">
                                                        <div className="date-picker-wrapper">
                                                            <Form.Control
                                                                value={formData.startDateRaw || ''}
                                                                name="startDate"
                                                                onChange={handleChange}
                                                                type="date"
                                                                id="start-date"
                                                                className="date-picker-left"
                                                                required
                                                            />
                                                            <label htmlFor="start-date" className="date-picker-placeholder">
                                                                البدء
                                                            </label>
                                                        </div>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12">
                                                        <div className="date-picker-wrapper">
                                                            <Form.Control
                                                                value={formData.expiryDateRaw || ''}
                                                                name="expiryDate"
                                                                onChange={handleChange}
                                                                type="date"
                                                                id="expiry-date"
                                                                className="date-picker-left"
                                                                required
                                                            />
                                                            <label htmlFor="expiry-date" className="date-picker-placeholder">
                                                                الانتهاء
                                                            </label>
                                                        </div>
                                                    </Col>
                                                </Form.Group>
                                            </div>

                                            <div className="d-flex gap-3 justify-content-between align-items-center">
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12" className="position-relative">
                                                        <Form.Control
                                                            as="select"
                                                            className="custom-select"
                                                            name="discountType"
                                                            value={formData.discountType}
                                                            onChange={handleChange}
                                                        >
                                                            <option value="0">أختر نوع الخصم</option>
                                                            <option value="Percentage">Percentage</option>
                                                            <option value="Value">Value</option>
                                                        </Form.Control>
                                                        <TiArrowSortedDown className="select-arrow-icon" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12">
                                                        <Form.Control
                                                            type="text"
                                                            name="discountValue"
                                                            value={formData.discountValue}
                                                            onChange={handleChange}
                                                            placeholder="أضف قيمة"
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </div>

                                            <Form.Group as={Row} className="mb-3">
                                                <Col sm="12" className="position-relative">
                                                    <Form.Control
                                                        as="select"
                                                        className="custom-select w-100"
                                                        name="subcategory"
                                                        value={formData.subcategory}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">أختر المنتج</option>
                                                        {SubCategoryResponse && SubCategoryResponse.data && Array.isArray(SubCategoryResponse.data) ? (
                                                            SubCategoryResponse.data.map(sub => (
                                                                <option key={sub.id} value={sub.id}>
                                                                    {sub.name}
                                                                </option>
                                                            ))
                                                        ) : (
                                                            <option disabled>Loading...</option>
                                                        )}
                                                    </Form.Control>
                                                    <TiArrowSortedDown className="select-arrow-icon" />
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </Col>
                                    <Col xs={12} md={4} className="d-flex flex-column align-items-center">
                                        <div
                                            {...getRootProps()}
                                            className="d-flex flex-column align-items-center justify-content-center upload-container"
                                        >
                                            <input {...getInputProps()} className="upload-input" />
                                            {formData.selectedImage ? (
                                                <img 
                                                    src={URL.createObjectURL(formData.selectedImage)}
                                                    alt="Selected"
                                                    style={{
                                                        maxHeight: "150px",
                                                        maxWidth: "165px",
                                                        borderRadius: "12px",
                                                    }}
                                                />
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
                            <Button variant="save" onClick={handleSubmit}>حفظ</Button>
                            <Button variant="cancel" onClick={handleCloseModal1}>إلغاء</Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Modal for Edit Product Discount */}
                    <Modal show={showModaledit} onHide={handleCloseModaledit}>
                        <Modal.Header closeButton>
                            <Modal.Title>تعديل العرض</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col xs={12} md={8}>
                                        <Form>
                                            <div className="d-flex gap-3 justify-content-between align-items-center">
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12">
                                                        <div className="date-picker-wrapper">
                                                            <Form.Control
                                                                value={formDataUpdate.start_date ? formDataUpdate.start_date.split('T')[0] : ''}
                                                                name="start_date"
                                                                onChange={handleChangeUpdate}
                                                                type="date"
                                                                id="start-date"
                                                                className="date-picker-left"
                                                                required
                                                            />
                                                            <label htmlFor="start-date" className="date-picker-placeholder">
                                                                البدء
                                                            </label>
                                                        </div>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12">
                                                        <div className="date-picker-wrapper">
                                                            <Form.Control
                                                                value={formDataUpdate.expiry_date ? formDataUpdate.expiry_date.split('T')[0] : ''}
                                                                name="expiry_date"
                                                                onChange={handleChangeUpdate}
                                                                type="date"
                                                                id="expiry-date"
                                                                className="date-picker-left"
                                                                required
                                                            />
                                                            <label htmlFor="expiry-date" className="date-picker-placeholder">
                                                                الانتهاء
                                                            </label>
                                                        </div>
                                                    </Col>
                                                </Form.Group>
                                            </div>

                                            <div className="d-flex gap-3 justify-content-between align-items-center">
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12" className="position-relative">
                                                        <Form.Control
                                                            as="select"
                                                            className="custom-select"
                                                            name="discount_type"
                                                            value={formDataUpdate.discount_type}
                                                            onChange={handleChangeUpdate}
                                                        >
                                                            <option value="0">أختر نوع الخصم</option>
                                                            <option value="Percentage">Percentage</option>
                                                            <option value="Value">Value</option>
                                                        </Form.Control>
                                                        <TiArrowSortedDown className="select-arrow-icon" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12">
                                                        <Form.Control
                                                            type="text"
                                                            name="discount_value"
                                                            value={formDataUpdate.discount_value}
                                                            onChange={handleChangeUpdate}
                                                            placeholder="أضف قيمة"
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </div>

                                            <Form.Group as={Row} className="mb-3">
                                                <Col sm="12" className="position-relative">
                                                    <Form.Control
                                                        as="select"
                                                        className="custom-select w-100"
                                                        name="sub_category"
                                                        value={formDataUpdate.sub_category}
                                                        onChange={handleChangeUpdate}
                                                    >
                                                        <option value="">أختر المنتج</option>
                                                        {SubCategoryResponse && SubCategoryResponse.data && Array.isArray(SubCategoryResponse.data) ? (
                                                            SubCategoryResponse.data.map(sub => (
                                                                <option key={sub.id} value={sub.id}>
                                                                    {sub.name}
                                                                </option>
                                                            ))
                                                        ) : (
                                                            <option disabled>Loading...</option>
                                                        )}
                                                    </Form.Control>
                                                    <TiArrowSortedDown className="select-arrow-icon" />
                                                </Col>
                                            </Form.Group>
                                        </Form>

                                    </Col>
                                    <Col xs={12} md={4} className="d-flex flex-column align-items-center">
                                        <div
                                            {...getRootProps()}
                                            className="d-flex flex-column align-items-center justify-content-center upload-container"
                                        >
                                            <input {...getInputProps()} className="upload-input" name="selectedImage" onChange={handleChangeUpdate} />
                                            {formDataUpdate.selectedImage ? (
                                                <img
                                                    loading='lazy'
                                                    src={
                                                        formDataUpdate.selectedImage instanceof File
                                                            ? URL.createObjectURL(formDataUpdate.selectedImage)
                                                            : formDataUpdate.selectedImage
                                                    }
                                                    alt="Selected"
                                                    style={{
                                                        maxHeight: "150px",
                                                        maxWidth: "165px",
                                                        borderRadius: "12px",
                                                    }}
                                                />
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
                            <Button variant="save" onClick={handelUpdateDiscount}>حفظ</Button>
                            <Button variant="cancel" onClick={handleCloseModaledit}>إلغاء</Button>
                        </Modal.Footer>
                    </Modal>
                    {/* Discounts List */}
                    <Row className="mt-4">
                        {loading ? (
                            <Spinner />
                        ) : allDiscounts.length > 0 ? (
                            <Row className="d-flex justify-content-center flex-wrap  justify-content-md-start">
                                {allDiscounts.map((discount,index) => renderVoucherCard(discount,index))}                            

                            </Row>
                        ) : (
                            <p className="text-center mt-5" >لا يوجد عروض حتي الآن</p>
                        )}
                    </Row>
                </div>
            </Container>
            <ToastContainer />
        </main>
    );
};

export default AdminDiscounts;
