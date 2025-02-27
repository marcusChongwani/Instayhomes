import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // If using React Router

const LogInForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as: ${formData.email}`);
  };

  return (
    <div className="flex justify-center items-center h-screen  relative">
      {/* Top Right Home Link */}
      <Link to="/" className="absolute top-6 right-6 text-gray-600 hover:text-red-600 font-medium">
        Go to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white p-8 "
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Welcome Back! 👋</h2>
        <p className="text-gray-600 mb-6 text-center">Login to access your account.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <span>Remember Me</span>
            </label>
            <a href="#" className="text-red-500 hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Log In
          </button>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Don't have an account? <a href="#" className="text-red-500 hover:underline">Sign up</a>
        </p>
      </motion.div>
    </div>
  );
};

export default LogInForm;