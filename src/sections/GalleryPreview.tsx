import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import { cn } from '@/src/lib/utils';

const previewImages = [
  { url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80', title: 'Editorial I' },
  { url: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&q=80', title: 'Campaign II' },
  { url: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80', title: 'Runway III' },
];

const tiltOptions = {
  reverse: false,
  max: 12,
  perspective: 1000,
  scale: 1.02,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const GalleryCard = ({ img, index }: { img: any; index: number }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tilt options={tiltOptions}>
        <div 
          data-cursor="hover"
          className="relative aspect-[3/4] overflow-hidden cursor-pointer"
        >
          <img
            src={img.url}
            alt={img.title}
            referrerPolicy="no-referrer"
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 grayscale brightness-75",
              isHovered ? "scale-110 grayscale-0 brightness-100" : ""
            )}
          />
          <div className={cn(
            "absolute inset-0 bg-brown/40 transition-opacity duration-500 flex items-center justify-center",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <span className="font-serif text-white text-2xl italic tracking-widest">{img.title}</span>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export const GalleryPreview = () => {
  return (
    <section id="gallery-preview" className="relative w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 uppercase">Selected Works</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {previewImages.map((img, index) => (
            <GalleryCard key={index} img={img} index={index} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            to="/gallery"
            className="px-10 py-4 border border-gold text-gold font-sans text-[0.7rem] uppercase tracking-[0.3em] transition-all duration-500 hover:bg-gold hover:text-black"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};
