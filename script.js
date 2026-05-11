// FAQ — sync toggle indicator with details open state.
// Native <details> handles the rest; we only swap "+" / "–".
document.querySelectorAll('.faq-item').forEach((item) => {
  const toggle = item.querySelector('.faq-toggle');
  const sync = () => { toggle.textContent = item.open ? '–' : '+'; };
  sync();
  item.addEventListener('toggle', sync);
});
