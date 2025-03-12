function cambiarImagen(contenidoId, imagenIndex) {
    const contenido = document.getElementById(contenidoId);
    const elementos = contenido.querySelectorAll('p');
    
    elementos.forEach((el, index) => {
        el.style.display = index === imagenIndex ? 'block' : 'none';
    });
}

document.querySelectorAll('.prev, .next').forEach(button => {
    button.addEventListener('click', function() {
        const galeria = this.parentNode;
        const imagenes = galeria.querySelector('.galeria-contenido').children;
        let currentIndex = 0;

        for (let i = 0; i < imagenes.length; i++) {
            if (imagenes[i].style.display !== 'none') {
                currentIndex = i;
                break;
            }
        }

        if (this.classList.contains('prev')) {
            currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
        } else {
            currentIndex = (currentIndex + 1) % imagenes.length;
        }

        for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].style.display = 'none';
        }

        imagenes[currentIndex].style.display = 'block';

        const descripcionId = galeria.dataset.descripcion;
        cambiarImagen(descripcionId, currentIndex);
    });
});

