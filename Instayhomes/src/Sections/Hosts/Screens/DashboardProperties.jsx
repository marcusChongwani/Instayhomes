import { motion } from "framer-motion";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

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

  const properties = [
    { 
      id: 1, 
      name: "Sunshine Apartments", 
      location: "Near University of Oregon", 
      type: "Apartment", 
      price: "$800/month", 
      status: "Active" 
    },
    { 
      id: 2, 
      name: "Campus View Heights", 
      location: "Portland State University", 
      type: "Private Room", 
      price: "$600/month", 
      status: "Active" 
    },
    { 
      id: 3, 
      name: "College Park Commons", 
      location: "Oregon State University", 
      type: "Shared Room", 
      price: "$450/month", 
      status: "Maintenance" 
    },
    { 
      id: 4, 
      name: "Riverside Student Living", 
      location: "Near University of Oregon", 
      type: "Studio", 
      price: "$950/month", 
      status: "Inactive" 
    }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Properties</h2>
        <Link to="/hosts/list-property" className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block">
          Add New Property
        </Link>
      </motion.div>

      <motion.div variants={itemVariants} className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Property</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Location</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Type</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Price</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Status</th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {properties.map((property) => (
              <tr key={property.id}>
                <td className="py-3 px-4 text-gray-700">{property.name}</td>
                <td className="py-3 px-4 text-gray-500">{property.location}</td>
                <td className="py-3 px-4 text-gray-500">{property.type}</td>
                <td className="py-3 px-4 text-gray-500">{property.price}</td>
                <td className="py-3 px-4">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    property.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : property.status === 'Maintenance'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                  }`}>
                    {property.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FiEye />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                      <FiEdit2 />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}