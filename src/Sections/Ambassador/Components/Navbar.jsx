import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="px-6 py-4">
      <div className="flex gap-4">
        <Link to="/" className="w-32 h-auto">
          <img src="https://bloggiebuddy.netlify.app/assets/site-logo1-C_-UTH6m.png" />
        </Link>
      </div>
    </nav>
  );
}
