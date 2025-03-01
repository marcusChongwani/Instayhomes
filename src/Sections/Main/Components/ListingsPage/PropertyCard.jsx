import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCheckCircle } from 'react-icons/fa';
import { MdLock, MdTour, MdPriceCheck } from 'react-icons/md';
import { IoIosBus } from "react-icons/io";
import {Link } from 'react-router-dom';

const PropertyCard = () => {
  const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/022/880/529/small_2x/ai-generative-3d-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-concept-photo.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/022/880/529/small_2x/ai-generative-3d-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-concept-photo.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/022/880/529/small_2x/ai-generative-3d-modern-luxury-real-estate-house-for-sale-and-rent-luxury-property-concept-photo.jpg"
  ];

  return (
    <div className="max-w-sm border border-gray-200 bg-white rounded-md mb-4 transition-transform duration-300 hover:scale-101 cursor-pointer active:scale-100">
      <div className="relative max-h-sm w-full mb-2">
        <span className="mb-2 absolute top-3 left-4 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded z-30">
          Available
        </span>
        <span className="absolute bottom-0 right-0 bg-black text-white text-xs font-medium px-2.5 py-0.5 rounded-br-md z-30">
          6h ago
        </span>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          className="rounded-t-md"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img className="object-cover " src={img} alt={`Property ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="px-2">

      {/* Property Details */}
      <div className="flex items-center">
        <button className="rounded-sm text-xs font-semibold text-white bg-purple-600 py-[1px] px-[2px]">
          5.0
        </button>
        <p className="ml-1 text-gray-500">Excellent |</p>
        <div className="flex items-center">
          <FaCheckCircle className="h-4 ml-2 w-4 text-green-500 font-bold" />
          <p className="ml-1 text-gray-500">Verified</p>
        </div>
      </div>

      <div className="pt-1">
        <a href="#" className="text-lg font-semibold leading-tight text-gray-800">
          Optiquest Student Hostels
        </a>
        <p className="text-md leading-tight text-gray-500 underline">
          ThornPark, Lusaka.
        </p>
        <div className="mt-2 w-full">
          {["cavendish", "unilus", "zcas", "unza"].map((tag, index) => (
            <span key={index} className="mb-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded me-2">
              {tag}
            </span>
          ))}
        </div>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <MdLock className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <p className="text-sm font-medium text-gray-500">24/7 Security |</p>
          </li>
          <li className="flex items-center gap-2">
            <IoIosBus className="h-4 w-4 text-gray-500" />
            <p className="text-sm font-medium text-gray-500">Transport |</p>
          </li>
          <li className="flex items-center gap-2">
            <MdPriceCheck className="h-4 w-4 text-gray-500" />
            <p className="text-sm font-medium text-gray-500">Best Price </p>
          </li>
        </ul>

        <div className="mt-4">
          <p className="text-gray-500">1-4 shared rooms | 1-2 bath rooms</p>
          <p className="font-bold font-mono text-teal-900">K2,500-K4,000</p>
        </div>

        <div className="mt-2 border-t border-gray-200 flex items-center justify-between gap-4 py-4">
          <div className="flex flex-col">
            <li className="flex items-center gap-2 mr-2">
              <MdTour className="h-4 w-4 text-gray-700" />
              <p className="text-sm font-medium text-gray-700">Tour</p>
            </li>
          </div>
          <Link to="/listings/12345" className="flex w-full items-center justify-center rounded-md bg-gray-800 px-5 py-2.5 text-md transition font-medium text-center text-white hover:bg-blue-800 focus:outline-none focus:ring-4 w-full">
            See more
          </Link>
        </div>
      </div>
        </div>
    </div>
  );
};

export default PropertyCard;