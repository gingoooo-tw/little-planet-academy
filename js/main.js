// Nav scroll effect
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile menu toggle
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Volunteer photo carousel
(function () {
  const track = document.querySelector('.vol-carousel-track');
  if (!track) return;
  const imgs = track.querySelectorAll('img');
  const total = imgs.length;
  if (total === 0) return;

  const counter = document.querySelector('.vol-carousel-counter');
  const prevBtn = document.querySelector('.vol-prev');
  const nextBtn = document.querySelector('.vol-next');
  let current = 0;
  let autoTimer;

  function update() {
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    if (counter) counter.textContent = (current + 1) + ' / ' + total;
  }

  function goNext() {
    current = (current + 1) % total;
    update();
  }

  function goPrev() {
    current = (current - 1 + total) % total;
    update();
  }

  function startAuto() {
    autoTimer = setInterval(goNext, 4000);
  }

  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }

  prevBtn.addEventListener('click', function () { goPrev(); resetAuto(); });
  nextBtn.addEventListener('click', function () { goNext(); resetAuto(); });

  update();
  startAuto();
})();
