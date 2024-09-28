import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import { useCart } from './cartcontext'; 
import Buy from '../components/store/form';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0); // Fixed typo from 'settotal' to 'setTotal'
  const [isOpen1, setIsOpen1] = useState(true);

  const { cart, calculateCartTotal, addToCart } = useCart();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Calculate the total whenever the cart changes
  useEffect(() => {
    setTotal(calculateCartTotal());
  }, [cart]);

  const toggleMenu = () => {
    setIsOpen1(!isOpen1);
  };


  return ( 
    
    <div className={`w-[400px] h-[450px]  bg-[#cee7f0] rounded-[50px] fixed top-[20%] px-8 py-5 z-30 transition-all duration-500 ease-in-out transform ${isOpen ? 'right-0' : '-right-[400px]'}`}>
      <button 
        onClick={toggleOpen} 
        className="w-[70px] h-[70px] py-5 pl-3 text-[25px] rounded-full bg-[#cee7f0] absolute left-[-40px] top-[45%]">
        <FaShoppingCart  />
      </button>

      <h1 className="text-black font-bold text-[35px] ml-7">CART</h1>

      <div className="w-full h-[200px]">
  <div className="w-full grid grid-cols-4 text-left text-black">
    <div className="col-span-2 font-bold text-[20px]">ITEMS</div>
    <div className="text-center font-bold text-[20px]">QNT</div>
    <div className="text-center font-bold text-[20px]">PRICE</div>
  </div>

  <div className="overflow-scroll h-[180px]"> {/* Adjust height as needed */}
    {cart.map((item) => (
      <div key={item.id} className="border-b-2 border-black w-full grid grid-cols-4 text-left text-black px-5 py-3">
        <div className="col-span-2">{item.name}</div>
        <div className="text-center flex justify-between items-center"> {/* Added 'items-center' */}
          <FaCircleMinus 
            onClick={() => addToCart(item, 2)} // Adjust quantity decrement
            className="text-[25px] cursor-pointer" 
          />
          {item.quantity}
          <FaCirclePlus 
            onClick={() => addToCart(item, 1)} // Increment quantity
            className="text-[25px] cursor-pointer" 
          />
        </div>
        <div className="text-center items-center flex justify-center" >
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    ))}
  </div>
</div>

      
      <h1 className="text-black font-bold text-[25px] mt-10">TOTAL: ${total.toFixed(2)}</h1>
      <button onClick={toggleMenu} className="w-[120px] p-2 rounded-[10px] mt-10 bg-black text-[20px] text-white font-bold  " > checkout </button>

      <Buy isOpen={isOpen1} toggleMenu={toggleMenu} product={cart} />
    </div>
  );
};

export default Cart;