/**
 * Reveal sections and work cards as they enter the viewport by adding the
 * `animate-in` class. Each element animates **once** and then stays visible —
 * it is never re-hidden on scroll-out. Honours reduced-motion and degrades to
 * "everything visible" when IntersectionObserver isn't available.
 *
 * Progressive enhancement: content is fully readable without JS.
 */
export function initReveal(): void {
  const targets = document.querySelectorAll('.section-wrapper, .animated-section, .work-card');
  if (targets.length === 0) return;

  const reveal = (el: Element) => el.classList.add('animate-in');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach(reveal);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        reveal(entry.target);
        observer.unobserve(entry.target); // reveal once, then stop watching
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}
