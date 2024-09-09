import React from 'react'
import svg from "../Images/404.svg"
import {Link} from "react-router-dom"
const PageNotFound = () => {
    return (
        <>
            <div className="cont-404">
                <img src={svg} alt="svg"  loading='lazy'/>
                <Link to="/">
                <button>Back to Home</button>
                </Link>
            </div>
        </>
    );}

export default PageNotFound
