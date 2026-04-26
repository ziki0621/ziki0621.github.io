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
    for (let i = 0; i < count; i++) {
        const beam = document.createElement('div');
        beam.className = 'spotlight';
        const initialAngle = -35 + (i / (count - 1)) * 70;
        beam.style.cssText = `
            left: ${(i / (count - 1)) * 100}%;
            height: ${300 + Math.random() * 250}px;
            transform: rotate(${initialAngle}deg);
            opacity: ${0.6 + Math.random() * 0.4};
        `;
        spotlightContainer.appendChild(beam);
    }

    // Continuously drift spotlights for a dynamic lighting effect
    let angles = Array.from({ length: count }, (_, i) => -35 + (i / (count - 1)) * 70);
    function driftSpotlights() {
        document.querySelectorAll('.spotlight').forEach((beam, i) => {
            angles[i] += (Math.random() - 0.5) * 20;
            angles[i] = Math.max(-50, Math.min(50, angles[i]));
            beam.style.transform = `rotate(${angles[i]}deg)`;
            beam.style.opacity = 0.4 + Math.random() * 0.6;
        });
        setTimeout(driftSpotlights, 1500 + Math.random() * 1500);
    }
    driftSpotlights();
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
