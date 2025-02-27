
import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaCalendarAlt, FaCreditCard, FaUserCheck, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
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

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Luxury apartment" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl font-bold mb-4"
          >
            Become a Successful Host
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl max-w-2xl mb-8"
          >
            List your properties, manage bookings, and connect with students looking for quality accommodations near their universities.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link to="/hosts/list-property" className="bg-red-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition-colors inline-block">
              Start Listing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Why Host with Instayhomes?
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow text-center">
              <FaHome className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">List Your Property</h3>
              <p className="text-gray-600">Create detailed listings with photos, amenities, and pricing to attract the right tenants.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow text-center">
              <FaCalendarAlt className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Manage Bookings</h3>
              <p className="text-gray-600">Track inquiries, approve applications, and manage your property calendar in one place.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 hover:shadow-xl transition-shadow text-center">
              <FaCreditCard className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Get Paid Securely</h3>
              <p className="text-gray-600">Receive payments through our secure platform with protection for both hosts and guests.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Hear from Our Hosts
          </motion.h2>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/45.jpg" 
                  alt="Host" 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">Sarah Johnson</h3>
                  <p className="text-gray-500">Property owner since 2021</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Instayhomes has been a game-changer for my rental properties. The platform is easy to use, and I've been able to keep my properties occupied year-round with quality tenants."</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Host" 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">Michael Rodriguez</h3>
                  <p className="text-gray-500">Property owner since 2020</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The support team is incredible. They helped me optimize my listings and even provided tips on making my properties more appealing to students. My bookings have increased by 40%!"</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-800 mb-6"
          >
            How It Works
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Getting started as a host is simple and straightforward
          </motion.p>

          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">Create your host account with basic information</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-semibold mb-2">List Property</h3>
              <p className="text-gray-600">Add details, photos, and set your pricing</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Get Bookings</h3>
              <p className="text-gray-600">Receive and approve booking requests</p>
            </div>

            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Earn Money</h3>
              <p className="text-gray-600">Get paid securely through our platform</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-6"
          >
            Ready to Become a Host?
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl max-w-2xl mx-auto mb-8"
          >
            Join thousands of successful hosts who are earning extra income by listing their properties on Instayhomes.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link to="/hosts/list-property" className="bg-red-600 text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-red-700 transition-colors inline-block mr-4">
              List Your Property
            </Link>
            <Link to="/hosts/dashboard" className="bg-transparent border-2 border-white text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-white hover:text-gray-900 transition-colors inline-block">
              Go to Dashboard
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
