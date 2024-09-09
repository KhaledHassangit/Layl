import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Table, Modal, Button } from 'react-bootstrap';
import AllAdminOrdersHook from '../../CustomHooks/Orders/AllAdminOrders-Hook';
import Spinner from '../../Utilities/Spinner';
import { Link } from "react-router-dom";
import { FiSearch } from 'react-icons/fi';

const AdminOrders = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [allAdminOrders, handelUpdateOrder, loading,email,setemail,handelSearch] = AllAdminOrdersHook(searchTerm);
    const [filter, setFilter] = useState('All');
    const [orders, setOrders] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    const [nextStatus, setNextStatus] = useState('');

console.log(allAdminOrders)
    useEffect(() => {
        if (allAdminOrders && Array.isArray(allAdminOrders)) {
            const combinedOrders = allAdminOrders.map(orderData => {
                const order = orderData.Order;
                const orderItems = orderData.OrderItems.map(item => ({
                    itemId: item.id,
                    quantity: item.quantity,
                    color: item.color_data,
                    price: item.price
                }));
                return {
                    ...order,
                    user_data: {
                        full_name: order.user_data.full_name || '',
                        email: order.user_data.email || '',
                        phone_number: order.user_data.phone_number || ''
                    },
                    orderItems,
                };
            }).reverse();
            setOrders(combinedOrders);
        }
    }, [allAdminOrders]);

    const handleFilterClick = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const handleStatusUpdate = (orderID, nextStatus) => {
        handelUpdateOrder(orderID, nextStatus);
        setShowModal(false);
    };

    const openModal = (order, currentStatus) => {
        let status = '';
        switch (currentStatus) {
            case 'Under Revision':
                status = 'Agreed';
                break;
            case 'Agreed':
                status = 'Delivered';
                break;
            case 'Delivered':
                status = 'Retroactive';
                break;
            case 'Canceled':
                status = 'Canceled';
                break;
            default:
                break;
        }
        setCurrentOrder(order);
        setNextStatus(status);
        setShowModal(true);
    };

    const statusMapping = {
        'Under Revision': 'الطلبات الجديدة',
        'Agreed': 'تم الشحن',
        'Delivered': 'تم التسليم',
        'Canceled': 'الطلبات المرفوضة',
        'Retroactive': 'المرتجع'
    };
    const filteredOrders = filter === 'All' ? orders : orders.filter(order => order.order_status === filter);

    return (
        <main className='mt-5 admin-orders user-orders admin-bg' dir='rtl' style={{ minHeight: "700px", maxWidth: "100%", margin: "0 auto" }}>
            <Container>
                <div className="orderdetails mt-5">
                    <Row>
                        <Col md="12">
                            <div className='filter-buttons mb-2 d-flex justify-content-between'>
                                <button className={filter === 'All' ? 'active' : ''} onClick={() => handleFilterClick('All')}>كل الطلبات</button>
                                <button className={filter === 'Under Revision' ? 'active' : ''} onClick={() => handleFilterClick('Under Revision')}>الطلبات الجديدة</button>
                                <button className={filter === 'Agreed' ? 'active' : ''} onClick={() => handleFilterClick('Agreed')}>تم الشحن</button>
                                <button className={filter === 'Delivered' ? 'active' : ''} onClick={() => handleFilterClick('Delivered')}>تم التسليم</button>
                                <button className={filter === 'Canceled' ? 'active' : ''} onClick={() => handleFilterClick('Canceled')}>الطلبات المرفوضة</button>
                                <button className={filter === 'Retroactive' ? 'active' : ''} onClick={() => handleFilterClick('Retroactive')}>المرتجع</button>
                            </div>
                        </Col>
                    </Row>
                    <div className="search-box-container d-flex mb-2 justify-content-start align-items-start flex-grow-1">
                        <input
                            type="text"
                            placeholder=" أبحث هنا ...."
                            className="search_box"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FiSearch className="search-icon" />
                    </div>

                    {loading ? (
                        <Spinner />
                    ) : (
                        <Table responsive>
                            <thead>
                                <tr className='title'>
                                    <th>رقم الأوردر</th>
                                    <th>التاريخ</th>
                                    <th>الحالة</th>
                                    <th>اسم العميل</th>
                                    <th>البريد الإلكتروني</th>
                                    <th>رقم الهاتف</th>
                                    <th>السعر</th>
                                    <th>الخصومات</th>
                                    <th>الإجراء</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.length > 0 ? (
                                    filteredOrders.map((order) => (
                                        <tr key={order.id}>
                                            <td className='id'>
                                                <Link to={`/admin/orderdetails/${order.id}`} style={{ textDecoration: "none", color: "rgba(4, 195, 255, 1)" }}>
                                                    {order.id}
                                                </Link>
                                            </td>
                                            <td className='date'>{order.date}</td>
                                            <td className='status' style={{
                                                color:
                                                    order.order_status === 'Under Revision' ? '#C3B31F' :
                                                        order.order_status === 'Agreed' ? '#FFF279' :
                                                            order.order_status === 'Canceled' ? '#D33234' :
                                                                order.order_status === 'Delivered' ? '#32AF1E' :
                                                                    order.order_status === 'Retroactive' ? '#ff0003' : 'inherit'
                                            }}>
                                                {statusMapping[order.order_status] || order.order_status}
                                            </td>
                                            <td className='client-name' style={{ color: 'white' }}>{order.user_data.full_name}</td>
                                            <td className='client-email' style={{ color: 'white' }}>{order.user_data.email}</td>
                                            <td className='client-phone' style={{ color: 'white' }} dir='ltr'>{order.user_data.phone_number}</td>
                                            <td className='price' style={{ color: 'white' }}>
                                                {order.total_price !== undefined ? `${order.total_price} جنية` : '__'}
                                            </td>
                                            <td className='discount' style={{ color: 'white' }}>
                                                {order.discounts ? (
                                                    <>
                                                        {order.discounts.coupon_code && order.discounts.coupon_code.value !== null ? (
                                                            `${order.discounts.coupon_code.value} ${order.discounts.coupon_code.type === 'Percentage' ? '%' : 'جنية'}`
                                                        ) : order.discounts.product_discount && order.discounts.product_discount.value !== null ? (
                                                            `${order.discounts.product_discount.value} ${order.discounts.product_discount.type === 'Percentage' ? '%' : 'جنية'}`
                                                        ) : '__'}
                                                    </>
                                                ) : '__'}
                                            </td>
                                            <td className='action' style={{ color: 'white' }}>
                                                {order.order_status === 'Under Revision' || order.order_status === 'Agreed' ? (
                                                    <>
                                                        <span
                                                            style={{ backgroundColor: '#32AF1E', cursor: 'pointer' }}
                                                            className='iconStyle'
                                                            onClick={() => openModal(order, order.order_status)}
                                                        >
                                                            ✔
                                                        </span>
                                                        <span
                                                            style={{ backgroundColor: '#D33234', cursor: 'pointer' }}
                                                            className='iconStyle ms-2'
                                                            onClick={() => openModal(order, 'Canceled')}
                                                        >
                                                            ✘
                                                        </span>
                                                    </>
                                                ) : order.order_status === 'Delivered' ? (
                                                    <span
                                                        style={{ backgroundColor: '#D33234', cursor: 'pointer' }}
                                                        className='iconStyle'
                                                        onClick={() => openModal(order, 'Delivered')}
                                                    >
                                                        ✘
                                                    </span>
                                                ) : (
                                                    '__'
                                                )}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="9" className="text-center" style={{ color: "white" }}>لم يتم إجراء أي طلبات بعد.</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    )}
                </div>
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header className='border-bottom '>
                    <Modal.Title>تأكيد تحديث الحالة</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mt-2'>
                هل أنت متأكد من تحديث حالة الطلب إلى "{nextStatus === 'Under Revision' ? 'الطلبات الجديدة' :
                        nextStatus === 'Agreed' ? 'تم الشحن' :
                        nextStatus === 'Delivered' ? 'تم التسليم' :
                        nextStatus === 'Canceled' ? 'الطلبات المرفوضة' :
                        nextStatus === 'Retroactive' ? 'المرتجع' : nextStatus}"
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-save'onClick={() => handleStatusUpdate(currentOrder.id, nextStatus)}>
                        تأكيد
                    </Button>
                    <Button className='btn-cancel' onClick={() => setShowModal(false)}>
                        إلغاء
                    </Button>
                </Modal.Footer>
            </Modal>
        </main>
    );
};

export default AdminOrders;
