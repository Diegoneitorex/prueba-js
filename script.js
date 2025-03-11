const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');

// Función para mover el contenido hacia la izquierda o derecha
function moverContenido(button, contenido, offset) {
    const estilo = window.getComputedStyle(contenido);
    const transform = estilo.transform;
    const matriz = transform.match(/matrix\(([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+)\)/);
    let x = matriz ? parseFloat(matriz[5]) : 0;

    contenido.style.transform = `translateX(${x + offset}px)`;
}

prevButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const contenido = button.parentNode.querySelector('.galeria-contenido');
        moverContenido(button, contenido, 200);
    });
});

nextButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const contenido = button.parentNode.querySelector('.galeria-contenido');
        moverContenido(button, contenido, -200);
    });
});