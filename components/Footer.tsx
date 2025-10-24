export default function Footer() {
    return (
        <footer className="p-2 bg-gray-900 text-gray-400 text-center bottom-0 fixed w-full">
            © {new Date().getFullYear()} Animate Pigeonic. Built with Next.js, Tailwind, Framer Motion & GSAP.
        </footer>
    );
}