// Theme toggle and navigation handler
(function() {
  // Theme initialization
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Bind theme toggle buttons
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });

  // Mobile navigation menu toggle
  const menuBtn = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav-shell nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });
  }

  // Contact form submission UX
  const contactForm = document.querySelector('.contact-form');
  const formStatus = document.querySelector('.form-status');
  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';
      }
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = 'Sent Successfully! ✓';
        }
        formStatus.className = 'form-status sent';
        formStatus.innerText = 'Thanks for reaching out, Piyush will get back to you soon!';
        contactForm.reset();
        setTimeout(() => {
          if (submitBtn) submitBtn.innerHTML = 'Send message ↗';
          formStatus.innerText = '';
          formStatus.className = 'form-status idle';
        }, 5000);
      }, 900);
    });
  }
})();
