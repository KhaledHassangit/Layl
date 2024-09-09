import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logowebp from "../Images/Logo.webp"
import {  NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false); 
  const location = useLocation();
  const isHomepage = location.pathname === '/';


  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const scrollToAbout = () => {
    const AboutSection = document.getElementById('About-us');
    if (AboutSection) {
      AboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToContact = () => {
    const AboutSection = document.getElementById('Contact-us');
    if (AboutSection) {
      AboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <>
      
    <Navbar expand="lg" className={`d-flex flex-nowrap ${isHomepage ? 'navbar-transparent' : 'navbar-solid'}`}>
          <Container >
          <Navbar.Brand href="/">
          <picture className='img-box'>
            <source srcSet={Logowebp} type="image/webp" />
            <img src={Logowebp} alt="Logo" width="80" height="80" />
          </picture>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end">
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body className="navbaroff">
                <Nav className="m-auto my-2 my-lg-0 p">
                <NavLink aria-label="Home Page " to="/" className="nav-link" style={{textDecoration:"none"}}> 
                  Home
                </NavLink>

                  <NavLink  aria-label="Product Page "   to="Products"  className="nav-link" style={{textDecoration:"none"}}> Products</NavLink>
              
                  <NavLink aria-label=" About Section " className="nav-link"   onClick={scrollToAbout}   to="/" style={{textDecoration:"none"}}>
                    About Us
                  </NavLink>
                  <NavLink aria-label=" Contact Section " className="nav-link" onClick={scrollToContact}  to="/" style={{textDecoration:"none"}}>
                    Contact Us
                  </NavLink>
                </Nav>
          

              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <ul className="d-flex justify-content-center text-center align-items-center icons">

              <li onClick={toggleSearch}>
                <FaSearch  style={{ cursor: "pointer"}} />
              </li>

              <li>
                <NavLink aria-label="User/Admin  Page "  to="Login" style={{textDecoration:"none"}}>
                  <FaUser style={{ cursor: "pointer" }} />
                </NavLink>

              </li>

              <li>
              <NavLink aria-label="Cart"  to="Cart" style={{textDecoration:"none"}}>
              <FaCartShopping style={{ cursor: "pointer" }} />
                </NavLink>
              </li>
              </ul>
              {/* {showSearch && (
              <div className="search-container">
              <input type="text" placeholder="Search..." />
              </div>
              )} */}
          </Container>
        </Navbar>

      </>
    );
}


export default NavBar;
