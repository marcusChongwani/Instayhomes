import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AmbassadorLayout from "../Layouts/AmbassadorLayout";
import Navbar from "../Sections/Ambassador/Components/Navbar";
import Home from "../Sections/Ambassador/screens/Home";
import About from "../Sections/Ambassador/screens/About";
import DashboardLayout from "../Sections/Ambassador/screens/DashboardLayout";
import Overview from "../Sections/Ambassador/screens/DashboardScreens/Overview";
import Pending from "../Sections/Ambassador/screens/DashboardScreens/Pending";
import Verified from "../Sections/Ambassador/screens/DashboardScreens/Verified";
import Create from "../Sections/Ambassador/screens/DashboardScreens/Create";

export default function AmbassadorRoutes() {
  return (
    <AmbassadorLayout>
      <Navbar />
      <AnimatedRoutes />
    </AmbassadorLayout>
  );
}

// New component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Change root path to "*" to correctly match all subroutes */}
        <Route path="*" element={<Home />} />

        {/* Other relative paths */}
        <Route path="about" element={<About />} />

        {/* Dashboard routes */}
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="pending" element={<Pending />} />
          <Route path="verified" element={<Verified />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
