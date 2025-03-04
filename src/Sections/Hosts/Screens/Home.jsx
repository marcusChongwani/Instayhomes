
import React from "react";
import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button"
import { FaSearch, FaCheckCircle, FaHome, FaUsers } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find Your Ideal Student Housing with Instay
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Connecting students with verified landlords and quality housing options.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          className="mt-6 flex w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <FaSearch className="ml-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search for housing..."
            className="flex-1 px-4 py-2 bg-transparent outline-none"
          />
          <Button className="bg-blue-600 text-white px-6 py-2 rounded-full">
            Search
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 text-center">
        <motion.h2 className="text-3xl font-semibold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          Why Choose Instay?
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {[
            { icon: FaCheckCircle, title: "Verified Listings", desc: "Every listing is personally verified for quality." },
            { icon: FaHome, title: "Affordable Options", desc: "Find housing that fits your student budget." },
            { icon: FaUsers, title: "Community Support", desc: "Join a network of students and trusted landlords." }
          ].map(({ icon: Icon, title, desc }, index) => (
            <motion.div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}>
              <Icon className="text-blue-600 text-4xl mb-4" />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800 text-center">
        <motion.h2 className="text-3xl font-semibold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          How It Works
        </motion.h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {["Search Listings", "Connect with Landlords", "Move In"].map((step, index) => (
            <motion.div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}>
              <h3 className="text-xl font-semibold">{step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center">
        <motion.h2 className="text-3xl font-semibold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          What Students Say
        </motion.h2>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {["Best housing platform!", "Easy and reliable!", "Found my place in minutes!"].map((review, index) => (
            <motion.div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}>
              <p className="text-gray-600 dark:text-gray-300">"{review}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
  

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <motion.h2 className="text-3xl font-semibold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          Get Started Today!
        </motion.h2>
        <Button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full">
          Find Your Housing
        </Button>
      </section>
    </div>
  );
};

export default Home;