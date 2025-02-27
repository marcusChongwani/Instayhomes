
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiCheckCircle, FiXCircle, FiEye, FiFilter } from "react-icons/fi";

export default function PropertyApprovals() {
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

  // Dummy property data
  const [properties, setProperties] = useState([
    { 
      id: 1, 
      title: "Modern Studio Apartment", 
      host: "John Smith", 
      location: "University of Oxford", 
      price: "$650/month", 
      submitted: "2 hours ago", 
      status: "Pending" 
    },
    { 
      id: 2, 
      title: "Cozy Single Room", 
      host: "Emily Watson", 
      location: "Harvard University", 
      price: "$450/month", 
      submitted: "5 hours ago", 
      status: "Pending" 
    },
    { 
      id: 3, 
      title: "Shared 3-Bedroom Apartment", 
      host: "Michael Davis", 
      location: "Stanford University", 
      price: "$800/month", 
      submitted: "1 day ago", 
      status: "Approved" 
    },
    { 
      id: 4, 
      title: "Luxury Studio with Bath", 
      host: "Sarah Johnson", 
      location: "MIT", 
      price: "$950/month", 
      submitted: "1 day ago", 
      status: "Rejected" 
    },
    { 
      id: 5, 
      title: "Budget Friendly Double Room", 
      host: "Robert Brown", 
      location: "University of Cambridge", 
      price: "$550/month", 
      submitted: "2 days ago", 
      status: "Approved" 
    },
    { 
      id: 6, 
      title: "Premium Student Loft", 
      host: "Jessica Miller", 
      location: "Columbia University", 
      price: "$1100/month", 
      submitted: "3 days ago", 
      status: "Pending" 
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         property.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || property.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const [showDetails, setShowDetails] = useState(null);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Property Approvals</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-500">
            {properties.filter(p => p.status === "Pending").length} pending approvals
          </span>
          <button className="p-2 bg-red-100 text-red-600 rounded-lg">
            <FiFilter />
          </button>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search properties..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </motion.div>

      {/* Properties Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProperties.map((property) => (
          <div 
            key={property.id} 
            className={`bg-white rounded-lg overflow-hidden shadow-sm border ${
              property.status === 'Pending' ? 'border-yellow-200' :
              property.status === 'Approved' ? 'border-green-200' :
              'border-red-200'
            }`}
          >
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{property.title}</h3>
                  <p className="text-sm text-gray-500">Host: {property.host}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  property.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  property.status === 'Approved' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {property.status}
                </span>
              </div>
              
              <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-500">Location:</span>
                  <p className="font-medium text-gray-700">{property.location}</p>
                </div>
                <div>
                  <span className="text-gray-500">Price:</span>
                  <p className="font-medium text-gray-700">{property.price}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500">Submitted:</span>
                  <p className="font-medium text-gray-700">{property.submitted}</p>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between">
                <button 
                  onClick={() => setShowDetails(property.id === showDetails ? null : property.id)}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded flex items-center gap-1 text-sm"
                >
                  <FiEye /> {property.id === showDetails ? "Hide Details" : "View Details"}
                </button>
                
                <div className="flex gap-2">
                  {property.status === 'Pending' && (
                    <>
                      <button className="p-1 bg-red-100 text-red-600 rounded">
                        <FiXCircle />
                      </button>
                      <button className="p-1 bg-green-100 text-green-600 rounded">
                        <FiCheckCircle />
                      </button>
                    </>
                  )}
                </div>
              </div>
              
              {property.id === showDetails && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                      alt={property.title}
                      className="w-full h-24 object-cover rounded"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                      alt={property.title}
                      className="w-full h-24 object-cover rounded"
                    />
                  </div>
                  <div className="mt-3">
                    <h4 className="font-medium text-gray-700">Description:</h4>
                    <p className="text-sm text-gray-600">
                      A well-furnished property close to the university campus with all modern amenities including high-speed internet, laundry, and a fully equipped kitchen.
                    </p>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Bedrooms:</span>
                      <p className="font-medium text-gray-700">1</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Bathrooms:</span>
                      <p className="font-medium text-gray-700">1</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Size:</span>
                      <p className="font-medium text-gray-700">450 sq ft</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Furnished:</span>
                      <p className="font-medium text-gray-700">Yes</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Pagination */}
      <motion.div variants={itemVariants} className="flex justify-between items-center mt-6">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">{filteredProperties.length}</span> of <span className="font-medium">{properties.length}</span> properties
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
