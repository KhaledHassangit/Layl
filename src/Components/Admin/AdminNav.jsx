import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiBell } from "react-icons/hi";
import { PiGitPullRequestBold } from "react-icons/pi";
import { IoDownload } from "react-icons/io5";
import { RiAlarmWarningFill, RiDeleteBinLine } from "react-icons/ri";
import { BiSolidDiscount } from "react-icons/bi";
import { RiDiscountPercentFill } from "react-icons/ri";
import ScrollTop from "../../Utilities/ScorllTop";
import { Helmet } from 'react-helmet-async';
import { useWebSocket } from "../../CustomHooks/Notification/UseWebSocket";
import { useNavigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayCount, setDisplayCount] = useState(4);
  const [deletingId, setDeletingId] = useState(null);
  const [animationState, setAnimationState] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const loadMoreNotifications = () => {
    setDisplayCount(prevCount => prevCount + 4);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const baseUrl = 'ws://127.0.0.1:8000/ws/notifications/';
  const [messages, res, handleDeleteNotification,getNotifications] = useWebSocket(baseUrl);

  const handleNotificationClick = (message) => {
    let targetPath = '';

    if (message.type === 'Order') {
      targetPath = `/admin/orderdetails/${message.data.order_id}`;
    } else if (message.type === 'Request') {
      targetPath = '/admin/customerrequests';
    } else if (message.type === 'Quantity Alarm') {
      targetPath = `/admin/editproduct/${message.data.product}`;
    } else if (message.type === 'Discount Alarm') {
      targetPath = '/admin/discounts';
    } else if (message.type === 'Coupon Alarm') {
      targetPath = '/admin/vouchers';
    }
    if (location.pathname !== targetPath) {
      navigate(targetPath);
    }
  };

  const handleDelete = async (id) => {
    setDeletingId(id);
    setAnimationState(id);
    await handleDeleteNotification(id);
    setTimeout(() => setAnimationState(null), 800);
  };

  useEffect(() => {
    if (messages.length > 0) {
      const latestMessage = messages[messages.length - 1];
      let toastMessage = '';

      if (latestMessage.order_id) {
        toastMessage = `Order`;
      } else if (latestMessage.user_id) {
        toastMessage = `Merchant Request`;
      } else if (latestMessage.product) {
        toastMessage = `Quantity Alarm`;
      } else {
        toastMessage = latestMessage.event;
      }
  console.log(messages)
  console.log(res)
      toast(`🔔 New Notification: ${toastMessage}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        className: "toast-progress-custom", 
        onClose: getNotifications() 

      });
    }
  }, [messages]);

  return (
    <>
      <ScrollTop />
      <Helmet>
        <title>Layl | Admin Dashboard</title>
        <meta name="description" content="Admin Dashboard Page" />
        <link rel="icon" href="/Logo.webp" />
      </Helmet>
      <div className="d-flex justify-content-center">
        <nav className="navbar-dash" style={{ background: "#000000", width: "100vw" }}>
          <div>
            <RxHamburgerMenu
              className="bx-menu"
              id="sidebar-dash-open"
              onClick={() => document.querySelector(".sidebar-dash")?.classList.toggle("close")}
            />
          </div>

          <div className="dropdown" ref={dropdownRef}>
            <div className="notify d-flex align-items-center" onClick={toggleDropdown}>
              <span>الإشعارات</span>
              <span className="badge">{(res && res.data ? res.data.length : 0) + messages.length}</span>
              <HiBell className="bell-icon" />
            </div>
            {isOpen && (
            <div className={`dropdown-content ${isOpen ? 'show' : ''}`} style={{ maxHeight: '400px', overflow: 'auto' }}>
              <h6>لديك <span className="mx-1" style={{ color: "#FF9B1B" }}>{(res && res.data ? res.data.length : 0) + messages.length}</span> إشعارات جديدة.</h6>
              <hr className="mb-2" />
              {[...messages, ...res.data].slice().reverse().slice(0, displayCount).map((message, index) => (
                <div key={index} className="d-flex align-items-center notifiy-container">
                  {message.type === 'Request' && <PiGitPullRequestBold className="icon" style={{ width: "25px", height: "25px", color: "rgb(50, 175, 30)" }} />}
                  {message.type === 'Order' && <IoDownload className="icon" style={{ width: "25px", height: "25px", color: "rgb(18 171 207)" }} />}
                  {message.type === 'Quantity Alarm' && <RiAlarmWarningFill className="icon" style={{ width: "25px", height: "25px", color: "#e72323" }} />}
                  {message.type === 'Coupon Alarm' && <BiSolidDiscount className="icon" style={{ width: "25px", height: "25px", color: "rgb(225 147 25)" }} />}
                  {message.type === 'Discount Alarm' && <RiDiscountPercentFill className="icon" style={{ width: "25px", height: "25px", color: "rgb(225 147 25)" }} />}
                  <a style={{ color: "white", cursor: "pointer", flexGrow: 1 }} onClick={() => handleNotificationClick(message)}>{message.message}</a>
                  <RiDeleteBinLine className="delete-icon" style={{ minWidth: "25px", minHeight: "25px", cursor: "pointer", marginLeft: "10px" }} onClick={() => handleDelete(message.id)} />
                  {animationState === message.id && (
                    <div className="border-animation"></div>
                  )}
                </div>
              ))}
              {displayCount < (res && res.data ? res.data.length : 0) + messages.length && (
                <div className="d-flex justify-content-center mt-2">
                  <button onClick={loadMoreNotifications} className="view-more-link">عرض الإشعارات السابقة</button>
                </div>
              )}
            </div>
          )}
          </div>
        </nav>
      </div>
      <ToastContainer />
    </>
  );
};

export default AdminNav;
