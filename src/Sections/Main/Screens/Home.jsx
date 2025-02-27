import { motion } from "framer-motion";
import { FaCheckCircle, FaUserGraduate, FaHome, FaHandshake } from "react-icons/fa";
import Hero from "../Components/HomePage/Hero";

export default function Home() {
  return (
    <motion.div
      className="pb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <main className="relative">
        <Hero />
        <WhatWeDo />
        <Features />
        <HowItWorks />
        <Testimonials />
        <BecomeAHost />
        <BecomeAnAmbassador />
        <FAQs />
        <CallToAction />
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
const Features = () => (
  <SectionWrapper title="Why Choose Instay?">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FeatureItem icon={<FaCheckCircle />} text="Verified Listings" />
      <FeatureItem icon={<FaUserGraduate />} text="Affordable & Safe Housing" />
      <FeatureItem icon={<FaHome />} text="Easy Search & Filters" />
      <FeatureItem icon={<FaHandshake />} text="Direct Chat with Landlords" />
    </div>
  </SectionWrapper>
);

const FeatureItem = ({ icon, text }) => (
  <motion.div
    className="flex items-center gap-3 p-4 bg-gray-100 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
  >
    <span className="text-red-600 text-2xl">{icon}</span>
    <p className="text-lg font-medium">{text}</p>
  </motion.div>
);

// How It Works
const HowItWorks = () => (
  <SectionWrapper title="How It Works">
    <ol className="list-decimal pl-5 space-y-3 text-left max-w-lg mx-auto">
      <li>Search for hostels near your university.</li>
      <li>Compare amenities, prices, and availability.</li>
      <li>Chat with landlords and schedule a visit.</li>
      <li>Secure your ideal student housing.</li>
    </ol>
  </SectionWrapper>
);

// Testimonials
const Testimonials = () => (
  <SectionWrapper title="What Students & Landlords Say">
    <p>“Instay made finding a safe hostel so easy!” – Jane, Student</p>
    <p>“I found great tenants quickly!” – Mr. Banda, Landlord</p>
  </SectionWrapper>
);

// Become a Host
const BecomeAHost = () => (
  <SectionWrapper title="Become a Host">
    <p>Are you a landlord? List your property and connect with students today.</p>
    <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700">
      List Your Property
    </button>
  </SectionWrapper>
);

// Become an Ambassador
const BecomeAnAmbassador = () => (
  <SectionWrapper title="Become an Ambassador">
    <p>Earn rewards by referring students and landlords to Instay.</p>
    <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700">
      Join Now
    </button>
  </SectionWrapper>
);

// FAQs
const FAQs = () => (
  <SectionWrapper title="Frequently Asked Questions">
    <details className="mb-4">
      <summary className="cursor-pointer font-medium">How does Instay verify listings?</summary>
      <p className="mt-2 text-gray-600">Every listing is checked in person to ensure it meets our standards.</p>
    </details>
    <details className="mb-4">
      <summary className="cursor-pointer font-medium">Can I contact landlords directly?</summary>
      <p className="mt-2 text-gray-600">Yes! Instay allows you to chat directly with landlords.</p>
    </details>
  </SectionWrapper>
);

// Call to Action
const CallToAction = () => (
  <SectionWrapper title="Start Your Search Today">
    <p>Find the best student housing in just a few clicks.</p>
    <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700">
      Get Started
    </button>
  </SectionWrapper>
);