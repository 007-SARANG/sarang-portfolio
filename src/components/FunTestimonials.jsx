import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "You're boring af... but at least you visited this site 💀",
  "If you were in your place, you would also be there for help 🙂",
  "Sarang helped me crack my resume bot in one go 🤖🔥",
  "Hdd h... this portfolio is too OP!",
  "Bruhh this guy just flexed AI/ML like it's a toy 😂",
  "Mein to chill hu... Exams gaye bhaad mein 😎"
];

export default function FunTestimonials() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-tr from-black via-gray-900 to-black text-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">What people (and bots) say 🗣️</h2>
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
