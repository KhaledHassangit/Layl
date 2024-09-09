import React, { useEffect, useState } from "react";
import Logo from "../../Images/Logo.png";
import { FaCirclePlus } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineEditNote } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbDiscount2 } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';
import AdminNav from "./AdminNav";
import { MdHomeFilled } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const AdminSidebar = () => {
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

        handleResize(); // Check on component mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section>
            <AdminNav />
            <nav dir="rtl" className={`sidebar-dash ${!isSidebarOpen ? 'close' : ''}`}>
                <div className="logo_items flex">
                    <a className="nav_image" href="/">
                        <img src={Logo} alt="logo_img" />
                    </a>
                    <span className="logo_name">ليل - Layl</span>
                </div>

                <div className="menu_container">
                    <div className="menu_items">
                        <ul className="menu_item">
                            <li className={`item ${currentPath === '/Admin/Home' ? 'active' : ''}`}>
                                <Link to="/Admin/Home" className="link flex">
                                    <MdHomeFilled />
                                    <span> الصفحة الرئيسية</span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/Admin/Products' || currentPath === '/Admin/AddProduct' ? 'active' : ''}`}>
                                <Link to="/Admin/Products" className="link flex">
                                    <FaBagShopping />
                                    <span>المنتجات </span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/Admin/Orders' ? 'active' : ''}`}>
                                <Link to="/Admin/Orders" className="link flex">
                                    <FaShoppingCart />
                                    <span>الطلبات</span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/Admin/Discounts' || currentPath === '/Admin/Vouchers' ? 'active' : ''}`}>
                                <Link to="/Admin/Discounts" className="link flex">
                                    <TbDiscount2 />
                                    <span>العروض و الخصومات </span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/Admin/CustomerRequests' ? 'active' : ''}`}>
                                <Link to="/Admin/CustomerRequests" className="link flex">
                                    <IoDocumentTextOutline />
                                    <span>طلبات العملاء</span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/Admin/Users' ? 'active' : ''}`}>
                                <Link to="/Admin/Users" className="link flex">
                                    <FaPeopleGroup />
                                    <span>المستخدمين </span>
                                </Link>
                            </li>
                            <li className={`item ${currentPath === '/Admin/Profile'|| currentPath === '/Admin/EditProfile'  ? 'active' : ''}`}>
                                <Link to="/Admin/Profile" className="link flex">
                                    <FaUser />
                                    <span> الصفحة الشخصية </span>
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
