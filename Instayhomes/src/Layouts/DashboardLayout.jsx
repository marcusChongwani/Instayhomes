
import React from "react";
import { motion } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";
import { FiHome, FiList, FiUser } from "react-icons/fi";
import Navbar from "../Sections/Hosts/Components/Navbar";

export default function DashboardLayout() {
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

  const navItems = [
    { id: "overview", label: "Overview", icon: <FiHome />, path: "/hosts/dashboard" },
    { id: "properties", label: "Properties", icon: <FiList />, path: "/hosts/dashboard/properties" },
    { id: "profile", label: "Profile", icon: <FiUser />, path: "/hosts/dashboard/profile" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-10 min-h-screen max-w-7xl mx-auto px-4 py-8"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl font-bold text-gray-800 mt-4 mb-2"
        >
          Host Dashboard
        </motion.h1>
        
        {/* Navigation */}
        <div className="mb-8 pb-4">
          <nav className="flex overflow-x-auto border-b border-gray-200">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  end={item.id === "overview"}
                  className={({ isActive }) => 
                    `flex items-center px-1 py-4 text-sm font-medium relative ${
                      isActive 
                        ? "text-red-600" 
                        : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`
                  }
                >
                  <span className="flex items-center">
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.label}</span>
                  </span>
                  {/* Active indicator */}
                  <motion.div
                    layoutId="activeTab"
                    className={({ isActive }) => 
                      isActive ? "absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" : "hidden"
                    }
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
        
        {/* Content */}
        <Outlet />
      </motion.div>
    </div>
  );
}
