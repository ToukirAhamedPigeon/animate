'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- GSAP ClipPath Reveal Component ---
const GSAP_Clip = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { clipPath: 'inset(0% 100% 0% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.2,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="p-8 rounded-xl shadow-lg text-white text-lg font-medium bg-gradient-to-r from-pink-400 to-indigo-500"
    >
      ClipPath Reveal Animation
    </div>
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/GSAP_Clip.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const GSAP_Clip = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { clipPath: 'inset(0% 100% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'power2.out' }
    );
  }, []);

  return (
    <div
      ref={ref}
      className="p-8 bg-gradient-to-r from-pink-300 to-indigo-400 rounded-xl text-white text-lg"
    >
      Clip reveal
    </div>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        GSAP ClipPath Reveal
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="GSAP Animation Preview: ClipPath Reveal"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <GSAP_Clip />
        </div>
      </AnimationCard>

      {/* Code Snippet */}
      <AnimationCard title="Code Snippet">
        <CodeBox code={codeSnippet} />
      </AnimationCard>

      {/* Explanation */}
      <AnimationCard title="Explanation">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>clip-path:</strong> Defines which part of an element is visible. 
            Here, we animate it from a right-side crop to fully visible.
          </li>
          <li>
            <strong>fromTo:</strong> Starts the animation from <code>inset(0% 100% 0% 0%)</code> 
            (fully hidden) to <code>inset(0% 0% 0% 0%)</code> (fully revealed).
          </li>
          <li>
            <strong>ease:</strong> Adds smooth acceleration/deceleration using <code>power2.out</code>.
          </li>
          <li>
            <strong>duration:</strong> Controls the reveal speed — here 1.2 seconds.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
