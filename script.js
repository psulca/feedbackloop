document.querySelectorAll('.faq-item').forEach((item) => {
  const toggle = item.querySelector('.faq-toggle');
  const sync = () => { toggle.textContent = item.open ? '–' : '+'; };
  sync();
  item.addEventListener('toggle', sync);
});
