import React from 'react';
import Navbar from '../components/navbar';
import Hsec1 from '../components/home/sectionone'
import Hsec2 from '../components/home/sectiontwo';
import Hsec3 from '../components/home/sectionthree';

function Home(){

   return (
    <div >
     <Navbar/>
     <Hsec1/>
     <Hsec2/>
     <Hsec3/>
    </div>
  );

} 

export default  Home ;