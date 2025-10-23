'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';
import { usePathname } from 'next/navigation';

// --- Framer Motion Component ---
const FM_PageTransition = ({ children, keyProp }: { children: React.ReactNode; keyProp: string }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={keyProp}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="p-8 bg-white rounded-xl shadow-lg"
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

// --- Full Page ---
export default function Page() {
  const pathname = usePathname();
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/FM_PageTransition.tsx
import { AnimatePresence, motion } from "framer-motion";

export const FM_PageTransition = ({ children, keyProp }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={keyProp}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="p-8 bg-white rounded-xl shadow-lg"
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Page Transition Animation (Framer Motion)
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Framer Motion Page Transition Preview"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <FM_PageTransition keyProp={`${pathname}-${key}`}>
          <div className="text-gray-800">
            <h2 className="text-xl font-semibold mb-2">Current Path: {pathname}</h2>
            <p>
              This content fades and slides in when the route changes. Click the button below to
              "simulate" a route change.
            </p>
            <button
              onClick={() => setKey((k) => k + 1)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Simulate Route Change
            </button>
          </div>
        </FM_PageTransition>
      </AnimationCard>

      {/* Code */}
      <AnimationCard title="Code Snippet">
        <CodeBox code={codeSnippet} />
      </AnimationCard>

      {/* Explanation */}
      <AnimationCard title="Explanation">
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <strong>AnimatePresence:</strong> Handles mounting/unmounting animations when content changes.
          </li>
          <li>
            <strong>initial:</strong> Sets the starting opacity and horizontal offset (<code>x: 50</code>).
          </li>
          <li>
            <strong>animate:</strong> Moves to <code>opacity: 1</code> and <code>x: 0</code>.
          </li>
          <li>
            <strong>exit:</strong> Fades out and slides left when unmounting.
          </li>
          <li>
            <strong>transition:</strong> Smooth easing with <code>easeInOut</code>.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
