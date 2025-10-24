export interface AnimationItem {
  title: string;
  slug: string;
  type: 'framer' | 'gsap';
}

export const animations: AnimationItem[] = [
  { title: 'Fade In', slug: 'fade-in', type: 'framer' },
  { title: 'Hover', slug: 'hover', type: 'framer' },
  { title: 'Stagger List', slug: 'stagger-list', type: 'framer' },
  { title: 'Layout Shift', slug: 'layout-shift', type: 'framer' },
  { title: 'Modal Backdrop', slug: 'modal-backdrop', type: 'framer' },
  { title: 'Page Transition', slug: 'page-transition', type: 'framer' },
  { title: 'Rotate', slug: 'rotate', type: 'framer' },
  { title: 'Scale Up', slug: 'scale-up', type: 'framer' },
  { title: 'Scroll Parallax', slug: 'scroll-parallax', type: 'framer' },
  { title: 'Shape Morphing', slug: 'shape-morphing', type: 'framer' },
  { title: 'Slide Up', slug: 'slide-up', type: 'framer' },
  { title: 'Text Typing', slug: 'text-typing', type: 'framer' },
  { title: 'Fade Slide', slug: 'fade-slide', type: 'gsap' },
  { title: 'ScrollTrigger Reveal', slug: 'scrolltrigger-reveal', type: 'gsap' },
  { title: 'Timeline', slug: 'timeline', type: 'gsap' },
  { title: 'Motion Path', slug: 'motion-path', type: 'gsap' },
  { title: 'Shape Morphing', slug: 'shape-morphing', type: 'gsap' },
  { title: 'Cursor Follow', slug: 'cursor-follow', type: 'gsap' },
  { title: 'Pinning', slug: 'pinning', type: 'gsap' },
  { title: 'ClipPath', slug: 'clippath', type: 'gsap' },
  { title: 'SVG Stroke', slug: 'svg-stroke', type: 'gsap' },
  { title: 'Complex Sequence', slug: 'complex-sequence', type: 'gsap' },
  // GSAP examples will go below later
];
