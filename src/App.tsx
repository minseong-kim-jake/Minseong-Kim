import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduce from "./pages/Introduce";
import Career from "./pages/Career";
import Activities from "./pages/Activities";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Introduce />} />
        <Route path="/career" element={<Career />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-black selection:text-white pb-24 md:pb-32">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}
