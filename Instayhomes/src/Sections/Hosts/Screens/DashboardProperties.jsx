
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

  // Status badge component
  const StatusBadge = ({ status }) => {
    const bgColor = status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';
    return (
      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColor}`}>
        {status === 'active' ? 'Active' : 'Pending'}
      </span>
    );
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-10 min-h-screen max-w-7xl mx-auto px-4"
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
      
      {/* Mobile view - Card-based layout for small screens */}
      <motion.div variants={itemVariants} className="md:hidden space-y-4">
        {properties.map(property => (
          <div key={property.id} className="bg-white rounded-xl shadow-md p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">{property.name}</h3>
                <p className="text-sm text-gray-600">{property.location}</p>
                <p className="text-sm text-gray-600 mt-1">{property.rooms} rooms</p>
                <div className="mt-2">
                  <StatusBadge status={property.status} />
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
                  <FiEdit size={18} />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Desktop view - Table layout for medium and larger screens */}
      <motion.div variants={itemVariants} className="hidden md:block bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rooms</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {properties.map(property => (
                <tr key={property.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                        <FiHome className="text-gray-500" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{property.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {property.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {property.rooms}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={property.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-3">
                      <button className="text-blue-600 hover:text-blue-900">
                        <FiEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}
