'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- Framer Motion Typewriter Component ---
const FM_Typewriter = () => {
  const text = "Animate text with Framer Motion.";
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.03 } },
      }}
      className="text-3xl font-bold text-white"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/FM_Typewriter.tsx
import { motion } from "framer-motion";

export const FM_Typewriter = () => {
  const text = "Animate text with Framer Motion.";
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.03 } },
      }}
      className="text-3xl font-bold"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Typewriter Animation (Framer Motion)
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Framer Motion Animation Preview: Typewriter"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <FM_Typewriter />
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
            <strong>initial:</strong> Each character starts hidden (opacity 0).
          </li>
          <li>
            <strong>animate:</strong> Characters fade in one by one.
          </li>
          <li>
            <strong>staggerChildren:</strong> Controls the delay between each character animation.
          </li>
          <li>
            Great for headings or text that should appear with a typewriter effect!
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
