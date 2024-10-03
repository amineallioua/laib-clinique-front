import React from 'react';
import group from '../../assets/Group.png'
import avicii from '../../assets/avicii.png'
import vector from '../../assets/Vector.png'

function Hsec2(){

    return(
        <section data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
         className='flex  md:flex-row items-center justify-between  w-screen md:pb-[200px]  px-12 mx-auto bg-[#d4f5ff] pt-20 relative lg:h-screen' >
            <div className='w-1/2' >

            <img className='absolute left-[-70%] h-auto md:left-[-50%] lg:left-[-15px] top-0 '
            src={group}
             alt="" />
            </div>
          
             <div className='ml-[40%]'>
                <h1 className='font-bold md:font-extrabold text-[36px] mb-5'>WHO ARE WE ?</h1>
                <p className='text-[16px]' >Lorem ipsum dolor sit amet, consectetur adipiscing elit,  
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l
                     aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor i
                     n reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p
                     ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                     qui officia deserunt mollit anim id est laborum.</p>


             </div>


         <img className='absolute md:bottom-20 md:left-[48%] hidden md:block  '
            src={avicii}
            alt="" />

<img className='absolute md:bottom-10 md:right-0 hidden md:block'
            src={vector}
            alt="" />



        </section>
    )
}


export default Hsec2 ;