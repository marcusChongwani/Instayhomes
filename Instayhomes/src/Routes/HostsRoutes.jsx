
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HostsLayout from "../Layouts/HostsLayout";
import Home from "../Sections/Hosts/Screens/Home";
import Dashboard from "../Sections/Hosts/Screens/Dashboard";
import DashboardProperties from "../Sections/Hosts/Screens/DashboardProperties";
import DashboardProfile from "../Sections/Hosts/Screens/DashboardProfile";
import ListProperties from "../Sections/Hosts/Screens/ListProperties";

export default function HostsRoutes() {
  return (
    <HostsLayout>
      <Routes>
        <Route path="*" element={<AnimatedRoutes />} />
      </Routes>
    </HostsLayout>
  );
}

// Component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/properties" element={<DashboardProperties />} />
        <Route path="/dashboard/profile" element={<DashboardProfile />} />
        <Route path="/list-property" element={<ListProperties />} />
      </Routes>
    </AnimatePresence>
  );
};
