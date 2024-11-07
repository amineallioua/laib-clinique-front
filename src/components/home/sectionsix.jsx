import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Coursecard from '../courses/courseCard';
import 'swiper/css';
import 'swiper/css/pagination';

const Hsec6 = () => {
  const swiperRef = useRef(null);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const [loading, setLoading] = useState(true);
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/trainings/get_training_client');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setWorkshops(result);
        setLoading(false);
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
          dir={isArabic ? 'rtl' : 'ltr'} // Adjust direction based on language
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            845: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1224: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {loading ? (
            Array(4).fill().map((_, index) => (
              <SwiperSlide key={index}>
                <SkeletonCourseCard />
              </SwiperSlide>
            ))
          ) : (
            workshops.map((item) => (
              <SwiperSlide key={item.id}>
                <Coursecard Course={item} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </center>

      <div className={`flex justify-center mt-8 space-x-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
        <button
          onClick={handlePrev}
          className="w-12 h-12 px-4 py-2 bg-[#4BA6C3] text-white font-bold rounded-lg"
        >
          {isArabic ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-[#4BA6C3] text-white w-12 h-12 font-bold rounded-lg"
        >
          {isArabic ? <FaArrowLeft /> : <FaArrowRight />}
        </button>
      </div>
    </section>
  );
};

// Skeleton loader for the CourseCard
const SkeletonCourseCard = () => (
  <div className="w-full h-[310px] bg-white shadow-md rounded-lg overflow-hidden p-4 animate-pulse">
    {/* Skeleton for Course Image */}
    <div className="bg-gray-300 h-[150px] w-full rounded-[20px] mb-4"></div>
    
    {/* Skeleton for Title */}
    <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
    
    {/* Skeleton for Description */}
    <div className="w-1/2 h-3 bg-gray-300 rounded mb-4"></div>
    
    {/* Skeleton for Type */}
    <div className="w-1/3 h-4 bg-gray-300 rounded mb-2"></div>
  </div>
);

export default Hsec6;
