'use client';

import { useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- Framer Motion Parallax Component ---
const FM_Parallax = () => {
  const { scrollY } = useViewportScroll(); // track scroll
  const y = useTransform(scrollY, [0, 500], [0, -150]); // map scroll to translateY
  return (
    <motion.div
      style={{ y }}
      className="h-64 bg-gradient-to-r from-indigo-400 to-pink-300 rounded-xl shadow-lg"
    />
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/FM_Parallax.tsx
import { motion, useViewportScroll, useTransform } from "framer-motion";

export const FM_Parallax = () => {
  const { scrollY } = useViewportScroll(); // track scroll
  const y = useTransform(scrollY, [0, 500], [0, -150]); // map scroll to translateY
  return (
    <motion.div
      style={{ y }}
      className="h-64 bg-gradient-to-r from-indigo-400 to-pink-300 rounded-xl shadow-lg"
    />
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Scroll Parallax Animation (Framer Motion)
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Framer Motion Animation Preview: Parallax"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <FM_Parallax />
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
            <strong>useViewportScroll:</strong> Tracks the scroll position of the viewport.
          </li>
          <li>
            <strong>useTransform:</strong> Maps scroll values to a CSS transform (here, vertical movement).
          </li>
          <li>
            The box moves upward by <code>-150px</code> as you scroll down 500px.
          </li>
          <li>
            Works without any external parallax library — pure Framer Motion.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
