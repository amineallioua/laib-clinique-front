import React from 'react';
import nurce from '../../assets/Component.png';
import claws from '../../assets/claws.png';
import avicii from '../../assets/avicii.png';
import grid from '../../assets/grid.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Hsec1() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation(); // Initialize translation and get language

  // Check if the current language is Arabic
  const isArabic = i18n.language === 'ar';

  return (
    <section
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      className={`flex flex-col ${isArabic ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mt-[68px] justify-between w-screen px-12 mx-auto bg-[#d4f5ff] overflow-hidden relative`}
    >
      <div className={`mt-[150px] z-10 md:w-1/2 md:mt-0 ${isArabic ? 'text-right' : 'text-left'}`}>
        <h1 className="text-4xl font-bold relative mt-20px md:mt-0">
          {t('homeSec1.title')}
        </h1>

        <p className="mb-6 relative mt-10 md:mt-10">
          {t('homeSec1.description')}
        </p>

        <button
          onClick={() => {
            navigate(`/appointment/`);
          }}
          className="bg-[#4BA6C3] hover:bg-blue-700 hover:scale-105 ease-in-out duration-300 hover:shadow-xl hover:shadow-gray-400 text-white px-4 py-2 rounded-3xl font-thin"
        >
          {t('homeSec1.buttonText')}
        </button>

        <div className="w-15 h-auto bottom-5 md:left-18">
          <img
            src={avicii}
            alt="Sample"
            className="w-auto h-auto"
          />
        </div>
      </div>

      <div className="w-15 h-auto absolute left-0 md:top-10">
        <img
          src={claws}
          alt="Sample"
          className="w-auto h-auto"
        />
      </div>

      <div className="absolute right-[-80px] md:left-[550px] md:top-0">
        <img
          src={grid}
          alt="Sample"
          className="w-auto h-auto"
        />
      </div>

      {/* Image Block */}
      <div className="w-auto py-8 z-0 flex justify-center">
        <img
          src={nurce}
          alt="Sample"
          className="w-full h-auto md:block"
        />
      </div>
    </section>
  );
}

export default Hsec1;
