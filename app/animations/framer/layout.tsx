'use client';

import Link from 'next/link';
import { animations } from '@/data/animations';

export default function FramerLayout({ children }: { children: React.ReactNode }) {
  const framerAnimations = animations.filter((a) => a.type === 'framer');

  return (
    <div className="container mx-auto px-6 pb-4 space-y-6">
      <div className="flex flex-wrap gap-3 justify-center">
        {framerAnimations.map((anim) => (
          <Link
            key={anim.slug}
            href={`/animations/framer/${anim.slug}`}
            className="px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-indigo-600 text-sm transition"
          >
            {anim.title}
          </Link>
        ))}
      </div>
      {children}
    </div>
  );
}
