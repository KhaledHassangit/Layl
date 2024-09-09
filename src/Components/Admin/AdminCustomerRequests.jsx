import React, { useState, useEffect } from 'react';
import { Container, Table, Modal, Button } from 'react-bootstrap';
import MerchantRequestHook from '../../CustomHooks/Admin/MerchantRequest-Hook';
import { ToastContainer } from 'react-toastify';
import Spinner from '../../Utilities/Spinner';
import { FiSearch } from 'react-icons/fi';

const AdminCustomerRequests = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [AllRequestsRes, loading, handelMerchantRequest, handelDeleteMerchantRequest] = MerchantRequestHook(searchTerm);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentRequestId, setCurrentRequestId] = useState(null);
    const [filteredRequests, setFilteredRequests] = useState([]);
    useEffect(() => {
        if (AllRequestsRes?.data) {
            const lowercasedQuery = searchTerm.toLowerCase();
            const filtered = AllRequestsRes.data.filter(request =>
                request.user_id.toString().toLowerCase().includes(lowercasedQuery) ||
                request.user_email.toLowerCase().includes(lowercasedQuery)
            );
            setFilteredRequests(filtered);
        }
    }, [AllRequestsRes, searchTerm]);
    console.log(AllRequestsRes)

    const handleShowConfirmModal = (id) => {
        setCurrentRequestId(id);
        setShowConfirmModal(true);
    };

    const handleShowDeleteModal = (id) => {
        setCurrentRequestId(id);
        setShowDeleteModal(true);
    };

    const handleConfirm = () => {
        handelMerchantRequest(currentRequestId);
        setShowConfirmModal(false);
    };

    const handleDelete = () => {
        handelDeleteMerchantRequest(currentRequestId);
        setShowDeleteModal(false);
    };

    return (
        <main className='mt-5 customer-requests user-orders admin-bg' dir='rtl' style={{ minHeight: "700px", maxWidth: "100%", margin: "0 auto" }}>
            <Container>
                <div className="orderdetails mt-5">
                    <h4>طلبات التحويل لحساب تاجر</h4>
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
                        <div className="text-center">
                            <Spinner>
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <Table responsive>
                            <tbody>
                                {filteredRequests.length > 0 ? (
                                    filteredRequests.map((request) => (
                                        <tr key={request.user_id} style={{ color: 'white', height: '40px' }}>
                                            <td className='id' style={{ color: 'white' }}>{request.user_id}</td>
                                            <td className='username' style={{ color: 'white' }}>{request.user_email}</td>
                                            <td colSpan="2" className='actions'>
                                                <Button onClick={() => handleShowConfirmModal(request.user_id)} variant='success' style={{
                                                    color: 'white',
                                                    backgroundColor: '#32AF1E',
                                                    border: 'none',
                                                    padding: '8px',
                                                    width: '70px',
                                                    height: '25px',
                                                    borderRadius: '5px',
                                                    lineHeight:"5px",
                                                    fontSize:"15px"
                
                                                }}>موافق</Button>
                                                <Button onClick={() => handleShowDeleteModal(request.user_id)}  style={{
                                                    color: 'white',
                                                    border: 'none',
                                                    padding: '2px 5px',
                                                    marginRight: '20px',
                                                    marginLeft: '0',
                                                    borderRadius: '12px',
                                                    background:"none",
                                                    fontSize:"15px"
                                                }}>رفض</Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center" style={{ color: '#FFFFFF' }}>لا يوجد طلبات حتى الآن</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    )}
                </div>
            </Container>

            <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)}>
                <Modal.Header className='border-bottom ' >
                    <Modal.Title>تأكيد الطلب</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mt-2'>هل أنت متأكد أنك تريد تحويل هذا المستخدم إلى تاجر؟</Modal.Body>
                <Modal.Footer>
                    <Button className='btn-save' onClick={handleConfirm}>
                        تأكيد
                    </Button>
                    <Button className='btn-cancel' onClick={() => setShowConfirmModal(false)}>
                        إلغاء
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header className='border-bottom '>
                    <Modal.Title >تأكيد الحذف</Modal.Title>
                </Modal.Header>
                <Modal.Body className='mt-2'>هل أنت متأكد أنك تريد حذف هذا الطلب؟</Modal.Body>
                <Modal.Footer>
                    <Button className='btn-save' onClick={handleDelete}>
                        حذف
                    </Button>
                    <Button className='btn-cancel' onClick={() => setShowDeleteModal(false)}>
                        إلغاء
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </main>
    );
};

export default AdminCustomerRequests;
