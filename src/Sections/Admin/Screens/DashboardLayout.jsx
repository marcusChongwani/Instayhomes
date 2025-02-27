
import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiUsers, FiCheckSquare, FiBarChart2, FiSettings } from "react-icons/fi";

const navItems = [
  { path: "/admin/dashboard", label: "Overview", icon: <FiHome />, exact: true },
  { path: "/admin/dashboard/users", label: "Users", icon: <FiUsers /> },
  { path: "/admin/dashboard/properties", label: "Property Approvals", icon: <FiCheckSquare /> },
  { path: "/admin/dashboard/reports", label: "Reports", icon: <FiBarChart2 /> },
  { path: "/admin/dashboard/settings", label: "Settings", icon: <FiSettings /> }
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
      className="pt-16"
    >
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4 sticky top-20">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Admin Dashboard</h2>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.exact}
                  className={({ isActive }) => linkClasses(isActive)}
                >
                  {item.icon} {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <motion.div className="bg-white rounded-lg shadow-sm p-6">
            <Outlet />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
