import React from 'react';
import Card from './cards';


const Hsec4 = () => {
    return ( 
        <section className="w-screen   px-12 mx-auto bg-[#d4f5ff] relative  flex-row pt-[80px] " >
                <h1 className="font-bold md:font-extrabold text-[36px] mb-5 mx-auto text-center " >OUR SERVICES</h1>
                <p className="text-center" >At our clinic, we offer a comprehensive range of services designed to improve both your communication abilities and mental well-being. 
                Our dedicated team is here to support your unique journey to clarity and balance.</p>
                <center>
                <div className="w-[90%]  px-3 md:px-10 py-5 pb-10 bg-custom-gradient2 h-auto justify-center  mt-16 rounded-3xl flex-row" >
                    <div>
                        <h1 className="font-bold md:font-extrabold text-white text-[18px] sm:text-[36px] mb-5 mx-auto text-center">PSYCHOTHERAPY</h1>
                        <div className="flex flex-wrap justify-center" >
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold md:font-extrabold text-white sm:text-[36px] text-[18px] mb-5 mx-auto text-center mt-5 " >OPHOORTHOPHONIK</h1>
                        <div className="flex flex-wrap justify-center " >
                        <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                
                
                </div>
                </center>
           





        </section>
     );
}
 
export default Hsec4 ;