import React from 'react';
import { motion } from 'motion/react';
import { Tilt } from 'react-tilt';
import { Instagram, Twitter, MessageCircle, Music2 } from 'lucide-react';

const socialLinks = [
  {
    name: 'WhatsApp',
    handle: '+234 800 000 0000',
    icon: <MessageCircle size={48} />,
    href: 'https://wa.me/2348000000000',
  },
  {
    name: 'Instagram',
    handle: '@julianvane_official',
    icon: <Instagram size={48} />,
    href: 'https://instagram.com/julianvane_official',
  },
  {
    name: 'TikTok',
    handle: '@julianvane',
    icon: <Music2 size={48} />,
    href: 'https://tiktok.com/@julianvane',
  },
  {
    name: 'Twitter / X',
    handle: '@julianvane',
    icon: <Twitter size={48} />,
    href: 'https://twitter.com/julianvane',
  },
];

const tiltOptions = {
  max: 10,
  scale: 1.05,
  speed: 400,
  glare: true,
  'max-glare': 0.2,
};

export const Contact = () => {
  return (
    <section id="contact" className="relative w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-wider">
            Let's <span className="text-gold italic">Connect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt options={tiltOptions}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-10 bg-white/[0.03] border border-gold/15 rounded-sm group transition-all duration-500 hover:border-gold hover:-translate-y-2"
                >
                  <div className="text-gold/60 group-hover:text-gold transition-colors duration-500 flex justify-center mb-6">
                    {social.icon}
                  </div>
                  <h3 className="font-display text-2xl text-white mb-1 tracking-widest uppercase">
                    {social.name}
                  </h3>
                  <p className="font-sans text-[0.65rem] text-white/40 group-hover:text-white/70 transition-colors">
                    {social.handle}
                  </p>
                </a>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
