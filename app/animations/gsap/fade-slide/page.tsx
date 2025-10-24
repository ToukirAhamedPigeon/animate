'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- GSAP Fade + Slide Component ---
const GSAP_Fade = ({ triggerKey }: { triggerKey: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = Array.from(ref.current.children) as HTMLElement[];

    // Kill any previous animation
    gsap.killTweensOf(elements);

    gsap.from(elements, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, [triggerKey]);

  return (
    <div
      ref={ref}
      className="p-8 bg-white rounded-xl text-gray-800 shadow-lg space-y-2"
    >
      <h2 className="text-xl font-semibold">Fade + Slide In</h2>
      <p>This box fades in while sliding up.</p>
      <p>Children appear sequentially thanks to the stagger.</p>
    </div>
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/GSAP_Fade.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const GSAP_Fade = ({ triggerKey }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const elements = Array.from(ref.current.children);

    gsap.killTweensOf(elements);

    gsap.from(elements, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, [triggerKey]);

  return (
    <div ref={ref} className="p-8 bg-white rounded-xl shadow-lg space-y-2">
      <h2>Fade + Slide In</h2>
      <p>This box fades in while sliding up.</p>
      <p>Children appear sequentially thanks to the stagger.</p>
    </div>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        GSAP Fade + Slide In
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="GSAP Animation Preview: Fade + Slide In"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <GSAP_Fade triggerKey={key} />
      </AnimationCard>

      {/* Code */}
      <AnimationCard title="Code Snippet">
        <CodeBox code={codeSnippet} />
      </AnimationCard>

      {/* Explanation */}
      <AnimationCard title="Explanation">
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <strong>gsap.from:</strong> Animates from <code>opacity 0</code> and <code>y=20</code>.
          </li>
          <li>
            <strong>stagger:</strong> Children animate sequentially.
          </li>
          <li>
            <strong>ease:</strong> Smooth easing using <code>power2.out</code>.
          </li>
          <li>
            <strong>triggerKey prop:</strong> Re-runs animation on "Run Again".
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
