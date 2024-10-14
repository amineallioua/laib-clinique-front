import React from 'react';
import shape from '../../assets/Component2.png';



const Hsec5 = () => {
    return (
        <section data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
           className="w-full overflow-hidden      bg-[#d4f5ff]  p-12 " >
           <div className="sm:flex  flex-row items-center justify-between " >

           <div className='sm:w-1/3 h-auto  bottom-5 md:left-18'>
  <img 
    src={shape} 
    alt="Sample" 
    className="w-15 h-auto  "/>
</div>




<div className='sm:w-2/3  p-12 ' >
<h1 className="text-4xl font-bold realative mt-20px md:mt-0">DISCOVER OUR STORE
</h1>

<p className="mb-6 realtive mt-10 md:mt-10">
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
   ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
   aute irure dolor in reprehenderit in voluptate velit esse cillum 
   dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata
   t non proident, sunt in culpa qui officia deserunt mollit anim id e
   st laborum.
</p>
</div>









</div>

        </section>
      );
}
 
export default Hsec5;