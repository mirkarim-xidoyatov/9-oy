// AutoMart.uz — shared Tailwind (CDN) theme
tailwind.config = {
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
