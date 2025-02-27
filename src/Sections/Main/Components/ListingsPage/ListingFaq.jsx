import { useState } from "react";
import { motion } from "framer-motion";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="flex items-center justify-between w-full p-5 font-medium text-gray-500 hover:bg-blue-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5 5 1 1 5"
          />
        </motion.svg>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-5 border-t border-gray-200 text-gray-500">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default function ListingFAQ() {
  const faqs = [
    {
      question: "How do I contact the property owner?",
      answer:
        "You need an active Instay subscription to chat with the property owner. Subscribe and use the chat feature to ask about availability, pricing, or schedule a viewing.",
    },
    {
      question: "How do I secure this place?",
      answer:
        "Once you've spoken to the landlord and agreed on terms, you may need to pay a security deposit to hold the room. Always confirm payment details with the landlord.",
    },
    {
      question: "What is included in the rent?",
      answer:
        "Each listing has different rent inclusions. Check the details or ask the landlord about utilities, Wi-Fi, and other amenities.",
    },
    {
      question: "Are there any house rules?",
      answer:
        "Rules like visitor policies, quiet hours, and cleaning responsibilities vary by property. Clarify these with the landlord before moving in.",
    },
    {
      question: "Is my payment secure?",
      answer:
        "Instay partners with Lenco for safe transactions. Always make payments through secure channels and avoid direct cash transactions without a formal agreement.",
    },
  ];

  return (
    <div className="space-y-2">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} {...faq} />
      ))}
    </div>
  );
}