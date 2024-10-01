import React from 'react';
import img1 from "../images/7.jpg";
import img2 from "../images/asliphoto.jpg";
import img7 from "../images/Ajayimage.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '@chakra-ui/react';
import { FaRegPlayCircle } from "react-icons/fa";
import "./first.css";



function First() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      {/* <nav className="flex justify-between items-center p-6 bg-white border-b border-gray-200">
        <div className="text-2xl font-bold">Untitled UI</div>
        <ul className="flex space-x-8">
          <li><a href="#" className="text-gray-700">Home</a></li>
          <li><a href="#" className="text-gray-700">Products</a></li>
          <li><a href="#" className="text-gray-700">Resources</a></li>
          <li><a href="#" className="text-gray-700">Pricing</a></li>
        </ul>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={img1}/>
        </div>
      </nav> */}

<nav className="  flex justify-between items-center py-4 px-6  mx-3 ">
      {/* Left section with logo and title */}
      <div className="flex items-center space-x-8 font-bold">
        {/* <img 
          src="path_to_your_logo" // Replace this with the actual logo path or URL
          alt="Logo" 
          className="w-8 h-8"
        /> */}
        <img src={img1}  className="w-8 h-8 rounded-full ml-2"></img>
        <h1 className="text-lg font-bold ml-0">Untitled UI</h1>
      {/* </div> */}

      {/* Middle section with navigation links */}
      {/* <div className="flex space-x-6 text-gray-600"> */}
        <a href="/" className="hover:text-gray-800" >Home</a>
        
        {/* Dropdown menu for Products */}
        <div className="relative flex flex-row gap-2 ">
          Products  <div className='mt-2'><IoIosArrowDown /></div>
          {/* Dropdown (you can make this visible on hover or click) */}
          {/* <div className="absolute bg-white shadow-lg rounded-md mt-2 p-2">
            <a href="/product1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Product 1</a>
            <a href="/product2" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Product 2</a>
          </div> */}
        </div>
        <div className="relative flex flex-row gap-2 ">
          Resources  <div className='mt-2'><IoIosArrowDown /></div>
          {/* Dropdown (you can make this visible on hover or click) */}
          {/* <div className="absolute bg-white shadow-lg rounded-md mt-2 p-2">
            <a href="/product1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Product 1</a>
            <a href="/product2" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Product 2</a>
          </div> */}
        </div>

        {/* Dropdown menu for Resources */}
        {/* <div className="relative">
          <button className="hover:text-gray-800">Resources <IoIosArrowDown /></button>
          {/* Dropdown (you can make this visible on hover or click) */}
          {/* <div className="absolute bg-white shadow-lg rounded-md mt-2 p-2">
            <a href="/resource1" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Resource 1</a>
            <a href="/resource2" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Resource 2</a>
          </div> */}
        {/* </div> */} 

        <a href="/pricing" className="hover:text-gray-800">Pricing</a>
      </div>

      {/* Right section with user profile */}
      <div>
        <img 
          src={img7}// Replace with actual profile image URL
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>


      
 
     <div className="flex justify-center items-center rounded-full my-14 h-5 ">
      <div className=" button-34 bg-purple-100  rounded-lg flex items-center justify-between gap-3">
        <div className= "  bg-color-white button-35 h-11 text-blue-500 bg-slate-100 px-3  pb-4 py-1 rounded-lg mr-2">New feature</div>
        <a href="#" className="text-blue-500 h-8">Check out the team dashboard →</a>
      </div>
    </div> 
   

    

    {/* <Button
      colorScheme="purple"
      variant="outline"
      rightIcon="arrow-right"
      onClick={() => {
        // Handle click event, e.g., navigate to team dashboard
        console.log('Check out the team dashboard');
      }}
    >
      New feature
    </Button> */}





      {/* Main Section */}
      <div className="text-center my-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Beautiful analytics to grow smarter</h1>
        <pre className="text-gray-600 mb-6">Powerful, self-serve product and growth analytics to help you convert, engage,
            <br></br>
           
                    and retain more users. Trusted by over 4,000 startups.
        </pre>
        <div className="flex justify-center space-x-4">
          <button className=" button-23 border-white text-black border-solid-black py-2 px-6 rounded-lg">
            <div className='flex flex-row gap-2'>
             <FaRegPlayCircle />
             <p>  Demo</p>

            </div>
              </button>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-lg">Sign Up</button>
        </div>
      </div>

      {/* Analytics Dashboard Section */}
      <div className="max-w-7xl mx-auto flex space-x-8 p-8 bg-gray-50 rounded-lg">
        <img src={img2}></img>

       
      </div>
    </div>
  );
}

export default First;
