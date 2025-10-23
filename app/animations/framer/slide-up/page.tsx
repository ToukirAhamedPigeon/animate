'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- Framer Motion Slide Up Component ---
const FM_SlideUp = () => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="p-8 bg-white rounded-xl text-gray-800 shadow-lg"
  >
    <h2 className="text-xl font-semibold">Slide Up</h2>
    <p className="mt-2 text-gray-600">This box slides up while fading in.</p>
  </motion.div>
);

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
<motion.div
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
/>
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Slide Up Animation (Framer Motion)
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Framer Motion Animation Preview: Slide Up"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key} className="flex justify-center">
          <FM_SlideUp />
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
            <strong>initial:</strong> Starts <code>y: 50</code> and <code>opacity: 0</code>, so it’s below and invisible.
          </li>
          <li>
            <strong>animate:</strong> Moves to <code>y: 0</code> and <code>opacity: 1</code> to appear and slide up.
          </li>
          <li>
            <strong>transition:</strong> Duration 0.8s with <code>easeOut</code> for smooth motion.
          </li>
          <li>
            Perfect for animating elements entering the screen from below.
          </li>
          <li>
            Can be combined with other transforms like scale or rotate for richer effects.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
