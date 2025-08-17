// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    } else {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect on scroll
const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Theme switch functionality
const themeToggle = document.getElementById('checkbox');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'light-mode') {
        themeToggle.checked = true;
    }
} else {
    // Default to dark mode if no preference is saved
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
});

// Function to close all dropdowns
function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-content').forEach(dropdown => {
        dropdown.style.display = 'none';
    });
}

// Experience dropdown functionality
document.querySelectorAll('.timeline-item .content').forEach(item => {
    item.addEventListener('click', () => {
        const dropdown = item.querySelector('.dropdown-content');
        if (dropdown) {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                closeAllDropdowns(); // Close all other dropdowns
                dropdown.style.display = 'block';
            }
        }
    });
});

// Projects dropdown functionality
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const dropdown = card.querySelector('.dropdown-content');
        if (dropdown) {
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
            } else {
                closeAllDropdowns(); // Close all other dropdowns
                dropdown.style.display = 'block';
            }
        }
    });
});
