import React from 'react';
import { motion } from 'framer-motion';

const wrapperVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 14,
      duration: 0.5,
    },
  },
};

export default function PageWrapper({ children, className = '' }) {
  return (
    <motion.section
      className={`w-full px-6 py-10 ${className}`}
      variants={wrapperVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
}
