import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);
    const els = document.querySelectorAll('a, button');
    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    return () => els.forEach(el => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    });
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: pos.y,
        left: pos.x,
        width: hovered ? '38px' : '10px',
        height: hovered ? '38px' : '10px',
        borderRadius: '50%',
        backgroundColor: hovered ? 'transparent' : '#c9a84c',
        border: hovered ? '1.5px solid #8B6343' : 'none',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
      }}
    />
  );
}
