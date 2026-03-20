import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const About = () => {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0.1, 0.4], [0, -30]);

  return (
    <section id="about" className="relative min-h-screen w-full py-24 px-6 md:px-12 lg:px-24 flex items-center transition-colors duration-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div>
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">About</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight uppercase">
              Defining the <span className="text-gold italic">Essence</span> of Modern Masculinity
            </h2>
          </div>
          
          <div className="flex flex-col gap-6 font-sans font-light text-white/70 leading-relaxed text-sm md:text-base">
            <p>
              Born with a natural affinity for the lens, Julian Vane has spent the last five years carving a unique path through the global high-fashion landscape. His presence is more than just a look; it's a narrative of strength, vulnerability, and timeless elegance.
            </p>
            <p>
              From the runways of Milan to the editorial studios of Paris, Julian brings a disciplined professionalism and a versatile aesthetic that adapts seamlessly to both avant-garde concepts and classic commercial campaigns.
            </p>
            <p>
              Beyond the frame, he is an advocate for sustainable fashion and artistic expression, constantly seeking collaborations that push the boundaries of visual storytelling. His portfolio is a testament to a career built on authenticity and an unwavering commitment to the craft.
            </p>
          </div>
        </motion.div>

        {/* Right Column */}
        <div className="relative overflow-hidden">
          <motion.div
            style={{ y: imageY }}
            className="w-full aspect-[3/4] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80"
              alt="Julian Vane Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-110 brightness-90"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
