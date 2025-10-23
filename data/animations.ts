export interface AnimationItem {
    title: string;
    slug: string;
    type: 'framer' | 'gsap';
}


export const animations: AnimationItem[] = [
    { title: 'Fade In', slug: 'fade-in', type: 'framer' },
    { title: 'Slide Up', slug: 'slide-up', type: 'framer' },
    { title: 'Scale Bounce', slug: 'scale-bounce', type: 'framer' },
    { title: 'Scroll Trigger', slug: 'scroll-trigger', type: 'gsap' },
    { title: 'Text Reveal', slug: 'text-reveal', type: 'gsap' },
];