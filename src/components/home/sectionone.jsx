import React from 'react';
import nurce from '../../assets/Component.png'
import claws from '../../assets/claws.png'
import avicii from '../../assets/avicii.png'
import grid from '../../assets/grid.png'
import { useNavigate } from 'react-router-dom';

function Hsec1(){
  const navigate = useNavigate();
return (
    <section data-aos="fade-right"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine"
    className='flex flex-col md:flex-row items-center mt-[68px] justify-between  w-screen   px-12 mx-auto bg-[#d4f5ff] overflow-hidden relative' >
      <div className="mt-[150px] z-10 md:w-1/2 md:mt-0" >

     

        <h1 className="text-4xl font-bold realative mt-20px md:mt-0">Your Path to a Balanced Mind
          and Clear Voice.
        </h1>

        <p className="mb-6 realtive mt-10 md:mt-10">
          Empowering minds and voices for a balanced life. 
          We offer personalized care in both speech and mental wellness, 
          guiding you toward clarity and confidence. 
          Your journey to holistic healing starts here.
        </p>

 

        <button onClick={ ()=>{navigate( `/appointment/`  )}} className='bg-[#4BA6C3] hover:bg-blue-700 hover:scale-105 ease-in-out duration-300   hover:shadow-xl hover:shadow-gray-400 text-white px-4 py-2 rounded-3xl font-thin' >
        Book an Appointment NOW
        </button>


          <div className='w-15 h-auto  bottom-5 md:left-18'>
          <img 
            src={avicii} 
            alt="Sample" 
            className="w-auto h-auto  "/>
        </div>



  </div>

  <div className='w-15 h-auto absolute left-0 md:top-10 '>
        <img 
        src={claws} 
        alt="Sample" 
        className="w-autos h-auto  "/>

        </div>
     
      
        <div className='absolute right-[-80px] md:left-[550px] md:top-0 '>
        <img 
        src={grid} 
        alt="Sample" 
        className="w-auto h-auto  "/>

        </div>



  {/* Image Block */}
  <div className="w-auto   py-8  z-0 flex justify-center ">
    <img 
      src={nurce} 
      alt="Sample" 
      className="w-full h-auto   md:block"
    />
  </div>

    </section>

)


}

export default Hsec1 ;