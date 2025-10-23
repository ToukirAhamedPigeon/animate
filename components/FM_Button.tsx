'use client';

import { motion } from 'framer-motion';

export const FM_Button: React.FC<{ label: string }> = ({ label }) => (
  <motion.button
    whileHover={{ scale: 1.04, y: -2 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="px-4 py-2 rounded-md bg-indigo-600 text-white"
  >
    {label}
  </motion.button>
);
