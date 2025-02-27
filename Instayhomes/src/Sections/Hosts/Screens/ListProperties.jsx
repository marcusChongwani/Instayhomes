
import { useState } from "react";
import { motion } from "framer-motion";
import { FiUpload, FiPlus, FiMinus } from "react-icons/fi";

export default function ListProperties() {
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

  const toggleAmenity = (id) => {
    setAmenities(amenities.map(a => 
      a.id === id ? { ...a, selected: !a.selected } : a
    ));
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
      
      <motion.form variants={itemVariants} className="space-y-8">
        {/* Basic Information */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Property Name</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="E.g., Cozy Studio near University"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Property Type</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Select a property type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="room">Room</option>
                <option value="dormitory">Dormitory</option>
                <option value="hostel">Hostel</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Bedrooms</label>
                <input 
                  type="number" 
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Bathrooms</label>
                <input 
                  type="number" 
                  min="0"
                  step="0.5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Location */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Location</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Address</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Street address"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">City</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Postal Code</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Nearby University/College</label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="E.g., University of California, Berkeley"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-1">Distance to Campus (minutes)</label>
              <input 
                type="number" 
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        </section>
        
        {/* Pricing & Availability */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Pricing & Availability</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Monthly Rent ($)</label>
                <input 
                  type="number" 
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Security Deposit ($)</label>
                <input 
                  type="number" 
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1">Available From</label>
                <input 
                  type="date" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Minimum Stay (months)</label>
                <input 
                  type="number" 
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Amenities */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Amenities</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {amenities.map(amenity => (
              <div 
                key={amenity.id}
                className={`border ${amenity.selected ? 'border-red-600 bg-red-50' : 'border-gray-300'} rounded-lg p-3 cursor-pointer flex items-center justify-between`}
                onClick={() => toggleAmenity(amenity.id)}
              >
                <span className={`${amenity.selected ? 'text-red-800' : 'text-gray-700'}`}>
                  {amenity.name}
                </span>
                {amenity.selected ? 
                  <FiMinus className="text-red-600" /> : 
                  <FiPlus className="text-gray-600" />
                }
              </div>
            ))}
          </div>
        </section>
        
        {/* Photos */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Photos</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <FiUpload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 mb-2">Drag and drop photos here, or click to upload</p>
            <p className="text-gray-500 text-sm">(Maximum 8 photos, each photo should be less than 5MB)</p>
            <button className="mt-4 px-4 py-2 bg-gray-200 rounded-lg text-gray-700 font-medium">
              Choose Files
            </button>
          </div>
        </section>
        
        {/* Description */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Description</h2>
          
          <div>
            <label className="block text-gray-700 mb-1">Property Description</label>
            <textarea 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[120px]"
              placeholder="Describe your property, highlighting special features and the surrounding area..."
            ></textarea>
          </div>
          
          <div className="mt-4">
            <label className="block text-gray-700 mb-1">House Rules (optional)</label>
            <textarea 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 min-h-[80px]"
              placeholder="Any specific rules for your property..."
            ></textarea>
          </div>
        </section>
        
        {/* Submit Button */}
        <div className="text-center">
          <button 
            type="submit"
            className="px-8 py-3 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition-colors"
          >
            Create Listing
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
}
