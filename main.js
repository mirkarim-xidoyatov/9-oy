// AutoMart.uz — home page hero carousel

document.addEventListener('DOMContentLoaded', initCarousel);

function initCarousel() {
  const root = document.getElementById('heroCarousel');
  if (!root) return;

  const track = root.querySelector('.carousel-track');
  const slides = Array.from(root.querySelectorAll('.slide'));
  const dotsWrap = root.querySelector('.car-dots');
  const prevBtn = root.querySelector('.car-arrow-prev');
  const nextBtn = root.querySelector('.car-arrow-next');
  let index = 0;
  let timer = null;

  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Slayd ${i + 1}`);
    dot.className = 'h-[7px] rounded-full transition-all';
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function render() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, i) => {
      const active = i === index;
      d.classList.toggle('bg-white', active);
      d.classList.toggle('w-5', active);
      d.classList.toggle('rounded-[5px]', active);
      d.classList.toggle('bg-white/50', !active);
      d.classList.toggle('w-[7px]', !active);
    });
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    render();
    restart();
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  function restart() {
    if (timer) clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  root.addEventListener('mouseenter', () => timer && clearInterval(timer));
  root.addEventListener('mouseleave', restart);

  let startX = null;
  track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 40) diff < 0 ? next() : prev();
    startX = null;
  }, { passive: true });

  render();
  restart();
}
