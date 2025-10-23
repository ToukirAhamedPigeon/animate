'use client';
import Link from 'next/link';


export default function Navigation() {
    return (
        <nav className="flex gap-4 p-4 bg-gray-900 text-white">
        <Link href="/animations/framer" className="hover:text-blue-400">Framer Motion</Link>
        <Link href="/animations/gsap" className="hover:text-purple-400">GSAP</Link>
        </nav>
    );
}