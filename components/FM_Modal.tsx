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