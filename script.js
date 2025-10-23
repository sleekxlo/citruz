// Auto-update year
document.getElementById('year').textContent = new Date().getFullYear();

// Clear button for form
document.getElementById('clearBtn').addEventListener('click', function () {
  document.getElementById('contactForm').reset();
}
// Fade-in on scroll
const sections = document.querySelectorAll('.section');

function revealSections() {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
revealSections(); // initial check
zoomableImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('show');
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('show');
});

lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox) {
    lightbox.classList.remove('show');
  }
});

