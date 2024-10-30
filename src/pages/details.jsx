import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../components/cartcontext';
import { PiEmptyBold } from "react-icons/pi";
import Buy from '../components/store/form';
import itemimg from '.././assets/pngwing2.png'
import correct from '.././assets/correct.png';
import wallpaper from '.././assets/pink-girly-25.jpg';
import { IoClose } from "react-icons/io5";



 
 
const Details = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
    const [isOpen, setIsOpen] = useState(true);
    const [isOpen1, setIsOpen1] = useState(true);

const toggleMenu1 = () => {
  setIsOpen1(!isOpen1);
};

  const {  addToCart } = useCart();
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/products/${id}`); // Fetch product by ID
        const result = await response.json();
        setProduct(result);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false); // Set loading to false if there is an error
      }
    };
    
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // Show loading indicator while fetching
  }

  if (!product) {
    return <p className=' flex items-center justify-center  text-center font-extrabold text-[40px] text-black my-[200px]' > Product not found <br /> <PiEmptyBold  className=' text-center font-extrabold text-[80px] text-black ml-10 ' /> </p>; // Handle case when product is null or not found
  }
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
    <img src={wallpaper} alt="" className=' w-full h-full pb-10 mt-[68px] fixed ' />
    <div className='max-w-[90%] absolute top-0 shadow-xl shadow-slate-300 px-10 py-7  mt-[100px]  sm:px-5 mb-10 sm:justify-normal justify-center rounded-[50px]  lg:flex flex-row items-center bg-[#f7869b] ml-[5%]'>
      <div className='sm:w-[600px] overflow-hidden p-8 w-[300px] bg-white h-[300px] sm:h-[500px] rounded-[50px]'> 
        <img src={itemimg}  
        alt=""
        className=' w-full h-full ' />
      </div>
      <div className='max-w-[600px] ml-5 h-[500px] relative'>
        <h1 className='sm:text-[80px] text-[40px] font-bold text-black inline'>{product.name}</h1>
        <h1 className='sm:text-[70px] text-[40px] ml-16 font-extrabold inline text-white'>{product.price} dz</h1>
        <p className='mt-[30px]  text-[18px] text-white mb-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, libero. Modi, ut? Error veritatis cumque at fugiat temporibus dolores debitis ipsam quos! Dicta totam optio nulla eveniet officia accusamus dolorem? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et odit totam culpa amet a eos nulla aliquam enim quia accusantium aperiam voluptatibus, rerum animi facilis, maxime nisi ratione dolor aspernatur?  </p>
        <div className='absolute bottom-0 flex'>
          <button onClick={() => {addToCart(product , 1)  }} className='w-[150px] h-[40px] sm:w-[250px] sm:h-[50px] sm:ml-10 rounded-[50px] font-bold text-black text-[20px] hover:scale-110 hover:bg-[#ffb0b0] bg-[#f7c0c0]'>
            ADD TO CART
          </button>
          <button onClick={  ()=>{toggleMenu()} } className='w-[150px] ml-5 sm:ml-10 h-[40px] sm:w-[250px] sm:h-[50px] rounded-[50px] font-bold text-black text-[25px] hover:bg-[#75d6ff] hover:scale-110 bg-[#9fddf8]'>
            BUY NOW
          </button>
        </div>
      </div>
        <Buy isOpen={isOpen} toggleMenu={toggleMenu} product={product} toggleMenu1={toggleMenu1} />



        <div className={`w-full flex transition-opacity duration-300 ease-in-out ${isOpen1 ? 'opacity-0 pointer-events-none' : 'opacity-100'} left-0 justify-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40`} onClick={toggleMenu1} >
        <div 
        onClick={(e) => e.stopPropagation()}
        className="w-[650px] h-[380px] py-10 bg-white rounded-[50px] mt-[200px] sm:mt-auto shadow-2xl flex-row relative justify-center">
          <center>
            <img src={correct} alt="Appointment booked" className='w-[170px] h-[170px] mb-[60px]' />
            <h1 className='text-[22px] font-extrabold text-[#374885]'>product ordered</h1>
          </center>
        <button>  <IoClose onClick={toggleMenu1} className='absolute top-10 right-10 text-[40px] text-[#585858]' /></button>
        </div>
      </div>
    </div>
    </>
  );
};


export default Details;
