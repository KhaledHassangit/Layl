import React, { useState } from 'react';
import { Container, Row, Table  , Modal ,Button , Form ,Col} from 'react-bootstrap';
import { AiFillEdit } from 'react-icons/ai';
import { MdAddBox, MdDelete } from 'react-icons/md';
import img1 from '../../Images/img11.jpeg';
import { TiArrowSortedDown } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const AdminProducts = () => {

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);

    const handleClose1 = () => setShowModal1(false);
    const handleShow1 = () => setShowModal1(true);

    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    const products = [
        { image: img1, productName: 'ايجي بوكس', category: 'شنطة ظهر', merchantPrice: '500 جنيه', userPrice: '500 جنيه', delivery: 'مجاني' },
        { image: img1, productName: 'ايجي بوكس', category: 'شنطة ظهر', merchantPrice: '500 جنيه', userPrice: '500 جنيه', delivery: 'مجاني' },
        { image: img1, productName: 'ايجي بوكس', category: 'شنطة ظهر', merchantPrice: '500 جنيه', userPrice: '500 جنيه', delivery: 'مجاني' },
        { image: img1, productName: 'ايجي بوكس', category: 'شنطة ظهر', merchantPrice: '500 جنيه', userPrice: '500 جنيه', delivery: 'مجاني' },
        { image: img1, productName: 'ايجي بوكس', category: 'شنطة ظهر', merchantPrice: '500 جنيه', userPrice: '500 جنيه', delivery: 'مجاني' },
        { image: img1, productName: 'ايجي بوكس', category: 'شنطة ظهر', merchantPrice: '500 جنيه', userPrice: '500 جنيه', delivery: 'مجاني' },
        { image: img1, productName: 'ايجي بوكس', category: 'شنطة ظهر', merchantPrice: '500 جنيه', userPrice: '500 جنيه', delivery: 'مجاني' },
    ];

    return (
        <main className='mt-5 admin-products user-orders admin-bg' dir='rtl' style={{ minHeight: '700px', maxWidth: '100%', margin: '0 auto' }}>
            <Container>
                <div className='orderdetails mt-5'>
                    <Row className='d-flex mb-4 align-items-center gap-4 justify-content-center p-2'>
                        <Link to="/Admin/AddProduct" className='admin-add-box' style={{textDecoration:"none"}}>
                            <div className='d-flex align-items-center justify-content-center  ' >
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
                        <Modal.Body >
                        <div className="d-flex    gap-3 justify-content-between align-items-center" >
                        <Form.Group as={Row} className="mb-3 w-100">
                            <Col sm="12">
                                <Form.Control type="text" placeholder=" أضف  فئة " />
                            </Col>
                            </Form.Group>

                        </div>
                        </Modal.Body>                        
                        <Modal.Footer>
                        <Button  variant="save" onClick={handleClose1}>
                                حفظ 
                            </Button>
                            <Button  variant="cancel" onClick={handleClose1}>
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
                        <div className="d-flex  gap-3 justify-content-between align-items-center" 
                        style={{width:"100%",height:"fit-content"}}>
                        <Form.Group as={Row} className="mb-3 w-100" >
                            <Col sm="12" >
                                <Form.Control type="text" placeholder=" أضف  فئة فرعية" />
                            </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3  w-100 "  >
                            <Col sm="12"  className="position-relative">
                                <Form.Control as="select" className="custom-select">
                                <option className='custom-option'>أختر الفئة </option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                </Form.Control>
                                <TiArrowSortedDown className="select-arrow-icon" />
                            </Col>
                            </Form.Group>

                            
                        </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button  variant="save" onClick={handleClose2}>
                                حفظ 
                            </Button>
                            <Button  variant="cancel" onClick={handleClose2}>
                            إلغاء
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Row>
                        <h4>قائمة المنتجات</h4>
                    </Row>
                    <Table responsive>
                        <thead>
                            <tr className='title'>
                                <th>صورة المنتج</th>
                                <th>اسم المنتج</th>
                                <th>الفئة</th>
                                <th>السعر للتاجر</th>
                                <th>السعر للمستخدم</th>
                                <th>التوصيل</th>
                                <th>الإجراء</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td className='image' style={{ verticalAlign: 'middle', padding: '8px' }}>
                                        <img src={product.image} alt={product.productName} style={{ width: '54px', height: '54px', borderRadius: '10px' }} />
                                    </td>
                                    <td className='productName' style={{ color: '#FFFFFF', fontWeight: '400', verticalAlign: 'middle', padding: '8px' }}>{product.productName}</td>
                                    <td className='category' style={{ color: '#FFFFFF', fontWeight: '400', verticalAlign: 'middle', padding: '8px' }}>{product.category}</td>
                                    <td className='merchantPrice' style={{ color: '#FFFFFF', fontWeight: '400', verticalAlign: 'middle', padding: '8px' }}>{product.merchantPrice}</td>
                                    <td className='userPrice' style={{ color: '#FFFFFF', fontWeight: '400', verticalAlign: 'middle', padding: '8px' }}>{product.userPrice}</td>
                                    <td className='delivery' style={{ color: '#FFFFFF', fontWeight: '400', verticalAlign: 'middle', padding: '8px' }}>{product.delivery}</td>
                                    <td className='action' style={{ color: 'white', verticalAlign: 'middle', padding: '8px' }}>
                                        <span className='ms-1 p-1'><AiFillEdit style={{ width: '20px', height: '20px', cursor: 'pointer' }} /></span>
                                        <span className='me-1 p-1'><MdDelete style={{ width: '20px', height: '20px', cursor: 'pointer' }} /></span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </main>
    );
};

export default AdminProducts;
