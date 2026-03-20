import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 border-t border-gold/10 bg-black text-center">
      <div className="max-w-7xl mx-auto">
        <p className="font-sans text-[0.65rem] uppercase tracking-[0.4em] text-white/40 mb-4">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
        <p className="font-display text-xl text-gold tracking-[0.2em] uppercase">
          Julian Vane
        </p>
      </div>
    </footer>
  );
};
