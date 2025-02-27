
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AdminLayout from "../Layouts/AdminLayout";
import Navbar from "../Sections/Admin/Components/Navbar";
import Home from "../Sections/Admin/Screens/Home";
import DashboardLayout from "../Sections/Admin/Screens/DashboardLayout";
import Dashboard from "../Sections/Admin/Screens/Dashboard";
import UserManagement from "../Sections/Admin/Screens/UserManagement";
import PropertyApprovals from "../Sections/Admin/Screens/PropertyApprovals";
import Reports from "../Sections/Admin/Screens/Reports";
import Settings from "../Sections/Admin/Screens/Settings";

export default function AdminRoutes() {
  return (
    <AdminLayout>
      <Navbar />
      <AnimatedRoutes />
    </AdminLayout>
  );
}

// Component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Home />} />
        
        {/* Dashboard routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="properties" element={<PropertyApprovals />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
