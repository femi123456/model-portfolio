import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import Cursor from './components/Cursor';
import { BackToTop } from './components/BackToTop';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';

const GrainOverlay = () => <div className="grain-overlay" />;

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black selection:bg-gold selection:text-black">
        <GrainOverlay />
        <Cursor />
        <Navbar />
        <AnimatedRoutes />
        <BackToTop />
      </div>
    </Router>
  );
}
