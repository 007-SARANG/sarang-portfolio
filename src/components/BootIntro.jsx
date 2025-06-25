import React, { useEffect, useState } from 'react';

const bootLines = [
  '[ OK ] Initializing SarangOS Core Modules...',
  '[ OK ] Setting up Development Environment...',
  '[ OK ] Loading Custom UI Components...',
  '[ OK ] Injecting Machine Learning Libraries...',
  '[ OK ] Starting Localhost Services...',
  '[ OK ] Boot Sequence Completed Successfully.',
  '>> Welcome to SarangOS – AI-Enhanced Portfolio System.',
];

export default function BootIntro() {
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [finishedLines, setFinishedLines] = useState([]);

  useEffect(() => {
    if (lineIndex >= bootLines.length) {
      setTimeout(() => setShowIntro(false), 1500);
      return;
    }

    if (charIndex < bootLines[lineIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + bootLines[lineIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const lineDelay = setTimeout(() => {
        setFinishedLines((prev) => [...prev, currentLine]);
        setCurrentLine('');
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }, 300);
      return () => clearTimeout(lineDelay);
    }
  }, [charIndex, lineIndex]);

  if (!showIntro) return null;

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono text-sm sm:text-base p-6 z-[9999] overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {finishedLines.map((line, i) => (
          <div key={i} className="opacity-80">{line}</div>
        ))}
        <div className="inline-flex">
          <span>{currentLine}</span>
          <span className="animate-blink ml-1">|</span>
        </div>
      </div>
    </div>
  );
}
