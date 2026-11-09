const TARGETS = [
  '.section-head',
  '.skill-row',
  '.inset',
  '.job',
  '.pillar',
  '.surf',
  '.book-head',
  '.alloc',
  '.sector',
].join(', ');

const STAGGER_MS = 90;
const MAX_STAGGER_STEPS = 3;

export function initReveal(): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const targets = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
  if (targets.length === 0) return;

  targets.forEach((el) => {
    const siblings = Array.from(el.parentElement?.children ?? []);
    const step = Math.min(siblings.indexOf(el), MAX_STAGGER_STEPS);
    el.style.setProperty('--reveal-delay', `${Math.max(step, 0) * STAGGER_MS}ms`);
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  document.documentElement.classList.add('reveal-ready');
  targets.forEach((el) => observer.observe(el));
}
