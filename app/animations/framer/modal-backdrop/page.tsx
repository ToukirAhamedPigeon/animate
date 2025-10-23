'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';
import { FM_Modal } from '@/components/FM_Modal';

// --- Full Page ---
export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/FM_Modal.tsx
import { motion } from "framer-motion";
import React from "react";

export const FM_Modal: React.FC<{open: boolean, onClose: () => void}> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black"
      />
      {/* modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring" }}
        className="relative z-10 bg-white p-6 rounded-md shadow-lg"
      >
        <h3 className="text-lg font-medium">Modal title</h3>
        <p className="mt-2 text-sm text-gray-600">
          This modal has a separate backdrop and modal animation.
        </p>
      </motion.div>
    </div>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        Modal with Backdrop (Framer Motion)
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Modal Preview"
        onRunAgain={() => {
          setKey((k) => k + 1);
          setIsOpen(false);
          setTimeout(() => setIsOpen(true), 50);
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Open Modal
        </button>

        <AnimatePresence>
          {isOpen && (
            <FM_Modal
              key={key}
              open={isOpen}
              onClose={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </AnimationCard>

      {/* Code */}
      <AnimationCard title="Code Snippet">
        <CodeBox code={codeSnippet} />
      </AnimationCard>

      {/* Explanation */}
      <AnimationCard title="Explanation">
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <strong>Backdrop:</strong> Fades in/out separately from the modal using <code>motion.div</code>.
          </li>
          <li>
            <strong>Modal:</strong> Animates scale and opacity with spring effect.
          </li>
          <li>
            <strong>AnimatePresence:</strong> Ensures exit animations are played when modal closes.
          </li>
          <li>
            Click the backdrop or "Run Again" to see animations restart.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
