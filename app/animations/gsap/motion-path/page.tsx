'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

gsap.registerPlugin(MotionPathPlugin);

// --- GSAP MotionPath Component ---
const GSAP_MotionPath = () => {
  const ballRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ballRef.current) return;

    const tl = gsap.to(ballRef.current, {
      duration: 3,
      motionPath: {
        path: '#myPath',
        align: '#myPath',
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="relative w-full h-[200px] flex justify-center items-center bg-white rounded-xl shadow-lg overflow-hidden">
      <svg width="400" height="140" className="overflow-visible">
        <path
          id="myPath"
          d="M10,80 C120,10 280,150 390,80"
          fill="none"
          stroke="#ccc"
          strokeWidth="2"
        />
      </svg>
      <div
        ref={ballRef}
        className="w-8 h-8 rounded-full bg-red-500 absolute shadow-lg"
      />
    </div>
  );
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/GSAP_MotionPath.tsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

export const GSAP_MotionPath = () => {
  const ballRef = useRef<HTMLDivElement | null>(null);
  useEffect(()=> {
    const tl = gsap.to(ballRef.current, {
      duration: 3,
      motionPath: {
        path: "#myPath",
        align: "#myPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      },
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
    return ()=> tl.kill();
  },[]);
  return (
    <div className="relative w-full h-[200px] flex justify-center items-center bg-white rounded-xl shadow-lg">
      <svg width="400" height="140">
        <path id="myPath" d="M10,80 C120,10 280,150 390,80" fill="none" stroke="#ccc" strokeWidth="2"/>
      </svg>
      <div ref={ballRef} className="w-8 h-8 rounded-full bg-red-500 absolute"/>
    </div>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        GSAP Motion Path / Parallax Animation
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="GSAP Animation Preview: Motion Path"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <GSAP_MotionPath />
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
            <strong>MotionPathPlugin:</strong> Lets elements follow any SVG path
            smoothly.
          </li>
          <li>
            <strong>align + autoRotate:</strong> Keeps the object oriented along
            the curve.
          </li>
          <li>
            <strong>repeat & yoyo:</strong> Creates an infinite forward-backward
            motion.
          </li>
          <li>
            <strong>ease:</strong> Adds natural acceleration/deceleration.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
