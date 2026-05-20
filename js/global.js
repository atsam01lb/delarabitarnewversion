/* ============================================
   DELARA BITAR — GLOBAL SCRIPTS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-loaded');

  // ============================================
  // NAVIGATION SCROLL EFFECT
  // ============================================
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    });
  }

  // ============================================
  // MOBILE NAV TOGGLE
  // ============================================
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  // ============================================
  // MODAL / POPUP SYSTEM
  // ============================================
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');

  window.openModal = (content) => {
    if (!modalOverlay || !modalContent) return;
    modalContent.innerHTML = `
      <button class="modal-close" aria-label="Close">&times;</button>
      ${content}
    `;
    modalOverlay.classList.add('active');
    document.body.classList.add('modal-open');

    // Bind close button
    modalContent.querySelector('.modal-close').addEventListener('click', closeModal);
  };

  window.closeModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.classList.remove('modal-open');
  };

  // Close on overlay click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ============================================
  // ACTIVE NAV LINK BASED ON CURRENT PAGE
  // Works in any subdirectory (e.g. /repo-name/delar-arts/)
  // ============================================
  const pathname = window.location.pathname;
  let currentPage = 'home';
  if (pathname.includes('/delar-arts')) currentPage = 'delar-arts';
  else if (pathname.includes('/delar-tattoo')) currentPage = 'delar-tattoo';
  else if (pathname.includes('/contact')) currentPage = 'contact';

  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('data-page');
    link.classList.toggle('active', linkPage === currentPage);
  });
});

// ============================================
// HELPER: Generate placeholder gallery items
// ============================================
function generatePlaceholderGallery(count, label) {
  let html = '<div class="modal-gallery">';
  for (let i = 1; i <= count; i++) {
    html += `<div class="modal-gallery-placeholder">${label} ${i}<br><small>Photo coming soon</small></div>`;
  }
  html += '</div>';
  return html;
}
