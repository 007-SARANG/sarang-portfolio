import React from 'react';
import avatar from '../assets/avatar.jpg';

export default function ProfileCard() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 justify-center text-center md:text-left">
      <img
        src={avatar}
        alt="Sarang"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform"
      />
      <div>
        <h1 className="text-4xl font-bold mb-2">Sarang Arora</h1>
        <p className="text-lg text-gray-300">
          B.Tech in Artificial Intelligence & Machine Learning, Thapar University · Frontend Developer · AI Research Enthusiast
        </p>
      </div>
    </div>
  );
}
