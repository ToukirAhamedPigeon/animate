'use client';
import Link from 'next/link';


export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 p-4 text-white min-h-screen">
        <h3 className="font-semibold mb-4">Animations</h3>
        <ul>
        <li><Link href="/animations/framer/fade-in">Framer: Fade In</Link></li>
        <li><Link href="/animations/framer/slide-up">Framer: Slide Up</Link></li>
        <li><Link href="/animations/gsap/scroll-trigger">GSAP: Scroll Trigger</Link></li>
        <li><Link href="/animations/gsap/text-reveal">GSAP: Text Reveal</Link></li>
        </ul>
        </aside>
    );
}