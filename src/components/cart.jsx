import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { useCart } from './cartcontext'; 
import Buy from '../components/store/form';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useTranslation } from "react-i18next"; // Import useTranslation




const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0); // Fixed typo from 'settotal' to 'setTotal'
  const [isOpen1, setIsOpen1] = useState(true);
  const [showMessage , setshowMessage] = useState(false)
  const { cart, calculateCartTotal, addToCart } = useCart();
  const [newitem , setnewitem]  = useState(false);
  const { t, i18n } = useTranslation(); // Initialize translation hook


  const toggleOpen = () => {
    // isOpen ? setnewitem(false) : 'nothing' 
    
    
    setIsOpen(!isOpen);
    if(!isOpen){
      setnewitem(false)
    }
    
    // console.log(isOpen)
  };
  

  // Calculate the total whenever the cart changes
  useEffect(() => {
    setTotal(calculateCartTotal());

   


  }, [cart]);
  const handleItemAddedToCart = (event) => {
   if(!isOpen){
    setnewitem(true)
   }else{
    setnewitem(false)
   }
  };

  // Add the event listener for 'itemAddedToCart'
  window.addEventListener('itemAddedToCart', handleItemAddedToCart);



  const toggleMenu = () => {
    setIsOpen1(!isOpen1);
  };

  const changetext= ()=>{ 
    setshowMessage(true);
  };

  useEffect( ()=>{  
    if (showMessage) {
      // Hide the message after 10 seconds
      const timer = setTimeout(() => {
        setshowMessage(false);
      }, 2000);

      // Cleanup the timer if the component unmounts or the effect reruns
      return () => clearTimeout(timer);
    }

  },[showMessage]


  )

  return ( 
    
    <div className={` shadow-xl shadow-slate-300  w-[350px] sm:w-[425px] h-[450px]  bg-[#9fddf8]  rounded-[50px] fixed top-[20%] px-8 py-5 z-30 transition-all duration-500 ease-in-out transform ${isOpen ? 'right-0' : ' right-[-330px] sm:right-[-400px]'}`}>
      <button 
        onClick={toggleOpen} 
        className="w-[70px] h-[70px] py-5 pl-3 text-[25px] rounded-full bg-[#9fddf8] absolute left-[-40px] top-[45%]">
        <FaShoppingCart  />
        <div className= {`w-3 h-3 bg-red-600 rounded-full   absolute top-2 left-0  transition-all duration-500 ease-in-out ${ newitem ? 'opacity-100' : 'opacity-0'} `} ></div>
      </button>

      <h1 className="text-black font-bold text-[35px] ml-7">{t('cart.cart')}</h1>

      <div className="w-full h-[200px]">
  <div className="w-full grid grid-cols-4 text-left text-black">
    <div className=" text-center col-span-2 font-bold text-[20px]">{t('cart.items')}</div>
    <div className="text-center font-bold text-[20px]">{t('cart.quantity')}</div>
    <div className="text-center font-bold text-[20px]">{t('cart.price')}</div>
  </div>

  <div className="overflow-scroll h-[210px] mt-5 bg-white rounded-[10px] "> {/* Adjust height as needed */}
    {cart.map((item) => (
      <div key={item.id} className="border-b-2 border-black w-full font-semibold text-[16px] grid grid-cols-4 text-left text-black px-2 py-3">
        <div className="col-span-2 flex items-center "> 
           <div className=" mr-1 h-7 sm:h-10 aspect-square rounded-[10px] " >
           <img  src={`http://localhost:4000/${item.photo ? item.photo.replace(/\\/g, '/') : 'default-image.jpg'}`}  className=" w-full h-full " alt="" /> 
           </div> 
               <h1 className=" text-[12px] sm:text-[15px] " >{item.name}</h1> 
      </div>


 
        <div className="text-center flex justify-between items-center font-semibold text-[16px]"> {/* Added 'items-center' */}
          <FaCircleMinus 
            onClick={() => addToCart(item, 2)} // Adjust quantity decrement
            className="sm:text-[25px] text-[20px] cursor-pointer" 
          />
          {item.quantity}
          <FaCirclePlus 
            onClick={() => addToCart(item, 1)} // Increment quantity
            className="sm:text-[25px] text-[20px] cursor-pointer" 
          />
        </div>
        <div className="text-center items-center flex justify-center" >
          DZ {(item.price * item.quantity).toFixed(0)}
        </div>
      </div>
    ))}
  </div>
</div>

<h1
  className={`text-black font-bold text-[25px] mt-16 ${i18n.language === 'ar' ? 'text-right' : ''}`}
  dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
>
  {t('cart.total')} : {total.toFixed(0)} DZ
</h1>
      {showMessage &&<p className=" text-green-500 font-bold inline " >    {t('cart.orderDone')}! <IoCheckmarkDoneCircle/> </p>}
      <button onClick={toggleMenu} className="w-[120px] p-2 rounded-[10px]  bg-black text-[20px] absolute right-10 bottom-8 text-white font-bold  " > {t('cart.checkout')} </button>

      <Buy isOpen={isOpen1} toggleMenu={toggleMenu} product={cart} toggleMenu1={changetext} />
      
    </div>
  );
};

export default Cart;