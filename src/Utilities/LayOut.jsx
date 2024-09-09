import React from 'react';
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import ScrollTop from './ScorllTop'
import Footer from './Footer';

const LayOut = () => {
    return (
        <main>
        <ScrollTop/>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </main>
    )
}

export default LayOut