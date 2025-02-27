
import { motion } from "framer-motion";

export default function Home() {
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

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-20 min-h-screen max-w-7xl mx-auto px-4 py-8"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-4xl font-bold text-gray-800 mb-6"
      >
        Welcome to Instayhomes Host Portal
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="text-lg text-gray-600 mb-8 max-w-2xl"
      >
        List your properties, manage bookings, and connect with students looking for quality accommodations near their universities.
      </motion.p>
      
      <motion.div 
        variants={itemVariants}
        className="grid md:grid-cols-3 gap-8 mb-12"
      >
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">List Your Property</h3>
          <p className="text-gray-600">Create detailed listings with photos, amenities, and pricing to attract the right tenants.</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Manage Bookings</h3>
          <p className="text-gray-600">Track inquiries, approve applications, and manage your property calendar in one place.</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Get Paid Securely</h3>
          <p className="text-gray-600">Receive payments through our secure platform with protection for both hosts and guests.</p>
        </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="text-center mt-10">
        <button className="bg-red-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition-colors">
          Get Started
        </button>
      </motion.div>
    </motion.div>
  );
}
