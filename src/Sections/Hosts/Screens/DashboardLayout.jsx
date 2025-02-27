
import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiList, FiUser } from "react-icons/fi";

const navItems = [
  { path: "/hosts/dashboard", label: "Overview", icon: <FiHome />, exact: true },
  { path: "/hosts/dashboard/properties", label: "Properties", icon: <FiList /> },
  { path: "/hosts/dashboard/profile", label: "Profile", icon: <FiUser /> }
];

export default function DashboardLayout() {
  const location = useLocation();

  const linkClasses = (isActive) => {
    return `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
      isActive
        ? "text-red-600 font-semibold"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
    }`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="sticky bg-white top-16 pt-4">
             <h1 className="text-lg text-gray-700 font-normal mb-1">Welcome back, Marcus 👋🏼</h1>
            <h1 className="text-3xl font-bold text-gray-700 mb-4">Host Dashboard</h1>

            <nav className="mb-8">
              <div className="whitespace-nowrap">
                <div className="flex items-center text-md border-b border-gray-100">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.exact || undefined}
                      className={({ isActive }) => linkClasses(isActive)}
                    >
                      {item.icon} {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          {/* Regular Outlet without Swipe Effect */}
          <div className="overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </motion.div>
  );
}