import React from 'react';
// IMPORTANT: Using HashRouter instead of BrowserRouter for GitHub Pages compatibility
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- COMPONENTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShootingStarBackground from './components/ShootingStarBackground';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

// --- PAGES ---
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Education from './pages/Education';
import Awards from './pages/Awards';
import Contact from './pages/Contact';

// Wrap each page so route changes get a subtle fade/slide transition.
const Page = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/experience" element={<Page><Experience /></Page>} />
        <Route path="/projects" element={<Page><Projects /></Page>} />
        <Route path="/projects/:id" element={<Page><ProjectDetail /></Page>} />
        <Route path="/education" element={<Page><Education /></Page>} />
        <Route path="/awards" element={<Page><Awards /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      {/* Listens to route changes and forces the page to scroll to the top */}
      <ScrollToTop />

      {/* Main App Container */}
      <div className="min-h-screen flex flex-col font-sans text-slate-200 selection:bg-blue-500/30">

        {/* 1. Global Noise Texture Overlay */}
        <div className="bg-noise"></div>

        {/* 2. Interactive Sci-Fi Background */}
        <ShootingStarBackground />

        {/* 3. Top Navigation */}
        <Navbar />

        {/* 4. Main Page Content Routes (with transitions) */}
        <main className="flex-grow relative z-10 pt-16">
          <AnimatedRoutes />
        </main>

        {/* 5. Bottom Footer */}
        <Footer />

        {/* 6. Back to top (floating) */}
        <BackToTop />

      </div>
    </Router>
  );
};

export default App;
