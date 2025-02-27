
import React from "react";
import { motion } from "framer-motion";
import { FaLock, FaUsers, FaBuilding, FaChartBar, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
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
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
            alt="Admin Dashboard" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Admin Control Panel
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl max-w-2xl mb-8"
          >
            Manage users, properties, and system settings from a central dashboard with comprehensive analytics.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/admin/dashboard" className="bg-red-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition-colors inline-block">
              Go to Dashboard
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Admin Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Admin Tools & Features
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <FaUsers className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">User Management</h3>
              <p className="text-gray-600 text-center">Manage user accounts, reset passwords, and monitor user activity across the platform.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <FaBuilding className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Property Verification</h3>
              <p className="text-gray-600 text-center">Review and approve property listings before they go live to ensure quality and compliance.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow">
              <FaChartBar className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Reports & Analytics</h3>
              <p className="text-gray-600 text-center">Access comprehensive reports on platform usage, bookings, and revenue generation.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Quick Access
          </motion.h2>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link to="/admin/dashboard/users" className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <FaUsers className="w-10 h-10 text-red-600 mb-3" />
              <span className="text-gray-800 font-semibold">User Management</span>
            </Link>
            
            <Link to="/admin/dashboard/properties" className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <FaBuilding className="w-10 h-10 text-red-600 mb-3" />
              <span className="text-gray-800 font-semibold">Property Approvals</span>
            </Link>
            
            <Link to="/admin/dashboard/reports" className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <FaChartBar className="w-10 h-10 text-red-600 mb-3" />
              <span className="text-gray-800 font-semibold">Reports</span>
            </Link>
            
            <Link to="/admin/dashboard/settings" className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <FaCog className="w-10 h-10 text-red-600 mb-3" />
              <span className="text-gray-800 font-semibold">Settings</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Admin Security */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div variants={itemVariants} className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-red-600 mb-6">
            <FaLock className="w-8 h-8" />
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-6"
          >
            Secure Admin Access
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl max-w-2xl mx-auto mb-8"
          >
            This area is restricted to authorized personnel only. All actions are logged for security purposes.
          </motion.p>
        </div>
      </section>
    </motion.div>
  );
}
