import React from 'react';
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: 'Resume Ranker 🤖',
    desc: 'Ranks resumes using AI + NLP. Gives feedback instantly.',
    tech: ['Python', 'NLP', 'Flask'],
    link: '#',
    code: '#'
  },
  {
    title: 'Mood Recommender 🎧',
    desc: 'Suggests songs based on your mood using Spotify API.',
    tech: ['React', 'API', 'JS'],
    link: '#',
    code: '#'
  },
  {
    title: 'Gesture Pong 👆🏽',
    desc: 'Play Pong with your fingers using OpenCV + MediaPipe.',
    tech: ['OpenCV', 'JS', 'Computer Vision'],
    link: '#',
    code: '#'
  },
];

export default function ProjectsSection() {
  return (
    <div className="bg-black text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 scrollbar-hide">
        {projects.map((proj, idx) => (
          <Tilt key={idx} className="min-w-[300px] snap-center bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-blue-400 mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{proj.desc}</p>
            <div className="text-xs text-gray-400 mb-3">Tech: {proj.tech.join(', ')}</div>
            <div className="flex gap-3">
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Live</a>
              <a href={proj.code} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-600">Code</a>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
