import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Cform = ({ Name, toggleMenu, isOpen, toggleMenu1 }) => {
  const [error, setError] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [title, settitle] = useState(Name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear error before new submission

    const phoneRegex = /^[0-9]*$/; // Only digits allowed
    if (phone && !phoneRegex.test(phone)) {
      setError('Phone number must be a valid number.');
      return;
    }
    if (phone.length > 10) {
      setError('Phone number must be shorter than 10 digits.');
      return;
    }

    // Title length validation
    if (title.length < 5) { // Minimum length can be adjusted
      setError('Title must be at least 5 characters long.');
      return;
    }

    const trainingrequest = {
      name,
      phone,
      email,
      title,
    };
    console.log(trainingrequest);

    try {
      const response = await fetch('http://localhost:4000/api/trainingrequest/create_trainingRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trainingrequest),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Failed to create training');
        return;
      }

      // Close modal on success
      toggleMenu1();
      toggleMenu();
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while processing your request.');
    }
  };

  return (
    <div
      className={`w-full flex left-0 justify-center items-center bg-transparent backdrop-blur-sm h-full p-[10%] fixed top-0 z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      onClick={toggleMenu}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative sm:w-[430px] sm:h-[500px] w-[330px] h-[480px] mt-[100px] mb-10 bg-white rounded-[50px] shadow-3xl shadow-black flex-col justify-between p-6"
      >
        {/* Title Container */}
        <div className="text-center mb-4">
          <h1 className="text-[25px] font-bold text-black overflow-hidden text-ellipsis whitespace-nowrap">
            {title}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="mb-1">
          <div className="mb-5 mt-10">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="appearance-none border-[2px] mb-2 rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="border-[2px] mb-2 appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"  // Change type to "email" for better validation
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="border-[2px] mb-4 appearance-none rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="bg-[#5188F2] w-full hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
            >
              Enroll
            </button>
          </div>
          {error && <div className="text-red-500 text-xs text-center mt-3">{error}</div>}
        </form>
        <button onClick={toggleMenu} className="absolute top-5 right-5">
          <IoClose className="text-[40px] text-[#585858]" />
        </button>
      </div>
    </div>
  );
};

export default Cform;
