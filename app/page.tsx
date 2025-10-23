import Link from 'next/link';


export default function Home() {
  return (
    <div className="container mx-auto p-6 text-center">
    <h1 className="text-4xl font-bold mb-4">Animate Pigeonic</h1>
    <p className="mb-6">Explore 20+ Framer Motion & GSAP animations with React + Tailwind + TypeScript.</p>
    <div className="flex justify-center gap-4">
    <Link href="/animations/framer" className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700">Framer Motion Animations</Link>
    <Link href="/animations/gsap" className="px-4 py-2 bg-green-600 rounded text-white hover:bg-green-700">GSAP Animations</Link>
    </div>
    </div>
  );
}