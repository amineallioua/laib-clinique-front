
import corect from '../../assets/correct.png'
import { IoClose } from "react-icons/io5";
import React, { useState } from 'react';

const form = () => {


  
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);}
    return ( 
    <div className="sm:w-[430px] sm:h-[480px] w-[330px] h-[480px]  mb-10 bg-white rounded-[50px] shadow-3xl shadow-black  flex-col justify-between" >
        
        <form  className=" px-8 pt-[55px] pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700  text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
          
            placeholder="Enter your full name"
            className=" appearance-none border-[2px] mb-4 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            diagnosis
          </label>
          <select
            id="appointmentType"
            name="appointmentType"
            className="border-[2px] mb-4 appearance-none  rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="consultation">Consultation</option>
            <option value="follow-up">Follow-up</option>  
            <option value="initial">Initial Meeting</option>
          </select>
        </div>
        

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
      
            placeholder="Enter your phone number"
            className=" border-[2px] mb-4 appearance-none  rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="flex items-center justify-center">
          <button
          onClick={toggleMenu}
            type="submit"
            className="bg-[#5188F2] w-[85%] hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Book an Appointment
          </button>
        </div>
      </form>
      <div className= {`  w-full flex ${isOpen ? 'block' : 'hidden'} left-0 justify-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40  `} >
            <div className="w-[650px] h-[380px] py-10 bg-white rounded-[50px]  mt-[200px] sm:mt-auto shadow-2xl flex-row relative justify-center " >
              <center>
              <img src={corect} 
                alt=""
                className='w-[170px] h-[170px] mb-[60px]  ' />
                <h1 className='text-[22px] font-extrabold text-[#374885] ' >  Appointment Booked</h1>  

              </center> 
              <IoClose onClick={toggleMenu} className='absolute top-10 right-10 text-[40px] text-[#585858] ' />


            </div>
        </div>
        
        
    </div>
     );
}
 
export default form;