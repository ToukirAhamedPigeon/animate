'use client';

import Link from 'next/link';
import { animations } from '@/data/animations';

export default function GSAPPage() {
  const gsapAnimations = animations.filter(a => a.type === 'gsap');
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-4">GSAP Animations</h1>
      <ul className="space-y-2">
        {gsapAnimations.map((anim) => (
          <li key={anim.slug}>
            <Link href={`/animations/gsap/${anim.slug}`} className="text-purple-400 hover:underline">
              {anim.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
