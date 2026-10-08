// Interactive JavaScript for Johannes Anugrah Prawira Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 2. Active Nav Link on Scroll (ScrollSpy)
  const sections = document.querySelectorAll('section, header');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    // Back to top visibility
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // 3. Tab Switching for Experience Section
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach((b) => b.classList.remove('active'));
      tabPanes.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(targetTab);
      if (activePane) {
        activePane.classList.add('active');
      }
    });
  });

  // 4. Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value.trim();
      const email = document.getElementById('formEmail').value.trim();
      const subject = document.getElementById('formSubject').value.trim();
      const message = document.getElementById('formMessage').value.trim();

      if (!name || !email || !message) {
        if (formStatus) {
          formStatus.textContent = 'Harap isi semua kolom wajib.';
          formStatus.className = 'form-status error';
        }
        return;
      }

      // Format mailto link
      const mailtoLink = `mailto:johannespraira@gmail.com?subject=${encodeURIComponent(
        subject || 'Pesan dari Portofolio - ' + name
      )}&body=${encodeURIComponent(
        `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
      )}`;

      window.location.href = mailtoLink;

      if (formStatus) {
        formStatus.textContent = 'Membuka aplikasi email Anda... Pesan siap dikirim!';
        formStatus.className = 'form-status success';
      }
    });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 5. Hero typing effect (cycles through roles)
  const typedRole = document.getElementById('typedRole');
  if (typedRole && !reduceMotion) {
    const roles = [
      'Informatics Engineering Graduate',
      'Data Science & Machine Learning',
      'IT Trainer & Web Developer',
    ];
    let roleIdx = 0;
    let charIdx = roles[0].length;
    let deleting = true;

    const tick = () => {
      const role = roles[roleIdx];
      charIdx += deleting ? -1 : 1;
      typedRole.textContent = role.slice(0, charIdx);

      let delay = deleting ? 35 : 70;
      if (!deleting && charIdx === role.length) {
        deleting = true;
        delay = 2200;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        delay = 400;
      }
      setTimeout(tick, delay);
    };
    setTimeout(tick, 2500);
  }

  // 6. Binary texture behind the hero
  const binaryBg = document.getElementById('binaryBg');
  if (binaryBg) {
    const rows = 40;
    const cols = 160;
    let text = '';
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        text += Math.random() > 0.5 ? '1' : '0';
        if (c % 8 === 7) text += ' ';
      }
      text += '\n';
    }
    binaryBg.textContent = text;
  }

  // 7. Certificates: show the first few, toggle the rest
  const certToggle = document.getElementById('certToggle');
  const certGrid = document.getElementById('certGrid');
  if (certToggle && certGrid) {
    const label = certToggle.querySelector('span');
    const icon = certToggle.querySelector('i');
    certToggle.addEventListener('click', () => {
      const expanded = certGrid.classList.toggle('show-all');
      certToggle.setAttribute('aria-expanded', String(expanded));
      label.textContent = expanded
        ? 'Tampilkan Lebih Sedikit'
        : `Lihat Semua Sertifikat (${certToggle.dataset.total})`;
      icon.className = expanded ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
      // Collapsing removes a lot of height; bring the section back into view
      if (!expanded) document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // 8. Back to top button click
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});
