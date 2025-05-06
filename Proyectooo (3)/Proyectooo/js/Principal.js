// Función para alternar las opciones de servicio
function toggleServicioOptions() {
    const opciones = document.getElementById('opciones-servicio');
    opciones.style.display = opciones.style.display === 'block' ? 'none' : 'block';
}

// Carrusel de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Cambia de imagen cada 5 segundos
