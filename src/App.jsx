import React ,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AmbassadorRoutes from "./Routes/AmbassadorRoutes";
import MainRoutes from "./Routes/MainRoutes";
import HostsRoutes from "./Routes/HostsRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import SignUpForm from "./Authentication/SignUpForm";
import LogInForm from "./Authentication/LogInForm";
import "./App.css";
import SearchPage from "./Sections/Main/Screens/Search";
import Footer from "./Sections/Footer";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
  window. scrollTo(0, 0);
  }, [location. pathname]);

  // Define the routes where the footer should not be displayed
  const hideFooterRoutes = ["/search", "/details"];

  // Conditionally render Footer based on the current route
  const showFooter = !hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <Routes>
        {/* Ambassador section */}
        <Route path="/ambassador/*" element={<AmbassadorRoutes />} />

        {/* Hosts section */}
        <Route path="/hosts/*" element={<HostsRoutes />} />

        {/* Admin section */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Main section - should be last to avoid conflicting with other routes */}
        <Route path="*" element={<MainRoutes />} />

        {/* Global Routes */}
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>

      {/* Conditionally render Footer */}
      {showFooter && <Footer />}
    </>
  );
}

export default App;