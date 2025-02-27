
import { motion } from "framer-motion";
import { FiEdit, FiTrash2, FiPlus, FiEye } from "react-icons/fi";

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
  
  // Sample property data
  const properties = [
    {
      id: 1,
      name: "Sunshine Apartment",
      location: "Lusaka, Zambia",
      price: "$600/mo",
      status: "Active",
      rooms: 3,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "City View Loft",
      location: "Lusaka, Zambia",
      price: "$450/mo",
      status: "Active",
      rooms: 2,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "Mountain View Cottage",
      location: "Kitwe, Zambia",
      price: "$800/mo",
      status: "Pending",
      rooms: 4,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];
  
  const StatusBadge = ({ status }) => {
    const colorScheme = {
      Active: "bg-green-100 text-green-800",
      Pending: "bg-yellow-100 text-yellow-800",
      Inactive: "bg-gray-100 text-gray-800"
    };
    
    return (
      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${colorScheme[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <motion.div variants={containerVariants}>
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
                <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-full">
                  <FiEye size={18} />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
                  <FiEdit size={18} />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-100 rounded-full">
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Desktop view - Table layout for larger screens */}
      <motion.div variants={itemVariants} className="hidden md:block bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Property
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rooms
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {properties.map((property) => (
                <tr key={property.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-md object-cover" src={property.image} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{property.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{property.location}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {property.rooms}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {property.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={property.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-100 rounded-full">
                        <FiEye size={18} />
                      </button>
                      <button className="p-1 text-gray-600 hover:bg-gray-100 rounded-full">
                        <FiEdit size={18} />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-100 rounded-full">
                        <FiTrash2 size={18} />
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
