(() => {
  'use strict';
  const root = document.documentElement;
  root.classList.add('js-enhanced');
  const toggle = document.getElementById('themeToggle');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  function applyTheme(theme) {
    const dark = theme === 'dark';
    root.dataset.theme = dark ? 'dark' : 'light';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    toggle.title = dark ? 'Switch to light theme' : 'Switch to dark theme';
    themeMeta.setAttribute('content', dark ? '#101828' : '#f7f9fd');
  }
  applyTheme(root.dataset.theme);
  toggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('nky-theme', next); } catch(e) {}
  });

  const nav = document.getElementById('mainNav');
  const menu = document.getElementById('menuButton');
  function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); }
  menu.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(opened));
    menu.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => { if (!nav.contains(event.target) && !menu.contains(event.target)) closeMenu(); });

  const settings = window.PORTFOLIO_SETTINGS || {};
  const contact = document.getElementById('contactButtons');
  function validUrl(value, host) {
    try {
      const parsed = new URL(value);
      return ['http:', 'https:'].includes(parsed.protocol) && (!host || parsed.hostname === host || parsed.hostname.endsWith('.' + host));
    } catch(e) { return false; }
  }
  function addButton(label, href, primary = false) {
    const a = document.createElement('a');
    a.className = `button ${primary ? 'button-primary' : 'button-outline'}`;
    a.href = href;
    a.textContent = label + ' ↗';
    if (!href.startsWith('mailto:')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    contact.append(a);
  }
  const email = String(settings.email || '').trim();
  const linkedin = String(settings.linkedin || '').trim();
  const github = String(settings.github || '').trim();
  let hasContact = false;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { addButton('Email me', 'mailto:' + email, true); hasContact = true; }
  if (validUrl(linkedin, 'linkedin.com')) { addButton('LinkedIn', linkedin, !hasContact); hasContact = true; }
  if (validUrl(github, 'github.com')) { addButton('GitHub', github, !hasContact); hasContact = true; }
  if (hasContact) contact.querySelector('.contact-unset')?.remove();

  const certificateUrl = String(settings.certificationUrl || '').trim();
  if (validUrl(certificateUrl)) { const cert = document.getElementById('certificateLink'); cert.href = certificateUrl; cert.hidden = false; }

  const resume = document.getElementById('resumeButton');
  const resumeNote = document.getElementById('resumeNote');
  const remoteResumeUrl = String(settings.resumeUrl || '').trim();
  const localResume = 'resume/Neeraj_Kumar_Yadav_Resume.pdf';
  resume.href = validUrl(remoteResumeUrl) ? remoteResumeUrl : localResume;
  resume.hidden = false;
  resumeNote.hidden = true;
  resume.target = '_blank';
  resume.rel = 'noopener noreferrer';
  document.getElementById('year').textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

})();
