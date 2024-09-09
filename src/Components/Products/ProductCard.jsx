// import React from 'react'
// import { Col } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import { Link } from 'react-router-dom';
// import { FaCartShopping } from "react-icons/fa6";
// import { NavLink } from "react-router-dom";
// import Cookie from 'universal-cookie';

// const ProductCard = ({ item }) => {
//     const cookie = new Cookie();

//     let userData = "";
//     if (cookie.get('UserData') !== null) {
//         userData = cookie.get('UserData');
//     }
//     const isMerchant = userData && userData.account_type === 'Merchant';

//     if (item)
//         return (
//     <Col xs="12" sm="6" md="4" lg="3"  >
//                     <Link aria-label="Product Details " to={`/products/productdetails/${item.id}`} style={{ textDecoration: "none" }}>
//                         <Card className='product-card'
//                             style={{
//                                 maxWidth: "20rem",
//                                 width: "17rem",
//                                 maxHeight: "400px",
//                                 height: "380px",
//                                 borderRadius: "10px",
//                             }}>
//                             <Card.Img
//                                 loading='lazy'
//                                 style={{
//                                     width: "100%",
//                                     maxWidth: "300px",
//                                     height: "280px",
//                                     maxHeight: "300px",
//                                     cursor: "pointer",
//                                 }}
//                                 src={item.imgs && item.imgs.length > 0 ? `http://127.0.0.1:8000${item.imgs[0].img}` : null}
//                                 alt="ProductImg"
//                             />
//                             <Card.Body className='ms-3 mb-2'>
//                                 <div className='d-flex justify-content-between align-items-center ' >
//                                     <Card.Title>{item.name}</Card.Title>
//                                     <NavLink aria-label="Cart Page" to={`/products/productdetails/${item.id}`} style={{ textDecoration: "none", color: "white", paddingRight: "10px", fontWeight: "bold" }}>
//                                         <FaCartShopping style={{ cursor: "pointer", width: "25px", height: "25px" }} />
//                                     </NavLink>
//                                 </div>
//                                 <span className='price'>
//                                     {isMerchant && item.merchant_price ? (
//                                         <span className="merchant-price ">{item.merchant_price} EGP</span>
//                                     ) : (
//                                         item.new_price.has_offer ? (
//                                             <>
//                                                 <span className="old-price ">{item.old_price} EGP</span>
//                                                 <span className="new-price mt-1  ms-1">{item.new_price.new_price} EGP</span>
//                                             </>
//                                         ) : (
//                                             <span>{item.old_price} EGP</span>
//                                         )
//                                     )}
//                                 </span>

//                             </Card.Body>
//                         </Card>
//                     </Link>
//                 </Col>
//         )
// }

// export default ProductCard
import React from 'react'
import { Col } from "react-bootstrap";
import prodimg from "../../Images/ProdImg.webp";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ProductCard = () => {

    return (
        <Col xs="12" sm="6" md="4" lg="3"  >
            <Link aria-label="Product Details " to="/products/productdetails/" style={{ textDecoration: "none" }}>
                <Card className='product-card'
                    style={{
                        maxWidth: "20rem",
                        width: "17rem",
                        maxHeight: "400px",
                        height: "380px",
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
                            <NavLink aria-label="Cart Page" to="Cart" style={{ textDecoration: "none", color: "white", paddingRight: "10px", fontWeight: "bold" }}>
                                <FaCartShopping style={{ cursor: "pointer", width: "25px", height: "25px" }} />
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
