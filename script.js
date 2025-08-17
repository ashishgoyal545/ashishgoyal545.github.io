// Smooth scroll for navigation
document.querySelectorAll('header nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = link.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});

// Highlight nav on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main section');
  let scrollPosition = window.scrollY + 90;
  let currentId = '';
  sections.forEach(section => {
    if (section.offsetTop <= scrollPosition) {
      currentId = section.id;
    }
  });
  document.querySelectorAll('header nav ul li a').forEach(link => {
    if (link.getAttribute('href').replace('#', '') === currentId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});