import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function BootIntro() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen flex items-center justify-center bg-black text-green-400 font-mono text-lg"
    >
      <div>
        <p>&gt; <Typewriter words={["./sarang start"]} loop={false} cursor cursorStyle='█' typeSpeed={80} /></p>
        <p className="mt-4 animate-pulse">Loading Portfolio Modules...</p>
      </div>
    </motion.div>
  );
}
