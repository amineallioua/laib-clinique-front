import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Coursecard from '../courses/courseCard'
import 'swiper/css';
import 'swiper/css/pagination';

const Hsec6 = () => {
  const swiperRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [workshop, setWorkshops] = useState([]); // State to hold fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/trainings/get_training'); // Example API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setWorkshops(result); 
        setLoading(false);// Store data in state
        
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    };

    fetchData();
  }, []); // Run once when component mounts

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
    <section data-aos="fade-down"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
     className="w-screen pb-16 bg-[#d4f5ff] justify-between text-center py-12">
      <h1 className="font-extrabold sm:text-[40px] mb-5 mx-auto text-center px-12">
        WORKSHOPS AND COURSES
      </h1>
      <h3 className="font-md sm:text-[25px] mb-10 mx-auto text-center px-12">
        EXPLORE A WIDE RANGE OF WORKSHOPS AND COURSES FOR INDIVIDUALS, FAMILIES, AND PROFESSIONALS
      </h3>
<center>
      <Swiper
        ref={swiperRef}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >

       
{loading ? (
          // Render placeholder cards while loading
          <>
            <SwiperSlide><Coursecard   Course={{ title: "loading"}} /></SwiperSlide>
            <SwiperSlide><Coursecard   Course= {{ title: "loading"}} /></SwiperSlide>
            <SwiperSlide><Coursecard   Course= {{ title: "loading"}} /></SwiperSlide>
            <SwiperSlide><Coursecard   Course= {{ title: "loading"}} /></SwiperSlide>
            <SwiperSlide><Coursecard   Course= {{ title: "loading"}} /></SwiperSlide>
          </>
        ) : (
          // Render actual data when loading is done
          workshop.map((item) => (
            <SwiperSlide key={item.id}> {/* Add a unique key prop */}
              <Coursecard Course={item} /> {/* Pass title as prop */}
            </SwiperSlide>
          ))
        )}
      </Swiper>
      </center>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrev}
          className="w-12 h-12 px-4 py-2 bg-[#4BA6C3] text-white font-bold rounded-lg"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-[#4BA6C3] text-white w-12 h-12 font-bold rounded-lg"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Hsec6;
