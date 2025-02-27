
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HostsLayout from "../Layouts/HostsLayout";
import Navbar from "../Sections/Hosts/Components/Navbar";
import Home from "../Sections/Hosts/Screens/Home";
import DashboardLayout from "../Sections/Hosts/Screens/DashboardLayout";
import Dashboard from "../Sections/Hosts/Screens/Dashboard";
import DashboardProperties from "../Sections/Hosts/Screens/DashboardProperties";
import DashboardProfile from "../Sections/Hosts/Screens/DashboardProfile";
import ListProperties from "../Sections/Hosts/Screens/ListProperties";

export default function HostsRoutes() {
  return (
    <HostsLayout>
      <Navbar />
      <AnimatedRoutes />
    </HostsLayout>
  );
}

// Component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Change root path to "*" to correctly match all subroutes */}
        <Route path="*" element={<Home />} />
        <Route path="list-property" element={<ListProperties />} />
        
        {/* Dashboard routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="properties" element={<DashboardProperties />} />
          <Route path="profile" element={<DashboardProfile />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
