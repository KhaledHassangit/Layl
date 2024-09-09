import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import { PiStarHalfFill } from "react-icons/pi";
import { FaBoxArchive, FaHeart, FaRegStar } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import rotatedbox from "../../Images/3d-rotate.png";
import FormatCurrency from "../ShoppingCart/FormatCurrency";


const ProductDetails = () => {

    const RatingStars = {
        size: 20,
        count: 5,
        color: "#D9D9D9",
        activeColor: "#FF9B1B",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <FaRegStar  />,
        halfIcon: <PiStarHalfFill />,
        filledIcon: <FaStar />,
        onChange: newValue => {
            console.log(`Example 2: new value is ${newValue}`);
        }
    };
    const [value, setValue] = useState(0);
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const toggleHeartIcon = () => {
        setIsHeartFilled(!isHeartFilled);
    };

    const increaseValue = () => {
        setValue(value + 1);
    };
    
    const decreaseValue = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };
    
    const handleChange = (event) => {
            setValue(event.target.value);
    };
    const [selectedColor, setSelectedColor] = useState(null);

    // Function to handle click event on an <li> element
    const handleClick = (color) => {
        setSelectedColor(color);
    };
    return (
        <section className='product-text'>
            <div className=' title mt-2 ms-2'>
                <h4 className='me-2'>Name of Product</h4>
            </div>
            <div className='mb-2 category'>
                <span className='ms-2'>Backpacks</span>
            </div>
            <div className='price  '>
                <h4 className='ms-2'>250 EGP</h4>
            </div>
            <div className=' d-flex flex-column'>
                <span className="mb-3 mt-3 ms-2" style={{fontSize:"12px",fontWeight:"500"}}>Available colours</span>
            <ul className='colors p-0 '>
            <li
                style={{ backgroundColor: "#002E48", border: selectedColor === "#002E48" ? "2px solid #FF9B1B" : "none" }}
                onClick={() => handleClick("#002E48")}
            >

            </li>
            <li
                style={{ backgroundColor: "#AFAAAA", border: selectedColor === "#AFAAAA" ? "2px solid #FF9B1B" : "none" }}
                onClick={() => handleClick("#AFAAAA")}
            >

            </li>
            <li
                style={{ backgroundColor: "#444444", border: selectedColor === "#444444" ? "2px solid #FF9B1B" : "none" }}
                onClick={() => handleClick("#444444")}
            >

            </li>
            <li
                style={{ backgroundColor: "#000000", border: selectedColor === "#000000" ? "2px solid #FF9B1B" : "none" }}
                onClick={() => handleClick("#000000")}
            >

            </li>
        </ul>
        </div>
            <hr/>
            <div className="">
                <div className='text-deatils '>
                <h6 className="mb-4 mt-4 " 
                style={{fontSize:"20px",fontWeight:"500"}}>Description</h6>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipi 
                    scing elit, sed diam nonummy nibh euismod 
                    tincidunt ut laoreet dolore magn. Lorem ipsum
                    dolor sit amet, consectetuer adipi scing elit, sed diam
                    nonummy nibh euismod tincidunt ut 
                    laoreet dolore magn. 
                    </p>
                
            </div>
            <div className='text-deatils ar d-flex align-items-end flex-column'>
            <h6 className="mb-3 mt-4" 
            style={{fontSize:"20px",fontWeight:"500",textAlign:"right"}}>الوصف</h6>
                <p className="ar mb-4">
                ابجد هوز حطى كلمن سعفص قرشت ثخذ ضظغ ابجد هوز حطى كلمن سعفص قرشت ثخذ ضظغ ابجد هوز حطى كلمن سعفص قرشت ثخذ ضظغ ابجد هوز حطى كلمن سعفص قرشت ثخذ ضظغ ابجد هوز حطى كلمن سعفص قرشت ثخذ ضظغ ابجد هوز حطى كلمن سعفص قرشت ثخذ ضظغ ابجد هوز حطى كلمن سعفص قرشت ثخذ                </p>
            
            </div>
        </div>
        <div className="buttons1 d-flex justify-content-center align-content-center ">
            <div className="input-number">
            <button className="ms-2 mb-2" onClick={decreaseValue}>-</button>
            <input
                type="number"
                value={value}
                onChange={handleChange}
                style={{ textAlign: "center" }}
            />
            <button className="me-2 mb-2" onClick={increaseValue}>+</button>
            </div>
            <button className="add-button" >Add to Cart</button>
            </div>
            <div className="d-flex justify-content-center  align-center mt-3 ">
            {/* <button className="buy-button ">Buy Now</button> */}
            </div>

            <div className="info mt-4">
                <div className="d-flex align-center text-center info-text ">
                    <FaBoxArchive style={{width:"26px",height:"26px" ,color:"#FF9B1B"}} />
                    {/* <img alt="" src={rotatedbox} style={{width:"32px",height:"32px",color:"#FF9B1B"}}/> */}
                    <p style={{color:"#D33234"}}>7 bags left in stoke</p>
                </div>

                <div className="d-flex align-center text-center info-text ">
                    <img alt="" src={rotatedbox} style={{width:"32px",height:"32px",color:"#FF9B1B"}}/>
                    {/* <FaShippingFast style={{width:"32px",height:"32px" ,color:"#FF9B1B"}}/> */}
                    <p>Delivers in: 4-5 Working Days Shipping & Return</p>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails
