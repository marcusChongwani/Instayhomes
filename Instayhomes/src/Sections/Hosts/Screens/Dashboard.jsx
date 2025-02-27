
import { motion } from "framer-motion";
import { FiHome, FiDollarSign, FiUsers, FiMessageCircle } from "react-icons/fi";
import DashboardNav from "../Components/DashboardNav";

export default function Dashboard() {
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
      className="pt-20 min-h-screen max-w-7xl mx-auto px-4 py-8"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-3xl font-bold text-gray-800 mb-4"
      >
        Host Dashboard
      </motion.h1>
      
      <DashboardNav />
      
      {/* Stats Overview */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      >
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="flex items-center mb-3">
            <FiHome className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-gray-600 text-sm">Properties</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">3</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="flex items-center mb-3">
            <FiUsers className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-gray-600 text-sm">Active Tenants</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">6</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="flex items-center mb-3">
            <FiDollarSign className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-gray-600 text-sm">Revenue (MTD)</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">$2,450</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="flex items-center mb-3">
            <FiMessageCircle className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-gray-600 text-sm">New Messages</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">4</p>
        </div>
      </motion.div>
      
      {/* Recent Activity */}
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            <div className="p-4 hover:bg-gray-50">
              <p className="text-gray-800 font-medium">New booking request</p>
              <p className="text-sm text-gray-600">John D. requested to book Sunflower Apartment</p>
              <p className="text-xs text-gray-500 mt-1">Today, 10:24 AM</p>
            </div>
            <div className="p-4 hover:bg-gray-50">
              <p className="text-gray-800 font-medium">Payment received</p>
              <p className="text-sm text-gray-600">$850 from Sarah M. for Oakwood Room</p>
              <p className="text-xs text-gray-500 mt-1">Yesterday, 3:15 PM</p>
            </div>
            <div className="p-4 hover:bg-gray-50">
              <p className="text-gray-800 font-medium">Maintenance request</p>
              <p className="text-sm text-gray-600">Alex T. reported a leaking faucet at Pine Street Hostel</p>
              <p className="text-xs text-gray-500 mt-1">2 days ago</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Your Properties */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Properties</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Property Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">Sunflower Apartment</h3>
              <p className="text-sm text-gray-600">2 bedrooms • 1 bathroom</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-green-600 font-medium">Occupied</span>
                <button className="text-blue-600 text-sm font-medium">Manage</button>
              </div>
            </div>
          </div>
          
          {/* Property Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">Oakwood Room</h3>
              <p className="text-sm text-gray-600">1 bedroom • 1 bathroom</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-green-600 font-medium">Occupied</span>
                <button className="text-blue-600 text-sm font-medium">Manage</button>
              </div>
            </div>
          </div>
          
          {/* Property Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">Pine Street Hostel</h3>
              <p className="text-sm text-gray-600">4 bedrooms • 2 bathrooms</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-yellow-600 font-medium">Partially Occupied</span>
                <button className="text-blue-600 text-sm font-medium">Manage</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
