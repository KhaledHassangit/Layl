import React from 'react'
import { Container } from 'react-bootstrap'
import { CiEdit } from 'react-icons/ci'
import { Link } from 'react-router-dom'

const AdminProfile = () => {
    return (
        <main className='mt-5 admin-profile admin-bg' dir='rtl' style={{ minHeight: "725px", maxWidth: "100%", margin: "0 auto" }}>
            <Container className="mt-2 ">
                <h4>اعدادات الصفحة الشخصية</h4>
                <div className='address-container'>
                    <div className='d-flex justify-content-between'>
                        <h6 className=' pe-1'>البيانات الشخصية</h6> 
                        <Link className='d-flex align-items-center edit'  to="/Admin/EditProfile" style={{textDecoration:"none"}} >
                        <div >
                        <CiEdit  />
                        <span>تعديل</span>
                        </div> 
                        </Link>
                    </div>
                    <div className='admin'>
                        <div className='d-flex justify-content-start mt-3 user-info '>
                            <ul  className='d-flex flex-column align-items-start  '>
                                <li>الأسم</li>
                                <li>البريد الألكتروني</li>
                                <li>كلمة المرور:</li>
                                </ul>
                                <ul className='data d-flex flex-column  align-items-start' >
                                <li id="username"> أحمد احمد </li>
                                <li id="email">User145263@gmail.com</li>
                                <li id="password">**********</li>
                                </ul>
                            </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default AdminProfile
