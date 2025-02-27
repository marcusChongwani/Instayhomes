
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit } from "react-icons/fi";
import DashboardNav from "../Components/DashboardNav";

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

  // Sample profile data
  const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+260 97 123 4567",
    address: "Plot 123, Kabulonga Road, Lusaka",
    bio: "Property owner with 5 years of experience in student housing management. I strive to provide quality accommodation for students at affordable prices.",
    profilePic: "https://randomuser.me/api/portraits/men/75.jpg"
  };

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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          variants={itemVariants}
          className="md:col-span-1 bg-white p-6 rounded-xl shadow-md"
        >
          <div className="flex flex-col items-center text-center mb-6">
            <img 
              src={profile.profilePic} 
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-100 shadow-sm"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-800">{profile.name}</h2>
            <p className="text-gray-500">Property Host</p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              <FiEdit /> Edit Profile
            </button>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center mb-3">
              <FiMail className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-700">{profile.email}</span>
            </div>
            <div className="flex items-center mb-3">
              <FiPhone className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-700">{profile.phone}</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="w-5 h-5 text-gray-500 mr-2" />
              <span className="text-gray-700">{profile.address}</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 bg-white p-6 rounded-xl shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">About Me</h3>
          <p className="text-gray-600 mb-6">{profile.bio}</p>
          
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Properties Listed</p>
              <p className="text-2xl font-bold text-gray-800">3</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Active Tenants</p>
              <p className="text-2xl font-bold text-gray-800">12</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Avg. Rating</p>
              <p className="text-2xl font-bold text-gray-800">4.8</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Inquiries This Month</p>
              <p className="text-2xl font-bold text-gray-800">24</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Member Since</p>
              <p className="text-2xl font-bold text-gray-800">2022</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
