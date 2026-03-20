import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { cn } from '@/src/lib/utils';

const galleryImages = [
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80',
  'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800&q=80',
  'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80',
  'https://images.unsplash.com/photo-1490130407176-8ca89238c1b3?w=800&q=80',
  'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=800&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80',
  'https://images.unsplash.com/photo-1511424323602-d3c1a4138056?w=800&q=80',
  'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=800&q=80',
];

const tiltOptions = {
  max: 12,
  scale: 1.02,
  speed: 1000,
};

const GalleryItem = ({ img, index }: { img: string; index: number }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.2 }}
      className="masonry-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tilt options={tiltOptions}>
        <div 
          data-cursor="hover"
          className="relative overflow-hidden cursor-pointer"
        >
          <img
            src={img}
            alt={`Gallery ${index}`}
            referrerPolicy="no-referrer"
            className={cn(
              "w-full h-auto transition-all duration-700 grayscale brightness-75",
              isHovered ? "grayscale-0 brightness-100" : ""
            )}
          />
          <div className={cn(
            "absolute inset-0 bg-brown/40 transition-opacity duration-500 flex items-center justify-center",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white">
              <Plus size={24} />
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export const GalleryPage = () => {
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-black pt-32 pb-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gold font-sans text-[0.65rem] uppercase tracking-[0.3em] mb-8 hover:text-white transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            <h1 className="font-serif text-5xl md:text-7xl uppercase tracking-wider">
              Portfolio <span className="text-gold italic">Works</span>
            </h1>
          </motion.div>
          
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.4em] text-white/40 max-w-xs">
            A curated selection of editorial, commercial, and runway photography.
          </p>
        </div>

        <div className="masonry-grid">
          {galleryImages.map((img, index) => (
            <GalleryItem key={index} img={img} index={index} />
          ))}
        </div>
      </div>
    </motion.main>
  );
};
