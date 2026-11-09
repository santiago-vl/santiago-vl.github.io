const FEEDBACK_MS = 1800;

export function initCopyEmail(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((button) => {
    const email = button.dataset.copyEmail ?? '';
    const label = button.textContent?.trim() ?? '';
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        button.textContent = 'Copied ✓';
      } catch {
        button.textContent = email;
      }
      window.setTimeout(() => (button.textContent = label), FEEDBACK_MS);
    });
  });
}
