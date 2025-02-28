import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
            <ul className="text-gray-600 space-y-2">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQs</Link></li>
            </ul>
          </div>

          {/* Hosting Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Hosting</h2>
            <ul className="text-gray-600 space-y-2">
              <li><Link to="/hosts" className="hover:underline">Become a Host</Link></li>
              <li><Link to="/ambassador" className="hover:underline">Become an Ambassador</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Support</h2>
            <ul className="text-gray-600 space-y-2">
              <li><Link to="/support" className="hover:underline">Help Center</Link></li>
              <li><Link to="/safety" className="hover:underline">Safety & Security</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Legal</h2>
            <ul className="text-gray-600 space-y-2">
              <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm text-gray-600">&copy; 2025 Instay. All rights reserved.</span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/your-page" className="text-gray-600 hover:text-gray-900" aria-label="Facebook"><FaFacebook size={18} /></a>
            <a href="https://twitter.com/your-profile" className="text-gray-600 hover:text-gray-900" aria-label="Twitter"><FaTwitter size={18} /></a>
            <a href="https://www.instagram.com/your-profile" className="text-gray-600 hover:text-gray-900" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="https://www.linkedin.com/in/your-profile" className="text-gray-600 hover:text-gray-900" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;