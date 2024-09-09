import React from 'react';
import shape from '../../assets/Component2.png';


const Hsec5s = () => {
    return (
        <section className="w-screen   px-12  bg-[#d4f5ff] justify-center flex " >
            <div className="w-[63%] aspect-square  flex  relative" >
               
                <img src={shape} 
                alt=""
                className='absolute  flex top-0 z-0'
                />
            </div>


        </section>
      );
}
 
export default Hsec5s;