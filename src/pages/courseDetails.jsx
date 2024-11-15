import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import wallpaper from '../assets/crystal.png';
import pngwing from '../assets/course.jpg';
import Cform from '../components/courses/courseform';
import correct from '../assets/correct.png';
import { IoClose } from "react-icons/io5";
import { PiEmptyBold } from "react-icons/pi";

const Details = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen1, setIsOpen1] = useState(true);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/trainings/${id}`);
        const result = await response.json();
        setCourse(result);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du cours:', error);
        setLoading(false);
      }
    };
    fetchCourseDetails();
  }, [id]);

  if (loading) {
    return <h3 className="flex justify-center items-center h-screen  text-lg font-bold">{t('loading')}</h3>;
  }

  if (!course) {
    return (
      <p className='flex items-center justify-center text-center font-extrabold text-[40px] text-black my-[200px]'>
        {t('courseNotFound')} <br />
        <PiEmptyBold className='text-center font-extrabold text-[80px] text-black ml-10' />
      </p>
    );
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
  };
  const text = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of "

<<<<<<< HEAD
 

  return (
    <div className='max-w-[96%] relative shadow-xl shadow-slate-300 py-5 mt-[100px] pb-10 px-5 mb-[70px] sm:justify-normal justify-center rounded-[50px] lg:flex flex-row items-center bg-[#d4f5ff] ml-[2%]'>
      <div className='sm:w-[600px] w-[350px] bg-white h-[400px] sm:h-[500px] rounded-[50px] overflow-hidden '>
      <img src={`http://localhost:4000/${photourl}`} alt="" className=' w-full h-full ' />
      </div>
      <div className='max-w-[600px] ml-5 h-[500px] relative'>
        <h1 className='sm:text-[50px] text-[40px] font-bold text-black inline'>{course.title}  </h1> 
        <span className= {`  ${course.type === "free" ? "text-green-500" : 
                   course.type === "paid" ? "text-red-500" : 
                   "text-blue-500"}  text-green-500 text-[30px] font-semibold`}  > {course.type} </span> 

        <div className='  h-[150px] overflow-hidden mt-5  ' >   
            <p className=' text-black mb-10 text-[20px] '>{text}</p> </div> 
         

     

       
          <button onClick={  ()=>{toggleMenu()} } className='w-[150px] absolute bottom-0  h-[40px] sm:w-[250px] sm:h-[50px] rounded-[50px] font-bold text-white text-[25px] bg-[#00B2FF]'>
            Enroll
          </button>
=======
  const photoUrl = course?.photo ? course.photo.replace(/\\/g, '/') : 'default-image.jpg';

  const getCourseTypeClass = (type) => {
    switch(type) {
      case 'free': return 'text-green-500';
      case 'paid': return 'text-red-500';
      default: return 'text-blue-500';
    }
  };

  const coursePrice = course.type === 'free' ? (
    <span className="text-lg text-green-500 font-semibold bg-green-100 px-3 py-1 rounded-lg">{t('Courses.free')}</span>
  ) : course.type === 'paid' ? (
    <span className="text-xl text-white font-bold bg-red-600 px-4 py-2 rounded-lg">
      {course.price} {t('DZ')}
    </span>
  ) : (
    <span className="text-lg text-blue-500 font-semibold bg-blue-100 px-3 py-1 rounded-lg">
      {course.price} {t('DZ')}
    </span>
  );

  return (
    <div 
      className="bg-cover bg-fixed bg-center min-h-screen pt-[100px] flex items-center justify-center" 
      style={{ backgroundImage: `url(${wallpaper})`, direction: isArabic ? 'rtl' : 'ltr' }}
    >
      <div className={`max-w-[96%] lg:h-[500px] mt-[00px] shadow-xl shadow-slate-300 py-5 pb-10 px-5 flex flex-col lg:flex-row items-center bg-[#d4f5ff] rounded-[50px] mx-auto ${isArabic ? 'lg:flex-row-reverse' : ''}`}>
        {/* Section Image */}
        <div className={`sm:w-[600px] w-[350px] bg-white h-full  rounded-[50px] overflow-hidden ${isArabic ? 'mr-0 ml-5' : ''}`}>
          <img src={`http://localhost:4000/${photoUrl}`} alt="" className='w-full h-full object-cover' />
>>>>>>> origin/amar
        </div>

        {/* Section Content */}
        <div className='max-w-[600px] mt-5 lg:mt-0 lg:ml-5 h-full flex flex-col justify-between'>
          <div>
            <h1 className='sm:text-[35px] text-[28px] font-bold text-black'>
              {course.title}
            </h1>
            <span className={`text-[30px] font-semibold ${getCourseTypeClass(course.type)}`}>
              {course.type === 'paid' ? t('Courses.paid') : course.type === 'free' ? t('Courses.free') : t('Courses.reduced')}
            </span>
            
            {/* Enhanced Price Display */}
            {course.type !== 'free' && (
              <div className="mt-2">
                {coursePrice}
              </div>
            )}

            {/* Description défilante avec barre de défilement personnalisée */}
            <div className="h-[150px] overflow-y-scroll mt-5 pr-2 scrollbar-thin scrollbar-thumb-[#00B2FF] scrollbar-track-transparent">
              <p className="text-black mb-5 text-[18px] leading-relaxed">
                {course.description}
              </p>
            </div>
          </div>

          {/* Bouton */}
          <div className={`flex justify-${isArabic ? 'end' : 'start'} mt-5`}>
            <button
              onClick={toggleMenu}
              className='w-[150px] h-[40px] sm:w-[250px] sm:h-[50px] rounded-[50px] font-bold text-white text-[20px] bg-[#00B2FF] transition-all duration-300 hover:bg-[#007ecc]'
            >
              {t('common.register')}
            </button>
          </div>
        </div>

        {/* Fenêtre modale de confirmation d'inscription */}
        <Cform Name={course.title} isOpen={isOpen} toggleMenu={toggleMenu} toggleMenu1={toggleMenu1} />

<<<<<<< HEAD
        <div className={`w-full flex transition-opacity duration-300 ease-in-out ${isOpen1 ? 'opacity-0 pointer-events-none' : 'opacity-100'} left-0 justify-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40`} onClick={ ()=> {toggleMenu1() ; navigate('/courses')}  } >
        <div 
        onClick={(e) => e.stopPropagation()}
        className="w-[650px] h-[380px] py-10 bg-white rounded-[50px] mt-[200px] sm:mt-auto shadow-2xl flex-row relative justify-center">
          <center>
            <img src={correct} alt="Appointment booked" className='w-[170px] h-[170px] mb-[60px]' />
            <h1 className='text-[22px] font-extrabold text-[#374885]'>  enrollement demande done <br /> wait the call </h1>
          </center>
        <button>  <IoClose onClick={()=> {toggleMenu1() ; navigate('/courses')} } className='absolute top-10 right-10 text-[40px] text-[#585858]' /></button>
=======
        <div className={`w-full flex transition-opacity duration-300 ease-in-out ${isOpen1 ? 'opacity-0 pointer-events-none' : 'opacity-100'} left-0 justify-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40`} onClick={() => { toggleMenu1(); navigate('/courses'); }}>
          <div onClick={(e) => e.stopPropagation()} className="w-[650px] h-[380px] py-10 bg-white rounded-[50px] mt-[200px] sm:mt-auto shadow-2xl flex-row relative justify-center">
            <center>
              <img src={correct} alt="Inscription réussie" className='w-[170px] h-[170px] mb-[60px]' />
              <h1 className='text-[22px] font-extrabold text-[#374885]'>
                {t('Courses.submitRequest')}
              </h1>
            </center>
            <button>
              <IoClose onClick={() => { toggleMenu1(); navigate('/courses'); }} className='absolute top-10 right-10 text-[40px] text-[#585858]' />
            </button>
          </div>
>>>>>>> origin/amar
        </div>
      </div>
    </div>
  );
};

export default Details;
