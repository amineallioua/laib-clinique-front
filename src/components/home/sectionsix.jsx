import Wcard from '../workshopCard'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

  

// import required modules

const Hsec6 = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

    return (  
        <section className="w-screen    pb-16 bg-[#d4f5ff] justify-between text-center py-12  " >
            <h1 className="font-extrabold sm:text-[40px] mb-5 mx-auto text-center px-12 " >WORKSHOPS AND COURSES</h1>
            <h3 className="font-md sm:text-[25px] mb-10 mx-auto text-center px-12" >EXPLORE A WIDE RANGE OF WORKSHOPS AND COURSES FOR INDIINDIVIDUALSM FAMILIES AND PROFESSPROFESSIONALS</h3>
                
                <Swiper
                 ref={swiperRef}
                 loop={true} 
           breakpoints={{
            0:{
              slidesPerView: 3,
              spaceBetween: 170,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          
        className="mySwiper"
      >
        <SwiperSlide className='w-[170px]' ><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide> <Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
        <SwiperSlide><Wcard/></SwiperSlide>
      </Swiper>
        <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-[#4BA6C3] text-white font-bold rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-[#4BA6C3] text-white font-bold rounded-lg"
        >
          Next
        </button>
      </div>
        </section>
    );
}
 
export default Hsec6;