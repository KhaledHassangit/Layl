import React, { useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const UserOrders = () => {
  const [filter, setFilter] = useState('All');

  const orders = [
    { id: '#00001', date: '24/4/2024', itemName: 'Product 1', status: 'In Progress', total: 100.5 },
    { id: '#00002', date: '25/4/2024', itemName: 'Product 2', status: 'Delivered', total: 200 },
    { id: '#00003', date: '25/4/2024', itemName: 'Product 3', status: 'Rejected', total: 150 },
  ];

  const filteredOrders = filter === 'All' ? orders : orders.filter(order => order.status === filter);

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <section className="user-orders">
      <Container>
        <div className='orderdetails'>
          <Row>
            <Col md="12">
              <div className='d-flex justify-content-between' style={{ width: "100%" }}>
                <p>In case of confirming or cancelling the order, please contact us via messages</p>
                <p style={{ fontFamily: "Cairo" }}>*فى حالة تأكيد أو رفض الطلب، الرجاء التواصل مع التاجر عبر الرسائل</p>
              </div>
              <div className='filter-buttons mb-2 d-flex justify-content-between'>
                <button className={filter === 'All' ? 'active' : ''} onClick={() => handleFilterClick('All')}>All Orders</button>
                <button className={filter === 'In Progress' ? 'active' : ''} onClick={() => handleFilterClick('In Progress')}>In Progress</button>
                <button className={filter === 'Delivered' ? 'active' : ''} onClick={() => handleFilterClick('Delivered')}>Delivered</button>
                <button className={filter === 'Rejected' ? 'active' : ''} onClick={() => handleFilterClick('Rejected')}>Rejected</button>
              </div>
            </Col>
          </Row>
          <Table responsive>
            <thead>
              <tr className='title'>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Item Name</th>
                <th>Order Status</th>
                <th>Total</th>
                {filter === 'In Progress' && <th>Action</th>}
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className='id'>{order.id}</td>
                  <td className='date'>{order.date}</td>
                  <td className='pname'>{order.itemName}</td>
                  <td className='status' style={{ color:
                    order.status === 'In Progress' ? 'rgba(255, 242, 121, 1)' :
                      order.status === 'Delivered' ? 'rgba(37, 234, 6, 1)' :
                        order.status === 'Rejected' ? 'rgba(183, 17, 19, 1)' : 'inherit' }}>
                    {order.status}
                  </td>
                  <td className='total'>${order.total.toFixed(2)}</td>
                  {filter === 'In Progress' && (
                    <td className='action'>
                      <span style={{backgroundColor:"transparent",border:"none",color:"red"}}>Cancel</span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default UserOrders;
