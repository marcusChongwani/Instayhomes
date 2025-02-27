
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HostsLayout from "../Layouts/HostsLayout";
import DashboardLayout from "../Sections/Hosts/Screens/DashboardLayout";
import Home from "../Sections/Hosts/Screens/Home";
import Dashboard from "../Sections/Hosts/Screens/Dashboard";
import DashboardProperties from "../Sections/Hosts/Screens/DashboardProperties";
import DashboardProfile from "../Sections/Hosts/Screens/DashboardProfile";
import ListProperties from "../Sections/Hosts/Screens/ListProperties";

export default function HostsRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HostsLayout><Home /></HostsLayout>} />
        <Route path="/list-property" element={<HostsLayout><ListProperties /></HostsLayout>} />
        
        {/* Dashboard with its own layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="properties" element={<DashboardProperties />} />
          <Route path="profile" element={<DashboardProfile />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
