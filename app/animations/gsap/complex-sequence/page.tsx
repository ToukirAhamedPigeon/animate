'use client';

import { useState } from 'react';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';
import { GSAP_Scene } from '@/components/GSAP_Scene';

export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// components/GSAP_Scene.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const GSAP_Scene = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    const q = gsap.utils.selector(ref);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true
      }
    });

    tl.from(q(".layer-1"), { y: 200, opacity: 0, duration: 0.6 })
      .from(q(".layer-2"), { x: -200, opacity: 0, duration: 0.8 }, "-=0.4")
      .to(q(".title"), { scale: 1.2, duration: 0.6 }, "-=0.2");

    return () => {
      tl.kill();
      ScrollTrigger.kill();
    };
  },[]);

  return (
    <div ref={ref} className="h-[100vh] relative overflow-hidden flex items-center justify-center text-white text-4xl font-bold">
      <div className="layer-1 absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-800">Background</div>
      <div className="layer-2 absolute inset-0 flex items-center justify-center text-6xl text-yellow-400">Middle</div>
      <h2 className="title relative z-10">Foreground</h2>
    </div>
  );
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        GSAP Pin + Reveal Scene
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="GSAP ScrollTrigger Scene Preview"
        onRunAgain={() => setKey((k) => k + 1)}
      >
        <div key={key}>
          <GSAP_Scene />
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
            <strong>ScrollTrigger Pinning:</strong> Keeps the section fixed while
            animations progress through scroll.
          </li>
          <li>
            <strong>Scrub:</strong> Links scroll position to animation progress,
            creating a cinematic scroll effect.
          </li>
          <li>
            <strong>Layer Transitions:</strong> Background and middle layers move
            independently for depth.
          </li>
          <li>
            <strong>Timeline Sequence:</strong> Multiple <code>from</code> and
            <code>to</code> animations combined in order for complex storytelling.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
