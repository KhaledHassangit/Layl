import React from 'react';
import { Col, Container, Row, Card, Tab, Nav, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../../Utilities/Spinner';
import OrderDetailsHook from '../../CustomHooks/Orders/OrderDetails-Hook';
import { FaPhoneAlt, FaEnvelope, FaAddressCard, FaUser, FaShoppingCart, FaCalendarAlt, FaClock } from 'react-icons/fa';

const OrderDetails = () => {
    const { id } = useParams();
    const [OrderData] = OrderDetailsHook(id);

    if (!OrderData) {
        return <Spinner />;
    }

    const { Order, OrderItems } = OrderData || {};
    const { user_data, notes, discounts } = Order || {};

    const translateAccountType = (type) => {
        switch (type) {
            case 'User':
                return 'مستخدم';
            case 'Merchant':
                return 'تاجر';
            default:
                return type;
        }
    };

    const formatPhoneNumberForWhatsApp = (phoneNumber) => {
        return phoneNumber.replace(/[^0-9]/g, '');
    };

    const whatsappLink = user_data?.phone_number
        ? `https://wa.me/${formatPhoneNumberForWhatsApp(user_data.phone_number)}`
        : null;

    const whatsappLink2 = user_data?.phone_number_2
        ? `https://wa.me/${formatPhoneNumberForWhatsApp(user_data.phone_number_2)}`
        : null;

    const statusMapping = {
        'Under Revision': 'طلب جديد',
        'Agreed': 'تم الشحن',
        'Delivered': 'تم التسليم',
        'Canceled': 'طلب مرفوض',
        'Retroactive': 'طلب مرتجع'
    };

    const translatedOrderStatus = Order ? statusMapping[Order.order_status] : '';

    return (
        <main className='mt-5 admin-orders user-orders' dir='rtl' style={{ minHeight: "700px", margin: "0 auto", backgroundColor: '#141414', color: '#FFFFFF' }}>
            <Container>
                <Card className="order-details-card shadow-lg mt-5" style={{ backgroundColor: '#141414', borderColor: '#141414' }}>
                    <Card.Header className="bg-dark text-white">
                        <h3 style={{ color: '#FF9B1B' }}>تفاصيل الطلب رقم {Order?.id || ''}</h3>
                    </Card.Header>
                    <Card.Body>
                        <Tab.Container defaultActiveKey="details">
                            <Nav variant="tabs" className="mb-3">
                                <Nav.Item>
                                    <Nav.Link eventKey="details" className="text-white">معلومات الطلب</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="customer" className="text-white">بيانات العميل</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="notes" className="text-white">ملاحظات</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="details">
                                    {OrderItems?.length ? OrderItems.map(item => (
                                        <Card className="order-item mb-4" key={item.id} style={{ backgroundColor: '#1C1C1C', borderColor: '#141414', color: '#FFFFFF' }}>
                                            <Row className="no-gutters d-flex align-items-center">
                                                <Col md={8}>
                                                    <Card.Body>
                                                        <Card.Title style={{ color: '#FF9B1B' }}>{item.data?.sub_category}</Card.Title>
                                                        <Card.Text>
                                                            <Row className="mb-2">
                                                                <Col md="6">
                                                                    <Row className="order-item-detail mb-2">
                                                                        <Col><span className="label">الفئة:</span> {item.data?.category}</Col>
                                                                    </Row>
                                                                    <Row className="order-item-detail mb-2">
                                                                        <Col><span className="label">الكمية:</span> {item.quantity}</Col>
                                                                    </Row>
                                                                    <Row className="order-item-detail mb-2">
                                                                        <Col><span className="label">اللون:</span>
                                                                            <div style={{ backgroundColor: item.data?.color, width: '15px', height: '15px', borderRadius: '50%', display: 'inline-block', marginRight: '10px' }}></div>
                                                                        </Col>
                                                                    </Row>
                                                                    <Row className="order-item-detail mb-2">
                                                                        <Col><span className="label">السعر:</span> {item.price} جنية</Col>
                                                                    </Row>
                                                                </Col>
                                                                <Col md="6">
                                                                    <Row className="order-item-detail mb-2">
                                                                        <Col><FaShoppingCart className="ms-2" style={{ color: '#FF9B1B', whiteSpace: "nowrap" }} /><span className="label">حالة الطلب:</span> {translatedOrderStatus}</Col>
                                                                    </Row>
                                                                    <Row className="order-item-detail mb-2">
                                                                        <Col><FaCalendarAlt className="ms-2" style={{ color: '#FF9B1B', whiteSpace: "nowrap" }} /><span className="label">التاريخ:</span> {Order.date}</Col>
                                                                    </Row>
                                                                    <Row className="order-item-detail mb-2">
                                                                        <Col><FaClock className="ms-2" style={{ color: '#FF9B1B', whiteSpace: "nowrap" }} /><span className="label">الوقت:</span> {Order.time}</Col>
                                                                    </Row>
                                                                </Col>
                                                            </Row>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    )) : (
                                        <p style={{ color: "white" }}>لا توجد عناصر طلب</p>
                                    )}

                                    {/* Display discount details conditionally */}
                                    <Card className="discount-card mt-5" style={{ backgroundColor: '#141414', borderColor: '#141414', color: '#FFFFFF' }}>
                                        <Card.Header className="bg-dark text-white">
                                            <h4 style={{ color: '#FF9B1B' }}>تفاصيل الخصم</h4>
                                        </Card.Header>
                                        <Card.Body>
                                            {discounts ? (
                                                <>
                                                    {discounts.coupon_code && discounts.coupon_code.value ? (
                                                        <div>
                                                            <h5 style={{ color: '#FF9B1B' }}>كوبون الخصم:</h5>
                                                            <p>نوع الخصم: {discounts.coupon_code.type}</p>
                                                            <p>قيمة الخصم: {discounts.coupon_code.type === 'Percentage' ? `${discounts.coupon_code.value}%` : `${discounts.coupon_code.value} جنية`}</p>
                                                        </div>
                                                    ) : null}

                                                    {discounts.product_discount && discounts.product_discount.value ? (
                                                        <div>
                                                            <h5 style={{ color: '#FF9B1B' }}>تفاصيل الخصم على المنتج:</h5>
                                                            <p>نوع الخصم: {discounts.product_discount.type}</p>
                                                            <p>قيمة الخصم: {discounts.product_discount.type === 'Percentage' ? `${discounts.product_discount.value}%` : `${discounts.product_discount.value} جنية`}</p>
                                                        </div>
                                                    ) : null}

                                                    {(!discounts.coupon_code || !discounts.coupon_code.value) && (!discounts.product_discount || !discounts.product_discount.value) && (
                                                        <p style={{ color: '#FF9B1B' }}>لا توجد خصومات</p>
                                                    )}
                                                </>
                                            ) : (
                                                <p style={{ color: '#FF9B1B' }}>لا توجد خصومات</p>
                                            )}
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>

                                <Tab.Pane eventKey="customer">
                                    <Card className="client-info-card" style={{ backgroundColor: '#1C1C1C', borderColor: '#141414', color: '#FFFFFF' }}>
                                        <Card.Body>
                                            <Row className="client-info mb-2 ms-1">
                                                <Col md="6">
                                                    <FaUser className="me-2 ms-1" style={{ color: '#FF9B1B'  }} /><span className="label">الاسم الكامل:</span> {user_data?.full_name || ''}
                                                </Col>

                                                <Col md="6">
                                                    <FaPhoneAlt className="me-2 ms-1" style={{ color: '#FF9B1B' }} /><span className="label">رقم الهاتف:</span>
                                                    <span dir='ltr'>
                                                        {whatsappLink ? (
                                                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: '#FF9B1B' }}>
                                                                {user_data?.phone_number || ''}
                                                            </a>
                                                        ) : (user_data?.phone_number || '')}
                                                    </span>
                                                </Col>
                                            </Row>

                                            <Row className="client-info mb-2 ms-1">
                                                <Col md="6">
                                                    <FaEnvelope className="me-2 ms-1" style={{ color: '#FF9B1B' }} /><span className="label">البريد الإلكتروني:</span> {user_data?.email || ''}
                                                </Col>
                                                
                                                <Col md="6">
                                                    <FaPhoneAlt className="me-2 ms-1" style={{ color: '#FF9B1B' }} /><span className="label">رقم الهاتف 2:</span>
                                                    <span dir='ltr'>
                                                        {whatsappLink2 ? (
                                                            <a href={whatsappLink2} target="_blank" rel="noopener noreferrer" style={{ color: '#FF9B1B' }}>
                                                                {user_data?.phone_number_2 || ''}
                                                            </a>
                                                        ) : (user_data?.phone_number_2 || '')}
                                                    </span>
                                                </Col>

                                            </Row>

                                            <Row className="client-info mb-2 ms-1">
                                                <Col md="6">
                                                    <FaAddressCard className="me-2 ms-1" style={{ color: '#FF9B1B' }} /><span className="label">العنوان:</span>{user_data?.address || ''}
                                                </Col>

                                                <Col md="6">
                                                    <FaUser className="me-2 ms-1" style={{ color: '#FF9B1B' }} /><span className="label">نوع الحساب:</span> {translateAccountType(user_data?.account_type)}
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>

                                <Tab.Pane eventKey="notes">
                                    <Card className="notes-card mt-4" style={{ backgroundColor: '#141414', borderColor: '#141414', color: '#FFFFFF' }}>
                                        <Card.Body>
                                            <Row className="client-info mb-2 ms-1">
                                                <Col md="12">
                                                    {notes ? (
                                                        <p style={{ whiteSpace: "pre-wrap" }}>{notes}</p>
                                                    ) : (
                                                        <p style={{ color: '#FF9B1B' }}>لا توجد ملاحظات</p>
                                                    )}
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                        <Row className="d-flex justify-content-center mt-4">
                            <Col md={3} className="text-center">
                                <Link to='/admin/orders'>
                                    <Button variant="secondary" className="mt-3" style={{ backgroundColor: '#FF9B1B', borderColor: '#FF9B1B',padding:"5px 25px" }}>
                                        رجوع
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
};

export default OrderDetails;
