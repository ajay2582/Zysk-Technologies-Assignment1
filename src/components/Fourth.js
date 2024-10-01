import React from 'react';
import img2 from "../images/7.jpg";
import img1 from "../images/Ajayimage.jpg";
import { ImGrin2 } from 'react-icons/im';

const Fourth = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-gray-50 text-center">
      {/* Logo Section */}
      <div className="flex justify-center items-center mb-8">
        {/* Replace with your logo */}
        <img
          src={img2} 
          alt="Sisyphus Logo"
          className="w-8 h-8 mr-2"
        />
        <span className="text-xl font-semibold text-gray-800">Sisyphus</span>
      </div>

      {/* Testimonial Quote */}
      <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
        “We’ve been using Untitled to kick start every new project and can’t imagine working without it.”
      </blockquote>

      {/* Author Section */}
      <div className="flex  flex-col justify-center items-center">
        <img
          src={img1} 
          alt="Candice Wu"
          className="w-12 h-12 rounded-full mr-4 mb-3"
        />
        <div>
          <p className="font-semibold text-gray-800">Candice Wu</p>
          <p className="text-sm text-gray-600">Product Manager, Sisyphus</p>
        </div>
      </div>
    </section>
  );
};

export default Fourth;
