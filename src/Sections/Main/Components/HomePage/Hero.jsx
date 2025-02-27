import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section className=" h-screen md:py-12 pt-24">
        <div className="lg:flex lg:items-center lg:justify-between h-1/2">
          {/* Text Section */}
          <div className="px-4 md:px-20 text-center md:text-left">
            <h1 className="bg-gradient-to-r from-blue-600 via-purple-500 text-transparent bg-clip-text  mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
              Finding student housing shouldn't be
              <span className="text-red-500 mx-1 font-extrabold text-4xl md:text-4xl xl:text-6xl relative inline-block stroke-current">
                hard.
                <svg
                  className="absolute -bottom-0.5 w-full max-h-1.5 "
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    strokeWidth="2"
                  ></path>
                </svg>
              </span>
            </h1>
            <p className="max-w-2xl mb-6 font-light px-8 md:px-0 text-gray-500 lg:mb-6 md:text-lg lg:text-xl">
              We're changing the way students and young professionals find safe and affordable housing quickly and securely.
            </p>
            <div className="md:flex gap-4">
              <Link
                to="/listings"
                className="px-6 py-3 bg-gray-700 text-white text-lg rounded-md shadow-2xl hover:bg-gray-700  transition duration-300"
              >
                Browse Listings
              </Link>
            </div>
          </div>

          
          <div className="mt-8 lg:hidden ">
            <img src="https://img.freepik.com/premium-photo/exchange-students-university-campus_53876-161260.jpg"
              className="w-full h-full object-fill"/>
          </div>

          {/* Image Section */}
          <div className="lg:w-2/3 hidden lg:block">
            <img
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/1370907092/photo/diverse-group-of-friends-having-fun-in-the-city.jpg?s=612x612&w=0&k=20&c=PcDLb_nG88jIKVy9ccBAGgTcPcV1GK0fSjkdwvjbyxM="
              alt="Instay Hero"
            />
          </div>
        </div>
      </section>
    </>
  );
}