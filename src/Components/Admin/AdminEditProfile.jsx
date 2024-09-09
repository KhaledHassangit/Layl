import React from 'react';
import { Button, Container } from 'react-bootstrap';
import AdminEditProfileHook from '../../CustomHooks/Admin/AdminEditProfile-Hook';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';

const AdminEditProfile = () => {
    const {
        name,
        phoneNumber,
        phoneNumber2,
        address,
        loading,
        onChangeName,
        onChangePhoneNumber,
        onChangePhoneNumber2,
        onChangeAddress,
        handleEdit,
        onImageChange,
        profileImg,
    } = AdminEditProfileHook();

    return (
        <main className='mt-5 admin-profile edit-profile admin-bg' dir='rtl' style={{  maxWidth: "100%", margin: "0 auto" }}>
            <Container className="mt-2">
                <h4>إعدادات الصفحة الشخصية</h4>
                <div className='address-container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h6 className='pe-1'>البيانات الشخصية</h6> 
                        <div className='d-flex  gap-2 align-items-center edit'>
                            <Button className="save" onClick={handleEdit} disabled={loading}>حفظ</Button>
                            <Link to="/admin/profile" style={{textDecoration:"none"}}>
                            <Button className="btn-cancel">إلغاء</Button>
                            </Link>
                        </div> 
                    </div>
                    <div className='admin'>
                        <div className='d-flex justify-content-start mt-3 user-info'>
                            <ul className='d-flex flex-column align-items-start ms-1'>
                                <li >الإسم</li>
                                <li>العنوان</li>
                                <li>رقم الهاتف</li>
                                <li className='mt-4'>رقم الهاتف 2</li>
                                <li >الصورة الشخصية</li>
                            </ul>
                            <form className='data d-flex flex-column align-items-start'>
                                <input type="text" id="username" value={name} onChange={onChangeName} required />
                                <input type="text" id="address" value={address} onChange={onChangeAddress} required />
                                <input dir='ltr'  style={{textAlign:"right"}}    type="text" id="phone_number" value={phoneNumber} onChange={onChangePhoneNumber} required />
                                <input  dir='ltr'   style={{textAlign:"right"}}     type="text" id="phone_number_2" value={phoneNumber2} onChange={onChangePhoneNumber2} />
                                <label className='custom-file-upload'>
                                <input
                                    type="file"
                                    id="profile_img"
                                    onChange={onImageChange}
                                    className='custom-file-input'
                                />
                                <span className='file-upload-text'>Upload Photo</span>
                            </label>
                            {profileImg && <p className='selected-file'>Selected File: {profileImg.name}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
            <ToastContainer/>
        </main>
    );
};

export default AdminEditProfile;
