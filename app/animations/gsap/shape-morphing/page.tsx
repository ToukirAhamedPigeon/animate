'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

gsap.registerPlugin(MorphSVGPlugin);

// --- SVG Morph Component ---
const GSAP_Morph = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Use gsap.context to scope the animation to this component
    const ctx = gsap.context(() => {
      const path = ref.current!.querySelector('path');
      if (!path) return;

      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(path, {
        duration: 1.6,
        morphSVG: 'M10 20 Q 95 80 180 20 T 350 20',
        ease: 'power1.inOut',
      });

      return () => tl.kill();
    }, ref);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <div ref={ref} className="flex justify-center items-center py-8 h-48">
      <svg width="400" height="180" viewBox="0 0 400 100" fill="none">
        <path
          d="M10 80 Q 95 10 180 80 T 350 80"
          stroke="#22c55e"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </div>
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// GSAP Morph Component (Scoped)
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

export const GSAP_Morph = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const path = ref.current!.querySelector('path');
      if (!path) return;

      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(path, {
        duration: 1.6,
        morphSVG: "M10 20 Q 95 80 180 20 T 350 20",
        ease: "power1.inOut",
      });

      return () => tl.kill();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      <svg width="400" height="180" viewBox="0 0 400 100" fill="none">
        <path
          d="M10 80 Q 95 10 180 80 T 350 80"
          stroke="#22c55e"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </div>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        GSAP SVG Morph Animation
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="GSAP Animation Preview: SVG Morph"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <GSAP_Morph/>
        </div>
      </AnimationCard>

      {/* Code */}
      <AnimationCard title="Code Snippet">
        <CodeBox code={codeSnippet} />
      </AnimationCard>

      {/* Explanation */}
      <AnimationCard title="Explanation">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>gsap.context:</strong> Scopes the animation so it can be safely rerun.
          </li>
          <li>
            <strong>MorphSVGPlugin:</strong> Smoothly morphs one SVG path to another.
          </li>
          <li>
            <strong>repeat / yoyo:</strong> Loops the morph infinitely back and forth.
          </li>
          <li>
            Clicking "Run Again" remounts the component and triggers the morph animation again.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
