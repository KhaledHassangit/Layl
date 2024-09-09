import React from 'react'
import {Col} from "react-bootstrap";
import prodimg from "../../Images/ProdImg.webp";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import {  NavLink } from "react-router-dom";

const ProductCard = () => {

    return( 
        <Col xs="12" sm="6" md="4" lg="3"  >
        <Link aria-label="Product Details " to="/Products/ProductDetails" style={{textDecoration:"none"}}>
        <Card className='product-card' 
            style={{
            maxWidth: "20rem",
            maxHeight: "450px",
            borderRadius: "10px",
            }}>
                <Card.Img
                style={{
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                }}
                src={prodimg}
                alt="ProductImg"
                />
            <Card.Body className='ms-3 mb-2'>
                <div className='d-flex justify-content-between align-items-center ' >
                <Card.Title>Products name</Card.Title>
                <NavLink aria-label="Cart Page"  to="Cart" style={{textDecoration:"none",color:"white",paddingRight:"10px",fontWeight:"bold"}}>
                <FaCartShopping style={{ cursor: "pointer",width:"25px",height:"25px" }} />
                </NavLink>

                </div>
            <span className="price">250.00 EGP</span>
            </Card.Body>
        </Card>
        </Link>
        </Col>
)
}

export default ProductCard
