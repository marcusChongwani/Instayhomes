

import React from 'react';


export default function Logos() {
  return (
    <section className="bg-white  py-2 pb-4">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-700 md:text-4xl">
          Trusted by students from Top Universities
        </h2>
        <div className="flex items-center justify-center gap-8 text-gray-500 sm:gap-12">
          <a href="#" className="flex justify-center items-center">
            <img
              src="https://cdn.scholaro.com/logos/406186-172323-1774272256.png"
              alt="Logo 1"
              className="h-16 object-contain hover:text-gray-900"
            />
          </a>

          <a href="#" className="flex justify-center items-center">
            <img
              src="https://resources.saylor.org/wwwresources/wp-content/uploads/20240723111959/CUZ_LS_Logo-1196x630.png"
              alt="Logo 2"
              className="h-24 object-contain hover:text-gray-900"
            />
          </a>
        </div>
      </div>
     
    </section>
  );
}