import React from 'react';

export default function AboutSection() {
  return (
    <div className="bg-gray-900/30 p-6 rounded-xl shadow-xl backdrop-blur-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
      <p className="text-gray-300 leading-relaxed text-lg">
        I'm <span className="font-semibold text-white">Sarang</span>, a second-year B.Tech student specializing in 
        <span className="font-semibold text-white"> Artificial Intelligence and Machine Learning</span> at Thapar University.
        With a strong passion for cutting-edge technology and real-world problem solving, I enjoy building intelligent solutions
        using modern tech stacks. From creative frontend experiences to powerful ML models, I bring a balance of technical depth
        and creative vision.
      </p>
      <p className="text-gray-400 mt-4 text-base">
        I’m currently exploring areas like computer vision, recommendation systems, and chatbot development. I also love experimenting
        with UI/UX and turning ideas into engaging digital experiences.
      </p>
    </div>
  );
}
