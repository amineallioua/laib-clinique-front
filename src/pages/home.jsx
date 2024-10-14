import React from 'react';
import Footer from '../components/footer';
import Hsec1 from '../components/home/sectionone'
import Hsec2 from '../components/home/sectiontwo';
import Hsec3 from '../components/home/sectionthree';
import Hsec4 from '../components/home/sectionfour';
import Hsec5 from '../components/home/sectionfive';
import Hsec6 from '../components/home/sectionsix';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home(){
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
   return (
    <div className='bg-[#d4f5ff] text-black ' >
     
     <Hsec1/>
     <Hsec2/>
     <Hsec3/>
     <Hsec4/>
     <Hsec5/>
     <Hsec6/>
     <Footer />


    

     
    </div>
  );

} 

export default  Home ;