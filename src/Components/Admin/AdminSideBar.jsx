import React, { useEffect, useState } from "react";
import Logo from "../../Images/Logo.webp";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbDiscount } from "react-icons/tb";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AdminNav from "./AdminNav";
import { MdHomeFilled } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import Cookie from 'universal-cookie';

const AdminSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 800) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        handleResize(); 
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const cookie = new Cookie();

    let userData = "";
    if (cookie.get('UserData') !== null) {
        userData = cookie.get('UserData');
    }

    const logOut = () => {
            navigate('/');
    };

    return (
        <section>
            <AdminNav />
            <nav dir="rtl" className={`sidebar-dash ${!isSidebarOpen ? 'close' : ''}`}>
                <div className="logo_items flex">
                    <Link to="/" className="nav_image">
                        <img loading='lazy' src={Logo} alt="logo_img" />
                        <span className="logo_name">ليل - Layl</span>
                    </Link>
                </div>

                <div className="menu_container">
                    <div className="menu_items">
                        <ul className="menu_item">
                            <li className={`item ${currentPath === '/admin/home' ? 'active' : ''}`}>
                                <Link to="/admin/home" className="link flex">
                                    <MdHomeFilled />
                                    <span> الصفحة الرئيسية</span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/admin/products' || currentPath === '/admin/addproduct' || currentPath.includes("/admin/editproduct/") ? 'active' : ''}`}>
                                <Link to="/admin/products" className="link flex">
                                    <FaBagShopping />
                                    <span>المنتجات </span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/admin/orders' || currentPath.startsWith('/admin/orderdetails/') ? 'active' : ''}`}>
                                <Link to="/admin/orders" className="link flex">
                                    <FaShoppingCart />
                                    <span>الطلبات</span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/admin/discounts' || currentPath === '/admin/vouchers' ? 'active' : ''}`}>
                                <Link to="/admin/discounts" className="link flex">
                                    <TbDiscount />
                                    <span>العروض و الخصومات </span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/admin/customerrequests' ? 'active' : ''}`}>
                                <Link to="/admin/customerrequests" className="link flex">
                                    <IoDocumentTextOutline />
                                    <span>طلبات العملاء</span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/admin/users' ? 'active' : ''}`}>
                                <Link to="/admin/users" className="link flex">
                                    <FaPeopleGroup />
                                    <span>المستخدمين </span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/admin/profile' || currentPath === '/admin/editprofile' ? 'active' : ''}`}>
                                <Link to="/admin/profile" className="link flex">
                                    <FaUser />
                                    <span> الصفحة الشخصية </span>
                                </Link>
                            </li>
                            <li className="item log-out " onClick={logOut}>
                                <Link className="link flex">
                                    <IoLogOut />
                                    <span> تسجيل الخروج</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </section>
    );
};

export default AdminSidebar;
