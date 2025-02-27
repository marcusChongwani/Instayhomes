
import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiUser, FiLogOut, FiHome } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on a dashboard page
  const isDashboard = location.pathname.includes("/admin/dashboard");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md fixed w-full top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/admin" className="flex-shrink-0 flex items-center">
              <span className="text-red-600 font-bold text-xl">Instayhomes</span>
              <span className="ml-2 bg-gray-900 text-white px-2 py-1 rounded-md text-xs font-medium">ADMIN</span>
            </Link>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink
                to="/admin"
                end
                className={({isActive}) => 
                  `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive 
                      ? "border-red-600 text-gray-900" 
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`
                }
              >
                Home
              </NavLink>
              
              <NavLink
                to="/admin/dashboard"
                className={({isActive}) => 
                  `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    isActive || isDashboard 
                      ? "border-red-600 text-gray-900" 
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex items-center space-x-4">
              <NavLink to="/" className="text-gray-500 hover:text-gray-700">
                <FiHome className="w-5 h-5" />
              </NavLink>
              <div className="border-l border-gray-300 h-6"></div>
              <Link to="/admin/dashboard/settings" className="text-gray-500 hover:text-gray-700">
                <FiUser className="w-5 h-5" />
              </Link>
              <button className="text-red-600 hover:text-red-700">
                <FiLogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="sm:hidden"
        >
          <div className="pt-2 pb-3 space-y-1">
            <NavLink
              to="/admin"
              end
              className={({isActive}) => 
                `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive 
                    ? "border-red-600 text-red-700 bg-red-50" 
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                }`
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/admin/dashboard"
              className={({isActive}) => 
                `block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive || isDashboard 
                    ? "border-red-600 text-red-700 bg-red-50" 
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                }`
              }
            >
              Dashboard
            </NavLink>
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <FiUser className="h-6 w-6 text-gray-600" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Admin User</div>
                <div className="text-sm font-medium text-gray-500">admin@instayhomes.com</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <NavLink
                to="/admin/dashboard/settings"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Settings
              </NavLink>
              <button
                className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Sign out
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
