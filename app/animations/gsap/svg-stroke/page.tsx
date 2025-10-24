'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- GSAP SVG Stroke Animation Component ---
const GSAP_Stroke = () => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();

    gsap.fromTo(
      pathRef.current,
      {
        strokeDasharray: length,
        strokeDashoffset: length,
      },
      {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power2.out',
      }
    );

    return () => gsap.killTweensOf(pathRef.current);
  }, []);

  return (
    <div className="flex justify-center items-center p-8">
      <svg
        width="200"
        height="200"
        viewBox="0 0 100 100"
        className="stroke-current text-white"
      >
        <path
          ref={pathRef}
          d="M10 90 Q 50 10 90 90"
          stroke="#22d3ee"
          strokeWidth={2.5}
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/GSAP_Stroke.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const GSAP_Stroke = () => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const length = pathRef.current?.getTotalLength() || 0;
    gsap.fromTo(
      pathRef.current,
      { strokeDasharray: length, strokeDashoffset: length },
      { strokeDashoffset: 0, duration: 1.4, ease: 'power2.out' }
    );
  }, []);

  return (
    <svg width="100" height="100">
      <path
        ref={pathRef}
        d="M10 10 L90 90"
        stroke="#111"
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        GSAP SVG Stroke Dash Animation
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="GSAP Animation Preview: SVG Stroke Draw"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <GSAP_Stroke />
        </div>
      </AnimationCard>

      {/* Code Snippet */}
      <AnimationCard title="Code Snippet">
        <CodeBox code={codeSnippet} />
      </AnimationCard>

      {/* Explanation */}
      <AnimationCard title="Explanation">
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <strong>strokeDasharray / strokeDashoffset:</strong> Used to simulate drawing of paths.
          </li>
          <li>
            <strong>getTotalLength():</strong> Returns the total length of the SVG path.
          </li>
          <li>
            <strong>gsap.fromTo:</strong> Animates from fully hidden stroke to visible.
          </li>
          <li>
            <strong>ease:</strong> Smooth drawing motion via <code>power2.out</code>.
          </li>
          <li>
            Great for <strong>logo draws</strong>, <strong>signatures</strong>, or animated outlines.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
