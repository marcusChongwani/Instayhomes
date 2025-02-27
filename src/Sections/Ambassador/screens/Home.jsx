import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-center text-center ">
        <div className="px-6 py-20  max-w-lg w-full">
          <h1 className="text-4xl font-semibold text-gray-700">
            Hello student!🥳
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Finding a good boarding house is hard we’ve been there. That’s why
            we’re building Instay, a platform to make it easier for students
            like{" "}
            <span class="text-red-500 mx-1 font-extrabold text-4xl relative inline-block stroke-current">
              You.
              <svg
                class="absolute -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  stroke-width="2"
                ></path>
              </svg>
            </span>{" "}
            But we can’t do it alone!
          </p>
          <p className="border-l-4 border-red-200 mt-4 text-left text-lg text-gray-700 pl-2 italic ">
            help us by submitting your boarding house details. Together, we can
            make finding a place less horrible for every student.{" "}
          </p>

          {/* Login / Sign Up Buttons */}
          <div className="mt-6">
            <Link to="/signup" class="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">login or signup</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
