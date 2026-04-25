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

// Generate spotlights
const spotlightContainer = document.getElementById('heroSpotlights');
if (spotlightContainer) {
    const count = 9;
    const centerLeft = 50;
    for (let i = 0; i < count; i++) {
        const beam = document.createElement('div');
        beam.className = 'spotlight';
        const offset = (i / (count - 1)) * 100;
        const angle = -35 + (i / (count - 1)) * 70;
        beam.style.cssText = `
            left: ${offset}%;
            height: ${300 + Math.random() * 250}px;
            --angle: ${angle}deg;
            opacity: ${0.6 + Math.random() * 0.4};
            animation-delay: ${Math.random() * 3}s;
            animation-duration: ${4 + Math.random() * 2.5}s;
        `;
        spotlightContainer.appendChild(beam);
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
