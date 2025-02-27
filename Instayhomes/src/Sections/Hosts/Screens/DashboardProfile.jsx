
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMapPin, FiCalendar } from "react-icons/fi";

export default function DashboardProfile() {
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

  const profileData = {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, Portland, OR 97201",
    joined: "January 2023",
    properties: 4,
    rating: 4.8
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            <FiUser size={40} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{profileData.name}</h2>
            <p className="text-gray-500">Host since {profileData.joined}</p>
            <div className="mt-2 flex items-center">
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                {profileData.rating} ★ Host Rating
              </div>
              <span className="mx-2 text-gray-300">•</span>
              <div className="text-gray-500 text-sm">
                {profileData.properties} Properties
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FiMail className="text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-gray-700">{profileData.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FiPhone className="text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="text-gray-700">{profileData.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FiMapPin className="text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-gray-700">{profileData.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FiCalendar className="text-gray-400" />
            <div>
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="text-gray-700">{profileData.joined}</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
        <div className="space-y-4">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg w-full md:w-auto text-left md:text-center">
            Change Password
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg w-full md:w-auto text-left md:text-center">
            Notification Settings
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg w-full md:w-auto text-left md:text-center">
            Privacy Settings
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
