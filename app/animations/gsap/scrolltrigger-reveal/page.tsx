'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

gsap.registerPlugin(ScrollTrigger);

// --- ScrollReveal Item Component ---
const GSAP_ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // select all elements with .reveal class
    const revealElements = gsap.utils.toArray<HTMLElement>('.reveal');

    revealElements.forEach((el) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// GSAP ScrollTrigger Reveal
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const GSAP_ScrollReveal = () => {
  useEffect(() => {
    gsap.utils.toArray(".reveal").forEach((el) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);
  return <div className="reveal h-48 bg-white rounded-xl p-6 shadow-lg">Scroll me</div>;
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-4">
        GSAP ScrollTrigger Reveal
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="GSAP Animation Preview: ScrollTrigger Reveal"
        // onRunAgain={() => setKey((k) => k + 1)}
      >
        <GSAP_ScrollReveal key={key}>
          <div className="space-y-64">
            <div className="h-64 flex items-center justify-center text-gray-400">
              <p>Scroll down to see the reveal animation ↓</p>
            </div>

            {/* Reveal Items */}
            <div className="reveal h-48 bg-white rounded-xl p-6 shadow-lg flex flex-col justify-center items-center text-gray-800">
              <h2 className="text-xl font-semibold mb-2">ScrollTrigger Reveal</h2>
              <p>Scroll this section into view to reveal it with GSAP.</p>
            </div>

            <div className="reveal h-48 bg-white rounded-xl p-6 shadow-lg flex flex-col justify-center items-center text-gray-800">
              <h2 className="text-xl font-semibold mb-2">Another Reveal Section</h2>
              <p>Works with multiple items!</p>
            </div>

            <div className="h-64"></div>
          </div>
        </GSAP_ScrollReveal>
      </AnimationCard>

      {/* Code Snippet */}
      <AnimationCard title="Code Snippet">
        <CodeBox code={codeSnippet} />
      </AnimationCard>

      {/* Explanation */}
      <AnimationCard title="Explanation">
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>ScrollTrigger:</strong> Ties animation to scroll position.
          </li>
          <li>
            <strong>start:</strong> Animation triggers when element top hits 80% of viewport.
          </li>
          <li>
            <strong>toggleActions:</strong> Play on enter, reverse on leave.
          </li>
          <li>
            <strong>gsap.from:</strong> Animates from <code>opacity 0</code> and <code>y 60</code> to default.
          </li>
          <li>
            Multiple elements: Add <code>className="reveal"</code> to each element.
          </li>
        </ul>
      </AnimationCard>
    </div>
  );
}
