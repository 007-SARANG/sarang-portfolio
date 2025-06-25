import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className =
      'fixed w-4 h-4 bg-purple-500 rounded-full pointer-events-none z-[1000] transition-transform duration-75';
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
};

export default CustomCursor;
