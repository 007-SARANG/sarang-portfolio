import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Sarang’s projects make other portfolios look like HTML homework.",
  "This guy uses AI like it’s built into his DNA 💻🧠",
  "Even ChatGPT would say: 'Bro, calm down with the flex' 😂",
  "His UI? Smooth. His ML? Smart. His vibe? Unmatched 😎",
  "Companies: 'We need 10 years of experience' — Sarang: 'Done in semester 2 💀'",
  "Not just a dev — he’s a whole OS. Welcome to SarangOS 👑"
];

export default function FunTestimonials() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-tr from-black via-gray-900 to-black text-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">What People Say 💬</h2>
      <div className="relative h-24 w-full max-w-xl text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-gray-300 px-4"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
