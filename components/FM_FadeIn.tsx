'use client';

import React from "react";
import { motion } from "framer-motion";

export const FM_FadeIn: React.FC = () => {
  return (
    // motion.section is a <section> with animation props
    <motion.section
      initial={{ opacity: 0, y: 8 }}      // starting state
      animate={{ opacity: 1, y: 0 }}      // end state
      transition={{ duration: 0.5, ease: "easeOut" }} // timing
      className="p-8 bg-white rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold">Fade-in Section</h2>
      <p className="mt-2 text-sm text-gray-600">Simple enter animation.</p>
    </motion.section>
  );
};