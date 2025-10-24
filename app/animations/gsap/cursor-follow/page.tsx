'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

// --- GSAP Cursor Follow Component ---
export const GSAP_Cursor = () => {
  useEffect(() => {
    const dot = document.createElement('div');
    dot.style.position = 'fixed';
    dot.style.width = '12px';
    dot.style.height = '12px';
    dot.style.borderRadius = '50%';
    dot.style.pointerEvents = 'none';
    dot.style.background = 'rgba(255,255,255,0.8)';
    dot.style.mixBlendMode = 'difference';
    dot.style.zIndex = '9999';
    document.body.appendChild(dot);

    const move = (e: MouseEvent) =>
      gsap.to(dot, {
        x: e.clientX - 6,
        y: e.clientY - 6,
        duration: 0.15,
        ease: 'power2.out',
      });

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      dot.remove();
    };
  }, []);

  return null;
};

// --- Magnetic Button Component ---
const MagneticButton = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const xTo = gsap.quickTo(btn, 'x', { duration: 0.3, ease: 'power2.out' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.3, ease: 'power2.out' });

    const handleMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      xTo(relX * 0.3);
      yTo(relY * 0.3);
    };

    const reset = () => {
      xTo(0);
      yTo(0);
    };

    btn.addEventListener('mousemove', handleMove);
    btn.addEventListener('mouseleave', reset);

    return () => {
      btn.removeEventListener('mousemove', handleMove);
      btn.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
    >
      Hover Me
    </button>
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/GSAP_Cursor.tsx
import { useEffect } from 'react';
import gsap from 'gsap';

export const GSAP_Cursor = () => {
  useEffect(()=>{
    const dot = document.createElement("div");
    dot.style.position = "fixed";
    dot.style.width="12px";
    dot.style.height="12px";
    dot.style.borderRadius="50%";
    dot.style.pointerEvents="none";
    dot.style.background="rgba(0,0,0,.6)";
    document.body.appendChild(dot);

    const move = (e:MouseEvent) =>
      gsap.to(dot, { x: e.clientX - 6, y: e.clientY - 6, duration: 0.15, ease: "power2.out" });

    window.addEventListener("mousemove", move);
    return () => { window.removeEventListener("mousemove", move); dot.remove(); };
  },[]);
  return null;
};

// components/MagneticButton.tsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const MagneticButton = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const xTo = gsap.quickTo(btn, 'x', { duration: 0.3, ease: 'power2.out' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.3, ease: 'power2.out' });

    const handleMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      xTo(relX * 0.3);
      yTo(relY * 0.3);
    };

    const reset = () => { xTo(0); yTo(0); };

    btn.addEventListener('mousemove', handleMove);
    btn.addEventListener('mouseleave', reset);

    return () => {
      btn.removeEventListener('mousemove', handleMove);
      btn.removeEventListener('mouseleave', reset);
    };
  }, []);

  return <button ref={btnRef}>Hover Me</button>;
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Cursor Element */}
      <GSAP_Cursor />

      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        GSAP Cursor Follow & Magnetic Button
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="Interactive Cursor & Magnetic Button"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div
          key={key}
          className="flex justify-center items-center h-60 bg-gray-900 rounded-xl"
        >
          <MagneticButton />
        </div>
      </AnimationCard>

      {/* Code */}
      <AnimationCard title="Code Snippet">
        <CodeBox code={codeSnippet} />
      </AnimationCard>

      {/* Explanation */}
      <AnimationCard title="Explanation">
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>
            <strong>Cursor Follow:</strong> A fixed circle follows the mouse
            using <code>gsap.to</code> for smooth trailing motion.
          </li>
          <li>
            <strong>Magnetic Button:</strong> Tracks mouse offset inside button
            and moves slightly toward the pointer.
          </li>
          <li>
            <strong>gsap.quickTo:</strong> Optimized for fast, frequent updates.
          </li>
          <li>
            <strong>mouseleave:</strong> Resets the button position to center.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
