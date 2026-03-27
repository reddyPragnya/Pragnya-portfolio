/* LOADER  */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 2000);
});

/*  NAVBAR  */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px,5px)' : '';
  spans[1].style.opacity   = navLinks.classList.contains('open') ? '0' : '1';
  spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px,-5px)' : '';
});
navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* HERO */
function renderHero() {
  document.getElementById('hero-name').textContent  = DATA.name;
  document.getElementById('hero-role').textContent  = DATA.role;
  document.getElementById('hero-intro').textContent = DATA.intro;
  document.getElementById('resume-btn').href        = DATA.resume;
  document.getElementById('nav-logo-name').textContent = DATA.name.charAt(0);
  document.getElementById('footer-logo-name').textContent = DATA.name.charAt(0);
  document.getElementById('footer-copy').textContent = `© ${new Date().getFullYear()} ${DATA.name}. All rights reserved.`;
  document.getElementById('footer-linkedin').href = DATA.contact.linkedin;
  document.getElementById('footer-github').href   = DATA.contact.github;
}

/*  EXPERIENCE */
function renderExperience() {
  const container = document.getElementById('experience-list');
  container.innerHTML = DATA.experience.map(exp => `
    <div class="timeline-item reveal">
      <div class="timeline-header">
        <div class="timeline-role">${exp.role}</div>
        <div class="timeline-company">${exp.company}</div>
        <div class="timeline-meta">
          <span class="timeline-duration">📅 ${exp.duration}</span>
          <span class="timeline-type">📍 ${exp.type}</span>
        </div>
      </div>
      <ul class="timeline-points">
        ${exp.points.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/*  PROJECTS */
function renderProjects() {
  const container = document.getElementById('projects-grid');
  container.innerHTML = DATA.projects.map(p => `
    <div class="project-card reveal">
      <div class="project-card-header">
        <span class="project-tag">${p.tag}</span>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" class="project-link" title="GitHub">⌥</a>` : ''}
          ${p.live   ? `<a href="${p.live}"   class="project-link" title="Live">↗</a>` : ''}
        </div>
      </div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.description}</div>
      <div class="project-tech">
        ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* SKILLS */
function renderSkills() {
  const container = document.getElementById('skills-grid');
  container.innerHTML = Object.entries(DATA.skills).map(([cat, skills]) => `
    <div class="skill-category reveal">
      <div class="skill-cat-title">${cat}</div>
      <div class="skill-pills">
        ${skills.map(s => `<span class="skill-pill">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/*  ABOUT */
function renderAbout() {
  const edu = document.getElementById('edu-list');
  edu.innerHTML = DATA.education.map(e => `
    <div class="edu-item reveal">
      <div class="edu-degree">${e.degree}</div>
      <div class="edu-inst">${e.institute}</div>
      <div class="edu-meta">
        <span class="edu-year">${e.year}</span>
        <span class="edu-score">${e.score}</span>
      </div>
    </div>
  `).join('');

  const certs = document.getElementById('certs-list');
  certs.innerHTML = DATA.certifications.map(c => `
    <div class="cert-item reveal">
      <span class="cert-dot"></span>
      <span class="cert-name">${c.name}</span>
      <span class="cert-meta">${c.issuer} · ${c.date}</span>
    </div>
  `).join('');
}

/* CONTACT */
function renderContact() {
  document.getElementById('contact-location').textContent = DATA.contact.location;
  document.getElementById('contact-phone').textContent    = DATA.contact.phone;
  document.getElementById('contact-linkedin').href        = DATA.contact.linkedin;
  document.getElementById('contact-github').href          = DATA.contact.github;
}

/* CONTACT FORM (Web3Forms) */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btn     = form.querySelector('.form-submit');
    const status  = document.getElementById('form-status');
    const name    = form.querySelector('#form-name').value.trim();
    const email   = form.querySelector('#form-email').value.trim();
    const message = form.querySelector('#form-message').value.trim();

    if (!name || !email || !message) {
      showStatus(status, 'error', 'Please fill in all fields.');
      return;
    }

    btn.disabled     = true;
    btn.textContent  = 'Sending…';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '95899753-d6b9-4f0f-9403-3182d5fd198b',
          name,
          email,
          message,
          subject: `Portfolio Contact from ${name}`,
          from_name: 'Pragnya Portfolio'
        })
      });

      const data = await res.json();

      if (data.success) {
        showStatus(status, 'success', '✓ Message sent! I\'ll get back to you soon.');
        form.reset();
      } else {
        showStatus(status, 'error', '✗ Something went wrong. Please try again.');
      }
    } catch (err) {
      showStatus(status, 'error', '✗ Network error. Please check your connection.');
    } finally {
      btn.disabled    = false;
      btn.textContent = 'Send Message →';
    }
  });
}

function showStatus(el, type, msg) {
  el.textContent = msg;
  el.className   = 'form-status ' + type;
  el.style.display = 'block';
  setTimeout(() => { el.style.display = 'none'; }, 5000);
}

/* SCROLL REVEAL */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/*  INIT */
document.addEventListener('DOMContentLoaded', () => {
  renderHero();
  renderExperience();
  renderProjects();
  renderSkills();
  renderAbout();
  renderContact();
  setTimeout(initReveal, 100);
  initContactForm();
});