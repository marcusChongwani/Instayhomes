import { FaSearch, FaComments, FaHome } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoChatboxOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";

const steps = [
  {
    icon: <GoSearch className="text-4xl" />,
    title: "Search & Explore",
    description:
      "Find student housing near your university by browsing verified listings. Filter by budget, location, and amenities to match your needs.",
  },
  {
    icon: <IoChatboxOutline className="text-4xl" />,
    title: "Connect with Landlords",
    description:
      "Chat directly with landlords to ask questions, schedule visits, and get more details about the property before making a decision.",
  },
  {
    icon: <IoLockClosedOutline className="text-4xl" />,
    title: "Secure Your Stay",
    description:
      "Once you find the right place, follow the landlord’s process to finalize your rental. Instay ensures transparency and a smooth experience for students.",
  },
];

const HowItWorks = () => {
  return (
    <section className="">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-left text-left justify-start bg-white p-6 "
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-left">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;