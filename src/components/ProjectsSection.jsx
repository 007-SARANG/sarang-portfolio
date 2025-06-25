import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'WhatsApp Chat Summarizer',
    description: 'Summarizes group chats using Python and NLP.',
    link: '#',
  },
  {
    title: 'Diabetes Prediction Bot',
    description: 'ML bot using SVM to predict diabetes from user inputs.',
    link: '#',
  },
  {
    title: 'SarangBot (Human Style)',
    description: 'A casual chatbot that talks like Sarang — chaos guaranteed.',
    link: '#',
  },
  {
    title: 'Gesture Controlled Pong',
    description: 'Built with OpenCV, plays pong using hand movement.',
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-purple-400 mb-6 border-b border-purple-700 pb-2">Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/50 border border-purple-700 rounded-xl p-4 hover:scale-[1.03] transition-all duration-300 hover:shadow-purple-500/40 hover:shadow-md cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{proj.description}</p>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
