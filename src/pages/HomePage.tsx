import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Stats } from '../sections/Stats';
import { GalleryPreview } from '../sections/GalleryPreview';
import { Reel } from '../sections/Reel';
import { Booking } from '../sections/Booking';
import { Contact } from '../sections/Contact';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  const { scrollYProgress } = useScroll();
  
  // Background color transitions based on scroll progress
  // 0.0 - 0.15: Hero (#0a0a0a)
  // 0.15 - 0.35: About (#111111)
  // 0.35 - 0.55: Stats (#3a1f0d)
  // 0.55 - 0.70: Gallery Preview (#0a0a0a)
  // 0.70 - 0.90: Reel & Booking (#1a0d05)
  // 0.90 - 1.0: Contact & Footer (#0a0a0a)
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ['#0a0a0a', '#111111', '#3a1f0d', '#0a0a0a', '#1a0d05', '#0a0a0a']
  );

  return (
    <motion.main
      style={{ backgroundColor: bgColor }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="transition-colors duration-700"
    >
      <Hero />
      <About />
      <Stats />
      <GalleryPreview />
      <Reel />
      <Booking />
      <Contact />
      <Footer />
    </motion.main>
  );
};
