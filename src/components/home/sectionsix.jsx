import Wcard from '../workshopCard'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules

const Hsec6 = () => {
    return (  
        <section className="w-screen    pb-16 bg-[#d4f5ff] justify-between text-center py-12  " >
            <h1 className="font-extrabold sm:text-[40px] mb-5 mx-auto text-center px-12 " >WORKSHOPS AND COURSES</h1>
            <h3 className="font-md sm:text-[25px] mb-10 mx-auto text-center px-12" >EXPLORE A WIDE RANGE OF WORKSHOPS AND COURSES FOR INDIINDIVIDUALSM FAMILIES AND PROFESSPROFESSIONALS</h3>
                
                <Swiper
           breakpoints={{
        // When the window width is >= 640px
        640: {
          slidesPerView: 1, // 1 slide for small screens
        },
        // When the window width is >= 768px
        768: {
          slidesPerView: 2, // 2 slides for medium screens
        },
        // When the window width is >= 1024px
        1024: {
          slidesPerView: 3, // 3 slides for large screens
        },
      }}
        spaceBetween={10}
       
        className="mySwiper"
      >
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide> <Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
      </Swiper>
        </section>
    );
}
 
export default Hsec6;