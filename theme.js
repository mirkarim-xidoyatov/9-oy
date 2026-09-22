// AutoMart.uz — shared Tailwind (CDN) theme + dark mode
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#2563eb', dark: '#1d4ed8', light: '#eaf1ff', soft: '#f4f7ff' },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,.04), 0 8px 24px -12px rgba(15,23,42,.18)',
        lift: '0 12px 32px -12px rgba(37,99,235,.35)',
        top: '0 -6px 24px -12px rgba(15,23,42,.25)',
      },
      screens: { xs: '420px' },
    },
  },
};

// Apply the saved/preferred color scheme before first paint to avoid a flash.
(function () {
  var stored = null;
  try { stored = localStorage.getItem('automart_theme'); } catch (e) {}
  var dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', dark);
})();

function setTheme(dark) {
  document.documentElement.classList.toggle('dark', dark);
  try { localStorage.setItem('automart_theme', dark ? 'dark' : 'light'); } catch (e) {}
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', dark ? '#0b1120' : '#2563eb');
  document.querySelectorAll('.js-theme-toggle').forEach(function (btn) {
    btn.setAttribute('aria-pressed', String(dark));
  });
}

function toggleTheme() {
  setTheme(!document.documentElement.classList.contains('dark'));
}
