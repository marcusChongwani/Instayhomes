
import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiHome, FiCheckCircle, FiAlertCircle, FiDollarSign, FiTrendingUp } from "react-icons/fi";

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

  // Dummy data for demo
  const stats = [
    { id: 1, name: "Total Users", value: "5,234", icon: <FiUsers className="w-6 h-6" />, change: "+12%", color: "blue" },
    { id: 2, name: "Total Properties", value: "876", icon: <FiHome className="w-6 h-6" />, change: "+7%", color: "green" },
    { id: 3, name: "Pending Approvals", value: "43", icon: <FiAlertCircle className="w-6 h-6" />, change: "-5%", color: "yellow" },
    { id: 4, name: "Revenue", value: "$35,689", icon: <FiDollarSign className="w-6 h-6" />, change: "+18%", color: "purple" },
  ];

  const recentActivities = [
    { id: 1, action: "New property listed", user: "John Smith", time: "5 minutes ago", status: "Pending Approval" },
    { id: 2, action: "User account created", user: "Emily Watson", time: "1 hour ago", status: "Verified" },
    { id: 3, action: "Property updated", user: "Michael Davis", time: "3 hours ago", status: "Approved" },
    { id: 4, action: "Booking confirmed", user: "Sarah Johnson", time: "5 hours ago", status: "Completed" },
    { id: 5, action: "Payment received", user: "Robert Brown", time: "1 day ago", status: "Processed" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants} className="text-2xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </motion.h1>

      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className={`p-2 rounded-md bg-${stat.color}-100 text-${stat.color}-600`}>
                {stat.icon}
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <FiTrendingUp className={`mr-1 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`} />
              <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change} from last month
              </span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Recent Activity */}
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="bg-white overflow-hidden shadow-sm rounded-lg">
          <ul className="divide-y divide-gray-200">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-500">By {activity.user} • {activity.time}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  activity.status === 'Pending Approval' ? 'bg-yellow-100 text-yellow-800' :
                  activity.status === 'Verified' ? 'bg-blue-100 text-blue-800' :
                  activity.status === 'Approved' ? 'bg-green-100 text-green-800' :
                  activity.status === 'Completed' ? 'bg-purple-100 text-purple-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {activity.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-blue-700 font-medium flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors">
            <FiUsers /> Manage Users
          </button>
          <button className="p-4 bg-green-50 rounded-lg border border-green-100 text-green-700 font-medium flex items-center justify-center gap-2 hover:bg-green-100 transition-colors">
            <FiCheckCircle /> Approve Properties
          </button>
          <button className="p-4 bg-purple-50 rounded-lg border border-purple-100 text-purple-700 font-medium flex items-center justify-center gap-2 hover:bg-purple-100 transition-colors">
            <FiDollarSign /> View Financials
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
