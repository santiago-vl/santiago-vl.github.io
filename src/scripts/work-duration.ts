export function formatElapsed(startDate: string, now: Date = new Date()): string {
  const [year, month] = startDate.split('-').map(Number);
  if (!year || !month) return '';

  let years = now.getFullYear() - year;
  let months = now.getMonth() + 1 - month;
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return [
    years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '',
    months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '',
  ]
    .filter(Boolean)
    .join(' ');
}

export function initWorkDurations(): void {
  document.querySelectorAll<HTMLElement>('[data-start-date]').forEach((el) => {
    const start = el.dataset.startDate;
    if (start) el.textContent = formatElapsed(start);
  });
}
