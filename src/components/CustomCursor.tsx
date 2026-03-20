import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Robust hover detection using elementFromPoint
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target) {
        const isHoverable = 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') || 
          target.closest('button') || 
          target.closest('[data-cursor="hover"]') ||
          target.closest('.cursor-pointer') ||
          (target as HTMLElement).dataset?.cursor === 'hover';
        
        setIsHovering(!!isHoverable);
      }
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999] flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: isHovering ? 38 : 10,
          height: isHovering ? 38 : 10,
          backgroundColor: isHovering ? 'transparent' : '#c9a84c',
          border: isHovering ? '1px solid #8B6343' : 'none',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        className="rounded-full"
      />
    </motion.div>
  );
};
