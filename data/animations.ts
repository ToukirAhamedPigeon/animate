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
  // GSAP examples will go below later
];
