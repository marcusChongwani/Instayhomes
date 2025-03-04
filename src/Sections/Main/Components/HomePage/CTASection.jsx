import { Link } from "react-router-dom";  // Import Link from React Router
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="py-8 px-4">
      <div className="section-container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 -z-10" />

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMHY2aDZ2LTZoLTZ6bTAtMTB2Nmg2di02aC02em0tMTAgMjB2Nmg2di02aC02em0wLTEwdjZoNnYtNmgtNnptMC0xMHY2aDZ2LTZoLTZ6bS0xMCAyMHY2aDZ2LTZoLTZ6bTAtMTB2Nmg2di02aC02em0wLTEwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />

          <div className="relative px-6 py-16 md:px-12 md:py-24 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 max-w-3xl mx-auto">
              Ready to Find Your Ideal Student Housing?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of students who have found their ideal accommodations through Instay. Get started today and secure your housing with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#sign-up" 
                className="px-8 py-3 text-base font-medium bg-white text-primary rounded-md hover:bg-gray-100 hover:text-primary/90"
              >
                Create Free Account
              </Link>
              <Link 
                to="#learn-more" 
                className="px-8 py-3 text-base font-medium bg-transparent border border-white text-white rounded-md hover:bg-white/10 flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}