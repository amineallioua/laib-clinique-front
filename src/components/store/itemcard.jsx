import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Itemcard = ({ Product }) => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const  photourl =Product?.photo ? Product.photo.replace(/\\/g, '/') : 'default-image.jpg';
  return (
    <div
    data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"  
     onClick={()=>{ navigate(`/details/${Product._id}`)}} className="  relative overflow-hidden  hover:bg-pink-50   hover:shadow-xl hover:shadow-gray-400 w-[218px] h-[288px] rounded-[50px] flex-row shadow-xl shadow-slate-300">
      <center>
        {Product.name === "loading" ? (
          // Display loading spinner if the product name is "loading"
          <div role="status" className="flex justify-center items-center mt-[70px] h-full">
            <svg
              aria-hidden="true"
              className="w-[100px] h-[100px] text-gray-200 animate-spin dark:text-gray-300 fill-pink-300"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          // Render actual content when the data is available
          <>
            <div className='h-2/3 aspect-square pt-10 relative overflow-hidden'>
              <img className='w-full h-full ' src={`http://localhost:4000/${photourl}`} alt="" />
            </div>
            <h1 className="text-xl font-bold mt-3 text-black">{Product.name}</h1>
            <div className=' bg-[#FFCAD4] font-border text-white text-[18px] font-extrabold absolute rotate-45 top-6 px-20 py-1 right-[-70px] text-center ' >  {Product.price.toFixed(0) } DA </div>
          </>
        )}
      </center>
    </div>
  );
}

export default Itemcard;
