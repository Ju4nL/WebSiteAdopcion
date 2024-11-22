function toggleMenu() {
    const body = document.body;
    const burgerButton = document.querySelector('.button-burger');
    const closeButton = document.querySelector('.button-close');
    const navMenu = document.querySelector('.nav-menu');
    const navMenuBg = document.querySelector('.nav-menu-gb');

    if (burgerButton) {
        burgerButton.addEventListener('click', () => {
            body.classList.add('menu-active'); // Abre el menú y muestra el fondo
            navMenuBg.style.right = '0rem'; // Asegúrate de mostrar el fondo de inmediato
            navMenu.style.right = '0rem'; // Inicia la transición del menú
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            navMenu.addEventListener(
                'transitionend',
                () => {
                    body.classList.remove('menu-active'); // Oculta el menú y el fondo
                    navMenuBg.style.right = '-2000rem'; // Desaparece el fondo sin transición
                },
                { once: true }  
            );
            navMenu.style.right = '-20rem'; // Inicia la transición del menú
        });
    }
}

function app() {
    toggleMenu();
}

document.addEventListener('DOMContentLoaded', app);
