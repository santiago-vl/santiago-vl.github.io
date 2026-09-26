const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatOngoingDuration(startDate: string, now: Date = new Date()): string {
  const [year, month] = startDate.split('-').map(Number);
  if (!year || !month) return '';

  let years = now.getFullYear() - year;
  let months = now.getMonth() + 1 - month;
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts = [
    years > 0 ? `${years} año${years > 1 ? 's' : ''}` : '',
    months > 0 ? `${months} mes${months > 1 ? 'es' : ''}` : '',
  ].filter(Boolean);

  return `${MONTHS[month - 1]}. ${year} - Present · ${parts.join(' ')}`;
}

export function initWorkDurations(): void {
  document.querySelectorAll<HTMLElement>('.work-duration[data-start-date]').forEach((el) => {
    const start = el.dataset.startDate;
    if (start) el.textContent = formatOngoingDuration(start);
  });
}
