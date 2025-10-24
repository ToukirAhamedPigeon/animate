'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimationCard from '@/components/AnimationCard';
import CodeBox from '@/components/CodeBox';

gsap.registerPlugin(ScrollTrigger);

// --- ScrollReveal Item Component ---
const GSAP_ScrollReveal = ({
  children,
  keyProp,
}: {
  children: React.ReactNode;
  keyProp?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Select all items with class "reveal" inside this container
    const revealElements = gsap.utils.toArray<HTMLElement>('.reveal', container);

    const triggers: ScrollTrigger[] = [];

    revealElements.forEach((el) => {
      const tl = gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      triggers.push(tl.scrollTrigger!);
    });

    return () => {
      triggers.forEach((t) => t.kill());
      ScrollTrigger.refresh();
    };
  }, [keyProp]); // Re-run effect when keyProp changes

  return <div ref={containerRef}>{children}</div>;
};

// --- Full Page ---
export default function Page() {
  const [key, setKey] = useState(0);

  const codeSnippet = `
// GSAP ScrollTrigger Reveal Example
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const GSAP_ScrollReveal = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const revealElements = gsap.utils.toArray(".reveal", container);
    const triggers = [];
    revealElements.forEach(el => {
      triggers.push(gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }).scrollTrigger);
    });
    return () => triggers.forEach(t => t.kill());
  }, []);
  return <div ref={containerRef}>{/* ...reveal items */}</div>;
};
`;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        GSAP ScrollTrigger Reveal
      </h1>

      {/* Animation Preview */}
      <AnimationCard
        title="GSAP Animation Preview: ScrollTrigger Reveal"
        onRunAgain={() => setKey((k) => k + 1)} // Increment key to remount GSAP_ScrollReveal
      >
        {/* Use key to force remount children */}
        <GSAP_ScrollReveal keyProp={key}>
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
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>ScrollTrigger:</strong> Ties animation to scroll position.</li>
          <li><strong>start:</strong> Animation triggers when element top hits 80% of viewport.</li>
          <li><strong>toggleActions:</strong> Play on enter, reverse on leave.</li>
          <li><strong>gsap.from:</strong> Animates from <code>opacity 0</code> and <code>y 60</code> to default.</li>
          <li>Multiple elements: Add <code>className="reveal"</code> to each element.</li>
          <li>Click "Run Again" to rerun animations dynamically.</li>
        </ul>
      </AnimationCard>
    </div>
  );
}
