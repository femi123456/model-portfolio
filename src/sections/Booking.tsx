import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const agencyInfo = [
  { label: 'Agency Name', value: 'Elite Model Management' },
  { label: 'Mother Agency', value: 'Vane Models International' },
  { label: 'Markets', value: 'Lagos · Paris · Milan' },
  { label: 'Booking Email', value: 'booking@julianvane.com' },
  { label: 'Instagram Handle', value: '@julianvane_official' },
];

export const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="booking" className="relative w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Column - Agency Info */}
        <div className="flex flex-col gap-12">
          <div>
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-gold">Representation</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-4 uppercase">
              Global <span className="text-gold italic">Presence</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {agencyInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="py-6 border-b border-gold/20 last:border-0"
              >
                <span className="block font-sans text-[0.62rem] uppercase tracking-[0.2em] text-gold mb-2">
                  {info.label}
                </span>
                <span className="block font-serif text-xl md:text-2xl text-white/90">
                  {info.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column - Booking Form */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="bg-black/20 p-8 md:p-12 border border-gold/10"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[0.6rem] uppercase tracking-widest text-white/50">First Name</label>
                <input
                  required
                  type="text"
                  className="bg-transparent border border-gold/30 p-3 text-white font-sans focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sans text-[0.6rem] uppercase tracking-widest text-white/50">Last Name</label>
                <input
                  required
                  type="text"
                  className="bg-transparent border border-gold/30 p-3 text-white font-sans focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-[0.6rem] uppercase tracking-widest text-white/50">Email Address</label>
              <input
                required
                type="email"
                className="bg-transparent border border-gold/30 p-3 text-white font-sans focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-[0.6rem] uppercase tracking-widest text-white/50">Project Type</label>
              <select className="bg-black border border-gold/30 p-3 text-white font-sans focus:outline-none focus:border-gold transition-all">
                <option>Editorial</option>
                <option>Campaign</option>
                <option>Runway</option>
                <option>Brand Ambassador</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-sans text-[0.6rem] uppercase tracking-widest text-white/50">Message</label>
              <textarea
                required
                rows={4}
                className="bg-transparent border border-gold/30 p-3 text-white font-sans focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="relative w-full py-4 border border-gold text-gold font-sans text-[0.7rem] uppercase tracking-[0.3em] transition-all duration-500 hover:bg-gold hover:text-black overflow-hidden"
            >
              <span className={isSubmitted ? 'opacity-0' : 'opacity-100'}>Submit Inquiry</span>
              {isSubmitted && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Check size={20} className="mr-2" /> Sent Successfully
                </motion.div>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
