const SITE_LANGS = ['it', 'en', 'fr', 'es', 'de'];

function getUrlLang() {
  const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];
  return SITE_LANGS.includes(firstSegment) ? firstSegment : null;
}

function getLocalizedPath(lang) {
  const parts = window.location.pathname.split('/').filter(Boolean);
  if (!parts.length) return '/' + lang + '/';

  if (SITE_LANGS.includes(parts[0])) {
    parts[0] = lang;
    return '/' + parts.join('/') + (window.location.pathname.endsWith('/') ? '/' : '');
  }

  return '/' + lang + '/';
}

function setLang(lang, options = {}) {
  const shouldNavigate = options.navigate !== false;
  const currentUrlLang = getUrlLang();

  if (shouldNavigate && currentUrlLang && currentUrlLang !== lang) {
    localStorage.setItem('preferredLang', lang);
    window.location.href = getLocalizedPath(lang) + window.location.search + window.location.hash;
    return;
  }

  document.querySelectorAll('[data-it]').forEach(el => {
    const translated = el.getAttribute('data-' + lang);
    if (translated !== null) el.innerHTML = translated;
  });
  document.documentElement.lang = lang;
  const footerRS = document.getElementById('footer-ragione-sociale');
  if (footerRS) {
    footerRS.textContent = 'Tuttoscooter di Stefano Moncini - P.IVA 01172420117 - REA: SP-106760';
  }
  document.getElementById('btn-it').classList.toggle('active', lang === 'it');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-de').classList.toggle('active', lang === 'de');

  document.querySelectorAll('.cta-mobile[data-it]').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });

  ['btn-map-1', 'btn-map-2'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.textContent = btn.getAttribute('data-' + lang);
  });

  // Change scooter link based on language
  const scooterLink = document.getElementById('scooter-link');
  if (scooterLink) {
    scooterLink.href = scooterLink.getAttribute('data-href-' + lang);
  }

  // Change FAQ links based on language
  const faqMobileLink = document.getElementById('faq-mobile-link');
  if (faqMobileLink) {
    faqMobileLink.href = faqMobileLink.getAttribute('data-href-' + lang);
  }
  const faqDesktopLink = document.getElementById('faq-desktop-link');
  if (faqDesktopLink) {
    faqDesktopLink.href = faqDesktopLink.getAttribute('data-href-' + lang);
  }

  // Change auto link based on language
  const autoLink = document.getElementById('auto-link');
  if (autoLink) {
    autoLink.href = autoLink.getAttribute('data-href-' + lang);
  }

  // Change hero image based on language
  const heroImage = document.getElementById('hero-image');
  if (heroImage) {
    heroImage.src = heroImage.getAttribute('data-src-' + lang);
    heroImage.alt = heroImage.getAttribute('data-alt-' + lang);
  }

  
  const privacyFooter = document.getElementById('privacy-footer');
  if (privacyFooter) privacyFooter.href = privacyFooter.getAttribute('data-href-' + lang);
  const cookieFooter = document.getElementById('cookie-footer');
  if (cookieFooter) cookieFooter.href = cookieFooter.getAttribute('data-href-' + lang);
  
  localStorage.setItem('preferredLang', lang);
}

// Language initialization
document.addEventListener("DOMContentLoaded", function() {
    const browserLang = navigator.language || navigator.userLanguage;
    const savedLang = localStorage.getItem('preferredLang');
    const htmlLang = document.documentElement.lang;
    const urlLang = getUrlLang();
    
    let langToUse = urlLang || htmlLang || savedLang || (browserLang.startsWith('it') ? 'it' : (browserLang.startsWith('fr') ? 'fr' : (browserLang.startsWith('es') ? 'es' : (browserLang.startsWith('de') ? 'de' : 'en'))));
    
    setLang(langToUse, { navigate: false });
});
