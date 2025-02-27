import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHome, FiList, FiUser } from "react-icons/fi";

export default function DashboardNav() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("overview");

  const navItems = [
    { id: "overview", label: "Overview", icon: <FiHome />, path: "/hosts/dashboard" },
    { id: "properties", label: "Properties", icon: <FiList />, path: "/hosts/dashboard/properties" },
    { id: "profile", label: "Profile", icon: <FiUser />, path: "/hosts/dashboard/profile" }
  ];

  useEffect(() => {
    // Set active tab based on current location
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];

    if (lastSegment === "dashboard") {
      setActiveTab("overview");
    } else if (navItems.some(item => item.id === lastSegment)) {
      setActiveTab(lastSegment);
    }
  }, [location.pathname]);

  return (
    <div className="mb-8 pb-4">
      <nav className="flex overflow-x-auto border-b border-gray-200">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center gap-2 py-3 px-4 font-medium text-sm relative ${
              activeTab === item.id ? "text-red-600" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {item.icon}
            {item.label}
            {activeTab === item.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}