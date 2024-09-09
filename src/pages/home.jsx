import React from 'react';
import Navbar from '../components/navbar';
import Hsec1 from '../components/home/sectionone'
import Hsec2 from '../components/home/sectiontwo';
import Hsec3 from '../components/home/sectionthree';
import Hsec4 from '../components/home/sectionfour';
import Hsec5 from '../components/home/sectionfive';

function Home(){

   return (
    <div >
     <Navbar/>
     <Hsec1/>
     <Hsec2/>
     <Hsec3/>
     <Hsec4/>
     <Hsec5/>
    </div>
  );

} 

export default  Home ;