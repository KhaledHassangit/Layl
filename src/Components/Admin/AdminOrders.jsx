import React, { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const AdminOrders = () => {
    const [filter, setFilter] = useState('All');

    const orders = [
        { id: '#00001', date: '24/4/2024', itemName: 'شنطة يد', status: 'تحت المراجعة', quantity: 1000 },
        { id: '#00002', date: '25/4/2024', itemName: 'شنطة يد', status: 'تم الشحن', quantity: 1000 },
        { id: '#00003', date: '25/4/2024', itemName: 'شنطة يد', status: 'مرفوض', quantity: 1000 },
        { id: '#00004', date: '26/4/2024', itemName: 'شنطة يد', status: 'طلب جديد', quantity: 1000 },
        { id: '#00005', date: '26/4/2024', itemName: 'شنطة يد', status: 'طلب جديد', quantity: 1000 },
    ];

    const filteredOrders = filter === 'All' ? orders : orders.filter(order => order.status === filter);

    const handleFilterClick = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    return (
    <main className='mt-5 admin-orders user-orders admin-bg' dir='rtl' style={{ minHeight: "700px", maxWidth: "100%", margin: "0 auto" }}>
            <Container className=" ">
                <div className="orderdetails mt-5">
                    <Row>
                        <Col md="12">
                            <div className='filter-buttons mb-2 d-flex justify-content-between'>
                                <button className={filter === 'All' ? 'active' : ''} onClick={() => handleFilterClick('All')}>كل الطلبات</button>
                                <button className={filter === 'تحت المراجعة' ? 'active' : ''} onClick={() => handleFilterClick('تحت المراجعة')}>تحت المراجعة</button>
                                <button className={filter === 'تم الشحن' ? 'active' : ''} onClick={() => handleFilterClick('تم الشحن')}>تم الشحن</button>
                                <button className={filter === 'مرفوض' ? 'active' : ''} onClick={() => handleFilterClick('مرفوض')}>مرفوض</button>
                                <button className={filter === 'طلب جديد' ? 'active' : ''} onClick={() => handleFilterClick('طلب جديد')}>طلب جديد</button>
                            </div>
                        </Col>
                    </Row>
                    <Table responsive>
                        <thead>
                            <tr className='title'>
                                <th>رقم الأوردر</th>
                                <th>التاريخ</th>
                                <th>اسم المنتج</th>
                                <th>الحالة</th>
                                <th>الكمية</th>
                                <th>اللون</th>
                                <th>اسم العميل</th>
                                {filter === 'تحت المراجعة' && <th>الإجراء</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order) => (
                                <tr key={order.id}>
                                    <td className='id'>{order.id}</td>
                                    <td className='date'>{order.date}</td>
                                    <td className='pname'>{order.itemName}</td>
                                    <td className='status' style={{ color:
                                        order.status === 'تحت المراجعة' ? '#C3B31F' :
                                        order.status === 'تم الشحن' ? '#32AF1E' :
                                        order.status === 'مرفوض' ? '#D33234' :
                                        order.status === 'طلب جديد' ? '#FFF279' : 'inherit' }}>
                                        {order.status}
                                    </td>
                                    <td className='quantity' style={{ color: 'white' }}>{order.quantity}</td>
                                    <td className='color' style={{ color: 'white' }}>أخضر</td>
                                    <td className='customer' style={{ color: 'white' }}>نادر عطية</td>
                                    {filter === 'تحت المراجعة' && (
                                        <td className='action'>
                                            <span style={{ backgroundColor: "transparent", border: "none", color: "red" }}>إلغاء</span>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </main>
    );
};

export default AdminOrders;
