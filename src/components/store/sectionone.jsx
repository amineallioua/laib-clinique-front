import pngwing from '../../assets/pnng.avif'

const Ssec1 = () => {
    return (  
        <div className="w-screen  mt-[68px]  px-5  pt-3  " >
       
       <div className=" bg-[#FFCAD4] rounded-[50px] w-[100%] shadow-2xl gap-5 justify-center flex-row md:flex mt-16 h-auto px-5 md:px-16 " >
        <div className=" md:w-1/2 text-left  relative py-5 md:py-[80px] " >
        <h1 className=" text-2xl sm:text-4xl  font-extrabold text-black" >EXPLORE DARIN'S <br />  WORLD    </h1>
        <p className="mt-5 text-white text-[18px]  font-bold " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
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
        <div className="md:w-1/2 md:flex   justify-center  items-center py-10 " > 
        <img src={pngwing} alt="" className=' rounded-[80px] h-full  '  />
        </div>
         

       </div>





        
    </div>
    );
}
 
export default Ssec1;