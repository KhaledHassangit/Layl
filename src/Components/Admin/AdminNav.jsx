import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { HiBell } from "react-icons/hi";
import { TiStarFullOutline } from "react-icons/ti";
import { IoDownload } from "react-icons/io5";
import ScrollTop from "../../Utilities/ScorllTop";

const AdminNav = () => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar-dash");
    if (sidebar) {
      sidebar.classList.toggle("close");

    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const notificationCount = 3;

  return (
    <>
      <ScrollTop/>
    <div className="d-flex justify-content-center">
      <nav className="navbar-dash " style={{background:"#000000",width:"100vw"}}>
        <div>
          <RxHamburgerMenu
            className="bx-menu"
            id="sidebar-dash-open"
            onClick={toggleSidebar}
          />
        </div>
        <div className="dropdown" ref={dropdownRef}>
          <div className="notify d-flex align-items-center " onClick={toggleDropdown}>
            <span >الاشعارات</span>
            <span className="badge ">{notificationCount}</span>
            <HiBell className="bell-icon" />
          </div>
          {isOpen && (
            <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
              <h6>لديك إشعارات جديدة .</h6>
              <hr className="mb-2" />
              <div className="d-flex align-items-center notifiy-container ">
                <TiStarFullOutline className="icon " style={{ width: "25px", height: "25px" }} color="white" />
                <a href="#"> لقد استلمت طلب من “user 123@gmail.com” لتحويل الحساب لتاجر. </a>
              </div>
              <div className="d-flex align-items-center">
                <IoDownload  className="icon " style={{ width: "25px", height: "25px" }} color="white" />
                <a href="#"> لديك 10 طلبات جديدة </a>
              </div>
            </div>
          )}
        </div>

        <div className="search-box-container d-flex justify-content-end align-items-end flex-grow-1">
          <input
            type="text"
            placeholder=" ....أبحث هنا "
            className="search_box"
          />
          <FiSearch className="search-icon" />
        </div>
      </nav>
    </div>
    </>
  );
};

export default AdminNav;
