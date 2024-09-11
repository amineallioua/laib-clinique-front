import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const footer = () => {
    return (  
        <div className="relative b-0 w-screen bg-[#4BA6C3]  items-center  justify-center  flex-row " >
            <div className="text-xl w-full flex-grow text-center tetx-bold pt-5 text-white">
                    Logo
                </div>
                <div  className=" sm:flex block   text-[18px]  w-full  px-20 py-5  text-white text-bold ">
                    <span className="flex-grow">logts,84,batna,algeria</span>
                    <span  className="flex-grow" >ajdzhabhahb@gmail.com</span>
                    <span  className="flex-grow" >0798653819</span>

                </div>
                <div className="flex text-[35px] text-white flex-grow w-[30%] justify-between  sm:py-5 pt-5 pb-3  ml-[35%]" >
                <FaFacebook className="mx-2"/>
                <FaInstagram  />
                <FaTiktok className=" mx-2"/>
                <FaWhatsapp />
                </div>


        </div>
     );
}
 
export default footer;