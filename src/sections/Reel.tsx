import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const btsImages = [
  'https://images.unsplash.com/photo-1490130407176-8ca89238c1b3?w=400&q=80',
  'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=400&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
  'https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&q=80',
];

export const Reel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <motion.section
      id="reel"
      className="relative w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <h2 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15vw] text-gold/10 pointer-events-none z-0">
          REEL
        </h2>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full aspect-video bg-black/40 rounded-sm overflow-hidden group cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1200&q=80"
            alt="Reel Poster"
            className="w-full h-full object-cover brightness-50 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-gold flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-500">
              <Play size={32} fill="currentColor" />
            </div>
          </div>
        </motion.div>

        <div className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">Behind the Scenes</span>
            <div className="flex gap-4">
              <button onClick={() => scroll('left')} className="text-gold hover:text-white transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={() => scroll('right')} className="text-gold hover:text-white transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 cursor-grab active:cursor-grabbing no-scrollbar"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {btsImages.map((img, index) => (
              <motion.div
                key={index}
                className="min-w-[280px] md:min-w-[350px] aspect-[4/5] bg-zinc-900 overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                <img
                  src={img}
                  alt={`BTS ${index}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
