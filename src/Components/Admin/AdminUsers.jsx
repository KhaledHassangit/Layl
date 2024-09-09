import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Table, Modal, Button } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import { ImBlocked } from "react-icons/im";
import { IoPeopleSharp } from "react-icons/io5";
import GetUsersHook from '../../CustomHooks/Admin/GetUsers-Hook';
import { ToastContainer } from 'react-toastify';
import Spinner from '../../Utilities/Spinner';

const AdminUsers = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [actionType, setActionType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [AllUsersRes, handelBlockUser, handelUnlockUser, loading ] = GetUsersHook(selectedUserId,searchTerm);
    const [filter, setFilter] = useState('All');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        let usersToDisplay = AllUsersRes && AllUsersRes.data ? AllUsersRes.data : [];

        if (filter !== 'All') {
            usersToDisplay = usersToDisplay.filter(user => user.account_type === filter);
        }

        setFilteredUsers(usersToDisplay);
    }, [filter, AllUsersRes]);


    const handleFilterClick = (selectedFilter) => {
        setFilter(selectedFilter);
    };

    const handleOpenModal = (userId, type) => {
        setSelectedUserId(userId);
        setActionType(type);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setSelectedUserId(null);
        setActionType('');
        setModalVisible(false);
    };

    const handleConfirmAction = () => {
        if (actionType === 'block') {
            handelBlockUser(selectedUserId);
        } else if (actionType === 'unblock') {
            handelUnlockUser(selectedUserId);
        }
        handleCloseModal();
    };
    return (
        <main className='mt-5 admin-users admin-orders user-orders admin-bg' dir='rtl' style={{maxWidth: "100%", margin: "0 auto" }}>
            <Container>
                <div className="orderdetails mt-5">
                    <Row>
                        <Col md="12">
                            <div className='filter-buttons mb-2 d-flex justify-content-between'>
                                <button className={filter === 'All' ? 'active' : ''} onClick={() => handleFilterClick('All')}>كل المستخدمين</button>
                                <button className={filter === 'Merchant' ? 'active' : ''} onClick={() => handleFilterClick('Merchant')}>التجار</button>
                                <button className={filter === 'User' ? 'active' : ''} onClick={() => handleFilterClick('User')}>المستخدمين</button>
                                <button className={filter === 'Blocked' ? 'active' : ''} onClick={() => handleFilterClick('Blocked')}>قائمة الحظر</button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
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
                    </Row>
                    {loading ? (
                        <Spinner />
                    ) : (
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
                                {filteredUsers && filteredUsers.length > 0 ? (
                                    filteredUsers.map((user) => (
                                        <tr key={user.id}>
                                            <td className='email' style={{ color: '#CDCDCD', fontWeight: "400" }}>{user.email}</td>
                                            <td className='phone' style={{ color: '#CDCDCD', fontWeight: "400" }} dir='ltr'>{user.phone_number || 'N/A'}</td>
                                            <td className='name' style={{ color: '#CDCDCD', fontWeight: "400" }}>{user.full_name || 'N/A'}</td>
                                            <td className='address' style={{ color: '#CDCDCD', fontWeight: "400" }}>{user.address || 'N/A'}</td>
                                            <td className='state' style={{ color: '#CDCDCD', fontWeight: "400" }}>
                                                {user.account_type}
                                            </td>
                                            <td className='action' style={{ color: 'white' }}>
                                                {user.account_type === 'User' ? (
                                                    <>
                                                        <span className='ms-1 p-1'><IoPeopleSharp style={{ width: "20px", height: "20px", cursor: "pointer" }} /></span>
                                                        <span className='me-1 p-1'><ImBlocked style={{ width: "20px", height: "20px", cursor: "pointer" }} onClick={() => handleOpenModal(user.id, 'block')} /></span>
                                                    </>
                                                ) : user.account_type === 'Blocked' ? (
                                                    <span className='me-1 p-1'><ImBlocked style={{ width: "20px", height: "20px", cursor: "pointer", color: 'red' }} onClick={() => handleOpenModal(user.id, 'unblock')} /></span>
                                                ) : user.account_type === 'Merchant' ? (
                                                    <span className='me-1 p-1'><ImBlocked style={{ width: "20px", height: "20px", cursor: "pointer" }} onClick={() => handleOpenModal(user.id, 'block')} /></span>
                                                ) : null}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" style={{ textAlign: 'center', color: '#CDCDCD' }}>No Users Found </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    )}
                </div>
            </Container>
            <Modal show={modalVisible} onHide={handleCloseModal}>
                <Modal.Header className='border-bottom '>
                    <Modal.Title>تأكيد الإجراء</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mt-2'>
                    هل أنت متأكد أنك تريد {actionType === 'block' ? 'حظر' : 'رفع الحظر عن'} هذا المستخدم؟
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn-save' onClick={handleConfirmAction}>
                        تأكيد
                    </Button>
                    <Button className='btn-cancel' onClick={handleCloseModal}>
                        إلغاء
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </main>
    );
};

export default AdminUsers;
