import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'Machine Learning', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Flask', level: 70 },
  { name: 'OpenCV', level: 60 },
];

export default function SkillsSection() {
  return (
    <div className="bg-black text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {skills.map((skill, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              className="h-2 bg-blue-500 rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
