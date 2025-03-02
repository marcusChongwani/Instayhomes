




import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Hero from "../Components/HomePage/Hero";
import Logos from "../Components/HomePage/Logos";
import HowItWorks from "../Components/HomePage/HowItWorks";
import FAQ from "../Components/HomePage/FAQ";

export default function Home() {
  return (
    <motion.div
      className="pb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <main className="relative">
        <Hero />
        <Logos/>
        <BecomeAHost />
        <HowItWorks />
        <FAQ/>
        <CallToAction/>
      </main>
    </motion.div>
  );
}

// Section Wrapper
const SectionWrapper = ({ title, children }) => (
  <motion.section
    className="py-16 px-6 max-w-6xl mx-auto text-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    <div className="text-gray-600">{children}</div>
  </motion.section>
);

// Hero Section
const HeroSection = () => (
  <motion.section
    className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-5xl font-bold">Find Student Housing Effortlessly</h1>
    <p className="mt-4 text-lg text-gray-300">Search, connect, and secure your ideal student home.</p>
    <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700">
      Get Started
    </button>
  </motion.section>
);

// What We Do
const WhatWeDo = () => (
  <SectionWrapper title="What We Do">
    <p>Instay connects students with verified landlords, making student housing easy, secure, and reliable.</p>
  </SectionWrapper>
);

// Features





// Become a Host
const BecomeAHost = () => (
  <section className="bg-gray-50">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <img className="w-full rounded-lg" src="https://www.smu.ca/webfiles/homepage8-626x313.png" />
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-700">Are you a landlord? connect with thousands of students .</h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg">Reach thousands of students looking for housing! List your property on our platform and make renting easy. Join our network of landlords and fill your vacancies quickly!</p>
        <a href="#" className="inline-flex items-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          List Your Property
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
);






// Call to Action
const CallToAction = () => (
  <section className="py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 flex items-center justify-between flex-col lg:flex-row"
      >
        <div className="block text-center mb-5 lg:text-left lg:mb-0">
          <h2 className=" text-2xl text-white font-semibold mb-5 lg:mb-2">
            Customer Support 
          </h2>
          <p className="text-xl text-indigo-100">
            Contact us with any query or challenge you may face.
          </p>
        </div>
        <a
          href="https://wa.me/260779722215" // Replace "your-number" with the actual WhatsApp number (e.g., 260971234567)
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500 hover:bg-green-500 hover:text-white"
        >
          Get In Touch
          <FaWhatsapp size={22} />
        </a>
      </div>
    </div>
  </section>
);