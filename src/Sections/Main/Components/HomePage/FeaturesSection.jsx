import { Shield, Search, Clock, Award, Check, UserCheck } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Verified Landlords",
      description: "Every landlord on Instay is thoroughly vetted to ensure a safe and reliable experience for students.",
    },
    {
      icon: <Search className="h-6 w-6 text-indigo-600" />,
      title: "Smart Search",
      description: "Filter properties by price, amenities, distance to campus, and more to find your perfect match.",
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Time-Saving",
      description: "Schedule viewings, communicate with landlords all in one place.",
    },
    {
      icon: <Award className="h-6 w-6 text-yellow-600" />,
      title: "Quality Assurance",
      description: "All listings meet our quality standards with verified photos and accurate descriptions.",
    },
    {
      icon: <UserCheck className="h-6 w-6 text-purple-600" />,
      title: "Student Community",
      description: "Connect with potential roommates and get advice from students who've lived in the properties.",
    },
    {
      icon: <Check className="h-6 w-6 text-red-600" />,
      title: "Secure Booking",
      description: "Book your accommodation with confidence through our secure and transparent process.",
    },
  ];

  return (
    <section id="features" className="relative py-20 px-4 ">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-40 [background-size:16px_16px] -z-10" />

      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Why Students Choose <span className="text-primary">Instay</span>
          </h2>
          <p className="text-gray-600">
            We've designed Instay to address the unique challenges students face when finding housing, creating a platform that's secure, easy to use, and tailored for student life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-200 rounded-3xl bg-white "
            >
              <div className="p-3 rounded-xl bg-blue-50 inline-flex mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}