
import { motion } from "framer-motion";
import { FiHome, FiUsers, FiDollarSign, FiMessageSquare } from "react-icons/fi";

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
    <motion.div variants={containerVariants}>
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
            <span className="text-gray-600 text-sm">Revenue</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">$2,400</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
          <div className="flex items-center mb-3">
            <FiMessageSquare className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-gray-600 text-sm">Inquiries</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">12</p>
        </div>
      </motion.div>
      
      {/* Recent Activity */}
      <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <FiUsers className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">New Booking Request</p>
              <p className="text-sm text-gray-600">John Smith requested to book Sunshine Apartment for Aug 15-30</p>
              <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <FiDollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">Payment Received</p>
              <p className="text-sm text-gray-600">Payment of $850 received for City View Loft</p>
              <p className="text-xs text-gray-500 mt-1">Yesterday</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-red-100 p-2 rounded-full mr-3">
              <FiMessageSquare className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="font-medium text-gray-800">New Review</p>
              <p className="text-sm text-gray-600">Maria Johnson left a 5-star review for Mountain View Cottage</p>
              <p className="text-xs text-gray-500 mt-1">2 days ago</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Upcoming Bookings */}
      <motion.div variants={itemVariants} className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Bookings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-4 whitespace-nowrap">Sunshine Apartment</td>
                <td className="px-4 py-4 whitespace-nowrap">John Smith</td>
                <td className="px-4 py-4 whitespace-nowrap">Aug 15 - Aug 30</td>
                <td className="px-4 py-4 whitespace-nowrap">$1,200</td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap">City View Loft</td>
                <td className="px-4 py-4 whitespace-nowrap">Emma Johnson</td>
                <td className="px-4 py-4 whitespace-nowrap">Sep 5 - Sep 12</td>
                <td className="px-4 py-4 whitespace-nowrap">$850</td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-nowrap">Mountain View Cottage</td>
                <td className="px-4 py-4 whitespace-nowrap">David Brown</td>
                <td className="px-4 py-4 whitespace-nowrap">Sep 20 - Oct 5</td>
                <td className="px-4 py-4 whitespace-nowrap">$1,500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
