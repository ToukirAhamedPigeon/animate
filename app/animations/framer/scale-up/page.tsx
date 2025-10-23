'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- Framer Motion Scale Up Component ---
const FM_ScaleUp = () => (
  <motion.div
    initial={{ scale: 0.6, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, ease: 'backOut' }}
    className="p-8 bg-white rounded-xl text-gray-800 shadow-lg"
  >
    <h2 className="text-xl font-semibold">Scale Up</h2>
  </motion.div>
);

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
<motion.div
  initial={{ scale: 0.6, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6, ease: 'backOut' }}
/>
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Scale Up Animation (Framer Motion)
      </h1>

      {/* Animation Preview */}
      <AnimationCard title="Framer Motion Animation Preview: Scale Up" onRunAgain={() => setKey(k => k + 1)}>
        <div key={key} className="flex justify-center">
          <FM_ScaleUp />
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
            <strong>initial:</strong> Sets the starting scale to <code>0.6</code> and opacity to <code>0</code>.
          </li>
          <li>
            <strong>animate:</strong> Scales the element to full size (<code>1</code>) and fades it in.
          </li>
          <li>
            <strong>transition:</strong> Uses <code>backOut</code> easing for a bouncy, natural scale effect over 0.6 seconds.
          </li>
          <li>
            Ideal for making elements pop into view smoothly.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
