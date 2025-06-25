import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import avatarImg from '../assets/avatar.png';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
];

export default function Sidebar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = e => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-screen w-20 bg-black text-white flex flex-col items-center py-4 z-50">
      <motion.img
        src={avatarImg}
        alt="Sarang"
        className="rounded-full w-16 h-16 mb-8 border-2 border-white"
        style={{
          transform: `translate(${(mousePos.x - window.innerWidth / 2) * 0.01}px, ${(mousePos.y - window.innerHeight / 2) * 0.01}px)`
        }}
      />

      <div className="flex flex-col gap-6">
        {navLinks.map(({ label, to }) => (
          <Link key={to} to={to} smooth duration={500} className="cursor-pointer hover:text-blue-400">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
