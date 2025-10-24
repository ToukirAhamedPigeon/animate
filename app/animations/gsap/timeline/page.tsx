'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- GSAP Timeline Component ---
const GSAP_Timeline = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.6, ease: 'power2.out' } });

      tl.from('.title', { y: -40, opacity: 0, scale: 0.8 })
        .from('.card', { y: 50, opacity: 0, scale: 0.9, stagger: 0.15 }, '-=0.3')
        .to('.highlight', { scale: 1.15, repeat: 1, yoyo: true, duration: 0.5 }, '+=0.3');

      return () => tl.kill();
    }, ref);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      ref={ref}
      className="p-12 bg-white rounded-2xl text-gray-800 shadow-2xl space-y-8 text-center max-w-4xl mx-auto"
    >
      <h3 className="title text-4xl font-bold text-indigo-700">Timeline Animation</h3>

      <div className="flex justify-center gap-8">
        <div className="card bg-blue-400 text-white px-12 py-6 rounded-xl font-semibold text-2xl shadow-lg">
          A
        </div>
        <div className="card bg-green-400 text-white px-12 py-6 rounded-xl font-semibold text-2xl shadow-lg">
          B
        </div>
        <div className="card bg-pink-400 text-white px-12 py-6 rounded-xl font-semibold text-2xl shadow-lg">
          C
        </div>
      </div>

      <div className="highlight inline-block mt-6 px-8 py-4 bg-yellow-400 rounded-xl font-bold text-xl shadow-md">
        PULSE
      </div>
    </div>
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// GSAP Timeline Component (Scoped)
import { useRef, useEffect } from "react";
import gsap from "gsap";

export const GSAP_Timeline = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" } });

      tl.from(".title", { y: -40, opacity: 0, scale: 0.8 })
        .from(".card", { y: 50, opacity: 0, scale: 0.9, stagger: 0.15 }, "-=0.3")
        .to(".highlight", { scale: 1.15, repeat: 1, yoyo: true, duration: 0.5 }, "+=0.3");

      return () => tl.kill();
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref}>
      <h3 className="title">Timeline Animation</h3>
      <div className="card">A</div>
      <div className="card">B</div>
      <div className="card">C</div>
      <div className="highlight">PULSE</div>
    </div>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        GSAP Timeline Animation (Bigger & Better)
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="GSAP Animation Preview: Timeline Sequence"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <GSAP_Timeline />
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
            <strong>gsap.context:</strong> Scopes animation to this component to allow remount reruns.
          </li>
          <li>
            <strong>tl.from('.title'):</strong> Slides title in from top with scale.
          </li>
          <li>
            <strong>tl.from('.card'):</strong> Cards animate sequentially using stagger.
          </li>
          <li>
            <strong>tl.to('.highlight'):</strong> Pulses the highlight box.
          </li>
          <li>
            <strong>ctx.revert():</strong> Cleans up animation on unmount or rerun.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
