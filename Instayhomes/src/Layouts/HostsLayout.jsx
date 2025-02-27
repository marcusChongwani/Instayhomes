
import { Outlet } from "react-router-dom";
import Navbar from "../Sections/Hosts/Components/Navbar";

export default function HostsLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
