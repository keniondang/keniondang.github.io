import React from 'react';
// IMPORTANT: Using HashRouter instead of BrowserRouter for GitHub Pages compatibility
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// --- COMPONENTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShootingStarBackground from './components/ShootingStarBackground'; 
import ScrollToTop from './components/ScrollToTop';

// --- PAGES ---
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Education from './pages/Education';
import Awards from './pages/Awards';

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

        {/* 4. Main Page Content Routes */}
        <main className="flex-grow relative z-10 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/education" element={<Education />} />
            <Route path="/awards" element={<Awards />} />
          </Routes>
        </main>

        {/* 5. Bottom Footer */}
        <Footer />

      </div>
    </Router>
  );
};

export default App;