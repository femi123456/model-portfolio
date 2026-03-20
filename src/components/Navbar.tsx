import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Stats', href: '/#stats' },
  { name: 'Reel', href: '/#reel' },
  { name: 'Booking', href: '/#booking' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Gallery', href: '/gallery', isRoute: true },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/gallery') {
      setActiveSection('gallery');
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'stats', 'gallery-preview', 'reel', 'booking', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current === 'gallery-preview' ? 'gallery' : current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isRoute?: boolean) => {
    if (isRoute) return;
    
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      window.location.href = href;
      return;
    }

    const id = href.split('#')[1];
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[999] glass-nav px-6 py-4 md:px-12 flex items-center justify-between">
      <Link to="/" className="text-gold font-display text-2xl tracking-wider">
        JULIAN VANE
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <div key={link.name} className="relative group">
            {link.isRoute ? (
              <Link
                to={link.href}
                className={cn(
                  "text-[0.65rem] font-sans uppercase tracking-[0.2em] transition-colors duration-300",
                  activeSection === 'gallery' ? "text-gold" : "text-white/70 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ) : (
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={cn(
                  "text-[0.65rem] font-sans uppercase tracking-[0.2em] transition-colors duration-300",
                  activeSection === link.href.split('#')[1] ? "text-gold" : "text-white/70 hover:text-white"
                )}
              >
                {link.name}
              </a>
            )}
            {activeSection === (link.isRoute ? 'gallery' : link.href.split('#')[1]) && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 w-full h-[1px] bg-brown"
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-gold p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-gold p-2"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-display text-white hover:text-gold transition-colors tracking-widest uppercase"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-2xl font-display text-white hover:text-gold transition-colors tracking-widest uppercase"
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
