import pngwing from '../../assets/pngwing.png'

const Ssec1 = () => {
    return (  
        <div className="w-screen  mt-[68px]  px-12  pt-3  " >
       
       <div className=" bg-[#FFCAD4] rounded-[50px] w-[100%] shadow-2xl  flex-row md:flex mt-16 h-auto px-5 md:px-16 " >
        <div className=" md:w-1/2 text-left  relative py-5 md:py-[80px] " >
        <h1 className=" text-2xl sm:text-4xl font-bold text-black" >EXPLORE DARIN'S <br />  WORLD    </h1>
        <p className="mt-5 text-white  " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
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
        <div className="w-1/2 md:block hidden h-[450px]  text-left pb-5 relative top-[-75px] " > 
        <img src={pngwing} alt=""  className='max-h-[550px] absolute ' />
        </div>
         

       </div>





        
    </div>
    );
}
 
export default Ssec1;