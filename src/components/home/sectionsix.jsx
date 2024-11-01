import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // Import useTranslation

import Coursecard from '../courses/courseCard';
import 'swiper/css';
import 'swiper/css/pagination';

const Hsec6 = () => {
  const swiperRef = useRef(null);
  const { t } = useTranslation(); // Initialize translation hook
  const [loading, setLoading] = useState(true);
  const [workshops, setWorkshops] = useState([]); // State to hold fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/trainings/get_training'); // Example API
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setWorkshops(result);
        setLoading(false); // Store data in state
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    };

    fetchData();
  }, []);

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
    <section
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      className="w-screen pb-16 bg-[#d4f5ff] text-center py-12"
    >
      <h1 className="font-extrabold text-4xl mb-5 mx-auto text-center px-12">
        {t('sectionSix.title')}
      </h1>
      <h3 className="font-medium text-2xl mb-10 mx-auto text-center px-12">
        {t('sectionSix.subtitle')}
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
            Array(4).fill().map((_, index) => (
              <SwiperSlide key={index}>
                <Coursecard Course={{ title: t('loading') }} />
              </SwiperSlide>
            ))
          ) : (
            // Render actual data when loading is done
            workshops.map((item) => (
              <SwiperSlide key={item.id}>
                <Coursecard Course={item} />
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
