// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuBtn.classList.toggle('active');
});

// Close menu on link click
navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn?.classList.remove('active');
    });
});

// Generate grass blades
const grassContainer = document.getElementById('heroGrass');
if (grassContainer) {
    const count = 60;
    for (let i = 0; i < count; i++) {
        const blade = document.createElement('div');
        blade.className = 'grass-blade';
        const left = (i / count) * 100 + Math.random() * (100 / count);
        const height = 25 + Math.random() * 45;
        blade.style.cssText = `
            left: ${left}%;
            height: ${height}px;
            --sway-duration: ${2 + Math.random() * 1.5}s;
            --sway-delay: ${Math.random() * 2}s;
            opacity: ${0.5 + Math.random() * 0.5};
        `;
        grassContainer.appendChild(blade);
    }
}

// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.work-item, .pub-item, .project-item, .activity-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
