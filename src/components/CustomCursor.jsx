import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-8 h-8"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <div className="text-xl animate-pulse">🔥</div>
    </div>
  );
}
