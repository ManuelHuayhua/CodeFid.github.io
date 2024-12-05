let menu = document.querySelector('#menu-icon');
let nalist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nalist.classList.toggle('open')
}


document.addEventListener("wheel", function (event) {
    // Prevenir el desplazamiento normal
    event.preventDefault();

    const sections = document.querySelectorAll(".section");
    const currentSection = document.querySelector(".section.active");

    let nextSection;

    if (event.deltaY > 0) {
        // Si se mueve hacia abajo, ir a la siguiente sección
        nextSection = currentSection ? currentSection.nextElementSibling : sections[1];
    } else {
        // Si se mueve hacia arriba, ir a la sección anterior
        nextSection = currentSection ? currentSection.previousElementSibling : sections[sections.length - 1];
    }

    if (nextSection) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: "smooth"
        });
    }
}, { passive: false }); // Añadido 'passive: false'

// Para marcar la sección activa
document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        if (
            scrollPosition > section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
});

// Soporte para dispositivos táctiles
let startY = 0;
let endY = 0;

document.addEventListener("touchstart", (event) => {
    startY = event.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", (event) => {
    endY = event.changedTouches[0].clientY;

    const sections = document.querySelectorAll(".section");
    const currentSection = document.querySelector(".section.active");

    let nextSection;

    if (startY > endY + 50) {
        // Deslizamiento hacia arriba (ir a la siguiente sección)
        nextSection = currentSection ? currentSection.nextElementSibling : sections[1];
    } else if (startY < endY - 50) {
        // Deslizamiento hacia abajo (ir a la sección anterior)
        nextSection = currentSection ? currentSection.previousElementSibling : sections[sections.length - 1];
    }

    if (nextSection) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: "smooth"
        });
    }
});

// Captura todos los enlaces con la clase 'scroll-btn'
document.querySelectorAll('.scroll-btn').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevenir la acción de salto directa del enlace

        // Obtener el destino del scroll (la sección a la que debe desplazarse)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Desplazarse suavemente a la sección objetivo
        targetElement.scrollIntoView({
            behavior: 'smooth'  // Esto asegura que el desplazamiento sea suave
        });
    });
});
