import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logowebp from "../Images/Logo.webp";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import Cookie from 'universal-cookie';
import GetUserCartHook from "../CustomHooks/Cart/GetUserCart-Hook";
import NavBarSearchHook from "../CustomHooks/Search/NavBarSearch-Hook";
import anonymous from "../Images/anonymous-user.webp"
const NavBar = () => {

  const [AllCartres, getAllCart] = GetUserCartHook();
  const [itemsNum, setItemsNum] = useState(0);

  useEffect(() => {
    if (AllCartres && AllCartres.data && AllCartres.data.cart_items) {
      setItemsNum(AllCartres.data.cart_items.length);
    }
  }, [AllCartres]);

  useEffect(() => {
    getAllCart();

  }, []);


  const cookie = new Cookie();
  let userData = cookie.get('UserData') || "";
  let accountType = userData.is_superuser ? "Admin" : (userData.account_type === "Merchant" ? "Merchant" : "User");
  const logOut = () => {
    cookie.remove("UserData", { path: '/' });
    cookie.remove("Access Token", { path: '/' });
    cookie.remove("Refresh Token", { path: '/' });
    setTimeout(() => {
      window.location.href = "/";
    }, 100);
  };

  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const [searchWord, setSearchWord, onChangeSearch, getProducts] = NavBarSearchHook();

  const toggleSearch = (e) => {
    setShowSearch(!showSearch);
    e.stopPropagation();
  };

  const closeSearch = () => {
    setShowSearch(false);
  };

  const handleSearchButtonClick = () => {
    if (searchWord) {
      clearSearch();
    } else {
      closeSearch();
    }
  };

  const clearSearch = () => {
    setSearchWord('');
    localStorage.removeItem("searchWord");
  };

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const scrollToAbout = () => scrollToSection('About-us');
  const scrollToContact = () => scrollToSection('Contact-us');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container') && !event.target.closest('.icons')) {
        closeSearch();
      }
    };

    if (showSearch) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showSearch]);
  
  return (
    <>
      <Navbar style={{ zIndex: "101" }} expand="lg" className="d-flex flex-nowrap navbar-solid">
        <Container>
          <Link to="/">
            <picture className='img-box'>
              <source srcSet={Logowebp} type="image/webp" />
              <img src={Logowebp} alt="Logo" width="80" height="80" />
            </picture>
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end">
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body className={`navbaroff ${userData ? 'logged-in' : ''}`}>
              <Nav className="m-auto my-2 my-lg-0 p">
                <NavLink aria-label="Home Page " to="/" className="nav-link" style={{ textDecoration: "none" }}>
                  Home
                </NavLink>
                <NavLink aria-label="Products Page" to="/products" className="nav-link" style={{ textDecoration: "none" }}>
                  Products
                </NavLink>
                <NavLink aria-label="About Section " className="nav-link" onClick={scrollToAbout} to="/" style={{ textDecoration: "none" }}>
                  About Us
                </NavLink>
                <NavLink aria-label="Contact Section " className="nav-link" onClick={scrollToContact} to="/" style={{ textDecoration: "none" }}>
                  Contact Us
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <ul className="d-flex justify-content-center text-center align-items-center icons">
            <li onClick={toggleSearch}>
              <FaSearch style={{ cursor: "pointer" }} />
            </li>

            <li>
              {userData && userData.full_name ? (
                <NavDropdown
                  title={
                    <div className='d-flex align-items-center justify-content-start text-start '>
                      {userData.profile_img ? (
                        <img
                          src={`http://localhost:8000${userData.profile_img}`}
                          alt="Profile"
                          style={{ width: "40px", height: "40px", borderRadius: "50%" ,
                                  border:"1px solid #938989",marginTop:"8px"}}
                        />
                      ) : (
                        <FaUser style={{ cursor: "pointer", fontSize: "1.5rem" }} />
                      )}
                    </div>
                  }
                  id="basic-nav-dropdown"
                >
                  <div className="text-left  justify-content-start d-flex align-items-start gap-2 p-2">
                    {userData.profile_img ? (
                        <img
                          src={`http://localhost:8000${userData.profile_img}`}
                          alt="Profile"
                          style={{ width: "45px", height: "45px", borderRadius: "50%",border:"1px solid #938989"}}
                        />
                    ) : (
                      <img src={anonymous} alt="anonymous-user"
                      style={{ width: "45px", height: "45px", borderRadius: "50%",border:"1px solid #938989"}}/>
                    )}
                    <div>
                      <strong style={{whiteSpace:"nowrap"}}>{userData.full_name}</strong> <br />
                      <small>{accountType}</small>
                    </div>
                  </div>
                  {userData.is_superuser ? (
                    <NavDropdown.Item as={Link} to="/admin/home">Owner Dashboard</NavDropdown.Item>
                  ) : (
                    <NavDropdown.Item  as={Link} to="/users/me">Profile</NavDropdown.Item>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logOut} className="text-danger">Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink
                  to="/login"
                  className='pe-0'
                  aria-label="Login"
                  style={{ textDecoration: "none" }}
                >
                  <FaUser style={{ cursor: "pointer" }} />
                </NavLink>
              )}
            </li>

            <li className="position-relative">
              <NavLink aria-label="Cart" to="cart" style={{ textDecoration: "none" }}>
                <FaCartShopping style={{ cursor: "pointer" }} />
                <span className="position-absolute translate-middle badge rounded-pill">{itemsNum}</span>
              </NavLink>
            </li>
          </ul>
          <div className={`search-container ${showSearch ? 'show' : ''}`}>
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search..."
                value={searchWord}
                onChange={onChangeSearch}
              />
              <button className="search-toggle" onClick={handleSearchButtonClick}>
                {searchWord ? 'Remove' : 'Close'}
              </button>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
