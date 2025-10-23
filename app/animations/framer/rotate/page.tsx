'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- Framer Motion Component ---
const FM_Rotate = () => (
  <motion.div
    initial={{ rotate: -90, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="p-8 bg-white rounded-xl text-gray-800 shadow-lg"
  >
    <h2 className="text-xl font-semibold">Rotate Animation</h2>
    <p className="mt-2 text-sm text-gray-600">
      This box rotates from -90° to 0° while fading in.
    </p>
  </motion.div>
);

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/FM_Rotate.tsx
import { motion } from "framer-motion";

export const FM_Rotate = () => (
  <motion.div
    initial={{ rotate: -90, opacity: 0 }}
    animate={{ rotate: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="p-8 bg-white rounded-xl text-gray-800 shadow-lg"
  >
    <h2 className="text-xl font-semibold">Rotate Animation</h2>
    <p>This box rotates from -90° to 0° while fading in.</p>
  </motion.div>
);
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Rotate Animation (Framer Motion)
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Framer Motion Animation Preview: Rotate"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <FM_Rotate />
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
            <strong>initial:</strong> Starts rotated at <code>-90°</code> and invisible.
          </li>
          <li>
            <strong>animate:</strong> Rotates to <code>0°</code> and fades in.
          </li>
          <li>
            <strong>transition:</strong> Uses <code>easeOut</code> for smooth exit of motion.
          </li>
          <li>
            Great for elements entering the screen with a twist!
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
