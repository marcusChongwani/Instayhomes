import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Home, FileCheck, Key } from "lucide-react";
import {Link} from 'react-router-dom'; 

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("students");

  const studentSteps = [
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Search & Filter",
      description: "Search for accommodations near your university with filters for budget, room type, and amenities.",
      color: "bg-blue-500 dark:bg-blue-600",
    },
    {
      icon: <Home className="h-6 w-6 text-white" />,
      title: "Browse & Compare",
      description: "Browse detailed listings with verified photos, floor plans, and student reviews to compare options.",
      color: "bg-indigo-500 dark:bg-indigo-600",
    },
    {
      icon: <FileCheck className="h-6 w-6 text-white" />,
      title: "Book & Sign",
      description: "Schedule viewings, complete applications, and sign your lease directly through our secure platform.",
      color: "bg-purple-500 dark:bg-purple-600",
    },
    {
      icon: <Key className="h-6 w-6 text-white" />,
      title: "Move In",
      description: "Receive move-in instructions, connect with roommates, and settle into your new student home.",
      color: "bg-pink-500 dark:bg-pink-600",
    },
  ];

  const landlordSteps = [
    {
      icon: <Home className="h-6 w-6 text-white" />,
      title: "List Your Property",
      description: "Create detailed listings with high-quality photos, accurate descriptions, and student-focused amenities.",
      color: "bg-green-500 dark:bg-green-600",
    },
    {
      icon: <FileCheck className="h-6 w-6 text-white" />,
      title: "Verification Process",
      description: "Complete our verification process to gain trusted landlord status and build student confidence.",
      color: "bg-teal-500 dark:bg-teal-600",
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Connect with Students",
      description: "Receive inquiries, schedule viewings, and answer questions from interested students.",
      color: "bg-cyan-500 dark:bg-cyan-600",
    },
    {
      icon: <Key className="h-6 w-6 text-white" />,
      title: "Secure Tenants",
      description: "Screen applications, sign leases, and manage the entire rental process through our platform.",
      color: "bg-blue-500 dark:bg-blue-600",
    },
  ];

  const steps = activeTab === "students" ? studentSteps : landlordSteps;

  return (
    <section id="how-it-works" className="py-12 px-4">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            How Instay Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Our streamlined process makes finding and securing student housing simple and stress-free for everyone involved.
          </p>

          {/* Tabs */}
          <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-full mb-8">
            <button
              onClick={() => setActiveTab("students")}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                activeTab === "students"
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              For Students
            </button>
            <button
              onClick={() => setActiveTab("landlords")}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                activeTab === "landlords"
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              For Landlords
            </button>
          </div>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`flex flex-col items-center`}>
                <div className={`flex-shrink-0 w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="px-8"
            asChild
          >
            <Link to={activeTab === "students" ? "/search" : "/hosts"}>
              {activeTab === "students" ? "Start Searching Now" : "List Your Property"}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}