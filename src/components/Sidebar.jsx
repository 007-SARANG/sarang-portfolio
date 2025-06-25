import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Home, User, FolderOpen, Cpu, Smile } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

const navLinks = [
  { label: 'Home', to: 'home', icon: <Home size={20} /> },
  { label: 'About', to: 'about', icon: <User size={20} /> },
  { label: 'Projects', to: 'projects', icon: <FolderOpen size={20} /> },
  { label: 'Skills', to: 'skills', icon: <Cpu size={20} /> },
  { label: 'Fun', to: 'fun', icon: <Smile size={20} /> }
];

export default function Sidebar() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-screen w-20 bg-black/60 backdrop-blur-md border-r border-gray-800 flex flex-col items-center py-6 z-50 shadow-xl"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.img
        src={avatarImg}
        alt="Sarang"
        className="rounded-full w-14 h-14 mb-10 border-2 border-white object-cover hover:scale-110 transition-all"
        animate={{
          x: (mousePos.x - window.innerWidth / 2) * 0.01,
          y: (mousePos.y - window.innerHeight / 2) * 0.01
        }}
        transition={{ type: 'spring', stiffness: 20 }}
      />

      <div className="flex flex-col items-center gap-6 text-white">
        {navLinks.map(({ label, to, icon }) => (
          <Link
            key={to}
            to={to}
            smooth
            duration={500}
            className="relative group cursor-pointer"
          >
            <div className="p-2 rounded-full hover:bg-blue-500 transition">{icon}</div>
            <span className="absolute left-10 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-all duration-300 z-50">
              {label}
            </span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
