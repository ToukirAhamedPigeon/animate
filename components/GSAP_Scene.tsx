// components/GSAP_Scene.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const GSAP_Scene = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    const q = gsap.utils.selector(ref);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true
      }
    });

    tl.from(q(".layer-1"), { y: 200, opacity: 0, duration: 0.6 })
      .from(q(".layer-2"), { x: -200, opacity: 0, duration: 0.8 }, "-=0.4")
      .to(q(".title"), { scale: 1.2, duration: 0.6 }, "-=0.2");

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  },[]);

  return (
    <div ref={ref} className="h-[100vh] relative overflow-hidden flex items-center justify-center text-white text-4xl font-bold">
      <div className="layer-1 absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-800">Background</div>
      <div className="layer-2 absolute inset-0 flex items-center justify-center text-6xl text-yellow-400">Middle</div>
      <h2 className="title relative z-10">Foreground</h2>
    </div>
  );
};