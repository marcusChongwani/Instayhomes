import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className="bg-white">
      <div className="flex px-8 flex-col items-center justify-center pt-20 mt-8 text-center">
        <h2 className="px-4 text-5xl font-bold text-gray-700">
          Make the easy move.
        </h2>
        <p className="mt-8 text-lg text-gray-800">
          Explore affordable and verified listings near your campus and find a
          place that suits your lifestyle.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-10 px-8">
        <div className="flex items-center justify-between py-2 px-3 w-full border border-gray-200 rounded-3xl">
          <Link 
            to="/search"
          
            className="font-medium  px-4 py-2 w-full text-gray-300"
          >Search by university</Link>
        </div>
      </div>

      <div className="bg-black mt-16 rounded-t-full">
        <img
          src="https://littlebigbell.com/wp-content/uploads/2020/09/coat-B-scaled.jpg"
          alt="Hero"
          className="w-full h-full object-cover rounded-t-full"
        />
      </div>
    </div>
  );
};

export default Hero;