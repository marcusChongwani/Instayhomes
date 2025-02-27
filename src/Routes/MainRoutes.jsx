import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Sections/Main/Screens/Home";
import ListingsPage from "../Sections/Main/Screens/Listings";
import ListingDetails from "../Sections/Main/Screens/ListingDetails";

function MainRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="*" element={<AnimatedRoutes />} />
      </Routes>
    </MainLayout>
  );
}

export default MainRoutes;

// Component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
      </Routes>
    </AnimatePresence>
  );
};