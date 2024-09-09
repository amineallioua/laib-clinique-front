import React from 'react';
import shape from '../../assets/Component2.png';
import shop from '../../assets/shop_9018966 1.png'


const Hsec5s = () => {
    return (
        <section className="w-screen   px-12  bg-[#d4f5ff] justify-center py-12 flex " >
            <div className="w-[63%] aspect-square   flex  relative" >
                <div className='text-white text-center w-1/2  aspect-square ml-[26%] mt-[22%] p-[3%]   z-30' >
                <h1 className=' font-extrabold text-white text-[10px] sm:text-[14px] lg:text-[36px] md:text-[22px] mb-1 mx-auto felx  ' >DISCOVER OUR STORE</h1>
                    <img src={shop}
                     alt=""
                     className='left-[34%] absolute w-[35%]'
                      />
                </div>
               
                <img src={shape} 
                alt=""
                className='absolute   top-0 z-0'
                />
            </div>


        </section>
      );
}
 
export default Hsec5s;