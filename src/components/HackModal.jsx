import React, { useState } from 'react';

const HackModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
      >
        Hack Me 🧠
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg max-w-md shadow-2xl relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-xl text-gray-600 hover:text-red-500"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2">Sarang’s Secret Sauce 💀</h2>
            <p className="text-sm">
              Brooo… This whole portfolio is powered by Tailwind, Framer Motion, and ✨ chaos.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HackModal;
