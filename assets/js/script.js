import { Leon, Lobo, Oso, Serpiente, Aguila } from './clasesAnimales.js';

document.getElementById('btnRegistrar').addEventListener('click', async () => {
    const nombre = document.getElementById('animal').value.trim(); 
    const edad = document.getElementById('edad').value.trim(); 
    const comentarios = document.getElementById('comentarios').value.trim();

    if (!nombre || !edad || !comentarios) {
        alert('Por favor, completa todos los campos: Nombre, Edad y Comentarios.');
        return; 
    }

    const img = await obtenerDatosAnimal(nombre); 
    const sonido = obtenerSonidoAnimal(nombre); 
    if (img && sonido) {
        
        const div = document.createElement('div');
        div.classList.add('card', 'm-2');

        
        div.style.height = '300px'; 

        div.innerHTML = `
        <img src="./assets/imgs/${img}" alt="${nombre}" class="card-img-top animal-image" style="height: 150px; object-fit: cover;">
        
        <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">Edad: ${edad}</p>
            <p class="card-text">${comentarios}</p>
            <button class="btn btn-primary btn-sonido">Reproducir sonido</button>
            <audio class="animal-sonido">
                <source src="./assets/sonidos/${sonido}" type="audio/mpeg">
            </audio>
        </div>
        `;

        
        document.getElementById('Animales').appendChild(div);

        
        div.querySelector('.btn-sonido').addEventListener('click', () => {
            const audio = div.querySelector('.animal-sonido');
            audio.play();
        });

        
        document.getElementById('animal').value = '';
        document.getElementById('edad').value = '';
        document.getElementById('comentarios').value = '';
    } else {
        console.log('No se encontró la imagen o el sonido del animal');
    }
});



async function obtenerDatosAnimal(nombreAnimal) {
    try {
        const response = await fetch('./animales.json'); 
        const data = await response.json(); 

        
        const animales = data.animales;

        
        const animalEncontrado = animales.find(animal => animal.name === nombreAnimal);

        
        if (animalEncontrado) {
            return animalEncontrado.imagen;
        } else {
            throw new Error('Animal no encontrado');
        }
    } catch (error) {
        console.error('Error al obtener los datos del animal:', error);
        return null;
    }
}
function obtenerSonidoAnimal(nombreAnimal) {
    let sonido;
    switch (nombreAnimal) {
        case 'Leon':
            sonido = '../sounds/Rugido.mp3';
            break;
        case 'Lobo':
            sonido = '../sounds/Aullido.mp3';
            break;
        case 'Oso':
            sonido = '../sounds/GruÕìÿido.mp3';
            break;
        case 'Serpiente':
            sonido = '../sounds/Siseo.mp3';
            break;
        case 'Aguila':
            sonido = '../sounds/Chillido.mp3';
            break;
        default:
            console.log('Sonido no disponible para este animal');
            return null;
    }
    return sonido;
}
