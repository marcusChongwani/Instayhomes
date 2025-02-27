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
    { icon: <FiUsers className="text-blue-500" />, label: "Tenants", value: "12" },
    { icon: <FiDollarSign className="text-green-500" />, label: "Revenue", value: "$8,562" },
    { icon: <FiMessageSquare className="text-purple-500" />, label: "Messages", value: "8" }
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
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
                <p className="text-2xl font-bold mt-1">{item.value}</p>
              </div>
              <div className="text-2xl">{item.icon}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <p className="text-gray-600">New booking request</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <p className="text-gray-600">Payment received</p>
            <p className="text-sm text-gray-500">Yesterday</p>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-100">
            <p className="text-gray-600">New property added</p>
            <p className="text-sm text-gray-500">3 days ago</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}