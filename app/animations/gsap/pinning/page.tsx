'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

gsap.registerPlugin(ScrollTrigger);

// --- GSAP Pinning Section Component ---
const GSAP_Pinning = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: 'top top',
      end: '+=600',
      pin: true,
      scrub: true,
      markers: false,
    });

    return () => trigger.kill();
  }, []);

  return (
    <div
      ref={ref}
      className="h-[100vh] flex flex-col justify-center items-center bg-gradient-to-b from-blue-600 to-purple-800 text-white text-center rounded-xl shadow-2xl"
    >
      <h2 className="text-4xl font-bold mb-4">Pinned Section</h2>
      <p className="max-w-xl text-lg opacity-90">
        This section stays fixed while you scroll for a while. Great for storytelling or emphasizing visuals.
      </p>
      <p className="mt-8 text-sm opacity-70">Scroll down to see the effect ⬇️</p>
    </div>
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/GSAP_Pinning.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const GSAP_Pinning = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      end: "+=600",
      pin: true,
      scrub: true,
    });
    return () => st.kill();
  }, []);
  return (
    <div ref={ref} className="h-[100vh] flex justify-center items-center bg-gradient-to-b from-blue-600 to-purple-800 text-white">
      <h2>Pinned content</h2>
    </div>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        GSAP ScrollTrigger — Pinned Section
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="ScrollTrigger: Pinned Section Preview"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <div className="h-[150vh] flex items-center justify-center text-gray-400">
            Scroll down to trigger the pinned section 👇
          </div>
          <GSAP_Pinning />
          <div className="h-[150vh] flex items-center justify-center text-gray-400">
            You’ve scrolled past the pinned section 👆
          </div>
        </div>
      </AnimationCard>

      {/* Code */}
      <AnimationCard title="Code Snippet">
        <CodeBox code={codeSnippet} />
      </AnimationCard>

      {/* Explanation */}
      <AnimationCard title="Explanation">
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <strong>ScrollTrigger.create:</strong> Defines the scroll-based animation behavior.
          </li>
          <li>
            <strong>pin:</strong> Keeps the section fixed while the user scrolls within a defined range.
          </li>
          <li>
            <strong>scrub:</strong> Syncs animation progress with scroll position.
          </li>
          <li>
            <strong>start/end:</strong> Controls when the pinning starts and ends (<code>start: 'top top'</code>, <code>end: '+=600'</code>).
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
