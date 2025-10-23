'use client';

import { useState } from 'react';
import { RotateCw } from 'lucide-react'; // 🔁 simple icon from lucide-react

export default function AnimationCard({
  title,
  children,
  onRunAgain,
}: {
  title: string;
  children: React.ReactNode;
  onRunAgain?: () => void; // optional handler
}) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {onRunAgain && (
          <button
            onClick={onRunAgain}
            className="flex items-center gap-1 px-2 py-1 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded transition cursor-pointer"
          >
            <RotateCw className="w-4 h-4" />
            Run Again
          </button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
