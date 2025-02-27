
import React from "react";
import Navbar from "../Sections/Hosts/Components/Navbar";

export default function HostsLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}
