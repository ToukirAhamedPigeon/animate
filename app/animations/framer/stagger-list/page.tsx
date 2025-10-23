'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- Framer Motion Component ---
const listVariant = {
  visible: { transition: { staggerChildren: 0.12 } },
  hidden: {}
};

const itemVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

const FM_StaggerList: React.FC<{ items: string[] }> = ({ items }) => (
  <motion.ul
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={listVariant}
    className="space-y-2"
  >
    {items.map((t, i) => (
      <motion.li
        key={i}
        variants={itemVariant}
        className="p-3 bg-slate-50 rounded shadow-sm"
      >
        {t}
      </motion.li>
    ))}
  </motion.ul>
);

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const items = [
    'Learn Framer Motion basics',
    'Create reusable animations',
    'Use staggered lists on scroll',
    'Combine with Tailwind CSS',
    'Build interactive UI components'
  ];

  const codeSnippet = `
// components/FM_StaggerList.tsx
import { motion } from "framer-motion";

const listVariant = {
  visible: { transition: { staggerChildren: 0.12 } },
  hidden: {}
};

const itemVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

export const FM_StaggerList = ({ items }) => (
  <motion.ul
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={listVariant}
    className="space-y-2"
  >
    {items.map((t, i) => (
      <motion.li key={i} variants={itemVariant} className="p-3 bg-slate-50 rounded">
        {t}
      </motion.li>
    ))}
  </motion.ul>
);
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Staggered List Reveal on Scroll
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Framer Motion Animation Preview: Staggered List"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <FM_StaggerList items={items} />
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
            <strong>listVariant:</strong> Controls staggered reveal of child items.
          </li>
          <li>
            <strong>itemVariant:</strong> Each item fades in and moves up slightly.
          </li>
          <li>
            <strong>whileInView:</strong> Triggers animation when the list enters the viewport.
          </li>
          <li>
            Great for scroll-based list animations like feature highlights or tasks.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
