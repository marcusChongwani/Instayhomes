import { useState } from "react";
import { FiBell, FiMenu } from "react-icons/fi"; // Importing React Icons
import FullScreenMenu from "./FullScreenMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 bg-white left-0 w-full  px-4 py-4 flex items-center justify-between z-40 h-16 mb-20">
  
      {/* Bell Menu */}
      <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
        <FiBell className="w-5 h-5 text-gray-800" />
      </button>

      {/* Logo */}
      <img src="https://bloggiebuddy.netlify.app/assets/site-logo1-C_-UTH6m.png" alt="Instayhomes Logo" className="h-12" />

      {/* Hamburger Menu */}
      <FullScreenMenu/>
     
    </nav>
  );
}