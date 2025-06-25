import React from 'react';
import { motion } from 'framer-motion';

const skillLevels = [
  { name: 'Python', level: 90 },
  { name: 'Machine Learning', level: 85 },
  { name: 'Flask', level: 80 },
  { name: 'React', level: 75 },
  { name: 'TailwindCSS', level: 70 },
];

const techStack = [
  '🐍 Python', '⚛️ React', '🎨 Tailwind', '🔥 Firebase',
  '🧠 Scikit-learn', '📷 OpenCV', '🌐 Flask', '🤖 AI APIs'
];

export default function SkillsSection() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-purple-400 mb-6 border-b border-purple-700 pb-2">Skills</h2>

      <div className="space-y-6">
        {skillLevels.map(({ name, level }, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="text-white">{name}</span>
              <span className="text-sm text-gray-300">{level}%</span>
            </div>
            <motion.div
              className="w-full h-3 bg-gray-800 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1 }}
            >
              <div className="h-full bg-purple-500"></div>
            </motion.div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-4 text-purple-300">Tech Stack</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-white text-sm">
        {techStack.map((tech, i) => (
          <motion.div
            key={i}
            className="bg-black/40 p-3 border border-purple-700 rounded-lg hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
