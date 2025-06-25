import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2023', text: 'Started B.Tech in AIML at Thapar 🎓' },
  { year: '2024', text: 'Built Resume Ranker & Mood Recommender 🎧' },
  { year: '2025', text: 'Mastering Computer Vision & Flask 🤖' },
];

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 glitch-text">About Me</h2>
      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-gray-800 p-4 rounded-xl shadow-lg"
          >
            <h3 className="text-blue-400 font-bold">{item.year}</h3>
            <p className="text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
