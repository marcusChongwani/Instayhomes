import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MdDashboard, MdPendingActions, MdOutlineVerifiedUser } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";

const navItems = [
  { path: "/ambassador/dashboard", label: "Overview", icon: <MdDashboard />, exact: true },
  { path: "/ambassador/dashboard/pending", label: "Pending", icon: <MdPendingActions /> },
  { path: "/ambassador/dashboard/verified", label: "Verified", icon: <MdOutlineVerifiedUser /> },
  { path: "/ambassador/dashboard/create", label: "Create", icon: <IoCreateOutline /> },
];

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Set active index based on current location
    const index = navItems.findIndex((item) => item.path === location.pathname);
    if (index !== -1) setActiveIndex(index);
  }, [location.pathname]);

  const handleSwipe = (event, info) => {
    const swipeThreshold = 100; // Min distance to trigger swipe
    if (info.offset.x < -swipeThreshold && activeIndex < navItems.length - 1) {
      // Swiped left (next page)
      navigate(navItems[activeIndex + 1].path);
    } else if (info.offset.x > swipeThreshold && activeIndex > 0) {
      // Swiped right (previous page)
      navigate(navItems[activeIndex - 1].path);
    }
  };

  const linkClasses = (isActive) =>
    `pb-2 flex items-center gap-2 border-b-2 ${
      isActive ? "text-red-500 border-red-500" : "text-gray-300 border-gray-300"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-700 mb-4">My Submissions</h1>
          <nav className="mb-8">
            <div className="overflow-x-auto whitespace-nowrap">
              <div className="flex items-center gap-4 text-md text-gray-300">
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
};

export default DashboardLayout;