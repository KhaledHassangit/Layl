import React, { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { ImBlocked } from "react-icons/im";
import { IoPeopleSharp } from "react-icons/io5";

const AdminUsers = () => {
    const [filter, setFilter] = useState('All');

    const orders = [
        { email: 'user1@example.com', number: '24/4/2024', name: 'نادر عطية', address: 'شارع 1', state: 'مستخدم' },
        { email: 'user2@example.com', number: '25/4/2024', name: 'نادر عطية', address: 'شارع 2', state: 'تاجر' },
        { email: 'user3@example.com', number: '25/4/2024', name: 'نادر عطية', address: 'شارع 3', state: 'مستخدم' },
        { email: 'user4@example.com', number: '26/4/2024', name: 'نادر عطية', address: 'شارع 4', state: 'تاجر' },
        { email: 'user5@example.com', number: '26/4/2024', name: 'نادر عطية', address: 'شارع 5', state: 'مستخدم' },
        { email: 'user6@example.com', number: '27/4/2024', name: 'نادر عطية', address: 'شارع 6', state: 'قائمة الحظر' },
    ];

    const filteredOrders = filter === 'All' ? orders : orders.filter(order => order.state === filter);

    const handleFilterClick = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    return (
    <main className='mt-5 admin-users admin-orders user-orders admin-bg' dir='rtl' style={{ minHeight: "700px", maxWidth: "100%", margin: "0 auto" }}>
            <Container className=" ">
                <div className="orderdetails mt-5">
                    <Row>
                        <Col md="12">
                            <div className='filter-buttons mb-2 d-flex justify-content-between'>
                                <button className={filter === 'All' ? 'active' : ''} onClick={() => handleFilterClick('All')}>كل المستخدمين</button>
                                <button className={filter === 'تاجر' ? 'active' : ''} onClick={() => handleFilterClick('تاجر')}>التجار</button>
                                <button className={filter === 'مستخدم' ? 'active' : ''} onClick={() => handleFilterClick('مستخدم')}>المستخدمين</button>
                                <button className={filter === 'قائمة الحظر' ? 'active' : ''} onClick={() => handleFilterClick('قائمة الحظر')}>قائمة الحظر</button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <div className="search-box-container d-flex mb-2 justify-content-start align-items-start flex-grow-1">
                    <input
                        type="text"
                        placeholder=" أبحث هنا ...."
                        className="search_box"
                    />
                    <FiSearch className="search-icon" />
                    </div>
                    </Row>
                    <Table responsive>
                        <thead>
                            <tr className='title'>
                                <th>البريد الإليكتروني </th>
                                <th>رقم الهاتف </th>
                                <th>الأسم </th>
                                <th>العنوان</th>
                                <th>الحاله </th>
                                <th>الإجراء</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order) => (
                                <tr key={order.email}>
                                    <td className='email' style={{ color: '#CDCDCD' ,fontWeight:"400"}}>{order.email}</td>
                                    <td className='phone' style={{ color: '#CDCDCD' ,fontWeight:"400"}}>{order.number}</td>
                                    <td className='name' style={{ color: '#CDCDCD' ,fontWeight:"400"}}>{order.name}</td>
                                    <td className='adress' style={{ color: '#CDCDCD',fontWeight:"400" }}>{order.address}</td>
                                    <td className='state' style={{ color:
                                        order.state === 'مستخدم' ? '#CDCDCD' :
                                        order.state === 'تاجر' ? '#CDCDCD' :
                                        order.state === 'قائمة الحظر' ? '#CDCDCD' : 'inherit' }}>
                                        {order.state}
                                    </td>
                                    <td className='action' style={{ color: 'white' }}>
                                        <span className='ms-1 p-1'><IoPeopleSharp style={{width:"20px",height:"20px",cursor:"pointer"}}/></span>
                                        <span  className='me-1 p-1'><ImBlocked style={{width:"20px",height:"20px" ,cursor:"pointer"}} /></span>
                                        
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

export default AdminUsers;
