'use client';

import { useState } from 'react';
import { FM_FadeIn } from '@/components/FM_FadeIn';
import CodeBox from '@/components/CodeBox';
import AnimationCard from '@/components/AnimationCard';

const codeSnippet = `
// components/FM_FadeIn.tsx
import React from "react";
import { motion } from "framer-motion";

export const FM_FadeIn: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-8 bg-white rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold">Fade-in Section</h2>
      <p className="mt-2 text-sm text-gray-600">Simple enter animation.</p>
    </motion.section>
  );
};
`;

export default function Page() {
  const [key, setKey] = useState(0);

  return (
    <div className="container mx-auto p-6 pt-0 space-y-6">
      <h1 className="text-3xl font-bold text-white mb-4">
        Fade-in Section (Framer Motion)
      </h1>

      <AnimationCard title="Framer Motion Animation Preview: Fade-in" onRunAgain={() => setKey((k) => k + 1)}>
        {/* 👇 re-renders animation when key changes */}
        <div key={key}>
          <FM_FadeIn />
        </div>
      </AnimationCard>

      <AnimationCard title="Code Snippet">
        <CodeBox code={codeSnippet} />
      </AnimationCard>

      <AnimationCard title="Explanation">
        <ul className="list-disc list-inside text-gray-300">
          <li><strong>initial:</strong> Starting state (opacity 0, y 8px).</li>
          <li><strong>animate:</strong> End state (opacity 1, y 0).</li>
          <li><strong>transition:</strong> Controls duration and easing.</li>
          <li><strong>motion.section:</strong> Wraps the element to animate on mount.</li>
        </ul>
      </AnimationCard>
    </div>
  );
}
