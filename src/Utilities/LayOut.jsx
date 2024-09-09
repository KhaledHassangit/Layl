import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import ScrollTop from './ScorllTop'

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