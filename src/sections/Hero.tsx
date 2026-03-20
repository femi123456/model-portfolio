import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const photoScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);
  const chevronOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax Background Text */}
      <motion.h2 
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center font-display text-[20vw] text-brown opacity-[0.04] pointer-events-none select-none"
      >
        MODEL
      </motion.h2>

      {/* Model Photo */}
      <motion.div
        style={{ opacity: photoOpacity, scale: photoScale }}
        className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center"
      >
        <img
          src="https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=1200&q=80"
          alt="Julian Vane"
          referrerPolicy="no-referrer"
          className="w-full h-auto max-h-[75vh] object-contain grayscale contrast-125 brightness-90 mix-blend-luminosity"
        />
        
        <div className="mt-8 text-center">
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] uppercase tracking-[0.15em] leading-none">
            Julian <span className="text-gold italic">Vane</span>
          </h1>
          
          <div className="flex flex-col items-center mt-4">
            <div className="w-[60px] h-[1px] bg-gold mb-4" />
            <p className="font-sans text-[0.65rem] uppercase tracking-[0.4em] text-brown">
              Editorial & Commercial Representation
            </p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: chevronOpacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};
