// src/components/LayoutWrapper.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

export default function LayoutWrapper({ children }) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        color: 0x00ffff,
        backgroundColor: 0x000000,
        points: 10.0,
        maxDistance: 25.0,
        spacing: 18.0,
        showDots: true,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  return (
    <div ref={vantaRef} className="min-h-screen w-full">
      <div className="relative z-10 bg-black/60 min-h-screen">{children}</div>
    </div>
  );
}
