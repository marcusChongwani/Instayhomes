import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AmbassadorRoutes from "./Routes/AmbassadorRoutes";
import MainRoutes from "./Routes/MainRoutes";
import HostsRoutes from "./Routes/HostsRoutes";
import AdminRoutes from "./Routes/AdminRoutes";
import SignUpForm from "./Authentication/SignUpForm";
import LogInForm from "./Authentication/LogInForm";
import "./App.css";
import SearchPage from "./Sections/Main/Screens/Search";

function App() {
  return (
    
    <Router>
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
    </Router>
  );
}

export default App;
