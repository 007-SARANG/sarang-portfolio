import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HackModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const openModal = (e) => {
      if (e.ctrlKey && e.key === 'h') setShow(true);
    };
    window.addEventListener('keydown', openModal);
    return () => window.removeEventListener('keydown', openModal);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white p-8 rounded-xl max-w-md text-black shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-2">🤖 Accessing Neural Core...</h2>
        <p className="text-sm mb-4">Welcome to Sarang's AI Brain. Here's what he's built:</p>
        <ul className="list-disc pl-6">
          <li>Mood-based Song Recommender</li>
          <li>AI Resume Ranker</li>
          <li>Gesture Pong (CV Project)</li>
          <li>Diabetes Prediction Bot (SVM)</li>
        </ul>
        <button onClick={() => setShow(false)} className="mt-4 px-4 py-2 bg-black text-white rounded">Close</button>
      </motion.div>
    </div>
  );
}
