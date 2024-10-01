import React from 'react';

function Eight() {
  return (
    <div className="flex justify-center items-center w-full bg-white  p-4 rounded-lg">
      <div className="max-w-md">
        <h2 className="text-2xl text-center mb-8 font-black font-bold mb-2">Start Your Free Trial</h2>
        <p className="text-lg  text-center mx-auto  mb-8">Join over 4,000+ startups already growing with Untitled.</p>
        <div className="flex justify-center items-center space-x-4">
          <button className="  h-10 button-23 border-stone-400 text-dark-500 px-4 py-2 rounded-lg hover:bg-purple-600">Learn More</button>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Eight;