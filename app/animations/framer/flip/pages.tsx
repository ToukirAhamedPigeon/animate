'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- Framer Motion Flip Component ---
const FM_Flip = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="perspective-1000 w-64 h-40 cursor-pointer">
      <motion.div
        onClick={() => setFlipped(!flipped)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute inset-0 bg-white p-4 rounded-xl shadow-lg flex items-center justify-center font-semibold"
        >
          Front
        </div>
        <div
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          className="absolute inset-0 bg-gray-100 p-4 rounded-xl shadow-lg flex items-center justify-center font-semibold"
        >
          Back
        </div>
      </motion.div>
    </div>
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/FM_Flip.tsx
import { motion } from "framer-motion";
import React, { useState } from "react";

export const FM_Flip = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="perspective-1000 w-64 h-40 cursor-pointer">
      <motion.div
        onClick={() => setFlipped(!flipped)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div style={{ backfaceVisibility: 'hidden' }} className="absolute inset-0 bg-white p-4 rounded-xl shadow-lg flex items-center justify-center font-semibold">
          Front
        </div>
        <div style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} className="absolute inset-0 bg-gray-100 p-4 rounded-xl shadow-lg flex items-center justify-center font-semibold">
          Back
        </div>
      </motion.div>
    </div>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Flip Card Animation (Framer Motion)
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Framer Motion Animation Preview: Flip Card"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key} className="flex justify-center">
          <FM_Flip />
        </div>
      </AnimationCard>

      {/* Code */}
      <AnimationCard title="Code Snippet">
        <CodeBox code={codeSnippet} />
      </AnimationCard>

      {/* Explanation */}
      <AnimationCard title="Explanation">
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <strong>transformStyle: preserve-3d</strong> ensures 3D rotation works.
          </li>
          <li>
            <strong>backfaceVisibility: hidden</strong> hides the reverse side until flipped.
          </li>
          <li>
            Clicking the card toggles <code>rotateY</code> between 0° and 180°.
          </li>
          <li>
            <strong>transition duration:</strong> 0.6s for smooth flip effect.
          </li>
          <li>
            You can customize content, colors, and size of the card.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
