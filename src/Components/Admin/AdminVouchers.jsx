import React from "react";
import { Button, Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
import { MdAddBox } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import CreateCouponHook from "../../CustomHooks/Offers/CreateCoupon-Hook";
import { ToastContainer } from "react-toastify";
import GetAllCouponsHook from "../../CustomHooks/Offers/GetAllCoupons-Hook";
import Spinner from "../../Utilities/Spinner";
import UpdateCouponHook from "../../CustomHooks/Offers/UpdateCoupon-Hook";

const AdminVouchers = () => {
    const [allCoupons, loading, handelDeleteCoupon, showModaldelete, handleShowModaldelete, handleCloseModaldelete] = GetAllCouponsHook()
    const { formData, handleChange, handleSubmit, showModal2, handleCloseModal2, handleShowModal2 } = CreateCouponHook();
    const [getOneCoupon, OneCoupon, formDataUpdate, handleChangeUpdate,handelUpdateCoupon, showModaledit, handleShowModaledit, handleCloseModaledit] = UpdateCouponHook()
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <main
            className="mt-5 admin-discounts  user-orders admin-bg"
            dir="rtl"
            style={{  maxWidth: "100%", margin: "0 auto" }}
        >
            <Container>
                <div>
                    <Row className="d-flex align-items-center  gap-4 justify-content-center p-2">
                        <div className="admin-add-box" onClick={handleShowModal2}>
                            <MdAddBox />
                            <h6>إضافة  قسيمة شراء</h6>
                        </div>

                    </Row>

                    {/* Modal for Create Coupon */}
                    <Modal show={showModal2} onHide={handleCloseModal2}>
                        <Modal.Header closeButton>
                            <Modal.Title> إضافة قسيمة شراء </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row>
                                    <Col xs={12} md={12}>
                                        <Form >
                                            <Form.Group as={Row} className="mb-3">
                                                <Col sm="12">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder=" كود القسيمة"
                                                        name="code"
                                                        value={formData.code}
                                                        onChange={handleChange}
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <div className="d-flex gap-3 justify-content-between align-items-center">
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12">
                                                        <div className="date-picker-wrapper">
                                                            <Form.Control
                                                                name="start_date"
                                                                value={formData.start_date.split('T')[0]}
                                                                onChange={handleChange}
                                                                type="date"
                                                                className="date-picker-left"
                                                                required
                                                            />
                                                            <label htmlFor="start_date" className="date-picker-placeholder">
                                                                تاريخ البدء
                                                            </label>
                                                        </div>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12">
                                                        <div className="date-picker-wrapper">
                                                            <Form.Control
                                                                name="expiry_date"
                                                                value={formData.expiry_date.split('T')[0]}
                                                                onChange={handleChange}
                                                                type="date"
                                                                className="date-picker-left"
                                                                required
                                                            />
                                                            <label htmlFor="expiry_date" className="date-picker-placeholder">
                                                                تاريخ الانتهاء
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
                                                            value={formData.discount_type}
                                                            onChange={handleChange}>
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
                                                            placeholder=" أضف قيمة"
                                                            name="discount_value"
                                                            value={formData.discount_value}
                                                            onChange={handleChange}
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </div>

                                            <Form.Group as={Row} className="mb-3">
                                                <Col sm="12">
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="عدد المستخدمين"
                                                        name="users_limit"
                                                        value={formData.users_limit}
                                                        onChange={handleChange}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Modal.Footer>
                                                <Button variant="save" onClick={handleSubmit} type="submit">حفظ</Button>
                                                <Button variant="cancel" onClick={handleCloseModal2}>إلغاء</Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>

                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>

                    {/* Modal for Edit Coupon */}

                    {/* Modal for Edit Coupon */}
                    {/* Modal for Edit Coupon */}
                    <Modal show={showModaledit} onHide={handleCloseModaledit}>
                        <Modal.Header closeButton>
                            <Modal.Title>تعديل قسيمة شراء</Modal.Title>
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
                                                        placeholder="كود القسيمة"
                                                        name="code"
                                                        value={formDataUpdate.code}
                                                        onChange={handleChangeUpdate}
                                                    />
                                                </Col>
                                            </Form.Group>

                                            <div className="d-flex gap-3 justify-content-between align-items-center">
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12">
                                                        <div className="date-picker-wrapper">
                                                            <Form.Control
                                                                name="start_date"
                                                                value={formDataUpdate.start_date.split('T')[0]}
                                                                onChange={handleChangeUpdate}
                                                                type="date"
                                                                className="date-picker-left"
                                                                required
                                                            />
                                                            <label htmlFor="start_date" className="date-picker-placeholder">
                                                                تاريخ البدء
                                                            </label>
                                                        </div>
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3 w-100">
                                                    <Col sm="12">
                                                        <div className="date-picker-wrapper">
                                                            <Form.Control
                                                                name="expiry_date"
                                                                value={formDataUpdate.expiry_date.split('T')[0]}
                                                                onChange={handleChangeUpdate}
                                                                type="date"
                                                                className="date-picker-left"
                                                                required
                                                            />
                                                            <label htmlFor="expiry_date" className="date-picker-placeholder">
                                                                تاريخ الانتهاء
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
                                                            onChange={handleChangeUpdate}>
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
                                                            placeholder=" أضف قيمة"
                                                            name="discount_value"
                                                            value={formDataUpdate.discount_value}
                                                            onChange={handleChangeUpdate}
                                                        />
                                                    </Col>
                                                </Form.Group>
                                            </div>

                                            <Form.Group as={Row} className="mb-3">
                                                <Col sm="12">
                                                    <Form.Control
                                                        type="number"
                                                        placeholder="عدد المستخدمين"
                                                        name="users_limit"
                                                        value={formDataUpdate.users_limit}
                                                        onChange={handleChangeUpdate}
                                                    />
                                                </Col>
                                            </Form.Group>
                                            <Modal.Footer>
                                                <Button variant="save" onClick={handelUpdateCoupon} type="submit">حفظ</Button>
                                                <Button variant="cancel" onClick={handleCloseModaledit}>إلغاء</Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>


                </div>

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
                <Table responsive>
                    <thead>
                        <tr className="title">
                            <th> اسم الكود </th>
                            <th> تاريخ البدء </th>
                            <th>تاريخ الانتهاء </th>
                            <th> نوع الخصم </th>
                            <th>القيمة السعرية</th>
                            <th>المستخدمين </th>
                            <th>الإجراء</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="8" className="text-center">
                                    <Spinner />
                                    <br />
                                    <span>جاري التحميل...</span>
                                </td>
                            </tr>
                        ) : allCoupons && allCoupons.length > 0 ? (
                            allCoupons.map((coupon, index) => (
                                <tr key={index}>
                                    <td
                                        className="email"
                                        style={{ color: "#FFFFFF", fontWeight: "700" }}
                                    >
                                        {coupon.code}
                                    </td>
                                    <td
                                        className="phone"
                                        style={{ color: "#FFFFFF", fontWeight: "700" }}
                                    >
                                        {coupon.start_date_formatted}
                                    </td>
                                    <td
                                        className="name"
                                        style={{ color: "#FFFFFF", fontWeight: "700" }}
                                    >
                                        {coupon.expiry_date_formatted}
                                    </td>
                                    <td
                                        className="adress"
                                        style={{ color: "#FFFFFF", fontWeight: "700" }}
                                    >
                                        {coupon.discount_type}
                                    </td>
                                    <td
                                        className="adress"
                                        style={{ color: "#FFFFFF", fontWeight: "700" }}
                                    >
                                        {coupon.discount_value}
                                    </td>
                                    <td
                                        className="state"
                                        style={{ color: "#FFFFFF", fontWeight: "700" }}
                                    >
                                        {coupon.users_limit}
                                    </td>

                                    <td className="action" style={{ color: "white" }} >
                                        <span className="ms-1 p-1">
                                            <AiFillEdit
                                                onClick={() => getOneCoupon(coupon.id)}
                                                style={{
                                                    width: "20px",
                                                    height: "20px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </span>
                                        <span className="me-1 p-1" onClick={handleShowModaldelete}>
                                            <MdDelete
                                                style={{
                                                    width: "20px",
                                                    height: "20px",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </span>
                                        {/* Modal for Delete Confirmation */}
                                        <Modal show={showModaldelete} onHide={handleCloseModaldelete}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>تأكيد الحذف</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>هل أنت متأكد أنك تريد حذف هذا الكوبون ؟</Modal.Body>
                                            <Modal.Footer>
                                                <Button   className='btn-save' onClick={() => handelDeleteCoupon(coupon.id)}>
                                                    حذف
                                                </Button>
                                                <Button  className='btn-cancel' onClick={handleCloseModaldelete}>
                                                    إلغاء
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center" style={{ color: "white" }}>
                                    لا يوجد كوبونات حتي الآن
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
            <ToastContainer />
        </main>
    );
};

export default AdminVouchers;
