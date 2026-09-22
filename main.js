// AutoMart.uz — home page hero carousel

const HERO_SLIDES = [
  { img: 'https://exzap.uz/uploads/slider_images/56/shinalar-uz.webp', alt: 'Top brend shinalar — Michelin, Hankook', href: 'katalog.html?cat=tires', cta: "Shinalarni ko'rish" },
  { img: 'https://exzap.uz/uploads/slider_images/57/masla-uz.webp', alt: 'Top brend motor moylari', href: 'katalog.html?cat=motor-oil', cta: "Moylarni ko'rish" },
  { img: 'https://exzap.uz/uploads/slider_images/48/kalodkalar-uz.webp', alt: 'Tormoz kolodkalari', href: 'katalog.html?cat=brakes', cta: "Kolodkalarni ko'rish" },
  { img: 'https://exzap.uz/uploads/slider_images/47/torch-3(uzb).webp', alt: 'Uchqun shamlari', href: 'katalog.html?cat=spark-plugs', cta: "Svechalarni ko'rish" },
  { img: 'https://exzap.uz/uploads/slider_images/46/TRT(uzb).webp', alt: 'TRT — zamonaviy texnologiyalar harakatda', href: 'katalog.html?cat=engine', cta: "Qismlarni ko'rish" },
];

function heroSlideHTML(s, i) {
  return `<a href="${s.href}" class="slide shrink-0 basis-full relative block aspect-[1616/551] bg-gray-100 dark:bg-gray-800" role="group" aria-roledescription="slide" aria-label="${i + 1} / ${HERO_SLIDES.length}">
    <img src="${s.img}" alt="${s.alt}" class="absolute inset-0 w-full h-full object-cover" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async" draggable="false" />
    <span class="hidden sm:inline-flex absolute left-6 lg:left-10 bottom-5 lg:bottom-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-brand hover:text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg transition-colors">${s.cta}</span>
  </a>`;
}

document.addEventListener('DOMContentLoaded', initCarousel);

function initCarousel() {
  const root = document.getElementById('heroCarousel');
  if (!root) return;

  const track = root.querySelector('.carousel-track');
  track.innerHTML = HERO_SLIDES.map(heroSlideHTML).join('');
  const slides = Array.from(root.querySelectorAll('.slide'));
  const dotsWrap = root.querySelector('.car-dots');
  const prevBtn = root.querySelector('.car-arrow-prev');
  const nextBtn = root.querySelector('.car-arrow-next');
  let index = 0;
  let timer = null;
  const DELAY = 5500;

  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.setAttribute('aria-label', `Slayd ${i + 1}`);
    dot.className = 'h-[7px] rounded-full transition-all duration-300';
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function render() {
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
    dots.forEach((d, i) => {
      const active = i === index;
      d.classList.toggle('bg-brand/30', active);
      d.classList.toggle('sm:bg-white/40', active);
      d.classList.toggle('w-6', active);
      d.classList.toggle('bg-gray-300', !active);
      d.classList.toggle('dark:bg-gray-600', !active);
      d.classList.toggle('sm:bg-white/50', !active);
      d.classList.toggle('w-[7px]', !active);
      d.classList.remove('dot-progress');
      d.setAttribute('aria-current', active ? 'true' : 'false');
    });
    const dot = dots[index];
    void dot.offsetWidth;
    dot.style.setProperty('--dot-delay', DELAY + 'ms');
    dot.classList.add('dot-progress');
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    render();
    restart();
  }
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
    root.classList.add('is-paused');
  }
  function restart() {
    stop();
    root.classList.remove('is-paused');
    if (document.hidden) return;
    timer = setInterval(next, DELAY);
  }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', restart);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : restart()));
  root.tabIndex = 0;
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  let startX = null;
  let startY = null;
  let moved = false;
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    moved = false;
    stop();
  }, { passive: true });
  track.addEventListener('touchmove', () => { moved = true; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) (dx < 0 ? next() : prev());
    else restart();
    startX = startY = null;
  }, { passive: true });
  track.addEventListener('click', (e) => { if (moved) e.preventDefault(); });

  render();
  restart();
}
