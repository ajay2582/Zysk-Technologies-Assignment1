import React from 'react';
import img1 from "../images/lapwithphone.jpg";
// import Fifth2 from './Fifth2';

const Fifth = () => {
  return (
    <div>

    <section className="py-8 px-4 md:px-12 lg:px-24 text-center">
      {/* Features Badge */}
      <div className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
        Features
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
        Cutting-edge features for advanced analytics
      </h2>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-gray-600">
        Powerful, self-serve product and growth analytics to help you convert, engage, 
        and retain more users. Trusted by over 4,000 startups.
      </p>
    </section>
     <img src={img1} height= '500px' width = '500px' flex justify="center" align="content-center" className='flex items-center justify-center mx-auto my-auto' ></img>
          {/* <Fifth2></Fifth2> */}
    </div>
  );
};

export default Fifth;

