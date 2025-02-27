
import { motion } from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit } from "react-icons/fi";

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
    <motion.div variants={containerVariants}>
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
          <h2 className="text-xl font-semibold text-gray-700 mb-4">About</h2>
          <p className="text-gray-600 mb-6">
            {profile.bio}
          </p>
          
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Settings</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">Password</h3>
                <p className="text-sm text-gray-500">Last changed 3 months ago</p>
              </div>
              <button className="text-red-600 font-medium">Change</button>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">Disabled</p>
              </div>
              <button className="text-red-600 font-medium">Enable</button>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">Email Notifications</h3>
                <p className="text-sm text-gray-500">Enabled for all activities</p>
              </div>
              <button className="text-red-600 font-medium">Configure</button>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">Payment Information</h3>
                <p className="text-sm text-gray-500">Visa ending in 4242</p>
              </div>
              <button className="text-red-600 font-medium">Update</button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
