// AutoMart.uz — shared header/footer + product card rendering

const ICONS = {
  telegram: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M21.9 4.3 18.8 20c-.2 1-.9 1.2-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8.1c.4-.3-.1-.5-.6-.2L6 12.1l-4.8-1.5c-1-.3-1-1 .2-1.5L20.6 3c.9-.3 1.6.2 1.3 1.3Z"/></svg>',
  home: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h5v-6h4v6h5V10"/></svg>',
  grid: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  garage: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 11 12 4l7 7"/><path d="M6 10v10h5v-6h2v6h5V10"/></svg>',
  heart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20.5S3.5 15 3.5 8.9A4.4 4.4 0 0 1 12 6.6a4.4 4.4 0 0 1 8.5 2.3C20.5 15 12 20.5 12 20.5Z"/></svg>',
  box: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="M3 8l9 5 9-5M12 13v8"/></svg>',
  cart: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3h2.4l2.1 11.3a2 2 0 0 0 2 1.7h8.2a2 2 0 0 0 2-1.6L21 7.5H6.2"/></svg>',
  user: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0"/></svg>',
  search: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  chevron: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 6 6 6-6 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  bolt: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/></svg>',
};

function currentPage() {
  const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  return file === '' ? 'index.html' : file;
}

function logoHTML(size = 'md') {
  const box = size === 'sm' ? 'w-9 h-9 text-base rounded-[9px]' : 'w-10 h-10 text-lg rounded-[10px]';
  const txt = size === 'sm' ? 'text-[19px]' : 'text-[21px]';
  return `<a class="js-logo flex items-center gap-2.5 flex-shrink-0" href="index.html" aria-label="AutoMart.uz bosh sahifa">
    <span class="logo-mark ${box} bg-brand flex items-center justify-center text-white font-extrabold shadow-lift">A</span>
    <span class="${txt} font-extrabold tracking-tight text-gray-900">AutoMart<span class="text-brand">.uz</span></span>
  </a>`;
}

function headerHTML() {
  const page = currentPage();
  const catChips = CATEGORIES.map(
    (c) => `<a href="katalog.html?cat=${c.id}" class="nav-link text-[13.5px] sm:text-sm font-medium text-gray-700 hover:text-brand whitespace-nowrap py-1 transition-colors">${c.name}</a>`
  ).join('');

  const iconLink = (href, icon, label, badge) => {
    const active = page === href;
    return `<a href="${href}" class="relative flex flex-col items-center gap-[3px] text-[11px] font-medium ${active ? 'text-brand' : 'text-gray-500 hover:text-brand'} transition-colors">
      ${icon}
      ${badge ? `<span class="${badge} hidden absolute -top-1.5 right-1 min-w-[18px] h-[18px] px-1 bg-brand text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">0</span>` : ''}
      ${label}
    </a>`;
  };

  return `
  <!-- Top utility bar -->
  <div class="bg-gray-950 text-white text-[12.5px] sm:text-[13px]">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-5 h-9 sm:h-10 flex items-center justify-between gap-3">
      <div class="flex items-center gap-1.5 whitespace-nowrap text-white/80">
        ${ICONS.pin}
        Toshkent
      </div>
      <nav class="hidden md:flex items-center gap-6">
        <a href="katalog.html?filter=discount" class="text-white/75 hover:text-white whitespace-nowrap transition-colors">Aksiyalar</a>
        <a href="index.html#bonus" class="text-white/75 hover:text-white whitespace-nowrap transition-colors">Bonus CLUB</a>
        <a href="#contact" class="text-white/75 hover:text-white whitespace-nowrap transition-colors">Ulgurji sotuvchilar</a>
      </nav>
      <a class="flex items-center gap-1.5 whitespace-nowrap font-semibold bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
         href="https://t.me/Mirkarim1" target="_blank" rel="noopener">
        ${ICONS.telegram}
        <span class="hidden xs:inline">Telegram</span>
      </a>
    </div>
  </div>

  <!-- Main header -->
  <header class="header-glass border-b border-gray-200/80 md:sticky md:top-0 z-40">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-5 py-3 md:py-3.5 flex items-center gap-3 sm:gap-4 md:gap-5 flex-wrap">
      ${logoHTML()}

      <a href="katalog.html" class="btn-shine hidden lg:flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-4 py-3 rounded-xl flex-shrink-0 transition-colors shadow-lift">
        ${ICONS.grid}
        Kataloglar
      </a>

      <form class="js-search-form order-3 basis-full md:basis-auto md:order-none flex-1 flex items-center bg-gray-100 border border-gray-200 focus-within:border-brand focus-within:bg-white focus-within:ring-4 focus-within:ring-brand/10 rounded-xl overflow-hidden min-w-0 transition">
        <span class="pl-3.5 text-gray-400 flex-shrink-0">${ICONS.search}</span>
        <input type="search" name="q" autocomplete="off" class="js-search-input flex-1 min-w-0 bg-transparent px-3 py-2.5 sm:py-3 text-sm outline-none placeholder:text-gray-400 text-gray-900" placeholder="Artikul, detal nomi yoki avtomobil modeli" />
        <button type="submit" class="bg-brand hover:bg-brand-dark text-white h-10 sm:h-11 px-4 rounded-r-[11px] flex items-center justify-center flex-shrink-0 text-sm font-semibold transition-colors" aria-label="Qidirish">
          <span class="hidden sm:inline">Qidirish</span>
          <span class="sm:hidden">${ICONS.search}</span>
        </button>
      </form>

      <nav class="hidden md:flex items-center gap-5 lg:gap-6 flex-shrink-0">
        ${iconLink('garaj.html', ICONS.garage, 'Garaj')}
        ${iconLink('sevimlilar.html', ICONS.heart, 'Sevimlilar', 'js-fav-count')}
        ${iconLink('buyurtmalar.html', ICONS.box, 'Buyurtmalar')}
        ${iconLink('savat.html', ICONS.cart, 'Savat', 'js-cart-count')}
        ${iconLink('profil.html', ICONS.user, 'Profil')}
      </nav>

      <button class="burger md:hidden ml-auto flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-xl border border-gray-200 bg-white flex-shrink-0 active:scale-95 transition" aria-label="Menyu" aria-expanded="false">
        <span class="w-[18px] h-0.5 bg-gray-900 rounded"></span>
        <span class="w-[18px] h-0.5 bg-gray-900 rounded"></span>
        <span class="w-[18px] h-0.5 bg-gray-900 rounded"></span>
      </button>
    </div>
  </header>

  <!-- Category strip -->
  <nav class="border-b border-gray-200 bg-white">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-5 flex items-center gap-5 sm:gap-6 h-12 overflow-x-auto no-scrollbar scroll-row fade-x">
      <a href="katalog.html?filter=discount" class="flex items-center gap-1.5 text-[13.5px] sm:text-sm font-bold text-brand whitespace-nowrap">${ICONS.bolt} Chegirmalar</a>
      ${catChips}
    </div>
  </nav>

  <!-- Mobile drawer -->
  <div class="mmenu fixed inset-0 z-[70] md:hidden" aria-hidden="true">
    <div class="mmenu-overlay absolute inset-0 bg-gray-950/55"></div>
    <div class="mmenu-panel absolute top-0 right-0 h-full w-[86%] max-w-[360px] bg-white shadow-2xl flex flex-col" role="dialog" aria-label="Menyu">
      <div class="flex items-center justify-between px-5 h-16 border-b border-gray-100">
        ${logoHTML('sm')}
        <button class="mmenu-close w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700" aria-label="Yopish">${ICONS.close}</button>
      </div>
      <div class="flex-1 overflow-y-auto overflow-x-hidden px-3 py-4">
        <div class="grid grid-cols-2 gap-2 mb-5 px-2">
          <a href="garaj.html" class="flex items-center gap-1.5 min-w-0 rounded-xl bg-gray-50 border border-gray-200 px-2.5 py-3 text-[12.5px] font-semibold text-gray-800 hover:border-brand hover:text-brand transition-colors"><span class="text-brand flex-shrink-0">${ICONS.garage}</span><span class="truncate">Garaj</span></a>
          <a href="buyurtmalar.html" class="flex items-center gap-1.5 min-w-0 rounded-xl bg-gray-50 border border-gray-200 px-2.5 py-3 text-[12.5px] font-semibold text-gray-800 hover:border-brand hover:text-brand transition-colors"><span class="text-brand flex-shrink-0">${ICONS.box}</span><span class="truncate">Buyurtmalar</span></a>
        </div>
        <div class="px-2 text-[11px] uppercase tracking-wider font-bold text-gray-400 mb-2">Toifalar</div>
        <a href="katalog.html?filter=discount" class="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-bold text-brand hover:bg-brand-light transition-colors"><span class="flex items-center gap-2">${ICONS.bolt} Chegirmalar</span>${ICONS.chevron}</a>
        ${CATEGORIES.map((c) => `<a href="katalog.html?cat=${c.id}" class="flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium text-gray-800 hover:bg-gray-50 transition-colors"><span class="flex items-center gap-3"><img src="${c.img}" alt="" class="w-8 h-8 rounded-lg object-cover img-frame" loading="lazy" />${c.name}</span><span class="text-gray-300">${ICONS.chevron}</span></a>`).join('')}
        <div class="px-2 mt-5 text-[11px] uppercase tracking-wider font-bold text-gray-400 mb-2">Ma'lumot</div>
        <a href="index.html#bonus" class="block px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-50">Bonus CLUB</a>
        <a href="#contact" class="block px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-50">Ulgurji sotuvchilar</a>
        <a href="info.html?topic=delivery" class="block px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-gray-50">Yetkazib berish</a>
      </div>
      <div class="p-4 border-t border-gray-100">
        <a href="https://t.me/Mirkarim1" target="_blank" rel="noopener" class="flex items-center justify-center gap-2 w-full bg-[#29a9eb] hover:bg-[#1f95d3] text-white font-bold py-3 rounded-xl transition-colors">${ICONS.telegram} Telegram orqali yozish</a>
      </div>
    </div>
  </div>`;
}

function bottomNavHTML() {
  const page = currentPage();
  const item = (href, icon, label, badge) => {
    const active = page === href;
    return `<a href="${href}" class="bnav-item ${active ? 'active' : ''} relative flex-1 flex flex-col items-center justify-center gap-0.5 text-[10.5px] font-semibold text-gray-500 py-1.5 transition-colors">
      <span class="bnav-ico relative w-12 h-7 rounded-full flex items-center justify-center transition-colors">
        ${icon}
        ${badge ? `<span class="${badge} hidden absolute -top-1 right-1.5 min-w-[17px] h-[17px] px-1 bg-brand text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">0</span>` : ''}
      </span>
      ${label}
    </a>`;
  };
  return `<nav class="bottom-nav md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 shadow-top" style="padding-bottom:env(safe-area-inset-bottom,0px)" aria-label="Asosiy navigatsiya">
    <div class="flex items-stretch h-[62px] px-1">
      ${item('index.html', ICONS.home, 'Bosh sahifa')}
      ${item('katalog.html', ICONS.grid, 'Katalog')}
      ${item('sevimlilar.html', ICONS.heart, 'Sevimlilar', 'js-fav-count')}
      ${item('savat.html', ICONS.cart, 'Savat', 'js-cart-count')}
      ${item('profil.html', ICONS.user, 'Profil')}
    </div>
  </nav>`;
}

function footerHTML() {
  const link = (href, text) => `<a href="${href}" class="hover:text-brand transition-colors">${text}</a>`;
  return `
  <div class="bg-gray-50 border-t border-gray-200 mt-6">
    <div class="max-w-[1240px] mx-auto px-4 sm:px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] gap-8 lg:gap-6 pb-10 pt-12">
      <div class="sm:col-span-2 lg:col-span-1">
        <div class="mb-3">${logoHTML()}</div>
        <p class="text-[13.5px] text-gray-500 mb-5 leading-relaxed max-w-[360px]">Avtomobil ehtiyot qismlari va moylar bo'yicha ishonchli onlayn do'kon. Original mahsulotlar, qulay narx va tez yetkazib berish.</p>
        <div class="flex gap-2.5">
          <a href="https://t.me/Mirkarim1" target="_blank" rel="noopener" aria-label="Telegram"
             class="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-brand hover:text-white hover:border-brand transition-colors">${ICONS.telegram}</a>
          <a href="#" aria-label="Instagram" class="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-brand hover:text-white hover:border-brand transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
          </a>
          <a href="#" aria-label="Facebook" class="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-brand hover:text-white hover:border-brand transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 8h2V4h-2a4 4 0 0 0-4 4v3H9v4h2v7h4v-7h2.5l.5-4H15V8Z"/></svg>
          </a>
        </div>
      </div>

      <div>
        <h4 class="text-[15px] font-bold mb-4">AutoMart.uz</h4>
        <div class="flex flex-col gap-2.5 text-[13.5px] text-gray-500">
          ${link('info.html?topic=about', 'Kompaniya haqida')}
          ${link('#contact', 'Kontaktlar')}
          ${link('info.html?topic=jurnal', 'Jurnal')}
          ${link('info.html?topic=oferta', 'Ommaviy oferta')}
        </div>
      </div>

      <div>
        <h4 class="text-[15px] font-bold mb-4">Yordam</h4>
        <div class="flex flex-col gap-2.5 text-[13.5px] text-gray-500">
          ${link('info.html?topic=delivery', 'Yetkazib berish shartlari')}
          ${link('info.html?topic=returns', 'Almashtirish va qaytarish')}
          ${link('info.html?topic=payment', "To'lov usullari")}
        </div>
      </div>

      <div id="contact" class="scroll-mt-24">
        <h4 class="text-[15px] font-bold mb-4">Biz bilan bog'lanish</h4>
        <ul class="flex flex-col gap-3 text-[13.5px] text-gray-500">
          <li class="flex gap-2.5 items-start">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="text-brand flex-shrink-0 mt-0.5"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            <a href="mailto:info@automart.uz" class="hover:text-brand">info@automart.uz</a>
          </li>
          <li class="flex gap-2.5 items-start">
            <span class="text-brand flex-shrink-0 mt-0.5">${ICONS.telegram}</span>
            <a href="https://t.me/Mirkarim1" target="_blank" rel="noopener" class="hover:text-brand">Telegram: @Mirkarim1</a>
          </li>
          <li class="flex gap-2.5 items-start">
            <span class="text-brand flex-shrink-0 mt-0.5">${ICONS.pin}</span>
            O'zbekiston, Toshkent shahri
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-200">
      <div class="max-w-[1240px] mx-auto px-4 sm:px-5 py-4 flex items-center justify-between flex-wrap gap-2.5 text-[12.5px] text-gray-500">
        <span>© 2026 AutoMart.uz — Barcha huquqlar himoyalangan</span>
        <div class="flex gap-4 flex-wrap">
          ${link('info.html?topic=terms', 'Foydalanish shartlari')}
          ${link('info.html?topic=privacy', 'Maxfiylik siyosati')}
        </div>
      </div>
    </div>
  </div>`;
}

function fabTelegramHTML() {
  return `<a class="fab-telegram fixed right-4 sm:right-6 bottom-[calc(var(--bottom-nav-h)+14px+env(safe-area-inset-bottom,0px))] md:bottom-6 w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-full bg-[#29a9eb] text-white flex items-center justify-center shadow-[0_8px_22px_rgba(41,169,235,0.45)] hover:scale-105 active:scale-95 transition-transform z-50"
     href="https://t.me/Mirkarim1" target="_blank" rel="noopener" aria-label="Telegram orqali bog'lanish">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3 18.8 20c-.2 1-.9 1.2-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8.1c.4-.3-.1-.5-.6-.2L6 12.1l-4.8-1.5c-1-.3-1-1 .2-1.5L20.6 3c.9-.3 1.6.2 1.3 1.3Z"/></svg>
  </a>`;
}

function mountLayout() {
  const headerEl = document.getElementById('app-header');
  const footerEl = document.getElementById('app-footer');
  if (headerEl) headerEl.innerHTML = headerHTML();
  if (footerEl) footerEl.innerHTML = footerHTML();
  document.body.insertAdjacentHTML('beforeend', bottomNavHTML() + fabTelegramHTML());

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.mmenu');
  if (burger && menu) {
    const setOpen = (open) => {
      menu.classList.toggle('open', open);
      menu.setAttribute('aria-hidden', String(!open));
      burger.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
    };
    burger.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
    menu.querySelector('.mmenu-overlay').addEventListener('click', () => setOpen(false));
    menu.querySelector('.mmenu-close').addEventListener('click', () => setOpen(false));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
  }

  const form = document.querySelector('.js-search-form');
  if (form) {
    const input = form.querySelector('.js-search-input');
    if (input) input.value = qs('q') || '';
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      window.location.href = 'katalog.html' + (val ? '?q=' + encodeURIComponent(val) : '');
    });
    initSearchSuggest(form, input);
  }

  document.querySelectorAll('.js-logo').forEach((a) => a.addEventListener('click', () => sessionStorage.removeItem('automart_gate_seen')));

  document.querySelectorAll('main h2').forEach((h) => { if (!h.hasAttribute('data-reveal')) h.setAttribute('data-reveal', 'title'); });

  updateCartBadge();
  updateFavBadge();
  initScrollReveal();
}

document.addEventListener('DOMContentLoaded', mountLayout);

// ---- Live search suggestions ----
function initSearchSuggest(form, input) {
  const box = document.createElement('div');
  box.className = 'search-suggest absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-card overflow-hidden z-50 hidden';
  form.classList.add('relative');
  form.classList.remove('overflow-hidden');
  form.appendChild(box);
  let items = [];
  let cursor = -1;

  const hide = () => { box.classList.add('hidden'); cursor = -1; };
  const esc = (str) => str.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const highlight = (text, q) => {
    const tokens = normText(q).split(' ').filter(Boolean).sort((a, b) => b.length - a.length);
    if (!tokens.length) return esc(text);
    const re = new RegExp('(' + tokens.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'ig');
    return esc(text).replace(re, '<mark class="bg-yellow-200 text-gray-900 rounded px-0.5">$1</mark>');
  };

  const render = () => {
    const q = input.value.trim();
    if (!q) return hide();
    items = searchProducts(q).slice(0, 6);
    const total = searchProducts(q).length;
    if (!items.length) {
      box.innerHTML = `<div class="px-4 py-3 text-sm text-gray-500">"${q}" bo'yicha hech narsa topilmadi</div>`;
    } else {
      box.innerHTML = items.map((p, i) => `
        <a href="mahsulot.html?id=${p.id}" data-i="${i}" class="suggest-item flex items-center gap-3 px-3 py-2.5 hover:bg-gray-50 transition-colors">
          <img src="${p.img}" alt="" class="w-11 h-11 rounded-lg object-cover img-frame flex-shrink-0" loading="lazy" />
          <span class="flex-1 min-w-0">
            <span class="block text-[13.5px] font-medium text-gray-900 truncate">${highlight(p.name, q)}</span>
            <span class="block text-[12px] text-gray-500">${CATEGORIES.find((c) => c.id === p.category)?.name || ''}</span>
          </span>
          <span class="text-[13.5px] font-bold text-gray-900 tabular whitespace-nowrap">${money(p.price)}</span>
        </a>`).join('') +
        `<a href="katalog.html?q=${encodeURIComponent(q)}" class="suggest-all flex items-center justify-between px-4 py-3 text-sm font-semibold text-brand bg-brand-soft hover:bg-brand-light transition-colors">Barcha natijalar (${total}) <span>→</span></a>`;
    }
    box.classList.remove('hidden');
    cursor = -1;
  };

  let t = null;
  input.addEventListener('input', () => { clearTimeout(t); t = setTimeout(render, 80); });
  input.addEventListener('focus', () => { if (input.value.trim()) render(); });
  input.addEventListener('keydown', (e) => {
    const links = [...box.querySelectorAll('a')];
    if (box.classList.contains('hidden') || !links.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      cursor = (cursor + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
      links.forEach((l, i) => l.classList.toggle('bg-gray-100', i === cursor));
    } else if (e.key === 'Enter' && cursor >= 0) {
      e.preventDefault();
      window.location.href = links[cursor].href;
    } else if (e.key === 'Escape') hide();
  });
  document.addEventListener('click', (e) => { if (!form.contains(e.target)) hide(); });
}

// ---- Micro-interactions ----

function rippleAt(e, el) {
  const r = el.getBoundingClientRect();
  const size = Math.max(r.width, r.height);
  const x = (e && e.clientX ? e.clientX : r.left + r.width / 2) - r.left - size / 2;
  const y = (e && e.clientY ? e.clientY : r.top + r.height / 2) - r.top - size / 2;
  const span = document.createElement('span');
  span.className = 'ripple';
  span.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
  el.appendChild(span);
  setTimeout(() => span.remove(), 650);
}

function flyToCart(imgEl) {
  if (!imgEl) return;
  const target = [...document.querySelectorAll('.js-cart-count')].map((b) => b.parentElement).find((el) => el && el.offsetParent !== null);
  if (!target) return;
  const s = imgEl.getBoundingClientRect();
  const t = target.getBoundingClientRect();
  if (!s.width) return;
  const clone = document.createElement('img');
  clone.src = imgEl.currentSrc || imgEl.src;
  clone.className = 'fly-img';
  clone.style.cssText = `left:${s.left}px;top:${s.top}px;width:${s.width}px;height:${s.height}px`;
  document.body.appendChild(clone);
  const dx = t.left + t.width / 2 - (s.left + s.width / 2);
  const dy = t.top + t.height / 2 - (s.top + s.height / 2);
  const anim = clone.animate(
    [
      { transform: 'translate(0,0) scale(1)', opacity: 1, offset: 0 },
      { transform: `translate(${dx * 0.45}px, ${dy * 0.45 - 90}px) scale(.45)`, opacity: .95, offset: .55 },
      { transform: `translate(${dx}px, ${dy}px) scale(.06)`, opacity: .2, offset: 1 },
    ],
    { duration: 800, easing: 'cubic-bezier(.22,.61,.36,1)' }
  );
  anim.onfinish = () => {
    clone.remove();
    const badge = target.querySelector('.js-cart-count');
    if (badge) { badge.classList.remove('badge-shake'); void badge.offsetWidth; badge.classList.add('badge-shake'); }
  };
}

let toastTimer = null;
function showToast(text, img, variant) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.classList.toggle('toast-success', variant === 'success');
  t.innerHTML = `${img ? `<img src="${img}" alt="" />` : ''}<span class="toast-check"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><path d="m5 12.5 4.5 4.5L19 7"/></svg></span><span class="toast-text">${text}</span>`;
  t.classList.remove('show');
  void t.offsetWidth;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2300);
}

// ---- Product / category cards ----

function categoryCardHTML(cat) {
  return `<a href="katalog.html?cat=${cat.id}" data-reveal class="press-fx group bg-gray-50 border border-gray-200/80 hover:border-brand/40 hover:bg-white hover:shadow-card hover:-translate-y-[3px] transition rounded-2xl p-3 sm:p-4 flex items-center gap-3 overflow-hidden">
    <img src="${cat.img}" class="cat-hover-img w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-xl flex-shrink-0 img-frame" alt="${cat.name}" loading="lazy" />
    <span class="font-bold text-[13.5px] sm:text-[14.5px] leading-tight text-gray-900 group-hover:text-brand transition-colors">${cat.name}</span>
  </a>`;
}

function productCardHTML(p) {
  const fav = isFavorite(p.id);
  return `<div class="group relative bg-white border border-gray-200 rounded-2xl p-2.5 sm:p-3.5 hover:shadow-lift hover:border-brand hover:ring-1 hover:ring-brand hover:-translate-y-[3px] transition overflow-hidden flex flex-col" data-reveal data-product-id="${p.id}">
    <span class="absolute top-4 left-4 sm:top-6 sm:left-6 bg-yellow-400 text-gray-900 text-[11px] sm:text-xs font-extrabold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg z-10 shadow-sm">-${p.discount}%</span>
    <button class="fav-btn press-fx absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 shadow-md flex items-center justify-center z-10 ${fav ? 'text-brand' : 'text-gray-400 hover:text-brand'}" aria-label="Sevimlilarga qo'shish" aria-pressed="${fav}">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="${fav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M12 20.5S3.5 15 3.5 8.9A4.4 4.4 0 0 1 12 6.6a4.4 4.4 0 0 1 8.5 2.3C20.5 15 12 20.5 12 20.5Z"/></svg>
    </button>
    <a href="mahsulot.html?id=${p.id}" class="block overflow-hidden rounded-xl mb-2.5 sm:mb-3 img-frame">
      <img src="${p.img}" alt="${p.name}" class="w-full aspect-square object-cover" loading="lazy" decoding="async" />
    </a>
    <a href="mahsulot.html?id=${p.id}" class="block mb-2">
      <div class="text-[13px] sm:text-sm font-semibold leading-snug line-clamp-2 min-h-[36px] sm:min-h-[40px] text-gray-900 group-hover:text-brand transition-colors">${p.name}</div>
    </a>
    <div class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1 tabular">
      <span class="text-[15px] sm:text-[17px] font-extrabold text-gray-900">${money(p.price)}</span>
      <span class="text-[12px] sm:text-[13px] text-gray-400 line-through">${money(p.oldPrice)}</span>
    </div>
    <div class="inline-flex self-start items-center gap-1 text-[11px] sm:text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md mb-3 tabular">${money(Math.round(p.price / 12))} × 12 oy</div>
    <button class="add-cart-btn ripple-host press-fx mt-auto w-full bg-brand hover:bg-brand-dark text-white font-bold text-[13px] sm:text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors">
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
      btn.classList.toggle('hover:text-brand', !active);
      btn.setAttribute('aria-pressed', String(active));
      const svg = btn.querySelector('svg');
      svg.setAttribute('fill', active ? 'currentColor' : 'none');
      btn.classList.remove('heart-burst');
      void btn.offsetWidth;
      btn.classList.add('heart-burst');
      showToast(active ? "Sevimlilarga qo'shildi" : "Sevimlilardan olib tashlandi");
      if (container.dataset.syncFavPage === 'true' && !active) {
        card.remove();
        if (!container.querySelector('[data-product-id]')) {
          renderProductGrid(container, [], "Sevimlilar ro'yxati bo'sh.");
        }
      }
    });
  });
  container.querySelectorAll('.add-cart-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('[data-product-id]');
      const id = card.dataset.productId;
      rippleAt(e, btn);
      flyToCart(card.querySelector('img'));
      const product = PRODUCTS.find((p) => p.id === id);
      showToast("Buyurtmangiz qabul qilindi", product && product.img, 'success');
      addToCart(id, 1);
      const original = btn.innerHTML;
      btn.innerHTML = "Qo'shildi ✓";
      btn.classList.add('bg-green-600', 'hover:bg-green-600', 'animate-pop');
      setTimeout(() => {
        btn.innerHTML = original;
        btn.classList.remove('bg-green-600', 'hover:bg-green-600', 'animate-pop');
      }, 60000);
    });
  });
}

function emptyStateHTML(msg, cta) {
  return `<div class="col-span-full text-center py-14 sm:py-20 px-4">
    <p class="text-gray-500 text-[15px] max-w-[380px] mx-auto text-balance">${msg}</p>
    ${cta ? `<a href="${cta.href}" class="inline-flex mt-5 bg-brand hover:bg-brand-dark text-white font-bold px-5 py-2.5 rounded-xl transition-colors">${cta.text}</a>` : ''}
  </div>`;
}

function renderProductGrid(container, products, emptyMsg, cta) {
  if (!products.length) {
    container.innerHTML = emptyStateHTML(emptyMsg || 'Mahsulotlar topilmadi.', cta);
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
      if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
  els.forEach((el) => observer.observe(el));
}
