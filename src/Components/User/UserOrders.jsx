import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Table, Button, Modal } from 'react-bootstrap';
import AllUserOrdersHook from '../../CustomHooks/Orders/AlUserOrders-Hook';
import Spinner from '../../Utilities/Spinner';

const UserOrders = () => {
  const [allUserOrders, loading, handelUpdateOrder] = AllUserOrdersHook();
  const [filter, setFilter] = useState('All');
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  useEffect(() => {
    if (allUserOrders && Array.isArray(allUserOrders)) {
      const combinedOrders = allUserOrders.map(orderData => {
        const order = orderData.Order;
        const orderItems = orderData.OrderItems.map(item => ({
          itemId: item.id,
          itemName: item.data?.sub_category || 'Unknown Product',
          quantity: item.quantity,
          color: item.color_data,
          price: item.price,
        }));
        return {
          ...order,
          user_data: Array.isArray(order.user_data)
            ? order.user_data.reduce((acc, data) => ({ ...acc, ...data }), {})
            : order.user_data,
          orderItems,
        };
      });
      setOrders(combinedOrders);
    }
  }, [allUserOrders]);

  const filteredOrders = filter === 'All' ? orders : orders.filter(order => {
    const statusMap = {
      'Retroactive': 'Canceled',
      'Under Revision': 'In Progress',
      'Agreed': 'Delivered'
    };
    return statusMap[order.order_status] === filter;
  });

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const getOrderStatus = (status) => {
    const statusMap = {
      'Retroactive': 'Canceled',
      'Under Revision': 'In Progress',
      'Agreed': 'Delivered'
    };
    return statusMap[status] || status;
  };

  const handleShowModal = (order) => {
    setCurrentOrder(order);
    setShowModal(true);
  };

  const handleConfirmUpdate = () => {
    if (currentOrder) {
      handelUpdateOrder(currentOrder.id, 'Canceled')
        .then(() => {
          // Optionally, refresh the orders list or handle success
          setOrders(orders.map(order =>
            order.id === currentOrder.id ? { ...order, order_status: 'Retroactive' } : order
          ));
          setShowModal(false);
        })
        .catch(error => {
          // Handle the error, e.g., show a notification
          console.error('Error updating order status:', error);
        });
    }
  };

  return (
    <section className="user-orders">
      <Container>
        <div className='orderdetails'>
          <Row>
            <Col md="12">
              <div className='d-flex justify-content-between' style={{ width: "100%" }}>
                <p>In case of confirming or canceling the order, please contact us via messages</p>
                <p style={{ fontFamily: "Cairo" }}>*فى حالة تأكيد أو إلغاء الطلب، الرجاء التواصل مع التاجر عبر الرسائل</p>
              </div>
              <div className='filter-buttons mb-2 d-flex justify-content-between'>
                <button className={filter === 'All' ? 'active' : ''} onClick={() => handleFilterClick('All')}>All Orders</button>
                <button className={filter === 'In Progress' ? 'active' : ''} onClick={() => handleFilterClick('In Progress')}>In Progress</button>
                <button className={filter === 'Delivered' ? 'active' : ''} onClick={() => handleFilterClick('Delivered')}>Delivered</button>
                <button className={filter === 'Canceled' ? 'active' : ''} onClick={() => handleFilterClick('Canceled')}>Canceled</button>
              </div>
            </Col>
          </Row>
          {loading ? (
            <Spinner />
          ) : (
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
                {orders.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center" style={{ color: "white" }}>No Orders Have Been Placed Yet</td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td className='id'>{order.id}</td>
                      <td className='date'>{order.date}</td>
                      <td className='pname'>
                        {order.orderItems.map((item, index) => (
                          <div key={index}>
                            {item.itemName}
                          </div>
                        ))}
                      </td>
                      <td className='status' style={{
                        color:
                          getOrderStatus(order.order_status) === 'In Progress' ? 'rgba(255, 242, 121, 1)' :
                          getOrderStatus(order.order_status) === 'Delivered' ? 'rgba(37, 234, 6, 1)' :
                          getOrderStatus(order.order_status) === 'Canceled' ? 'rgba(183, 17, 19, 1)' : 'inherit'
                      }}>
                        {getOrderStatus(order.order_status)}
                      </td>
                      <td className='total'>
                        {order.total_price !== undefined ? `${order.total_price.toFixed(2)} EGP` : 'N/A'}
                      </td>
                      {filter === 'In Progress' && (
                        <td className='action'>
                          <button
                            style={{ backgroundColor: "transparent", border: "none", color: "red" }}
                            onClick={() => handleShowModal(order)}
                          >
                            Cancel
                          </button>
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          )}
        </div>

        {/* Modal for confirming status update */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header className='border-bottom'>
            <Modal.Title className='mx-auto'>Confirm Status Update</Modal.Title>
          </Modal.Header>
          <Modal.Body className='mt-2' dir='ltr'>
            Are you sure you want to update the order status to "Canceled"?
          </Modal.Body>
          <Modal.Footer>
            <Button className='btn-save' onClick={handleConfirmUpdate}>
              Confirm
            </Button>
            <Button className='btn-cancel' onClick={() => setShowModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default UserOrders;
