
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiCalendar } from "react-icons/fi";

export default function Reports() {
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

  const [dateRange, setDateRange] = useState("last30");

  // Dummy report data
  const reportTypes = [
    { id: 1, name: "User Registration", description: "New user sign-ups over time", icon: "👤" },
    { id: 2, name: "Property Listings", description: "New properties listed over time", icon: "🏠" },
    { id: 3, name: "Booking Activity", description: "Booking requests and confirmations", icon: "📅" },
    { id: 4, name: "Revenue", description: "Platform revenue from bookings and fees", icon: "💰" },
    { id: 5, name: "User Engagement", description: "User activity and session metrics", icon: "📊" },
    { id: 6, name: "Ambassador Performance", description: "Ambassador referrals and conversions", icon: "🌟" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports & Analytics</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <FiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="last7">Last 7 days</option>
              <option value="last30">Last 30 days</option>
              <option value="last90">Last 90 days</option>
              <option value="last365">Last 365 days</option>
              <option value="custom">Custom range</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Summary Metrics */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="text-blue-700 text-sm font-medium">Total Users</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">5,234</div>
          <div className="text-sm text-blue-700 mt-2">↑ 12% from last period</div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <div className="text-green-700 text-sm font-medium">Active Properties</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">876</div>
          <div className="text-sm text-green-700 mt-2">↑ 7% from last period</div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <div className="text-purple-700 text-sm font-medium">Bookings</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">1,432</div>
          <div className="text-sm text-purple-700 mt-2">↑ 18% from last period</div>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
          <div className="text-red-700 text-sm font-medium">Revenue</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">$35,689</div>
          <div className="text-sm text-red-700 mt-2">↑ 15% from last period</div>
        </div>
      </motion.div>

      {/* Available Reports */}
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reportTypes.map((report) => (
            <div key={report.id} className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-3xl mb-2">{report.icon}</div>
                  <h3 className="font-semibold text-gray-800">{report.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{report.description}</p>
                </div>
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                  <FiDownload />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent Generated Reports */}
      <motion.div variants={itemVariants}>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Generated Reports</h2>
        <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-100">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Range
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Generated On
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created By
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Monthly User Growth
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Last 30 days
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jun 1, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin User
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-900">
                    <FiDownload />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Revenue Analysis
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Last 90 days
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 28, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin User
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-900">
                    <FiDownload />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Property Listings Report
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Last 365 days
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 15, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin User
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-900">
                    <FiDownload />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
