const galeria = document.querySelector('.galeria');
const imagenes = galeria.querySelectorAll('img');

let indiceImagen = 0;

function mostrarSiguienteImagen() {
    imagenes.forEach(img => img.classList.remove('mostrar'));

    imagenes[indiceImagen].classList.add('mostrar');

    indiceImagen = (indiceImagen + 1) % imagenes.length;
}

imagenes[0].classList.add('mostrar');

const botonSiguiente = document.createElement('button');
botonSiguiente.textContent = 'Siguiente';
botonSiguiente.onclick = mostrarSiguienteImagen;

galeria.parentNode.appendChild(botonSiguiente);
