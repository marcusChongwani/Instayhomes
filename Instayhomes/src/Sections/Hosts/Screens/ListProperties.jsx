
import { useState } from "react";
import { motion } from "framer-motion";
import { FiHome, FiMapPin, FiList, FiCheckSquare } from "react-icons/fi";

export default function ListProperties() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "",
    bedrooms: 1,
    bathrooms: 1,
    price: "",
    address: "",
    nearestUniversity: "",
    description: "",
    amenities: []
  });

  // Pre-defined amenities list
  const amenitiesList = [
    "Wifi", "Kitchen", "Washer", "Dryer", "Air Conditioning", 
    "Heating", "Dedicated Workspace", "TV", "Parking"
  ];

  const totalSteps = 4;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: Math.max(1, value) }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => {
      if (prev.amenities.includes(amenity)) {
        return { ...prev, amenities: prev.amenities.filter(a => a !== amenity) };
      } else {
        return { ...prev, amenities: [...prev.amenities, amenity] };
      }
    });
  };

  const nextStep = () => {
    if (activeStep < totalSteps - 1) {
      setActiveStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to your backend
    console.log("Submitting form data:", formData);
    alert("Property listing submitted successfully!");
    // Redirect or show success message
  };

  const steps = [
    {
      title: "Property Details",
      icon: <FiHome className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Property Name
            </label>
            <input
              type="text"
              name="propertyName"
              value={formData.propertyName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g. Sunny Apartment Near Campus"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Property Type
            </label>
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select property type</option>
              <option value="Apartment">Apartment</option>
              <option value="House">House</option>
              <option value="Studio">Studio</option>
              <option value="Shared Room">Shared Room</option>
              <option value="Private Room">Private Room</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Bedrooms
              </label>
              <div className="flex">
                <button
                  type="button"
                  className="p-3 border border-gray-300 rounded-l-lg"
                  onClick={() => handleNumberChange("bedrooms", formData.bedrooms - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={(e) => handleNumberChange("bedrooms", parseInt(e.target.value))}
                  className="w-full p-3 border-y border-gray-300 text-center"
                  min="1"
                />
                <button
                  type="button"
                  className="p-3 border border-gray-300 rounded-r-lg"
                  onClick={() => handleNumberChange("bedrooms", formData.bedrooms + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Bathrooms
              </label>
              <div className="flex">
                <button
                  type="button"
                  className="p-3 border border-gray-300 rounded-l-lg"
                  onClick={() => handleNumberChange("bathrooms", formData.bathrooms - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={(e) => handleNumberChange("bathrooms", parseInt(e.target.value))}
                  className="w-full p-3 border-y border-gray-300 text-center"
                  min="1"
                />
                <button
                  type="button"
                  className="p-3 border border-gray-300 rounded-r-lg"
                  onClick={() => handleNumberChange("bathrooms", formData.bathrooms + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Monthly Price (K)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g. 2500"
            />
          </div>
        </div>
      )
    },
    {
      title: "Location",
      icon: <FiMapPin className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Property Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Full address"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Nearest University/Institution
            </label>
            <select
              name="nearestUniversity"
              value={formData.nearestUniversity}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="">Select nearest institution</option>
              <option value="University of Zambia">University of Zambia</option>
              <option value="Copperbelt University">Copperbelt University</option>
              <option value="Mulungushi University">Mulungushi University</option>
              <option value="Cavendish University">Cavendish University</option>
              <option value="Zambia Open University">Zambia Open University</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Property Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Describe your property..."
            ></textarea>
          </div>
        </div>
      )
    },
    {
      title: "Amenities",
      icon: <FiList className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 mb-4">
            Select the amenities that your property offers:
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            {amenitiesList.map((amenity) => (
              <div 
                key={amenity}
                onClick={() => handleAmenityToggle(amenity)}
                className={`p-3 border rounded-lg cursor-pointer flex items-center ${
                  formData.amenities.includes(amenity)
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={formData.amenities.includes(amenity)}
                  onChange={() => {}}
                />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Review & Submit",
      icon: <FiCheckSquare className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-lg mb-3">Property Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Property Name</p>
                <p className="font-medium">{formData.propertyName || "Not provided"}</p>
              </div>
              <div>
                <p className="text-gray-500">Property Type</p>
                <p className="font-medium">{formData.propertyType || "Not provided"}</p>
              </div>
              <div>
                <p className="text-gray-500">Bedrooms</p>
                <p className="font-medium">{formData.bedrooms}</p>
              </div>
              <div>
                <p className="text-gray-500">Bathrooms</p>
                <p className="font-medium">{formData.bathrooms}</p>
              </div>
              <div>
                <p className="text-gray-500">Monthly Price</p>
                <p className="font-medium">K{formData.price || "Not provided"}</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-lg mb-3">Location</h3>
            <div className="grid grid-cols-1 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Address</p>
                <p className="font-medium">{formData.address || "Not provided"}</p>
              </div>
              <div>
                <p className="text-gray-500">Nearest Institution</p>
                <p className="font-medium">{formData.nearestUniversity || "Not provided"}</p>
              </div>
              <div>
                <p className="text-gray-500">Description</p>
                <p className="font-medium">{formData.description || "Not provided"}</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-lg mb-3">Amenities</h3>
            {formData.amenities.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {formData.amenities.map((amenity) => (
                  <span 
                    key={amenity}
                    className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No amenities selected</p>
            )}
          </div>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-20 min-h-screen max-w-3xl mx-auto px-4 py-8 pb-24"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">List Your Property</h1>
        <p className="text-gray-600">Complete this simple form to add your property</p>
      </motion.div>
      
      {/* Step Indicators */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center ${
                index <= activeStep ? 'text-red-600' : 'text-gray-400'
              }`}
            >
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index < activeStep 
                    ? 'bg-red-600 text-white' 
                    : index === activeStep
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index < activeStep ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : (
                  <span>{step.icon}</span>
                )}
              </div>
              <span className="mt-2 text-xs font-medium hidden sm:block">{step.title}</span>
            </div>
          ))}
        </div>
        
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-full">
            <div 
              className="h-1 bg-red-600 rounded-full transition-all duration-500" 
              style={{ width: `${(activeStep / (totalSteps - 1)) * 100}%` }}
            ></div>
          </div>
        </div>
      </motion.div>
      
      {/* Form Step Content */}
      <motion.div 
        variants={itemVariants}
        className="bg-white rounded-lg p-6 shadow-sm mb-6"
      >
        <h2 className="text-xl font-medium mb-4">
          {steps[activeStep].title}
        </h2>
        
        <form>
          {steps[activeStep].content}
        </form>
      </motion.div>
      
      {/* Navigation Buttons */}
      <motion.div variants={itemVariants} className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          disabled={activeStep === 0}
          className={`px-5 py-2 rounded-lg font-medium ${
            activeStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Back
        </button>
        
        {activeStep === totalSteps - 1 ? (
          <button
            type="button"
            onClick={handleSubmit}
            className="px-5 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
          >
            Submit Listing
          </button>
        ) : (
          <button
            type="button"
            onClick={nextStep}
            className="px-5 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
          >
            Continue
          </button>
        )}
      </motion.div>
    </motion.div>
  );
}
