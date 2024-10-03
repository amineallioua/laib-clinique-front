import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const footer = ({color}) => {
    return (  
        <div className={`relative b-0 w-screen  ${ color ? "bg-[#f7869b]" :  "bg-[#4BA6C3]" }   items-center  justify-center  flex-row `} >
            <div className="text-xl w-full flex-grow text-center tetx-bold pt-5 text-white">
                    Logo
                </div>
                <div  className=" grid sm:h-[70px] h-[100px] gap-5 grid-rows-3 md:grid-cols-3 text-center  text-[20px] font-bold    w-full   py-5  text-white text-bold ">
                    <span className=" px-4 ">batna,algeria</span>
                    <span  className="px-4" >amineallioua123@gmail.com</span>
                    <span  className="px-4  " >0798653819</span>

                </div>
                <div className="flex text-[35px] text-white flex-grow w-[30%] justify-between  sm:py-5 pt-5 pb-3  ml-[35%]" >
                 <a href="https://www.facebook.com/amine.allioua/"><FaFacebook className="mx-2"/></a>
                <a href="https://www.instagram.com/darine_lb/?locale=fr&hl=en"><FaInstagram  /></a>
                <a href="https://www.tiktok.com/@darine_lb"><FaTiktok className=" mx-2"/></a>
                <a href=""><FaWhatsapp /></a>
                </div>


        </div>
     );
}
 
export default footer;