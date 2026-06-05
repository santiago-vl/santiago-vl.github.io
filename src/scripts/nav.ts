/**
 * Sticky nav: scroll-spy active state, a sliding indicator under the active
 * link, and a top progress bar. The page scrolls inside a nested element
 * (not the window), so the scroll container is detected at runtime.
 */
type Scroller = HTMLElement | Window;

function isScrollable(el: HTMLElement): boolean {
  const overflowY = getComputedStyle(el).overflowY;
  return (overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight + 40;
}

function findScroller(start: HTMLElement): Scroller {
  for (let el = start.parentElement; el && el !== document.body; el = el.parentElement) {
    if (isScrollable(el)) return el;
  }
  const fallback = Array.from(document.querySelectorAll<HTMLElement>('div')).find(isScrollable);
  return fallback ?? window;
}

export function initNav(): void {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('.nav-link'));
  const indicator = nav.querySelector<HTMLElement>('.nav-indicator');
  const progressBar = nav.querySelector<HTMLElement>('.nav-progress-bar');
  const inner = nav.querySelector<HTMLElement>('.site-nav-inner');
  const sections = links
    .map((link) => (link.dataset.section ? document.getElementById(link.dataset.section) : null))
    .filter((el): el is HTMLElement => el !== null);

  const scroller = findScroller(nav);
  const scrollTop = () =>
    scroller === window ? window.scrollY : (scroller as HTMLElement).scrollTop;
  const viewportH = () =>
    scroller === window ? window.innerHeight : (scroller as HTMLElement).clientHeight;
  const scrollH = () =>
    scroller === window
      ? document.documentElement.scrollHeight
      : (scroller as HTMLElement).scrollHeight;

  function moveIndicator(link: HTMLAnchorElement | undefined): void {
    if (!indicator || !inner || !link) return;
    const linkRect = link.getBoundingClientRect();
    const innerRect = inner.getBoundingClientRect();
    indicator.style.width = `${linkRect.width}px`;
    indicator.style.transform = `translateX(${linkRect.left - innerRect.left + inner.scrollLeft}px)`;
  }

  let activeIndex = -1;
  function setActive(index: number): void {
    if (index === activeIndex) return;
    activeIndex = index;
    links.forEach((link, i) => link.classList.toggle('is-active', i === index));
    moveIndicator(links[index]);
  }

  function updateProgress(): void {
    if (!progressBar) return;
    const scrollable = scrollH() - viewportH();
    const pct = scrollable > 0 ? (scrollTop() / scrollable) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  }

  function pickActive(): void {
    const probe = viewportH() * 0.35;
    let index = 0;
    sections.forEach((section, i) => {
      if (section.getBoundingClientRect().top <= probe) index = i;
    });
    setActive(index);
  }

  // Robust scroll-spy that doesn't rely solely on scroll events.
  const spy = new IntersectionObserver(
    () => {
      pickActive();
      updateProgress();
    },
    {
      root: scroller === window ? null : (scroller as HTMLElement),
      rootMargin: '-35% 0px -65% 0px',
    },
  );
  sections.forEach((section) => spy.observe(section));

  // Continuous progress: rAF in the foreground, interval as a throttle-proof fallback.
  let lastTop = -1;
  const sync = () => {
    const top = scrollTop();
    if (top !== lastTop) {
      lastTop = top;
      updateProgress();
      pickActive();
    }
  };
  const tick = () => {
    sync();
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  window.setInterval(sync, 200);

  document.addEventListener('scroll', sync, { capture: true, passive: true });
  window.addEventListener('resize', () => {
    updateProgress();
    pickActive();
    moveIndicator(links[activeIndex]);
  });

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = link.dataset.section ? document.getElementById(link.dataset.section) : null;
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  setActive(0);
  updateProgress();
}
