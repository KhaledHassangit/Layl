import React from 'react';
import { Container, Table } from 'react-bootstrap';

const AdminCustomerRequests = () => {

    const orders = [
        { id: '01', username: 'مستخدم 1', email: 'rehabattya125@gmail.com' },
        { id: '02', username: 'مستخدم 1', email: 'rehabattya125@gmail.com' },
        { id: '03', username: 'مستخدم 1', email: 'rehabattya125@gmail.com' },
        { id: '04', username: 'مستخدم 1', email: 'rehabattya125@gmail.com' },
        { id: '05', username: 'مستخدم 1 ', email: 'rehabattya125@gmail.com' },
        { id: '05', username: 'مستخدم 1 ', email: 'rehabattya125@gmail.com' },
        { id: '05', username: 'مستخدم 1 ', email: 'rehabattya125@gmail.com' },
        { id: '05', username: 'مستخدم 1 ', email: 'rehabattya125@gmail.com' },
    ];

    return (
        <main className='mt-5 customer-requests user-orders admin-bg' dir='rtl' style={{ minHeight: "700px", maxWidth: "100%", margin: "0 auto" }}>
            <Container>
                <div className="orderdetails mt-5">
                    <Table responsive>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} style={{ color: 'white', height: '40px' }}>
                                    <td className='id' style={{ color: 'white' }}>{order.id}</td>
                                    <td className='username' style={{ color: 'white' }}>{order.username}</td>
                                    <td className='email' style={{ color: 'white' }}>{order.email}</td>
                                    <td colSpan="2" className='actions'>
                                        <button style={{ 
                                            backgroundColor:'#32AF1E', 
                                            color: 'white', 
                                            border: 'none', 
                                            padding: '2px 5px', 
                                            width: '70px', 
                                            height: '35px', 
                                            borderRadius: '12px' 
                                        }}>موافق</button>
                                        <button style={{ 
                                            backgroundColor: 'transparent', 
                                            color: 'white', 
                                            border: 'none', 
                                            padding: '2px 5px', 
                                            marginRight: '20px', 
                                            marginLeft: '0', 
                                            borderRadius: '12px' 
                                        }}>رفض</button>
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

export default AdminCustomerRequests;
