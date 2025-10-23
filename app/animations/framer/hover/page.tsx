'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';
import { FM_Button } from '@/components/FM_Button';

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/FM_Button.tsx
import { motion } from "framer-motion";

export const FM_Button: React.FC<{ label: string }> = ({ label }) => (
  <motion.button
    whileHover={{ scale: 1.04, y: -2 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="px-4 py-2 rounded-md bg-indigo-600 text-white"
  >
    {label}
  </motion.button>
);
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Hover Scale & Shadow Button (Framer Motion)
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Framer Motion Animation Preview: Button"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key} className="flex gap-4">
          <FM_Button label="Click Me" />
          <FM_Button label="Submit" />
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
            <strong>whileHover:</strong> Scales the button slightly and lifts it on hover.
          </li>
          <li>
            <strong>whileTap:</strong> Shrinks the button slightly when clicked.
          </li>
          <li>
            <strong>transition:</strong> Uses spring physics for a smooth bounce effect.
          </li>
          <li>
            Perfect for micro-interactions to make buttons feel responsive and lively!
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
