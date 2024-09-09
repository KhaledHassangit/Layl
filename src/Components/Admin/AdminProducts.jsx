import React, { useState } from 'react';
import { Container, Row, Table, Modal, Button, Form, Col } from 'react-bootstrap';
import { AiFillEdit } from 'react-icons/ai';
import { MdAddBox, MdDelete } from 'react-icons/md';
import { TiArrowSortedDown } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FiSearch } from 'react-icons/fi';
import { Fade } from 'react-awesome-reveal';
import AddCategoryHook from '../../CustomHooks/Admin/AddCategory-Hook';
import AddSubCategoryHook from '../../CustomHooks/Admin/AddSubCategory-Hook';
import Spinner from '../../Utilities/Spinner';
import AdminAllProductsHook from '../../CustomHooks/Admin/AdminAllProducts-Hook';

const AdminProducts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [CatName, onchangeName, handelSaveCat, showModal1, handleShow1, handleClose1] = AddCategoryHook();
    const [id, SubCatName, CategoryResponse, onChangeSub, handelChange, handelSaveSub, showModal2, handleShow2, handleClose2] = AddSubCategoryHook();
    const [AllAdminProducts, loading, handelDeleteProduct, showDeleteModal, handleOpenDeleteModal, handleCloseDeleteModal, deleteProductId] = AdminAllProductsHook(searchTerm);

    const calculateTotalQuantity = (colors) => {
        return colors.reduce((total, color) => total + color.quantity, 0);
    };

    return (
        <main className='mt-5 admin-products user-orders admin-bg' dir='rtl' style={{ maxWidth: '100%', margin: '0 auto' }}>
            <Container>
                <div className='orderdetails mt-5'>
                    <Row className='d-flex mb-4 align-items-center gap-4 justify-content-center p-2'>
                        <Link to="/admin/addproduct" className='admin-add-box' style={{ textDecoration: "none" }}>
                            <div className='d-flex align-items-center justify-content-center'>
                                <MdAddBox />
                                <h6>إضافة منتج جديد</h6>
                            </div>
                        </Link>
                        <div className='admin-add-box' onClick={handleShow1}>
                            <MdAddBox />
                            <h6>إضافة فئة جديدة</h6>
                        </div>
                        <div className='admin-add-box' onClick={handleShow2}>
                            <MdAddBox />
                            <h6>إضافة فئة فرعية</h6>
                        </div>
                    </Row>

                    {/* Modal for إضافة فئة جديدة */}
                    <Modal show={showModal1} onHide={handleClose1}>
                        <Modal.Header closeButton>
                            <Modal.Title>إضافة فئة جديدة</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group as={Row} className="mb-3 w-100">
                                <Col sm="12">
                                    <Form.Control
                                        value={CatName}
                                        onChange={onchangeName}
                                        type="text" placeholder="أضف فئة" />
                                </Col>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="save" onClick={handelSaveCat}>
                                حفظ
                            </Button>
                            <Button variant="cancel" onClick={handleClose1}>
                                إلغاء
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Modal for إضافة فئة فرعية */}
                    <Modal show={showModal2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                            <Modal.Title>إضافة فئة فرعية</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="d-flex gap-3 justify-content-between align-items-center" style={{ width: "100%", height: "fit-content" }}>
                                <Form.Group as={Row} className="mb-3 w-100">
                                    <Col sm="12" className="position-relative">
                                        <Form.Control as="select" className="custom-select" onChange={handelChange}>
                                            <option className='custom-option' value={id}>أختر الفئة</option>
                                            {CategoryResponse && Array.isArray(CategoryResponse.data) ? (
                                                CategoryResponse.data.map((item) => (
                                                    <option key={item.id} value={item.id}>{item.name}</option>
                                                ))
                                            ) : (
                                                <Spinner />
                                            )}
                                        </Form.Control>
                                        <TiArrowSortedDown className="select-arrow-icon" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 w-100">
                                    <Col sm="12">
                                        <Form.Control
                                            value={SubCatName}
                                            onChange={onChangeSub}
                                            type="text" placeholder="أضف فئة فرعية" />
                                    </Col>
                                </Form.Group>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="save" onClick={handelSaveSub}>
                                حفظ
                            </Button>
                            <Button variant="cancel" onClick={handleClose2}>
                                إلغاء
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Row>
                        <h4>قائمة المنتجات</h4>
                    </Row>
                    <div className="search-box-container d-flex mb-2 justify-content-start align-items-start flex-grow-1">
                        <input
                            type="text"
                            placeholder="ابحث هنا ...."
                            className="search_box"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FiSearch className="search-icon" />
                    </div>

                    <Table responsive>
                        <thead>
                            <tr className='title'>
                                <th>صورة المنتج</th>
                                <th>اسم المنتج</th> 
                                <th>الفئة</th>
                                <th>الكمية</th> 
                                <th>السعر للتاجر</th>
                                <th>السعر للمستخدم</th>
                                <th>التوصيل</th>
                                <th>الإجراء</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="8" className="text-center"><Spinner /></td>
                                </tr>
                            ) : AllAdminProducts.length === 0 ? (
                                <tr>
                                    <td colSpan="8" className="text-center" style={{ color: '#FFFFFF' }}>لا توجد منتجات</td>
                                </tr>
                            ) : (
                                AllAdminProducts.map((product, index) => (
                                    <tr key={index}>
                                        <td className='image' style={{ verticalAlign: 'middle', padding: '8px' }}>
                                            <Fade className='p-1' triggerOnce={true} cascade={false} delay={index * 100}>
                                                <img loading='lazy' src={product.imgs && product.imgs.length > 0 ? `http://127.0.0.1:8000${product.imgs[0].img}` : null} alt={product.productName} style={{ width: '54px', height: '54px', borderRadius: '10px' }} />
                                            </Fade>
                                        </td>
                                        <td className='productName' style={{ color: '#FFFFFF', fontWeight: '400', verticalAlign: 'middle', padding: '8px' }}>{product.name}</td>
                                        <td className='category' style={{ color: '#FFFFFF', fontWeight: '400', verticalAlign: 'middle', padding: '8px' }}>{product.category}</td>
                                        <td className='quantity' style={{ color: '#FFFFFF', fontWeight: '400', verticalAlign: 'middle', padding: '8px' }}>
                                            {product.colors ? calculateTotalQuantity(product.colors) : 'N/A'}
                                        </td> 
                                        <td className='merchantPrice' style={{ color: '#FFFFFF', fontWeight: '400', verticalAlign: 'middle', padding: '8px' }}>{product.merchant_price}</td>
                                        <td className='userPrice' style={{ color: '#FFFFFF', fontWeight: '400', verticalAlign: 'middle', padding: '8px' }}>{product.new_price.new_price}</td>
                                        <td className='delivery' style={{ color: '#FFFFFF', fontWeight: '400', verticalAlign: 'middle', padding: '8px' }}>
                                            {product.free_shipping ? 'Free' : 'Paid'}
                                        </td>
                                        <td className='action' style={{ color: 'white', verticalAlign: 'middle', padding: '8px' }}>
                                            <Link to={`/admin/editproduct/${product.id}`} style={{ color: "white" }}>
                                                <span className='ms-1 p-1'><AiFillEdit size={20} /></span>
                                            </Link>
                                            <span onClick={() => handleOpenDeleteModal(product.id)}><MdDelete size={20} /></span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </div>
            </Container>

            {/* Modal for deleting product */}
            <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>حذف المنتج</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    هل أنت متأكد أنك تريد حذف هذا المنتج؟
                </Modal.Body>
                <Modal.Footer>
                    <Button  className='btn-save' onClick={() => handelDeleteProduct(deleteProductId)}>
                        حذف
                    </Button>
                    <Button className='btn-cancel' onClick={handleCloseDeleteModal}>
                        إلغاء
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </main>
    );
}

export default AdminProducts;
