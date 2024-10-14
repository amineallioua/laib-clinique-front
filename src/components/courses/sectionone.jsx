import pngwing from '../../assets/course.jpg'

const Ssec1 = () => {
    return (  
        <div className="w-screen  bg-[#d4f5ff] mt-[68px] pb-20 px-12  pt-3  " >
       
       <div className=" bg-[#ffffff] rounded-[50px] w-[100%] shadow-2xl  flex-row md:flex mt-16 h-auto px-6 py-3  md:px-6 " >
        <div className=" md:w-1/2 text-left  relative py-5 md:py-[80px] " >
        <h1 className=" text-2xl sm:text-4xl  font-extrabold text-black" >EXPLORE OUR COURSES     </h1>
        <p className="mt-5 text-[#000000]  " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            <br /><br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation </p>

        </div>
        <div className="md:w-1/2 flex justify-center items-center md:ml-10   " > 
        <img src={pngwing} alt=""  className=' rounded-[50px] ' />
        </div>
         

       </div>





        
    </div>
    );
}
 
export default Ssec1;