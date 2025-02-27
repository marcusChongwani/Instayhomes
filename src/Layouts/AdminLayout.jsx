
import React from "react";
import { motion } from "framer-motion";

export default function AdminLayout({ children }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-gray-50"
    >
      {children}
    </motion.div>
  );
}
