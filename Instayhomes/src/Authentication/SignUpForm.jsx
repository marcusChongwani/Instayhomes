import React, { useState } from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import {DotLottieReact} from '@lottiefiles/dotlottie-react';

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    university: "",
    budget: "",
    location: "",
    amenities: [],
  });

  const handleNextStep = () => setStep(step + 1);
  const handleBackStep = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAmenitiesChange = (amenity) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.includes(amenity)
        ? formData.amenities.filter((item) => item !== amenity)
        : [...formData.amenities, amenity],
    });
  };

  return (
    <div className="flex relative justify-center items-center h-screen font-inter">
       <Link to="/" className="absolute top-4  right-8 mt-6 text-gray-600 hover:text-gray-800 transition" >← Home</Link>
      
      <div className="  w-full max-w-lg bg-white p-8 rounded-xl ">
        {/* Step 1: Welcome Screen */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
            
            <DotLottieReact
              src="https://lottie.host/eac63ae9-438f-45a9-9bba-62f4ba7c01d7/dpT9PxJFrc.lottie"
              background="transparent"
              style={{ width: 250, height: 250, margin: "auto" }}
              loop
              autoPlay
            />
            <h2 className="text-xl font-bold text-gray-700 mb-2">Welcome to Instay – Find a Home that Suits you🫵🏽. 
              </h2>
            <p className="text-gray-600 mb-6">Let's match you with the best housing options available.</p>
            <button onClick={handleNextStep} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Get Started
            </button>
         
          </motion.div>
        )}

        {/* Step 2: Basic Info */}
        {step === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Let's Get to Know You! 🚀</h2>
            <p className="text-gray-600 mb-4">Fill in a few details to personalize your experience.</p>
            <div className="space-y-4">
              <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-3 border rounded-lg shadow-sm" />
              <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-3 border rounded-lg shadow-sm" />
              <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" className="w-full p-3 border rounded-lg shadow-sm" />
              <select name="university" value={formData.university} onChange={handleChange} className="w-full p-3 border rounded-lg shadow-sm">
                <option value="">Select your university</option>
                <option value="University of Zambia">University of Zambia</option>
                <option value="Copperbelt University">Copperbelt University</option>
                <option value="Cavendish University">Cavendish University</option>
              </select>
            </div>
            <button onClick={handleNextStep} className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Continue
            </button>
          </motion.div>
        )}

        {/* Step 3: Preferences */}
        {step === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tailor Your Housing Preferences 🏡</h2>
            <p className="text-gray-600 mb-4">Help us find the best match for you.</p>
            <div className="space-y-4">
              <input name="budget" value={formData.budget} onChange={handleChange} placeholder="Max Budget (ZMW)" className="w-full p-3 border rounded-lg shadow-sm" />
              <input name="location" value={formData.location} onChange={handleChange} placeholder="Preferred Location" className="w-full p-3 border rounded-lg shadow-sm" />
            </div>
            <button onClick={handleNextStep} className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Continue
            </button>
          </motion.div>
        )}

        {/* Step 4: Amenities */}
        {step === 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Choose Your Comforts & Essentials ✨</h2>
            <p className="text-gray-600 mb-4">Select amenities that matter to you.</p>
            <div className="grid grid-cols-2 gap-4">
              {["Wi-Fi", "Laundry", "Chefs", "Housekeeping"].map((amenity) => (
                <label key={amenity} className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition">
                  <input type="checkbox" checked={formData.amenities.includes(amenity)} onChange={() => handleAmenitiesChange(amenity)} className="w-4 h-4" />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
            <button onClick={() => alert("Signup complete!")} className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Complete Signup & Explore Instay 🎉
            </button>
          </motion.div>
        )}

        {/* Back Button */}
        {step > 1 && (
          <button onClick={handleBackStep} className="mt-6 text-gray-600 hover:text-gray-800 transition">
            ← Back
          </button>
        )}
      </div>
    </div>
  );
};

export default SignupPage;