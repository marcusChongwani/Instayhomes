
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 bg-white left-0 w-full px-4 py-4 flex items-center justify-between z-40 h-16 shadow-sm">
      {/* Logo */}
      <Link to="/hosts">
        <img src="https://bloggiebuddy.netlify.app/assets/site-logo1-C_-UTH6m.png" alt="Instayhomes Hosts" className="h-10" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/hosts" className="text-gray-800 hover:text-red-600 font-medium">Home</Link>
        <Link to="/hosts/dashboard" className="text-gray-800 hover:text-red-600 font-medium">Dashboard</Link>
        <Link to="/hosts/list-property" className="text-gray-800 hover:text-red-600 font-medium">List Property</Link>
        <Link to="/" className="text-gray-800 hover:text-red-600 font-medium">Switch to Guest</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <motion.button className="p-2 text-gray-700" onClick={toggleMenu}>
          <IoMenu className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 w-full h-full bg-white z-50 flex flex-col pt-16"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <motion.button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 text-gray-600 p-2"
            >
              <IoClose className="w-6 h-6" />
            </motion.button>

            <div className="flex flex-col items-center space-y-6 mt-12">
              <Link to="/hosts" className="text-xl text-gray-800 hover:text-red-600 font-medium" onClick={toggleMenu}>Home</Link>
              <Link to="/hosts/dashboard" className="text-xl text-gray-800 hover:text-red-600 font-medium" onClick={toggleMenu}>Dashboard</Link>
              <Link to="/hosts/list-property" className="text-xl text-gray-800 hover:text-red-600 font-medium" onClick={toggleMenu}>List Property</Link>
              <Link to="/" className="text-xl text-gray-800 hover:text-red-600 font-medium" onClick={toggleMenu}>Switch to Guest</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
