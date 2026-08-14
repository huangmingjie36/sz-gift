import Lenis from "lenis";

let lenis: Lenis | null = null;

export function initLenis(): Lenis {
  if (lenis) return lenis;
  lenis = new Lenis({
    duration: 1.25,
    smoothWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  const raf = (time: number) => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
}

export function destroyLenis() {
  lenis?.destroy();
  lenis = null;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { duration: 1.8, offset: 0 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
