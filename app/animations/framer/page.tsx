'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { animations } from '@/data/animations';

export default function FramerPage() {
  const framerAnimations = animations.filter(a => a.type === 'framer');

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 text-gray-900">
      <div className="container mx-auto px-6 py-12 space-y-12">

        {/* Page Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Framer Motion Animations
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="font-semibold text-purple-500">Framer Motion</span> is a powerful React animation library that makes it easy to create smooth, interactive, and production-ready UI animations. From simple fades and slides to complex interactive sequences, Framer Motion handles animations declaratively with <span className="font-semibold text-indigo-500">ease and precision</span>.
        </motion.p>

        {/* Key Features */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gradient-to-br from-purple-400 to-indigo-400 text-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Declarative Animations</h3>
            <p>Animate components using props like <code>initial</code>, <code>animate</code>, and <code>exit</code> for easy-to-read, predictable motion.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gradient-to-br from-pink-400 to-red-400 text-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Interactive Gestures</h3>
            <p>Use <code>drag</code>, <code>hover</code>, and <code>tap</code> gestures to make UI elements respond to user interaction smoothly.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gradient-to-br from-green-400 to-teal-400 text-white rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Advanced Motion</h3>
            <p>Create complex sequences, staggered animations, and orchestrated timelines with <code>variants</code> and <code>motion.div</code>.</p>
          </motion.div>
        </motion.div>

        {/* Animations List */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-500">Explore Animations</h2>
          <motion.ul
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {framerAnimations.map((anim) => (
              <motion.li
                key={anim.slug}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-indigo-400 to-purple-500 text-white cursor-pointer"
              >
                <Link href={`/animations/framer/${anim.slug}`}>
                  <h3 className="text-xl font-bold">{anim.title}</h3>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Footer Section */}
        <motion.div
          className="text-center space-y-4 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-pink-500">Why Framer Motion?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Framer Motion combines simplicity with power. Its <span className="font-semibold text-indigo-500">declarative API</span> makes creating animations intuitive, while its <span className="font-semibold text-purple-500">advanced capabilities</span> allow developers to craft sophisticated interactive experiences without writing complex animation logic from scratch.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
