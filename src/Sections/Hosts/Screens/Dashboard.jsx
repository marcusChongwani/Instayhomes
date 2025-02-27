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

  const stats = [
    { icon: <FiHome className="text-red-500" />, label: "Properties", value: "4" },
    { icon: <FiUsers className="text-blue-500" />, label: "Total Views", value: "12,555" },
    { icon: <FiMessageSquare className="text-purple-500" />, label: "Total WhatsApp Inquiries", value: "5,678" }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      
    >
      <div>
        <p className="border-l-4 mb-2 border-blue-600 font-medium p-2 bg-gray-50 rounded-r text-sm text-gray-800">Regularly update your listing's availability to let students know when you have space. This helps attract the right students and reduces unnecessary inquiries for fully occupied properties.</p>
      </div>
      
      <div className="mt-4 mb-8">
        <p className="text-xl font-semibold text-gray-700">Your Properties</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          
  
            <div class="bg-white shadow-sm rounded-lg py-4 ">
              <div class="flex justify-between items-center border-b p-3 rounded-md shadow-sm border mb-2 border-gray-100">
                <div>
                  <p class="font-medium text-gray-800">Sunset Apartments</p>
                  <p class="text-sm text-gray-500">Lusaka | 2-Bedroom</p>
                </div>
                <div class="flex gap-3">
                  <button class="px-4 py-2 bg-blue-600 text-white text-sm rounded-md">Edit</button>
                  <button class="px-4 py-2 bg-green-600 text-white text-sm rounded-md">Available</button>
                </div>
              </div>
              <div class="flex justify-between items-center border-b p-3 rounded-md shadow-sm border border-gray-100">
                <div>
                  <p class="font-medium text-gray-800">Riverside Hostel</p>
                  <p class="text-sm text-gray-500">Ndola | 1-Bedroom</p>
                </div>
                <div class="flex gap-3">
                  <button class="px-4 py-2 bg-blue-600 text-white text-sm rounded-md">Edit</button>
                  <button class="px-4 py-2 bg-red-600 text-white text-sm rounded-md">Occupied</button>
                </div>
              </div>
            </div>
          

        </div>
      </div>
      
      <div className="space-y-6" >
        <p className="text-xl font-semibold text-gray-700">Analytics</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{item.label}</p>
                <p className="text-2xl font-bold text-gray-700 mt-1">{item.value}</p>
              </div>
              <div className="text-2xl">{item.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>
        </div>
     
    </motion.div>
  );
}