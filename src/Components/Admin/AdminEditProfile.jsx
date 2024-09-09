import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { CiEdit } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const AdminEditProfile = () => {
    return (
        <main className='mt-5 admin-profile edit-profile admin-bg' dir='rtl' style={{ minHeight: "725px", maxWidth: "100%", margin: "0 auto" }}>
            <Container className="mt-2 ">
                <h4>اعدادات الصفحة الشخصية</h4>
                <div className='address-container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h6 className=' pe-1'>البيانات الشخصية</h6> 
                        <div  className='d-flex align-items-center edit'>
                        <Button  className="save">حفظ</Button>
                        </div> 
                    </div>
                    <div className='admin'>
                        <div className='d-flex justify-content-start mt-3 user-info '>
                            <ul  className='d-flex flex-column align-items-start ms-3  '>
                                <li>الأسم</li>
                                <li>البريد الألكتروني</li>
                                <li>كلمة المرور:</li>
                                </ul>
                                <form className='data d-flex flex-column align-items-start'>
                                    <input type="text" id="username" placeholder="أحمد احمد"  />
                                    <input type="email" id="email" placeholder="User145263@gmail.com" />
                                    <input type="password" id="password" placeholder="**********" />
                                </form>

                            </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default AdminEditProfile
