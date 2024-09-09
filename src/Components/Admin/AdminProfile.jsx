import React from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { CiEdit } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import Cookie from 'universal-cookie';
import AdminChangePasswordHook from '../../CustomHooks/Admin/AdminChangePassword-Hook';
import { ToastContainer } from 'react-toastify';
import { Bounce } from 'react-awesome-reveal';
import me from "../../Images/colored.jpg"
const AdminProfile = () => {
    const cookie = new Cookie()

    let userData = ""
    if (cookie.get('UserData') !== null) {
        userData = cookie.get('UserData');
    }

    const [passwordModalShow, handlePasswordModalShow, handlePasswordModalClose,
        oldPassword, newPassword, setOldPassword,
        setNewPassword,
        handlePasswordChange,
        confirmPassword, setConfirmPassword
    ] = AdminChangePasswordHook()
    return (
        <main className='mt-5 admin-profile admin-bg' dir='rtl' style={{ maxWidth: "100%", margin: "0 auto" }}>
            <Container className="mt-2 ">
                <h4>اعدادات الصفحة الشخصية</h4>
                <div className='address-container'>
                    <div className='d-flex justify-content-between'>
                        <h6 className=' pe-1'>البيانات الشخصية</h6>
                        <Link className='d-flex align-items-center edit' to="/admin/editprofile" style={{ textDecoration: "none" }} >
                            <div >
                                <CiEdit />
                                <span>تعديل</span>
                            </div>
                        </Link>
                    </div>
                    <div className='admin'>
                        <div className='user-image'>
                            {userData.profile_img ? (
                                <Bounce triggerOnce={true}>
                                    {/* <img
                                        loading='lazy'
                                        src={userData?.profile_img ? `http://localhost:8000${userData.profile_img}` : me}
                                        alt="User"
                                        className='user-photo'
                                    /> */}
                                    <img
                                        loading='lazy'
                                        src={me}
                                        alt="User"
                                        className='user-photo'
                                    />
                                </Bounce>
                            ) : (
                                <h1>{userData.full_name ? userData.full_name.charAt(0) : 'K'}</h1>
                            )}
                        </div>

                        <div className='d-flex justify-content-start mt-3 user-info '>
                            <ul className='d-flex flex-column align-items-start  '>
                                <li>الأسم</li>
                                <li>البريد الألكتروني</li>
                                <li>كلمة المرور:</li>
                            </ul>
                            <ul className='data d-flex flex-column  align-items-start' >
                                <li id="username"> {userData ? userData.full_name : 'Loading...'}</li>
                                <li id="email">{userData ? userData.email : 'Loading...'}</li>
                                <li className='mt-3 '>*********<CiEdit style={{ marginRight: "2px", marginBottom: "15px", cursor: 'pointer' }} onClick={handlePasswordModalShow} /></li>
                            </ul>
                        </div>
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
                    </div>
                </div>
                <ToastContainer />
            </Container>
        </main>
    )
}

export default AdminProfile
