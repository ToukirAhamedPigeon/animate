'use client';
import Link from 'next/link';
import Image from 'next/image';


export default function Header() {
    return (
        <nav className="border-b border-gray-800 bg-gray-200/80 backdrop-blur sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center px-6 py-4">
            <Link href="/" className="font-bold text-lg text-indigo-400 hover:text-indigo-300">
            <div className="flex items-center gap-2">
              <Image
                  src="/logo.png"
                  alt="Logo"
                  width={36}
                  height={36}
                />
              Animate Pigeonic
            </div>
            
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/animations/framer" className="hover:text-blue-700">
                Framer Motion
              </Link>
              <Link href="/animations/gsap" className="hover:text-green-700">
                GSAP
              </Link>
            </div>
          </div>
        </nav>
    );
}