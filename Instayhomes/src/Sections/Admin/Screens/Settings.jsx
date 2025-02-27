
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSave, FiLock, FiMail, FiBell, FiGlobe, FiFlag, FiShield, FiDatabase } from "react-icons/fi";

export default function Settings() {
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

  // Settings tabs
  const [activeTab, setActiveTab] = useState("general");
  
  const tabs = [
    { id: "general", label: "General", icon: <FiGlobe /> },
    { id: "security", label: "Security", icon: <FiLock /> },
    { id: "notifications", label: "Notifications", icon: <FiBell /> },
    { id: "moderation", label: "Content Moderation", icon: <FiFlag /> },
    { id: "privacy", label: "Privacy", icon: <FiShield /> },
    { id: "database", label: "Database", icon: <FiDatabase /> },
  ];

  // Demo data for settings fields
  const [siteSettings, setSiteSettings] = useState({
    siteName: "Instayhomes",
    tagline: "Find your perfect stay near campus",
    contactEmail: "admin@instayhomes.com",
    maintenanceMode: false,
    propertyApprovalRequired: true,
    userVerificationRequired: true,
    defaultCurrency: "USD",
    defaultLanguage: "en",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSiteSettings({
      ...siteSettings,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Settings</h1>
        <p className="text-gray-500 mt-1">
          Manage system-wide settings and configurations.
        </p>
      </motion.div>

      {/* Settings Tabs */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`flex items-center gap-2 px-4 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? "border-red-600 text-red-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Settings Content */}
      <motion.div variants={itemVariants}>
        {activeTab === "general" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-4">General Settings</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
                    Site Name
                  </label>
                  <input
                    type="text"
                    id="siteName"
                    name="siteName"
                    value={siteSettings.siteName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="tagline" className="block text-sm font-medium text-gray-700">
                    Tagline
                  </label>
                  <input
                    type="text"
                    id="tagline"
                    name="tagline"
                    value={siteSettings.tagline}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={siteSettings.contactEmail}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="defaultCurrency" className="block text-sm font-medium text-gray-700">
                      Default Currency
                    </label>
                    <select
                      id="defaultCurrency"
                      name="defaultCurrency"
                      value={siteSettings.defaultCurrency}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="JPY">JPY (¥)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="defaultLanguage" className="block text-sm font-medium text-gray-700">
                      Default Language
                    </label>
                    <select
                      id="defaultLanguage"
                      name="defaultLanguage"
                      value={siteSettings.defaultLanguage}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="maintenanceMode"
                    name="maintenanceMode"
                    type="checkbox"
                    checked={siteSettings.maintenanceMode}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="maintenanceMode" className="ml-2 block text-sm text-gray-700">
                    Enable Maintenance Mode
                  </label>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-medium text-gray-800 mb-4">Content Settings</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    id="propertyApprovalRequired"
                    name="propertyApprovalRequired"
                    type="checkbox"
                    checked={siteSettings.propertyApprovalRequired}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="propertyApprovalRequired" className="ml-2 block text-sm text-gray-700">
                    Require admin approval for new property listings
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="userVerificationRequired"
                    name="userVerificationRequired"
                    type="checkbox"
                    checked={siteSettings.userVerificationRequired}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="userVerificationRequired" className="ml-2 block text-sm text-gray-700">
                    Require user verification for hosts
                  </label>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <button
                type="button"
                className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-sm hover:bg-red-700 flex items-center gap-2"
              >
                <FiSave /> Save Changes
              </button>
            </div>
          </div>
        )}
        
        {activeTab === "security" && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Security Settings</h2>
            <p className="text-gray-600">Security settings content goes here.</p>
          </div>
        )}
        
        {activeTab === "notifications" && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Notification Settings</h2>
            <p className="text-gray-600">Notification settings content goes here.</p>
          </div>
        )}
        
        {activeTab === "moderation" && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Content Moderation Settings</h2>
            <p className="text-gray-600">Content moderation settings content goes here.</p>
          </div>
        )}
        
        {activeTab === "privacy" && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Privacy Settings</h2>
            <p className="text-gray-600">Privacy settings content goes here.</p>
          </div>
        )}
        
        {activeTab === "database" && (
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Database Settings</h2>
            <p className="text-gray-600">Database settings content goes here.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
