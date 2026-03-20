import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import CountUp from 'react-countup';

const stats = [
  { label: 'Height', value: '6\'1"', isNumeric: false },
  { label: 'Chest', value: 32, suffix: '"', isNumeric: true },
  { label: 'Waist', value: 28, suffix: '"', isNumeric: true },
  { label: 'Hip', value: 38, suffix: '"', isNumeric: true },
  { label: 'Shoe', value: 10, isNumeric: true },
  { label: 'Eyes', value: 'Brown', isNumeric: false },
];

export const Stats = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.6]);

  return (
    <motion.section
      id="stats"
      style={{ opacity }}
      initial={{ scale: 0.96 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="font-display text-5xl md:text-7xl text-gold mb-2">
                {stat.isNumeric ? (
                  <CountUp
                    start={0}
                    end={stat.value as number}
                    duration={2}
                    suffix={stat.suffix || ''}
                    enableScrollSpy
                    scrollSpyOnce={false}
                  />
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    {stat.value}
                  </motion.span>
                )}
              </div>
              <span className="font-sans text-[0.62rem] uppercase tracking-[0.3em] text-white/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
