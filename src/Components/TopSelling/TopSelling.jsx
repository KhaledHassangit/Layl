// import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import {
//     Navigation,
//     Pagination,
//     Scrollbar,
//     A11y,
//     Autoplay
// } from "swiper/modules";
// import "swiper/css/autoplay";
// import "swiper/css/navigation";
// import { Container, Row } from "react-bootstrap";
// import ProductCard from "../Products/ProductCard";
// import TopSellingHook from "../../CustomHooks/Products/TopSelling-Hook";

// const TopSelling = () => {
//     const [topSelling, loading] = TopSellingHook();
//     const swiperRef = useRef(null);
//     const [centerText, setCenterText] = useState("More");

//     useEffect(() => {
//         const updateButtons = () => {
//             if (!swiperRef.current || !swiperRef.current.swiper) return;
    
//             const swiperInstance = swiperRef.current.swiper;
//             const isEnd = swiperInstance.isEnd;
//             const prevButton = document.querySelector(".swiper-button-prev");
//             const nextButton = document.querySelector(".swiper-button-next");
//             const centerTextElement = document.querySelector(".center-text");
    
//             if (isEnd) {
//                 prevButton.style.display = "flex";
//                 setCenterText("Back");
//             } else {
//                 prevButton.style.display = "none";
//                 setCenterText("More");
//             }
//             centerTextElement.classList.add("show");
//         };
    
//         if (swiperRef.current && swiperRef.current.swiper) {
//             const swiperInstance = swiperRef.current.swiper;
//             swiperInstance.on("slideChange", updateButtons);
//             updateButtons(); 
//         }
    
//         return () => {
//             if (swiperRef.current && swiperRef.current.swiper) {
//                 const swiperInstance = swiperRef.current.swiper;
//                 swiperInstance.off("slideChange", updateButtons);
//             }
//         };
//     }, []);
    
//     if (loading || !topSelling || topSelling.length < 5) {
//         return null;
//     }

//     const topSellingLimited = topSelling.slice(0, 10);

//     return (
//         <section className="top-selling font" id="top-selling">
//             <Container>
//                 <div className="main-heading">
//                     <h2>Top Selling</h2>
//                 </div>
//                 <Row>
//                     <div className="cards">
//                         <Swiper
//                             ref={swiperRef}
//                             onSwiper={(swiper) => {
//                                 swiperRef.current = swiper;
//                                 swiper.on("slideChange", () => {
//                                     const isEnd = swiper.isEnd;
//                                     const prevButton = document.querySelector(".swiper-button-prev");
//                                     const nextButton = document.querySelector(".swiper-button-next");
//                                     const centerTextElement = document.querySelector(".center-text");

//                                     if (isEnd) {
//                                         prevButton.style.display = "flex";
//                                         setCenterText("Back");
//                                     } else {
//                                         prevButton.style.display = "none";
//                                         setCenterText("More");
//                                     }
//                                     centerTextElement.classList.add("show");
//                                 });
//                             }}
//                             modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//                             spaceBetween={30}
//                             slidesPerView={4}
//                             navigation
//                             pagination={{ clickable: true }}
//                             scrollbar={{ draggable: true }}
//                             speed={500}
//                             autoplay={{ delay: 2500 }}
//                             breakpoints={{
//                                 100: {
//                                     slidesPerView: 1,
//                                 },
//                                 780: {
//                                     slidesPerView: 2,
//                                     spaceBetween: 10,
//                                 },
//                                 992: {
//                                     slidesPerView: 3,
//                                     spaceBetween: 20,
//                                 },
//                                 1200: {
//                                     slidesPerView: 4,
//                                     spaceBetween: 30,
//                                 },
//                             }}
//                         >
//                             {topSellingLimited.map((item) => (
//                                 <SwiperSlide key={item.id}>
//                                     <ProductCard item={item} />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>
//                         <div className="d-flex position-relative">
//                             <div className="center-text show">{centerText}</div>
//                         </div>
//                     </div>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default TopSelling;
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay
} from "swiper/modules";
import "swiper/css/autoplay";

import "swiper/css/navigation";
import { Container, Row} from "react-bootstrap";
import ProductCard from "../Products/ProductCard";

const TopSelling = () => {
    const swiperRef = useRef(null);
    const [centerText, setCenterText] = useState("More");
  
    useEffect(() => {
      if (swiperRef.current) {
        const swiperInstance = swiperRef.current.swiper;
  
        const updateButtons = () => {
          const isEnd = swiperInstance.isEnd;
          const prevButton = document.querySelector(".swiper-button-prev");
          const nextButton = document.querySelector(".swiper-button-next");
          const centerTextElement = document.querySelector(".center-text");
  
          if (isEnd) {
            prevButton.style.display = "flex";
            setCenterText("Back");
          } else {
            prevButton.style.display = "none";
            setCenterText("More");
          }
          centerTextElement.classList.add("show");
        };
  
        swiperInstance.on("slideChange", updateButtons);
        updateButtons(); // Initialize on mount
      }
    }, []);
  
  
    return (
        <section className="top-selling font">
        <Container>
            <div className="main-heading">
            <h2>Top Selling</h2>
            </div>
            <Row>
            <div className="cards">
                <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                speed={500} 
                autoplay={{ delay: 2500}} 
                breakpoints={{
                    100: {
                    slidesPerView: 1,
                    },

                    780: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                    },
                    992: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                    },
                    1200: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    },
                    1300: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                    },
                }}
                >
                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard/>
                </SwiperSlide>

                </Swiper>
                <div className="d-flex position-relative">
                <div className="center-text show">{centerText}</div>

                </div>
            </div>
            </Row>
        </Container>
        </section>
    );
};

export default TopSelling;
