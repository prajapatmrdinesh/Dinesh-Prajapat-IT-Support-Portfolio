const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

document.getElementById('year').textContent = new Date().getFullYear();

const cube = document.querySelector('.cube');
window.addEventListener('pointermove', e => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = (e.clientX / innerWidth - .5) * 9;
  const y = (e.clientY / innerHeight - .5) * -9;
  document.querySelector('.scene').style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
});
