import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { CiEdit } from 'react-icons/ci';
import Cookie from 'universal-cookie';
import { ToastContainer } from 'react-toastify';
import NewRequestHook from '../../CustomHooks/User/NewRequest-Hook';
import ProfileHook from '../../CustomHooks/Auth/Profile-Hook';

const UserInfo = () => {
    const [handelNewRequest] = NewRequestHook();

    const {
        name,
        email,
        address,
        phoneNumber,
        phoneNumber2,
        loading,
        onChangeName,
        onChangeEmail,
        onChangeAdress,
        onChangeSecondNumber,
        onChangeNumber,
        handleImageChange,
        handleEdit,
        handlePasswordChange,
        passwordModalShow,
        handlePasswordModalShow,
        oldPassword, newPassword,
        setOldPassword,
        setNewPassword,
        handlePasswordModalClose,
        image,
        setConfirmPassword,
        confirmPassword
    } = ProfileHook();
    
    const cookie = new Cookie();
    let userData = cookie.get('UserData') || "";

    const [show, setShow] = useState(false);
    const [confirmSwitch, setConfirmSwitch] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleCloseAndEdit = () => {
        handleEdit();
        handleClose();
    };

    const handleSwitchToBuyer = () => {
        setConfirmSwitch(true);
    };

    const confirmSwitchToBuyer = () => {
        handelNewRequest();
        setConfirmSwitch(false);
    };

    const renderSwitchToBuyerButton = () => {
        if (userData && userData.account_type === "Merchant") {
            return null;
        } else {
            return (
                <button onClick={handleSwitchToBuyer}>Switch to buyer</button>
            )
        }
    };

    return (
        <section className='account-info mt-5'>
            <Container>
                {/* Profile Update Modal */}
                <Modal show={show} onHide={handleClose} >
                    <Modal.Title className='text-center fs-4'>Update Profile</Modal.Title>
                    <Modal.Body>
                        <Form dir='ltr'>
                            {/* Existing form fields */}
                            <Form.Group controlId="formName" className='mt-2'>
                                <Form.Label className='ms-2'>Name</Form.Label>
                                <Form.Control
                                    value={name}
                                    onChange={onChangeName}
                                    type="text"
                                    placeholder="User Name"
                                    className='mt-0'
                                />
                            </Form.Group>
                            <Form.Group controlId="formAddress" className='mt-2'>
                                <Form.Label className='ms-2'>Address*</Form.Label>
                                <Form.Control type="text" value={address} onChange={onChangeAdress} placeholder="Your Address " className='mt-0' />
                            </Form.Group>
                            <Form.Group controlId="formPhone" className='mt-2'>
                                <Form.Label className='ms-2'>Phone Number*</Form.Label>
                                <Form.Control
                                    value={phoneNumber}
                                    onChange={onChangeNumber}
                                    type="text"
                                    placeholder="Your Number"
                                    className='mt-0'
                                />
                                {console.log('Phone Number in Modal:', phoneNumber)}
                            </Form.Group>
                            <Form.Group controlId="formPassword" className='mt-2'>
                                <Form.Label className='ms-2'>Phone Number(optional)</Form.Label>
                                <Form.Control
                                    value={phoneNumber2}
                                    onChange={onChangeSecondNumber}
                                    type="text"
                                    placeholder="Your 2nd Number"
                                    className='mt-0'
                                />
                            </Form.Group>
                            <Form.Group controlId="formImage" className='mt-2'>
                                <label className='custom-file-upload ms-1'>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className='custom-file-input'
                                    />
                                    <span className='file-upload-text ms-1'>Upload Photo</span>
                                </label>
                                {image && <p className='selected-file ms-1'>Selected File: {image.name}</p>}

                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='btn-save edit-info' onClick={handleCloseAndEdit}>
                            Save Changes
                        </Button>
                        <Button className='btn-cancel' onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Password Change Modal */}
                <Modal show={passwordModalShow} onHide={handlePasswordModalClose} dir='ltr'>
                    <Modal.Header >
                        <Modal.Title className=' ms-auto me-auto fs-4'>Change Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form dir='ltr' onSubmit={handlePasswordChange}>
                            <Form.Group controlId="formOldPassword">
                                <Form.Label className='mb-0 ms-2'>Old Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter old password"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="formNewPassword" className='mt-3'>
                                <Form.Label className='mb-0 ms-2'>New Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="confirmNewPassword" className='mt-3'>
                                        <Form.Label className='mb-0 ms-2'>Confirm New Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm new password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </Form.Group>

                            <Button type="submit" className='mt-4 btn-save' onSubmit={handlePasswordChange}>
                                Save Changes
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                {/* Confirmation Modal */}
                <Modal show={confirmSwitch} onHide={() => setConfirmSwitch(false)} dir='ltr'>
                    <Modal.Header className='border-bottom ' dir='ltr'>
                        <Modal.Title>Confirm Switch to Buyer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body dir='ltr' className='mt-2'>Are you sure you want to switch to a buyer account?</Modal.Body>
                    <Modal.Footer>
                        <Button className='btn-cancel' onClick={() => setConfirmSwitch(false)}>
                            Cancel
                        </Button>
                        <Button className='btn-save' onClick={confirmSwitchToBuyer}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Row>
                    <Col md="12" className='text-center'>
                        <div className='mb-4'>
                            <h2>My Account</h2>
                        </div>
                        <div className='user-image'>
                            {userData.profile_img ? (
                                <img loading='lazy' src={`http://localhost:8000${userData.profile_img}`} alt="User" className='user-photo' /> 
                            ) : (
                                <h1>{userData.full_name ? userData.full_name.charAt(0) : 'U'}</h1>
                            )}
                        </div>
                        <div className='user-buttons'>
                            <button className='ms-3' onClick={handleShow}><CiEdit /> Update Profile </button>
                            {renderSwitchToBuyerButton()}
                        </div>
                        <div className='user-profile'>
                            <div className='d-flex justify-content-center mt-3 user-info'>
                                <ul className='d-flex flex-column align-items-start me-md-5'>
                                    <li>Name:</li>
                                    <li>Email Address:</li>
                                    <li>Password:<CiEdit style={{ marginLeft: '10px', cursor: 'pointer' }} onClick={handlePasswordModalShow} /></li>
                                    <li>Address:</li>
                                    <li>Phone Number:</li>
                                    <li>Phone Number2:</li>
                                    <li>Account Type:</li>
                                </ul>
                                <ul className='data d-flex flex-column align-items-start'>
                                    <li id="username">{userData ? userData.full_name : 'Loading...'}</li>
                                    <li id="email">{userData ? userData.email : 'Loading...'}</li>
                                    <li id="password">**********</li>
                                    <li id="email">{userData && userData.address ? userData.address : "N/A"}</li>
                                    <li id="phoneNumber">
                                        {userData && userData.phone_number ? userData.phone_number : "N/A"}
                                    </li>                                    <li id="phoneNumber2">{userData && userData.phone_number_2 ? userData.phone_number_2 : 'N/A'}</li>
                                    <li id="accountType" className='ms-3 '>{userData && userData.account_type ? userData.account_type : 'N/A'}</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </section>
    );
};

export default UserInfo;
