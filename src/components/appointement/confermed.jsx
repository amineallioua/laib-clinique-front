import corect from '../../assets/correct.png'
import { IoClose } from "react-icons/io5";


const confermed = () => {
    return ( 
        <div className="w-full flex justify-center bg-transparent backdrop-blur-sm h-full p-[10%] absolute z-40 top-0 " >
            <div className="w-[650px] h-[380px] py-10 bg-white rounded-[50px] shadow-2xl flex-row relative justify-center " >
              <center>
              <img src={corect} 
                alt=""
                className='w-[170px] h-[170px] mb-[60px]  ' />
                <h1 className='text-[22px] font-extrabold text-[#374885] ' >  Appointment Booked</h1>  

              </center> 
              <IoClose  className='absolute top-10 right-10 text-[40px] text-[#585858] ' />


            </div>
        </div>
     );
}
 
export default confermed;