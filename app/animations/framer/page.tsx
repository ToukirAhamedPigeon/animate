'use client';

import Link from 'next/link';
import { animations } from '@/data/animations';

export default function FramerPage() {
  const framerAnimations = animations.filter(a => a.type === 'framer');
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-4">Framer Motion Animations</h1>
      <ul className="space-y-2">
        {framerAnimations.map((anim) => (
          <li key={anim.slug}>
            <Link href={`/animations/framer/${anim.slug}`} className="text-blue-400 hover:underline">
              {anim.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
