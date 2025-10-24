'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { animations } from '@/data/animations';

export default function GSAPPage() {
  const gsapAnimations = animations.filter(a => a.type === 'gsap');
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate cards with GSAP
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
        }
      );
    });
  }, [gsapAnimations]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 py-12 space-y-12">

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Explore GSAP Animations
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="text-green-500 font-semibold">GSAP (GreenSock Animation Platform)</span> is a high-performance JavaScript library for creating 
          smooth, professional animations. Animate <span className="text-teal-500 font-semibold">DOM elements, SVGs, colors, scroll interactions, timelines, and more</span> with precision and ease. Perfect for interactive UI, landing pages, and advanced animations.
        </motion.p>

        {/* GSAP Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {gsapAnimations.map((anim, idx) => (
          <motion.div
            key={anim.slug}
            ref={(el) => { cardRefs.current[idx] = el!; }}
            className="rounded-3xl p-6 cursor-pointer shadow-lg bg-gradient-to-br bg-gradient-to-br  from-[#00B4DB] to-[#0083B0]  transform transition-all duration-500"
            whileHover={{
              scale: 1.06,
              rotate: 1.5,
              boxShadow: '0px 20px 40px rgba(0,0,0,0.25)',
            }}
          >
            <Link href={`/animations/gsap/${anim.slug}`}>
              <h3 className="text-2xl font-bold mb-2 text-white">{anim.title}</h3>
            </Link>
          </motion.div>
        ))}
      </div>

        {/* Explanation Section */}
        <motion.div
          className="mt-16 space-y-6 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-green-500">Why Choose GSAP?</h2>
          <ul className="list-disc list-inside space-y-2 text-left text-gray-700">
            <li><span className="text-teal-500 font-semibold">Cross-browser compatible:</span> Works on all major browsers and mobile devices.</li>
            <li><span className="text-indigo-500 font-semibold">High performance:</span> Smooth 60fps animations with minimal layout thrashing.</li>
            <li><span className="text-pink-500 font-semibold">Timeline control:</span> Sequence multiple animations easily with staggered timelines and callbacks.</li>
            <li><span className="text-yellow-500 font-semibold">Scroll & interactive animations:</span> Animate elements on scroll, hover, or any event.</li>
            <li><span className="text-purple-500 font-semibold">SVG & complex shapes:</span> Morph paths, rotate, scale, and animate SVGs seamlessly.</li>
          </ul>
        </motion.div>

        <motion.p
          className="mt-12 text-gray-700 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.2 }}
        >
          GSAP gives designers and developers <span className="text-green-500 font-semibold">precise control</span> over animations. Click the cards above to explore interactive demos showcasing GSAP's full potential in action.
        </motion.p>

        {/* Framer Motion Button */}
        <div className="text-center mt-12">
          <Link
            href="/animations/framer"
            className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Explore Framer Motion Animations
          </Link>
        </div>
      </div>
    </div>
  );
}
