function toggleMenu() {
    const body = document.body;
    const burgerButton = document.querySelector('.button-burger');
    const closeButton = document.querySelector('.button-close');
    const navMenu = document.querySelector('.nav-menu');
    const navMenuBg = document.querySelector('.nav-menu-gb');

    const closeMenu = () => {
        navMenu.addEventListener(
            'transitionend',
            () => {
                body.classList.remove('menu-active'); // Oculta el menú y el fondo
                navMenuBg.style.right = '-2000rem'; // Desaparece el fondo sin transición
            },
            { once: true }
        );
        navMenu.style.right = '-20rem'; // Inicia la transición del menú
    };

    if (burgerButton) {
        burgerButton.addEventListener('click', () => {
            body.classList.add('menu-active'); // Abre el menú y muestra el fondo
            navMenuBg.style.right = '0rem'; // Asegúrate de mostrar el fondo de inmediato
            navMenu.style.right = '0rem'; // Inicia la transición del menú
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeMenu);
    }

    if (navMenuBg) {
        navMenuBg.addEventListener('click', () => {
            if (window.innerWidth <= 1024) { // Condición para pantallas menores o iguales al tamaño tablet
                closeMenu();
            }
        });
    }
}

function initCarousel() {
    let currentIndex = 0;

    const showSlide = (index) => {
        const carouselImages = document.querySelector('.carousel-images');
        const totalSlides = document.querySelectorAll('.carousel-images img').length;

        if (index >= totalSlides) {
            currentIndex = 0; // Regresar al inicio
        } else if (index < 0) {
            currentIndex = totalSlides - 1; // Ir al final
        } else {
            currentIndex = index;
        }

        const offset = -currentIndex * 100;
        carouselImages.style.transform = `translateX(${offset}%)`;
    };

    const nextSlide = () => {
        showSlide(currentIndex + 1);
    };

    const prevSlide = () => {
        showSlide(currentIndex - 1);
    };

    // Cambiar imagen automáticamente cada 3 segundos
    setInterval(() => {
        nextSlide();
    }, 3000);

    // Mostrar la primera imagen al cargar la página
    showSlide(currentIndex);
}

function app() {
    toggleMenu();
    initCarousel(); // Inicializar el carrusel
}

document.addEventListener('DOMContentLoaded', app);