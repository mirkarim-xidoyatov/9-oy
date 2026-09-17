// AutoMart.uz — shared header/footer + product card rendering

function headerHTML() {
  const catChips = CATEGORIES.map(
    (c) => `<a href="katalog.html?cat=${c.id}" class="flex items-center gap-1.5 text-sm text-gray-900/85 hover:text-brand whitespace-nowrap">${c.name}</a>`
  ).join('');

  return `
  <div class="bg-brand text-white text-[13px]">
    <div class="max-w-[1240px] mx-auto px-5 h-10 flex items-center justify-between gap-4">
      <div class="flex items-center gap-1.5 whitespace-nowrap">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
        Toshkent
      </div>
      <nav class="hidden md:flex items-center gap-5 overflow-hidden">
        <a href="katalog.html?filter=discount" class="opacity-90 hover:opacity-100 hover:underline whitespace-nowrap">Aksiyalar</a>
        <a href="index.html#bonus" class="opacity-90 hover:opacity-100 hover:underline whitespace-nowrap">Bonus CLUB</a>
        <a href="#contact" class="opacity-90 hover:opacity-100 hover:underline whitespace-nowrap">Ulgurji sotuvchilar</a>
      </nav>
      <a class="flex items-center gap-1.5 whitespace-nowrap font-semibold bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-full transition-colors"
         href="https://t.me/Mirkarim1" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21.9 4.3 18.8 20c-.2 1-.9 1.2-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8.1c.4-.3-.1-.5-.6-.2L6 12.1l-4.8-1.5c-1-.3-1-1 .2-1.5L20.6 3c.9-.3 1.6.2 1.3 1.3Z"/></svg>
        Telegram
      </a>
    </div>
  </div>

  <header class="border-b border-gray-200 py-4 relative">
    <div class="max-w-[1240px] mx-auto px-5 flex items-center gap-5 flex-wrap">
      <a class="flex items-center gap-2.5 flex-shrink-0" href="index.html">
        <span class="w-10 h-10 rounded-[10px] bg-brand flex items-center justify-center text-white font-extrabold text-lg">A</span>
        <span class="text-[21px] font-extrabold tracking-tight text-gray-900">AutoMart<span class="text-brand">.uz</span></span>
      </a>

      <a href="katalog.html" class="hidden sm:flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-[18px] py-3 rounded-[10px] flex-shrink-0 transition-colors">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>
        Kataloglar
      </a>

      <form class="js-search-form order-3 basis-full sm:basis-auto sm:order-none flex-1 flex items-center bg-gray-100 border border-gray-200 rounded-[10px] overflow-hidden min-w-0">
        <input type="text" name="q" class="js-search-input flex-1 min-w-0 bg-transparent px-3.5 py-3 text-sm outline-none placeholder:text-gray-400 text-gray-900" placeholder="Artikul, detal nomi yoki avtomobil modelini kiriting" />
        <button type="submit" class="bg-brand text-white w-11 h-11 flex items-center justify-center flex-shrink-0" aria-label="Qidirish">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        </button>
      </form>

      <nav class="header-icons hidden md:flex md:items-center md:gap-6 absolute md:relative top-full inset-x-0 md:inset-auto bg-white md:bg-transparent border-b md:border-0 border-gray-200 shadow-lg md:shadow-none justify-around md:justify-start py-4 md:py-0 px-3 md:px-0 flex-shrink-0 z-30">
        <a href="garaj.html" class="flex flex-col items-center gap-[3px] text-[11px] text-gray-500 hover:text-brand transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 11 12 4l7 7"/><path d="M6 10v10h5v-6h2v6h5V10"/></svg>
          Garaj
        </a>
        <a href="sevimlilar.html" class="relative flex flex-col items-center gap-[3px] text-[11px] text-gray-500 hover:text-brand transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20.5S3.5 15 3.5 8.9A4.4 4.4 0 0 1 12 6.6a4.4 4.4 0 0 1 8.5 2.3C20.5 15 12 20.5 12 20.5Z"/></svg>
          <span class="js-fav-count hidden absolute -top-1 -right-2 bg-brand text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          Sevimlilar
        </a>
        <a href="buyurtmalar.html" class="flex flex-col items-center gap-[3px] text-[11px] text-gray-500 hover:text-brand transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>
          Buyurtmalar
        </a>
        <a href="savat.html" class="relative flex flex-col items-center gap-[3px] text-[11px] text-gray-500 hover:text-brand transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3h2.4l2.1 11.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 7.5H6.2"/></svg>
          <span class="js-cart-count hidden absolute -top-1 -right-2 bg-brand text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          Savat
        </a>
        <a href="profil.html" class="flex flex-col items-center gap-[3px] text-[11px] text-gray-500 hover:text-brand transition-colors">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>
          Profil
        </a>
      </nav>

      <button class="burger md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 flex-shrink-0" aria-label="Menyu">
        <span class="w-[22px] h-0.5 bg-gray-900 rounded"></span>
        <span class="w-[22px] h-0.5 bg-gray-900 rounded"></span>
        <span class="w-[22px] h-0.5 bg-gray-900 rounded"></span>
      </button>
    </div>
  </header>

  <nav class="border-b border-gray-200">
    <div class="max-w-[1240px] mx-auto px-5 flex items-center gap-6 h-[52px] overflow-x-auto no-scrollbar">
      <a href="katalog.html?filter=discount" class="flex items-center gap-1.5 text-sm font-bold text-brand whitespace-nowrap">⚡ Chegirmalar</a>
      ${catChips}
    </div>
  </nav>`;
}

function footerHTML() {
  return `
  <div class="max-w-[1240px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr] gap-6 pb-8 pt-11">
    <div>
      <a class="flex items-center gap-2.5 mb-3" href="index.html">
        <span class="w-10 h-10 rounded-[10px] bg-brand flex items-center justify-center text-white font-extrabold text-lg">A</span>
        <span class="text-[21px] font-extrabold tracking-tight text-gray-900">AutoMart<span class="text-brand">.uz</span></span>
      </a>
      <p class="text-[13px] text-gray-500 mb-4 leading-relaxed">Avtomobil ehtiyot qismlari va moylar bo'yicha ishonchli onlayn do'kon. Original mahsulotlar, qulay narx va tez yetkazib berish.</p>
      <div class="flex gap-2.5">
        <a href="https://t.me/Mirkarim1" target="_blank" rel="noopener" aria-label="Telegram"
           class="w-9 h-9 rounded-[9px] bg-white border border-gray-200 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3 18.8 20c-.2 1-.9 1.2-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8.1c.4-.3-.1-.5-.6-.2L6 12.1l-4.8-1.5c-1-.3-1-1 .2-1.5L20.6 3c.9-.3 1.6.2 1.3 1.3Z"/></svg>
        </a>
        <a href="#" aria-label="Instagram" class="w-9 h-9 rounded-[9px] bg-white border border-gray-200 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
        </a>
        <a href="#" aria-label="Facebook" class="w-9 h-9 rounded-[9px] bg-white border border-gray-200 flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 8h2V4h-2a4 4 0 0 0-4 4v3H9v4h2v7h4v-7h2.5l.5-4H15V8Z"/></svg>
        </a>
      </div>
    </div>

    <div>
      <h4 class="text-[15px] font-bold mb-4">AutoMart.uz</h4>
      <div class="flex flex-col gap-2.5 text-[13.5px] text-gray-500">
        <a href="info.html?topic=about" class="hover:text-brand">Kompaniya haqida</a>
        <a href="#contact" class="hover:text-brand">Kontaktlar</a>
        <a href="info.html?topic=jurnal" class="hover:text-brand">Jurnal</a>
        <a href="info.html?topic=oferta" class="hover:text-brand">Ommaviy oferta</a>
      </div>
    </div>

    <div>
      <h4 class="text-[15px] font-bold mb-4">Yordam</h4>
      <div class="flex flex-col gap-2.5 text-[13.5px] text-gray-500">
        <a href="info.html?topic=delivery" class="hover:text-brand">Yetkazib berish shartlari</a>
        <a href="info.html?topic=returns" class="hover:text-brand">Almashtirish va qaytarish</a>
        <a href="info.html?topic=payment" class="hover:text-brand">To'lov usullari</a>
      </div>
    </div>

    <div id="contact">
      <h4 class="text-[15px] font-bold mb-4">Biz bilan bog'lanish uchun</h4>
      <ul class="flex flex-col gap-3 text-[13.5px] text-gray-500">
        <li class="flex gap-2.5 items-start">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="text-brand flex-shrink-0 mt-0.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          info@automart.uz
        </li>
        <li class="flex gap-2.5 items-start">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="text-brand flex-shrink-0 mt-0.5"><path d="M21.9 4.3 18.8 20c-.2 1-.9 1.2-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8.1c.4-.3-.1-.5-.6-.2L6 12.1l-4.8-1.5c-1-.3-1-1 .2-1.5L20.6 3c.9-.3 1.6.2 1.3 1.3Z"/></svg>
          <a href="https://t.me/Mirkarim1" target="_blank" rel="noopener" class="hover:text-brand">Telegram: @Mirkarim1</a>
        </li>
        <li class="flex gap-2.5 items-start">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="text-brand flex-shrink-0 mt-0.5"><path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
          O'zbekiston, Toshkent shahri
        </li>
      </ul>
    </div>
  </div>

  <div class="max-w-[1240px] mx-auto px-5 border-t border-gray-200 py-4 flex items-center justify-between flex-wrap gap-2.5 text-[12.5px] text-gray-500">
    <span>Copyright © 2026 AutoMart.uz</span>
    <div class="flex gap-4 flex-wrap">
      <a href="info.html?topic=terms" class="hover:text-brand">Foydalanish shartlari</a>
      <a href="info.html?topic=privacy" class="hover:text-brand">Maxfiylik siyosati</a>
    </div>
  </div>`;
}

function fabTelegramHTML() {
  return `<a class="fixed right-6 bottom-6 w-[54px] h-[54px] rounded-full bg-[#29a9eb] text-white flex items-center justify-center shadow-[0_8px_22px_rgba(41,169,235,0.45)] hover:scale-105 transition-transform z-50"
     href="https://t.me/Mirkarim1" target="_blank" rel="noopener" aria-label="Telegram orqali bog'lanish">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3 18.8 20c-.2 1-.9 1.2-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8.1c.4-.3-.1-.5-.6-.2L6 12.1l-4.8-1.5c-1-.3-1-1 .2-1.5L20.6 3c.9-.3 1.6.2 1.3 1.3Z"/></svg>
  </a>`;
}

function mountLayout() {
  const headerEl = document.getElementById('app-header');
  const footerEl = document.getElementById('app-footer');
  if (headerEl) headerEl.innerHTML = headerHTML();
  if (footerEl) footerEl.innerHTML = footerHTML();
  document.body.insertAdjacentHTML('beforeend', fabTelegramHTML());

  const burger = document.querySelector('.burger');
  const icons = document.querySelector('.header-icons');
  if (burger && icons) burger.addEventListener('click', () => icons.classList.toggle('hidden'));

  const form = document.querySelector('.js-search-form');
  if (form) {
    const input = form.querySelector('.js-search-input');
    if (input) input.value = qs('q') || '';
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      window.location.href = 'katalog.html' + (val ? '?q=' + encodeURIComponent(val) : '');
    });
  }

  updateCartBadge();
  updateFavBadge();
  initScrollReveal();
}

document.addEventListener('DOMContentLoaded', mountLayout);

// ---- Product / category cards ----

function categoryCardHTML(cat) {
  return `<a href="katalog.html?cat=${cat.id}" data-reveal class="press-fx bg-gray-100 hover:shadow-lg hover:-translate-y-[3px] transition rounded-2xl p-4 flex items-center gap-3 overflow-hidden">
    <img src="${cat.img}" class="cat-hover-img w-14 h-14 object-cover rounded-xl flex-shrink-0" alt="${cat.name}" />
    <span class="font-bold text-[14.5px]">${cat.name}</span>
  </a>`;
}

function productCardHTML(p) {
  const fav = isFavorite(p.id);
  return `<div class="relative border border-gray-200 rounded-2xl p-3.5 hover:shadow-lg hover:-translate-y-[3px] transition overflow-hidden" data-reveal data-product-id="${p.id}">
    <span class="absolute top-6 left-6 bg-yellow-400 text-gray-900 text-xs font-extrabold px-2.5 py-1 rounded-lg z-10">-${p.discount}%</span>
    <button class="fav-btn press-fx absolute top-6 right-6 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center z-10 ${fav ? 'text-brand' : 'text-gray-400'}" aria-label="Sevimlilarga qo'shish">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M12 20.5S3.5 15 3.5 8.9A4.4 4.4 0 0 1 12 6.6a4.4 4.4 0 0 1 8.5 2.3C20.5 15 12 20.5 12 20.5Z"/></svg>
    </button>
    <a href="mahsulot.html?id=${p.id}" class="block overflow-hidden rounded-xl mb-3">
      <img src="${p.img}" alt="${p.name}" class="w-full aspect-square object-cover bg-gray-100" />
    </a>
    <a href="mahsulot.html?id=${p.id}">
      <div class="text-sm font-semibold leading-snug mb-2 min-h-[40px] text-gray-900">${p.name}</div>
    </a>
    <div class="flex items-baseline gap-2 mb-1">
      <span class="text-[17px] font-extrabold text-gray-900">${money(p.price)}</span>
      <span class="text-[13px] text-gray-400 line-through">${money(p.oldPrice)}</span>
    </div>
    <div class="text-xs text-gray-500 mb-3">${money(Math.round(p.price / 12))} x 12 oy</div>
    <button class="add-cart-btn press-fx w-full bg-brand hover:bg-brand-dark text-white font-bold text-sm py-2.5 rounded-[9px] flex items-center justify-center gap-2 transition-colors">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="20" r="1.2"/><circle cx="18" cy="20" r="1.2"/><path d="M2.5 3h2.4l2.1 11.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 7.5H6.2"/></svg>
      Savatga
    </button>
  </div>`;
}

function attachCardEvents(container) {
  container.querySelectorAll('.fav-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('[data-product-id]');
      const id = card.dataset.productId;
      const active = toggleFavorite(id);
      btn.classList.toggle('text-brand', active);
      btn.classList.toggle('text-gray-400', !active);
      const svg = btn.querySelector('svg');
      svg.setAttribute('fill', active ? 'currentColor' : 'none');
      btn.classList.remove('animate-pop');
      void btn.offsetWidth;
      btn.classList.add('animate-pop');
      if (container.dataset.syncFavPage === 'true' && !active) {
        card.remove();
        if (!container.querySelector('[data-product-id]')) {
          renderProductGrid(container, [], "Sevimlilar ro'yxati bo'sh.");
        }
      }
    });
  });
  container.querySelectorAll('.add-cart-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('[data-product-id]');
      const id = card.dataset.productId;
      addToCart(id, 1);
      const original = btn.innerHTML;
      btn.innerHTML = "Qo'shildi ✓";
      btn.classList.add('bg-green-600', 'hover:bg-green-600', 'animate-pop');
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove('bg-green-600', 'hover:bg-green-600', 'animate-pop');
      }, 1200);
    });
  });
}

function renderProductGrid(container, products, emptyMsg) {
  if (!products.length) {
    container.innerHTML = `<div class="col-span-full text-center py-16 text-gray-500">${emptyMsg || 'Mahsulotlar topilmadi.'}</div>`;
    return;
  }
  container.innerHTML = products.map(productCardHTML).join('');
  attachCardEvents(container);
  initScrollReveal();
}

// ---- Scroll reveal ----
function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]:not(.in-view)');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => observer.observe(el));
}
