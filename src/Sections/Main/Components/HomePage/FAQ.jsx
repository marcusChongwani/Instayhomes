import React from "react";

const faqs = [
  {
    question: "What is InstayHomes?",
    answer:
      "InstayHomes is a platform that helps students find the right student housing. We provide a seamless experience by connecting students with verified housing options, ensuring convenience and security.",
  },
  {
    question: "Who owns InstayHomes?",
    answer:
      "InstayHomes is a privately owned platform, built by cavendish university students with the mission to make student housing more accessible as they struggled as new students to find accomodation.",
  },
  {
    question: "Do I need to pay to use InstayHomes?",
    answer: (
      <>
        Yes, students can browse for free but contacting properties requires a subscription. Property owners and managers should visit our{" "}
        <a href="/advertise" className="text-blue-500 hover:underline">
          Advertise
        </a>{" "}
        page for more details on listing their properties.
      </>
    ),
  },
  {
    question: "How does InstayHomes prevent scams?",
    answer:
      "We take security seriously. Listings on our platform are reviewed to ensure authenticity. Look for verified tags on properties. Always be cautious when sharing personal or financial information.",
  },
  {
    question: "How do I list a property on InstayHomes?",
    answer: (
      <>
        Visit our{" "}
        <a href="/advertise" className="text-blue-500 hover:underline">
          Advertise
        </a>{" "}
        page to get started. Whether you're a property owner, manager, or broker, we’ll guide you through the process.
      </>
    ),
  },
];

const FAQ = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700 p-4">Questions? We've got answers.</h2>
      <p className="text-center text-gray-600 mb-8">
        Something else to ask?{" "}
        <a href="/contact" className="text-blue-500 hover:underline">
          Contact us
        </a>
      </p>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
            <p className="text-gray-600 mt-1">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;