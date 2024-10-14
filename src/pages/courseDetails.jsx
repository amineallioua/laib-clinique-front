import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PiEmptyBold } from "react-icons/pi";
import pngwing from '.././assets/course.jpg';
import Cform from '../components/courses/courseform'
import correct from '.././assets/correct.png';
import { IoClose } from "react-icons/io5";




const Details = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const [course, setcourse] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
    const [isOpen, setIsOpen] = useState(true);
    const [isOpen1, setIsOpen1] = useState(true);

  

  
  useEffect(() => {
    const fetchcourseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/trainings/${id}`); // Fetch course by ID
        const result = await response.json();
        setcourse(result);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching course details:', error);
        setLoading(false); // Set loading to false if there is an error
      }
    };
    
    fetchcourseDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator while fetching
  }

  if (!course) {
    return <p className=' flex items-center justify-center  text-center font-extrabold text-[40px] text-black my-[200px]' > course not found <br /> <PiEmptyBold  className=' text-center font-extrabold text-[80px] text-black ml-10 ' /> </p>; // Handle case when course is null or not found
  }
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
  };


  return (
    <div className='max-w-[96%] shadow-xl shadow-slate-300 py-5 mt-[100px] pb-10 px-5 mb-[70px] sm:justify-normal justify-center rounded-[50px] lg:flex flex-row items-center bg-[#d4f5ff] ml-[2%]'>
      <div className='sm:w-[600px] w-[350px] bg-white h-[400px] sm:h-[500px] rounded-[50px] overflow-hidden '>
        <img src={pngwing} alt="" className=' w-full h-full ' />
      </div>
      <div className='max-w-[600px] ml-5 h-[500px] relative'>
        <h1 className='sm:text-[50px] text-[40px] font-bold text-black inline'>{course.title}  </h1> 
        <span className=' text-green-500 text-[30px] font-semibold ' > free </span>  
        <div className='  h-[150px] overflow-hidden mt-5  ' >   
            <p className=' text-black mb-10 text-[20px] '>{course.description}</p> </div> 
            <div className='  overflow-hidden h-[150px] my-5 grid grid-cols-2  ' >
               
        
              
            </div>

     

       
          <button onClick={  ()=>{toggleMenu()} } className='w-[150px]  h-[40px] sm:w-[250px] sm:h-[50px] rounded-[50px] font-bold text-white text-[25px] bg-[#00B2FF]'>
            Enroll
          </button>
        </div>
        
        <Cform Name={course.title} isOpen={isOpen} toggleMenu={toggleMenu} toggleMenu1={toggleMenu1} />

        <div className={`w-full flex transition-opacity duration-300 ease-in-out ${isOpen1 ? 'opacity-0 pointer-events-none' : 'opacity-100'} left-0 justify-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40`} onClick={toggleMenu1} >
        <div 
        onClick={(e) => e.stopPropagation()}
        className="w-[650px] h-[380px] py-10 bg-white rounded-[50px] mt-[200px] sm:mt-auto shadow-2xl flex-row relative justify-center">
          <center>
            <img src={correct} alt="Appointment booked" className='w-[170px] h-[170px] mb-[60px]' />
            <h1 className='text-[22px] font-extrabold text-[#374885]'>  enrollement demande done <br /> wait the call </h1>
          </center>
        <button>  <IoClose onClick={toggleMenu1} className='absolute top-10 right-10 text-[40px] text-[#585858]' /></button>
        </div>
      </div>
       
    </div>
  );
};

export default Details;
