import React, { useState } from "react";
import { motion } from "framer-motion";

import PropertyManagementForm from "../../Components/Forms/PropertyManagementForm";
import BoardingHouseInfo from "../../Components/Forms/BoardingHouseInfoForm";
import Preview from "../../Components/Forms/Preview";

export default function Create() {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 3;

  const isLastStep = activeStep === totalSteps - 1;
  const isFirstStep = activeStep === 0;

  const handleNext = () => {
    if (!isLastStep) setActiveStep((cur) => cur + 1);
  };

  const handlePrev = () => {
    if (!isFirstStep) setActiveStep((cur) => cur - 1);
  };

  return (
    <div className="w-full py-4 ">
      {/* Stepper Progress Bar */}
      <div className="relative w-full mb-6">
        <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-2 bg-red-500 transition-all duration-500 ease-in-out"
            style={{ width: `${((activeStep + 1) / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content with Framer Motion Transition */}
      <motion.div
        key={activeStep} // Ensure it resets on each step change
        initial={{ x: "100%" }} // Start from right
        animate={{ x: 0 }} // Move to center
        exit={{ x: "-100%" }} // Exit to the left
        transition={{ type: "spring", stiffness: 200, damping: 30 }} // Spring transition
      >
        {activeStep === 0 && <PropertyManagementForm />}
        {activeStep === 1 && <BoardingHouseInfo />}
        {activeStep === 2 && <Preview />}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        <div className="mt-6">
          <button
            onClick={handlePrev}
            disabled={isFirstStep}
            className="relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-500 group-hover:-rotate-180 ease"></span>
              <span className="relative">Previous</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>

        <div className="mt-6 pr-1">
          <button
            onClick={handleNext}
            disabled={isLastStep}
            className="relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-500 group-hover:-rotate-180 ease"></span>
              <span className="relative">{isLastStep ? "Finish" : "Next"}</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-red-500 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
