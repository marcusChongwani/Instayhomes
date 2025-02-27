
import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiList, FiUser } from "react-icons/fi";

const navItems = [
  { path: "/hosts/dashboard", label: "Overview", icon: <FiHome />, exact: true },
  { path: "/hosts/dashboard/properties", label: "Properties", icon: <FiList /> },
  { path: "/hosts/dashboard/profile", label: "Profile", icon: <FiUser /> }
];

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const linkClasses = (isActive) => {
    return `flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
      isActive
        ? "text-red-600 font-semibold"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
    }`;
  };

  const handleSwipe = (event, info) => {
    const swipeThreshold = 100;
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    
    if (info.offset.x < -swipeThreshold && currentIndex < navItems.length - 1) {
      navigate(navItems[currentIndex + 1].path);
    } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
      navigate(navItems[currentIndex - 1].path);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="p-8 pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Host Dashboard</h1>
          <nav className="mb-8">
            <div className="overflow-x-auto whitespace-nowrap">
              <div className="flex items-center gap-4 text-md">
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

          {/* Swipe-enabled Outlet */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleSwipe}
            className="overflow-hidden"
          >
            <Outlet />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
