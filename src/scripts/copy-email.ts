const FEEDBACK_MS = 1600;

function selectText(el: HTMLElement): void {
  const range = document.createRange();
  range.selectNodeContents(el);
  const selection = window.getSelection();
  selection?.removeAllRanges();
  selection?.addRange(range);
}

export function initCopyEmail(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((button) => {
    const email = button.dataset.copyEmail ?? '';
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(email);
        button.textContent = 'Copiado';
        window.setTimeout(() => (button.textContent = email), FEEDBACK_MS);
      } catch {
        selectText(button);
      }
    });
  });
}
