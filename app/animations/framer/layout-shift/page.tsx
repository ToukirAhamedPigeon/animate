'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- Framer Motion Component ---
const FM_LayoutShift = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4">
      <motion.div
        layout
        onClick={() => setExpanded(!expanded)}
        className="p-4 bg-white rounded-xl shadow-lg cursor-pointer"
      >
        <motion.h3 layout className="text-lg font-semibold">
          Card
        </motion.h3>
        {expanded && (
          <motion.p layout className="mt-2 text-gray-600 text-sm">
            Expanded content that animates layout smoothly when clicked.
          </motion.p>
        )}
      </motion.div>

      <motion.div
        layout
        className="p-4 bg-white rounded-xl shadow-lg"
      >
        Other card
      </motion.div>
    </div>
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/FM_LayoutShift.tsx
import { motion } from "framer-motion";
import { useState } from "react";

export const FM_LayoutShift = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4">
      <motion.div
        layout
        onClick={() => setExpanded(!expanded)}
        className="p-4 bg-white rounded-xl shadow-lg cursor-pointer"
      >
        <motion.h3 layout>Card</motion.h3>
        {expanded && (
          <motion.p layout>Expanded content that animates layout smoothly.</motion.p>
        )}
      </motion.div>
      <motion.div layout className="p-4 bg-white rounded-xl shadow-lg">
        Other card
      </motion.div>
    </div>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Layout Shift Animation (Framer Motion)
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Framer Motion Animation Preview: Layout Shift"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <FM_LayoutShift />
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
            <strong>layout:</strong> Added to motion divs so position and size changes animate automatically.
          </li>
          <li>
            Clicking the card toggles expanded content, causing layout to shift smoothly.
          </li>
          <li>
            No need for <code>AnimateSharedLayout</code> anymore.
          </li>
          <li>
            Ideal for interactive UI cards where content expands or collapses dynamically.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
