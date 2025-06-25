import React from 'react';
import Tilt from 'react-parallax-tilt';
import profile from '../assets/avatar.png';

export default function ProfileCard() {
  return (
    <div className="flex items-center justify-center py-20 bg-gradient-to-br from-gray-900 to-black">
      <Tilt glareEnable={true} glareMaxOpacity={0.4} scale={1.05} className="w-[300px]">
        <div className="bg-white rounded-xl p-6 shadow-2xl text-center">
          <img src={profile} className="rounded-full w-24 h-24 mx-auto border-4 border-blue-500" alt="Sarang" />
          <h2 className="mt-4 text-xl font-bold text-gray-800">Sarang</h2>
          <p className="text-gray-500">AI/ML Student @ Thapar University</p>
          <p className="text-sm mt-2 text-gray-600">"Mein to chill hu... Exams gaye bhaad mein 😎"</p>
        </div>
      </Tilt>
    </div>
  );
}
