
import { useState } from "react";
import { motion } from "framer-motion";
import { FiUpload, FiPlus, FiMinus, FiArrowLeft, FiArrowRight, FiCheck } from "react-icons/fi";

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
    photos: [],
    amenities: [],
    description: "",
    houseRules: ""
  });

  // Pre-defined amenities list
  const [amenities, setAmenities] = useState([
    { id: 1, name: "Wifi", selected: false },
    { id: 2, name: "Kitchen", selected: false },
    { id: 3, name: "Washer", selected: false },
    { id: 4, name: "Dryer", selected: false },
    { id: 5, name: "Air Conditioning", selected: false },
    { id: 6, name: "Heating", selected: false },
    { id: 7, name: "Dedicated Workspace", selected: false },
    { id: 8, name: "TV", selected: false },
    { id: 9, name: "Parking", selected: false },
  ]);

  const totalSteps = 4;
  const isLastStep = activeStep === totalSteps - 1;
  const isFirstStep = activeStep === 0;

  const handleNext = () => {
    if (!isLastStep) setActiveStep((cur) => cur + 1);
  };

  const handlePrev = () => {
    if (!isFirstStep) setActiveStep((cur) => cur - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    // You could redirect or show a success message
    alert("Property submitted successfully!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const toggleAmenity = (id) => {
    const updatedAmenities = amenities.map(a => 
      a.id === id ? { ...a, selected: !a.selected } : a
    );
    
    setAmenities(updatedAmenities);
    
    // Update formData with selected amenities
    setFormData({
      ...formData,
      amenities: updatedAmenities.filter(a => a.selected).map(a => a.name)
    });
  };

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

  // Step content components
  const BasicInfoStep = () => (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Property Name</label>
          <input 
            type="text"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleInputChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="E.g., Cozy Studio near University"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Property Type</label>
          <select 
            name="propertyType"
            value={formData.propertyType}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">Select Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="hostel">Hostel</option>
            <option value="boarding-house">Boarding House</option>
            <option value="shared-room">Shared Room</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Bedrooms</label>
            <input 
              type="number" 
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleInputChange}
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Bathrooms</label>
            <input 
              type="number" 
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleInputChange}
              min="0"
              step="0.5"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Monthly Rent (K)</label>
          <input 
            type="number" 
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="E.g., 1500"
          />
        </div>
      </div>
    </section>
  );

  const LocationStep = () => (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Location & Photos</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Address</label>
          <input 
            type="text" 
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Full address"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Nearest University/College</label>
          <input 
            type="text" 
            name="nearestUniversity"
            value={formData.nearestUniversity}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="E.g., University of Zambia"
          />
        </div>
        
        <div className="mt-6">
          <label className="block text-gray-700 mb-2">Upload Photos</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <div className="flex justify-center">
              <FiUpload className="h-10 w-10 text-gray-400 mb-2" />
            </div>
            <p className="text-sm text-gray-500">Drag and drop images here, or click to select files</p>
            <input 
              type="file" 
              className="hidden" 
              multiple 
              accept="image/*" 
              id="property-photos" 
            />
            <label 
              htmlFor="property-photos"
              className="mt-4 inline-block px-4 py-2 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300"
            >
              Select Files
            </label>
          </div>
        </div>
      </div>
    </section>
  );

  const AmenitiesStep = () => (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Amenities & Features</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Select Available Amenities</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {amenities.map((amenity) => (
              <div 
                key={amenity.id}
                onClick={() => toggleAmenity(amenity.id)}
                className={`cursor-pointer rounded-lg border p-3 flex items-center gap-2 transition-colors
                  ${amenity.selected 
                    ? 'border-red-500 bg-red-50 text-red-700' 
                    : 'border-gray-200 hover:border-gray-300'
                  }`}
              >
                {amenity.selected 
                  ? <FiMinus className="h-4 w-4" /> 
                  : <FiPlus className="h-4 w-4" />
                }
                <span>{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const DescriptionStep = () => (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Description & Rules</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Property Description</label>
          <textarea 
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[120px]"
            placeholder="Describe your property, highlighting special features and the surrounding area..."
          ></textarea>
        </div>
        
        <div className="mt-4">
          <label className="block text-gray-700 mb-1">House Rules (optional)</label>
          <textarea 
            name="houseRules"
            value={formData.houseRules}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[80px]"
            placeholder="Any specific rules for your property..."
          ></textarea>
        </div>
      </div>
    </section>
  );

  const PreviewStep = () => (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Preview Your Listing</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-700">Basic Information</h3>
          <div className="bg-gray-50 p-3 rounded-lg mt-2">
            <p><span className="font-medium">Name:</span> {formData.propertyName || "Not provided"}</p>
            <p><span className="font-medium">Type:</span> {formData.propertyType || "Not provided"}</p>
            <p><span className="font-medium">Bedrooms:</span> {formData.bedrooms}</p>
            <p><span className="font-medium">Bathrooms:</span> {formData.bathrooms}</p>
            <p><span className="font-medium">Price:</span> K{formData.price || "Not provided"}</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-700">Location</h3>
          <div className="bg-gray-50 p-3 rounded-lg mt-2">
            <p><span className="font-medium">Address:</span> {formData.address || "Not provided"}</p>
            <p><span className="font-medium">Nearest Institution:</span> {formData.nearestUniversity || "Not provided"}</p>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-700">Amenities</h3>
          <div className="bg-gray-50 p-3 rounded-lg mt-2">
            {formData.amenities.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {formData.amenities.map((amenity, index) => (
                  <span key={index} className="bg-red-100 text-red-700 px-2 py-1 rounded-md text-sm">
                    {amenity}
                  </span>
                ))}
              </div>
            ) : (
              <p>No amenities selected</p>
            )}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-700">Description</h3>
          <div className="bg-gray-50 p-3 rounded-lg mt-2">
            <p>{formData.description || "No description provided"}</p>
          </div>
        </div>
        
        {formData.houseRules && (
          <div>
            <h3 className="font-medium text-gray-700">House Rules</h3>
            <div className="bg-gray-50 p-3 rounded-lg mt-2">
              <p>{formData.houseRules}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  // Render the appropriate step based on activeStep
  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <BasicInfoStep />;
      case 1:
        return <LocationStep />;
      case 2:
        return <AmenitiesStep />;
      case 3:
        return <PreviewStep />;
      default:
        return <BasicInfoStep />;
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-20 min-h-screen max-w-3xl mx-auto px-4 py-8"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-3xl font-bold text-gray-800 mb-2"
      >
        List Your Property
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="text-gray-600 mb-8"
      >
        Fill in the details below to create your property listing
      </motion.p>
      
      {/* Stepper Progress Bar */}
      <motion.div variants={itemVariants} className="relative w-full mb-8">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 bg-red-600 transition-all duration-500 ease-in-out"
            style={{ width: `${((activeStep + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between mt-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center ${
                index <= activeStep ? 'text-red-600' : 'text-gray-400'
              }`}
            >
              <div 
                className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 ${
                  index <= activeStep ? 'bg-red-600 text-white' : 'bg-gray-200'
                }`}
              >
                {index < activeStep ? (
                  <FiCheck className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
              <span className="text-xs hidden sm:block">
                {index === 0 ? 'Basic Info' : 
                 index === 1 ? 'Location' : 
                 index === 2 ? 'Amenities' : 
                 'Preview'}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-8">
        {/* Current Step Content */}
        {renderStep()}
        
        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <button 
            type="button"
            onClick={handlePrev}
            className={`px-6 py-2 flex items-center gap-2 ${
              isFirstStep ? 'invisible' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <FiArrowLeft /> Back
          </button>
          
          {isLastStep ? (
            <button 
              type="submit"
              className="px-8 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              Submit Listing <FiCheck className="w-4 h-4" />
            </button>
          ) : (
            <button 
              type="button"
              onClick={handleNext}
              className="px-8 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              Next <FiArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </motion.form>
    </motion.div>
  );
}
