// Generate spotlights
const spotlightContainer = document.getElementById('heroSpotlights');
if (spotlightContainer) {
    const count = 7;
    for (let i = 0; i < count; i++) {
        const beam = document.createElement('div');
        beam.className = 'spotlight';
        const initialAngle = -25 + (i / (count - 1)) * 50;
        beam.style.cssText = `
            left: ${-10 + (i / (count - 1)) * 120}%;
            height: ${300 + Math.random() * 200}px;
            transform: rotate(${initialAngle}deg);
            opacity: ${0.6 + Math.random() * 0.4};
        `;
        spotlightContainer.appendChild(beam);
    }

    // Continuously drift spotlights for a dynamic lighting effect
    let angles = Array.from({ length: count }, (_, i) => -25 + (i / (count - 1)) * 50);
    function driftSpotlights() {
        document.querySelectorAll('.spotlight').forEach((beam, i) => {
            angles[i] += (Math.random() - 0.5) * 18;
            angles[i] = Math.max(-45, Math.min(45, angles[i]));
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
