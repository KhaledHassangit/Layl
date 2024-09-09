import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Landing from '../../Components/Landing/Landing';
import NavBar from '../../Utilities/NavBar';
import TopSelling from '../../Components/TopSelling/TopSelling';
import NewArrivals from '../../Components/NewArrivals/NewArrivals';
import AboutLayl from '../../Components/AboutLayl/AboutLayl';
import Footer from '../../Utilities/Footer';
import Contact from '../../Components/Contact/ContactUs';
import homebg from '../../Images/homebg.webp';
import homebg2 from '../../Images/homebg2.webp';
import LazyBackground from '../../Utilities/LazyBackground';

const HomePage = () => {
  const [backgroundImage, setBackgroundImage] = useState(homebg);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage(prevBackground => (prevBackground === homebg ? homebg2 : homebg));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Layl</title>
        <meta name="description" content="Home Page" />
        <link rel="preload" as="image" href={homebg} />
        <link rel="preload" as="image" href={homebg2} />
      </Helmet>
      <LazyBackground className='homepage' src={backgroundImage}>
        <NavBar />
        <Landing />
      </LazyBackground>
      <section className='web-content'>
        <TopSelling />
        <NewArrivals />
        <AboutLayl />
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
