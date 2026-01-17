// Efecto de scroll en la navegación
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '15px 10%';
    } else {
        navbar.style.background = 'transparent'; // Transparente cuando está arriba
        navbar.style.padding = '20px 10%';
    }
});

// Animación de entrada suave para las tarjetas y items de galería
const animateOnScrollElements = document.querySelectorAll('.card, .gallery-item');
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

animateOnScrollElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});