import React, { useState ,useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import TopSelling from '../../Components/TopSelling/TopSelling';
import NewArrivals from '../../Components/NewArrivals/NewArrivals';
import AboutLayl from '../../Components/AboutLayl/AboutLayl';
import Contact from '../../Components/Contact/ContactUs';
import LazyBackground from '../../Utilities/LazyBackground';
import HomeDiscountHook from '../../CustomHooks/Search/HomeDiscount-Hook';

const HomePage = () => {
  const { backgroundImage, offerImages, handleImageClick,homebg } = HomeDiscountHook()
  return (
    <>
      <Helmet>
        <title>Layl</title>
        <meta name="description" content="Home Page" />
        <link rel="preload" as="image" href={homebg} />
        {offerImages.filter((img) => img !== homebg).map((offer) => (
          <link key={offer.img} rel="preload" as="image" href={offer.img} fetchPriority='high' />
        ))}
      </Helmet>
      <div onClick={handleImageClick}>
        <LazyBackground
          className="homepage"
          src={backgroundImage}
          style={{ cursor: backgroundImage === homebg ? 'default' : 'pointer' }}
        >
        </LazyBackground>
      </div>
      <section className="web-content">
        <TopSelling />
        <NewArrivals />
        <AboutLayl />
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
