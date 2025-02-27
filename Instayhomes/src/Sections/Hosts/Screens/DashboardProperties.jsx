
import { motion } from "framer-motion";
import { FiPlus, FiHome, FiEdit, FiTrash2 } from "react-icons/fi";
import DashboardNav from "../Components/DashboardNav";

export default function DashboardProperties() {
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

  // Sample properties data
  const properties = [
    { id: 1, name: "Sunnyvale Apartments", location: "Kabulonga, Lusaka", rooms: 6, status: "active" },
    { id: 2, name: "Greendale Student Housing", location: "Thornpark, Lusaka", rooms: 12, status: "pending" },
    { id: 3, name: "Campus View Hostels", location: "Chelstone, Lusaka", rooms: 8, status: "active" },
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-10 min-h-screen"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-3xl font-bold text-gray-800 mb-4"
      >
        Host Dashboard
      </motion.h1>
      
      <DashboardNav />
      
      <motion.div variants={itemVariants} className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">My Properties</h2>
        <button className="bg-red-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium">
          <FiPlus /> Add New Property
        </button>
      </motion.div>
      
      <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rooms</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {properties.map((property) => (
              <tr key={property.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center mr-3">
                      <FiHome className="text-gray-500" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{property.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{property.rooms}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    property.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {property.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <FiEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}
