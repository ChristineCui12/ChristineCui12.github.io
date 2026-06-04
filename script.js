let currentLang = localStorage.getItem('cc-lang') || 'en';

function applyLang(lang) {
  const html = document.documentElement;
  html.classList.remove('lang-en-active', 'lang-zh-active');
  html.classList.add('lang-' + lang + '-active');
  html.lang = lang === 'zh' ? 'zh-CN' : 'en';
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.textContent = lang === 'en' ? '中文' : 'EN';
    btn.classList.toggle('active-zh', lang === 'zh');
  }
  localStorage.setItem('cc-lang', lang);
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  applyLang(currentLang);
}

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
applyLang(currentLang);
