import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt, FaPhone, FaEnvelope, FaStar } from "react-icons/fa";
import { FaLock, FaWifi, FaCar } from "react-icons/fa";
import { MdKitchen, MdSecurity } from "react-icons/md";
import ListingFAQ from "../Components/ListingsPage/ListingFaq";

const ListingDetails = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", rating: 4, comment: "Great place to stay!" },
    { id: 2, name: "Jane Smith", rating: 5, comment: "Loved the environment and service." },
  ]);
  const [newReview, setNewReview] = useState({ name: "", rating: "", comment: "" });

  const handleAddReview = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([...reviews, { id: reviews.length + 1, ...newReview, rating: parseInt(newReview.rating) }]);
      setNewReview({ name: "", rating: "", comment: "" });
    }
  };

  const amenities = [
    { icon: <FaLock />, text: "Lock on bedroom door" },
    { icon: <MdKitchen />, text: "Kitchen" },
    { icon: <FaWifi />, text: "Wifi" },
    { icon: <FaCar />, text: "Free parking on premises" },
    { icon: <MdSecurity />, text: "Exterior security cameras on property" }]

  const roomsRef = useRef(null);

  return (
    <div className="max-w-5xl  pb-20 mx-auto mt-16">
      {/* Image Gallery - No motion effect */}
      <div className="relative w-full mb-6">
        <img 
          src="https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
          alt="" 
          className="w-full h-64 object-cover"
        />
        <NavLink 
          to="/listings" 
          className="absolute top-4 left-4 shadow-lg text-black hover:underline p-2 rounded-full bg-white"
        >
          <FaArrowLeft />
        </NavLink>
      </div>

      {/* Listing Title & Location - With Motion */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.1 }} 
        className="px-4"
      >
        <div className="flex items-center gap-1">
          <button className="text-sm font-semibold text-white bg-purple-600 rounded-sm mb-1 px-[4px]">5.6</button>
            <p className="text-gray-400 ">Execellent | @ Verified</p>
          </div>
        
      
        
        <h1 className="text-2xl font-bold text-gray-700 mb-3 mt-2">Optiquest Student Hostels</h1>
        <p className="text-gray-600 flex items-center mb-4">Thornpark, Lusaka</p>
        <div className="flex items-center flex-wrap gap-1 my-4">
          <button className="text-blue-600 bg-blue-200 px-[2px] py-[1px] rounded-sm ">Cavendish University</button>
          <button className="text-blue-600 bg-blue-200 px-[2px] py-[1px] rounded-sm mr-1">University of Zambia</button>
          <button className="text-blue-600 bg-blue-200 px-[2px] py-[1px] rounded-sm mr-1">Chereso university</button>
        </div>
      </motion.div>

      {/* Description Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.2 }} 
        className="px-4"
      >
        <h2 className="text-2xl text-gray-700 font-bold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed mb-2">
          This is a placeholder for the listing description. It will contain details about the property, amenities, and any important information for potential tenants.
        </p>
        
      </motion.div>

      {/* Amenities Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.3 }} 
        className="p-4"
      >
        <h2 className="text-2xl text-gray-700 font-bold mb-4">What this place offers</h2>
        <ul className="text-lg">
          {amenities.map((item, index) => (
            <li key={index} className="flex items-center gap-3 mb-4">
              <span className="text-gray-800">{item.icon}</span>
              <span className="font-normal text-gray-700">{item.text}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Rooms Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.4 }} 
        className="container mx-auto px-4"
      >
        <h2 className="text-2xl text-gray-700 font-bold mb-6">Room Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Single Room', description: 'Comfortable safe zone if you want to be alone.', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80' },
            { title: '2 Shared Room', description: 'Bringing designs to life with animations.', image: 'https://images.unsplash.com/photo-1635776062360-af423602aff3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80' },
            { title: '4 Shared Room', description: 'Interactive prototypes for seamless experiences.', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80' },
          ].map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: index * 0.2 }} 
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-700">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/*Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5}}
        className="px-4 my-6"
        >
        <h2 className="text-2xl text-gray-700 font-bold my-4">Where you'll be</h2>

      <div className="w-full h-48 rounded-lg bg-gray-300 ">
        map section
      </div>
          
      </motion.div>

    

      {/* Reviews Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.5 }} 
        className="mt-8 px-4"
      >
        <h2 className="text-2xl text-gray-700 font-bold mb-4">Listing FAQ's</h2>
        {/* Faq Content */}
        <ListingFAQ />
      </motion.div>

      {/* Contact Landlord Section */}
      <div className="fixed bg-white bottom-0 left-0 w-full border-t py-4 px-4 flex items-center justify-between" >
        <h2 className="text-lg font-semibold ">Contact Landlord</h2>
        <button className=" bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
          Message Landlord
        </button>
      </div>
    </div>
  );
};

export default ListingDetails;