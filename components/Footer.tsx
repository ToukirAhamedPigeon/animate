export default function Footer() {
    return (
        <footer className="p-4 bg-gray-900 text-gray-400 text-center">
            © {new Date().getFullYear()} Animate Pigeonic. Built with Next.js, Tailwind, Framer Motion & GSAP.
        </footer>
    );
}