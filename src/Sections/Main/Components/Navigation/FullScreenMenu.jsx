import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoMenu } from "react-icons/io5";
import {Link} from 'react-router-dom';

const FullScreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div>
      {/* Hamburger Icon */}
      <motion.button className="p-4 text-gray-700" onClick={toggleMenu}>
        <IoMenu className="w-8 h-8" />
      </motion.button>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 w-full h-full bg-white z-50 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header Section */}
            <div className="flex items-center justify-between p-4">
              {/* Logo (replace 'Instay' with your logo) */}
              <img src="https://bloggiebuddy.netlify.app/assets/site-logo1-C_-UTH6m.png" 
                className="h-12" alt="Instay"  
                />
              <motion.button onClick={toggleMenu} className="text-gray-600 p-2">
                <IoClose className="w-8 h-8" />
              </motion.button>
            </div>

            {/* Scrollable Menu Content */}
            <div className="flex-1 overflow-y-auto px-4 space-y-4">
              {/* Main Categories */}
              <div className="space-y-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  Renter Hub
                </h3>
                <motion.div className="p-4 bg-white rounded-lg text-gray-800 font-medium">
                  Long-term rentals
                </motion.div>
                <motion.div className="p-4 bg-white rounded-lg text-gray-800 font-medium">
                  Short-term rentals
                </motion.div>
              </div>

              {/* Nearby Rentals Section */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  Nearby Rentals
                </h3>
                <div className="space-y-2">
                  <motion.div className="p-4 bg-white rounded-lg flex justify-between items-center cursor-pointer">
                    <span>Apartments for rent</span>
                    <span>›</span>
                  </motion.div>
                  <motion.div className="p-4 bg-white rounded-lg flex justify-between items-center cursor-pointer">
                    <span>Houses for rent</span>
                     <span>›</span>
                  </motion.div>
                  <motion.div className="p-4 bg-white rounded-lg flex justify-between items-center cursor-pointer">
                    <span>Rooms for rent</span>
                    <span>›</span>
                  </motion.div>
                  <motion.div className="p-4 bg-white rounded-lg flex justify-between items-center cursor-pointer">
                    <span>Amenities</span>
                    <span>›</span>
                  </motion.div>
                </div>
              </div>

              {/* Renter Hub Section */}
              <div>
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  Renter Hub
                </h3>
                <motion.div className="p-4 bg-white rounded-lg text-gray-800 font-medium cursor-pointer">
                  Favorites
                </motion.div>
              </div>
            </div>

            {/* Sign-Up / Login Buttons */}
            <div className="p-4 bg-[#F8F8F5] border-t w-full">
              <Link to="/signup" className="w-full inline-block py-3 bg-gray-900 text-white rounded-lg text-center mb-4">
                Sign Up
              </Link>
              <Link to="/login" className="w-full py-3 border border-gray-900 text-gray-900 inline-block inline-block rounded-lg text-center">
                Log In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FullScreenMenu;