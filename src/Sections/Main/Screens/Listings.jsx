import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaList } from "react-icons/fa";
import SearchBar from "../Components/ListingsPage/SearchBar";
import PropertyCard from "../Components/ListingsPage/PropertyCard";
import SchoolFilterButtons from "../Components/ListingsPage/FilterButtons";

export default function ListingsPage() {
  const [isMapView, setIsMapView] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const MapView = () => (
    <motion.div
      className="h-screen bg-white flex items-center justify-center text-gray-700 text-lg font-semibold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Map View (Coming Soon)
    </motion.div>
  );

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants} 
      className="pt-20  min-h-screen"
    >
      {/* Search & Filters - Floating Sticky */}
      <div className="sticky top-16 bg-white  z-40">
        <div className="max-w-7xl mx-auto ">
          <SearchBar query={query} />
          <SchoolFilterButtons />
        </div>
      </div>

      {/* Page Title & Info */}
      {!isMapView && (
        <div className="max-w-7xl mx-auto px-4 mt-4">
          <motion.p variants={itemVariants} className="text-md font-medium text-gray-600">
            Hostels for Rent near
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-3xl font-bold text-gray-700">
            {query || "Search by University or Location"}
          </motion.h1>
          <motion.div variants={itemVariants} className="mt-3 flex items-center justify-between">
            <p className="text-gray-500">13,567 hostels available</p>
            <button className="text-gray-700 font-medium bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
              Sort by: Relevance
            </button>
          </motion.div>
        </div>
      )}

      {/* Listings or Map */}
      <motion.div variants={containerVariants} className="mt-6">
        {isMapView ? (
          <MapView />
        ) : (
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        )}
      </motion.div>

      {/* Toggle Button */}
      <button
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-red-600 rounded-lg text-white shadow-xl flex items-center gap-2 transition-transform duration-200 hover:scale-105 z-20"
        onClick={() => setIsMapView((prev) => !prev)}
        whileTap={{ scale: 0.95 }}
      >
        {isMapView ? <FaList className="w-4 h-4" /> : <FaMapMarkerAlt className="w-4 h-4" />}
        {isMapView ? "List View" : "Map View"}
      </button>
    </motion.div>
  );
}