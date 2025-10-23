'use client';
import Link from 'next/link';


export default function Header() {
    return (
        <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Animate Pigeonic</Link>
        </header>
    );
}