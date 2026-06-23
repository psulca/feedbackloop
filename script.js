document.querySelectorAll('.faq-item').forEach((item) => {
  const toggle = item.querySelector('.faq-toggle');
  const sync = () => { toggle.textContent = item.open ? '–' : '+'; };
  sync();
  item.addEventListener('toggle', sync);
});

const FID_KEY = 'feedbackloop:fidelity';
const switchEl = document.querySelector('.fid-switch');
const applyFidelity = (mode) => {
  const wireframe = mode === 'wireframe';
  document.body.classList.toggle('wireframe', wireframe);
  if (switchEl) {
    switchEl.setAttribute('aria-pressed', String(wireframe));
    switchEl.setAttribute(
      'aria-label',
      wireframe ? 'Cambiar a modo hi-fi' : 'Cambiar a modo wireframe'
    );
  }
};
applyFidelity(localStorage.getItem(FID_KEY) || 'hifi');
switchEl?.addEventListener('click', () => {
  const next = document.body.classList.contains('wireframe') ? 'hifi' : 'wireframe';
  localStorage.setItem(FID_KEY, next);
  applyFidelity(next);
});
