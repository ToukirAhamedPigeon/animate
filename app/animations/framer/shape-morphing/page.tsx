'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- Framer Motion Component ---
const FM_SVG_Morph = () => (
  <motion.svg width="200" height="200" viewBox="0 0 200 200">
    <motion.path
      d="M20,100 Q100,10 180,100 Q100,190 20,100 Z"
      animate={{
        d: [
          "M20,100 Q100,10 180,100 Q100,190 20,100 Z",
          "M10,100 Q100,30 190,100 Q100,170 10,100 Z"
        ]
      }}
      transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      fill="#7c3aed"
    />
  </motion.svg>
);

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/FM_SVG_Morph.tsx
import { motion } from "framer-motion";

export const FM_SVG_Morph = () => (
  <motion.svg width="200" height="200" viewBox="0 0 200 200">
    <motion.path
      d="M20,100 Q100,10 180,100 Q100,190 20,100 Z"
      animate={{
        d: [
          "M20,100 Q100,10 180,100 Q100,190 20,100 Z",
          "M10,100 Q100,30 190,100 Q100,170 10,100 Z"
        ]
      }}
      transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
      fill="#7c3aed"
    />
  </motion.svg>
);
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Shape Morphing Animation (Framer Motion)
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Framer Motion Animation Preview: SVG Morph"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key} className="flex justify-center">
          <FM_SVG_Morph />
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
            <strong>d attribute:</strong> Defines the initial SVG path coordinates.
          </li>
          <li>
            <strong>animate:</strong> Contains an array of path strings to morph between.
          </li>
          <li>
            <strong>transition:</strong> Duration is 1.2s, repeats infinitely, and reverses direction each cycle.
          </li>
          <li>
            Works best when both paths have the same number of points and compatible shapes.
          </li>
          <li>
            Great for creative SVG shape transformations and organic UI effects!
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
