'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ArticlePage() {
  const framerPreviews = [
    { name: 'Fade In', color: 'from-purple-400 to-indigo-400' },
    { name: 'Slide Up', color: 'from-pink-400 to-red-400' },
    { name: 'Scale Bounce', color: 'from-green-400 to-teal-400' },
  ];

  const gsapPreviews = [
    { name: 'Scroll Reveal', color: 'from-yellow-400 to-orange-400' },
    { name: 'Timeline', color: 'from-blue-400 to-indigo-500' },
    { name: 'SVG Morph', color: 'from-green-400 to-cyan-400' },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-6 py-12 space-y-12">

        {/* Article Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          JavaScript Animation: Framer Motion & GSAP
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Animations are a <span className="text-purple-500 font-semibold">key part of modern web design</span>. They guide users, create delight, and make interfaces feel alive. With <span className="text-indigo-500 font-semibold">JavaScript</span>, you can create complex, smooth animations that go beyond CSS. Two of the most popular libraries for UI animation are <strong>Framer Motion</strong> and <strong>GSAP</strong>.
        </motion.p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/animations/framer"
            className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Explore Framer Motion
          </Link>
          <Link
            href="/animations/gsap"
            className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-green-400 to-teal-500 hover:from-lime-400 hover:to-green-500 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Explore GSAP
          </Link>
        </div>

        {/* Section: Framer Motion */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-500">Framer Motion</h2>
          <p className="text-gray-700">
            <span className="font-semibold">Framer Motion</span> is a production-ready animation library for React. It uses declarative props for animation states and transitions, making it easy to create sophisticated UI interactions without manually handling timelines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {framerPreviews.map((anim, idx) => (
              <motion.div
                key={idx}
                className={`rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br ${anim.color}`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-bold">{anim.name}</h3>
                <p className="mt-1 text-sm text-white/80">Declarative React animation.</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section: GSAP */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-green-500">GSAP (GreenSock Animation Platform)</h2>
          <p className="text-gray-700">
            <span className="font-semibold">GSAP</span> is a high-performance JavaScript animation library. It provides a timeline-based approach for sequencing animations and supports almost all CSS properties, SVGs, and complex transforms with precise control.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gsapPreviews.map((anim, idx) => (
              <motion.div
                key={idx}
                className={`rounded-2xl p-6 text-white shadow-lg bg-gradient-to-br ${anim.color}`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-bold">{anim.name}</h3>
                <p className="mt-1 text-sm text-white/80">Powerful JS timeline animation.</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section: Why Use JS Animations */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-pink-500">Why Use JavaScript Animations?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><span className="font-semibold text-purple-500">Interactive UIs:</span> Guide users and improve usability.</li>
            <li><span className="font-semibold text-indigo-500">Dynamic content:</span> Animate charts, graphs, sliders, and modals.</li>
            <li><span className="font-semibold text-green-500">Brand personality:</span> Make your website memorable with smooth motion.</li>
            <li><span className="font-semibold text-orange-500">Advanced control:</span> Timeline sequencing, staggered animations, and scroll-based triggers.</li>
          </ul>
        </div>

        <motion.p
          className="mt-12 text-gray-600 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          With <strong>Framer Motion</strong> and <strong>GSAP</strong>, web animations become approachable, scalable, and production-ready. Experiment with these libraries to bring your designs to life!
        </motion.p>
      </div>
    </div>
  );
}
