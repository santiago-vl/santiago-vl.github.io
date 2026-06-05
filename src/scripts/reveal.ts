/**
 * Reveal sections and work cards as they enter the viewport by toggling the
 * `animate-in` class. Purely progressive enhancement — content is fully
 * readable without JS (the CSS only animates the transition).
 */
export function initReveal(): void {
  const targets = document.querySelectorAll('.section-wrapper, .animated-section, .work-card');
  if (targets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle('animate-in', entry.isIntersecting);
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
  );

  targets.forEach((el) => observer.observe(el));
}
