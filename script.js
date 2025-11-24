// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Animate skill bars on scroll
const animateSkillBars = () => {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.width = '0%';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skill.style.width = level + '%';
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(skill);
    });
};

// Initialize animations when page loads
window.addEventListener('DOMContentLoaded', () => {
    animateSkillBars();
});