import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Marcador de versión: el failsafe del Layout chequea que exista.
// Sirve para diagnosticar (document.documentElement.dataset.gsBuild en consola).
document.documentElement.dataset.gsBuild = "v3";

function initLineMasks() {
  gsap.utils.toArray<HTMLElement>("[data-line-mask]").forEach((el) => {
    const lines = el.querySelectorAll<HTMLElement>(".line-i");
    if (lines.length === 0) return;
    if (reduceMotion) {
      gsap.set(lines, { yPercent: 0, visibility: "inherit" });
      return;
    }
    // GSAP oculta con su propio canal (yPercent). El CSS solo pre-esconde
    // con visibility, así que no hay transform en píxeles que parsear.
    gsap.set(lines, { yPercent: 110 });
    const reveal = () => {
      try {
        gsap.set(lines, { visibility: "inherit" });
        gsap.to(lines, {
          yPercent: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.12,
          delay: 0.1,
        });
      } catch (err) {
        console.error("line-mask reveal failed", err);
        gsap.set(lines, { yPercent: 0, visibility: "inherit" });
      }
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  });
}

function initScrollReveals() {
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    if (reduceMotion) {
      gsap.set(el, { autoAlpha: 1, y: 0 });
      return;
    }
    // Mismo patrón: set síncrono (dueño del estado) + observer que dispara el to.
    gsap.set(el, { autoAlpha: 0, y: 28 });
    const reveal = () => {
      try {
        gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" });
      } catch (err) {
        console.error("data-reveal failed", err);
        gsap.set(el, { autoAlpha: 1, y: 0 });
      }
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
  });
}

function initGraphDraw() {
  gsap.utils.toArray<SVGPathElement>("path[data-draw]").forEach((path) => {
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "power2.inOut",
      scrollTrigger: { trigger: path, start: "top 85%", once: true },
    });
  });
}

function initProcessPin() {
  const section = document.querySelector<HTMLElement>("[data-process-section]");
  if (!section) return;
  const steps = section.querySelectorAll<HTMLElement>("[data-process-step]");
  const counter = section.querySelector<HTMLElement>("[data-process-counter]");
  const progress = section.querySelector<HTMLElement>("[data-process-progress]");
  if (steps.length === 0) return;

  const n = steps.length;
  if (reduceMotion) {
    gsap.set(steps, { yPercent: (i) => i * 100 });
    return;
  }

  gsap.set(steps, { yPercent: (i) => (i === 0 ? 0 : 100) });

  const tl = gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: `+=${(n - 1) * 100}%`,
      scrub: 0.8,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const idx = Math.min(n - 1, Math.floor(self.progress * n));
        if (counter) counter.textContent = String(idx + 1).padStart(2, "0");
        if (progress) gsap.set(progress, { scaleX: self.progress });
      },
    },
  });

  steps.forEach((step, i) => {
    if (i > 0) tl.to(step, { yPercent: 0, duration: 1 });
    if (i < n - 1) tl.to(step, { yPercent: -100, duration: 1 });
  });
}

function initTestimonials() {
  const figures = gsap.utils.toArray<HTMLElement>("[data-testimonial]");
  const dots = gsap.utils.toArray<HTMLElement>("[data-testimonial-dot]");
  if (figures.length < 2) return;

  let current = 0;
  let timer: number | undefined;

  const show = (i: number) => {
    const prev = current;
    current = (i + figures.length) % figures.length;
    if (prev !== current) {
      gsap.to(figures[prev], { autoAlpha: 0, duration: 0.55, ease: "power2.out" });
    }
    gsap.fromTo(
      figures[current],
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, duration: 0.55, ease: "power2.out", immediateRender: false }
    );
    dots.forEach((d, di) => {
      d.classList.toggle("bg-accent-ink", di === current);
      d.classList.toggle("bg-accent-ink/30", di !== current);
    });
  };

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      show(i);
      resetTimer();
    });
  });

  const resetTimer = () => {
    if (timer) window.clearInterval(timer);
    if (!reduceMotion) timer = window.setInterval(() => show(current + 1), 5000);
  };
  resetTimer();
}

function initMagnetic() {
  if (reduceMotion) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;
  gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
    const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3.out" });
    el.addEventListener("mousemove", (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - r.left - r.width / 2) * 0.25);
      yTo((e.clientY - r.top - r.height / 2) * 0.25);
    });
    el.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

function initCursor() {
  const orb = document.querySelector<HTMLElement>("[data-cursor]");
  if (!orb || reduceMotion || !window.matchMedia("(pointer: fine)").matches) return;
  document.body.classList.add("cursor-on");
  const xTo = gsap.quickTo(orb, "x", { duration: 0.28, ease: "power3" });
  const yTo = gsap.quickTo(orb, "y", { duration: 0.28, ease: "power3" });
  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });
  const grow = () => gsap.to(orb, { scale: 2.2, duration: 0.2 });
  const shrink = () => gsap.to(orb, { scale: 1, duration: 0.2 });
  document.querySelectorAll("a, button, summary").forEach((el) => {
    el.addEventListener("mouseenter", grow);
    el.addEventListener("mouseleave", shrink);
  });
}

function forceVisible() {
  document.documentElement.classList.remove("gs-ready");
  try {
    gsap.set("[data-line-mask] .line-i", { yPercent: 0, visibility: "inherit" });
    gsap.set("[data-reveal]", { autoAlpha: 1, y: 0 });
  } catch {
    /* último recurso: al menos la clase ya se removió */
  }
}

function init() {
  try {
    initLineMasks();
    initScrollReveals();
    initGraphDraw();
    initProcessPin();
    initTestimonials();
    initMagnetic();
    initCursor();
  } catch (e) {
    console.error("GSAP init failed", e);
    forceVisible();
  }

  requestAnimationFrame(() => ScrollTrigger.refresh());
  window.addEventListener("load", () => ScrollTrigger.refresh());
  window.addEventListener("astro:page-load", () => ScrollTrigger.refresh());
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}