// audioManager.js
export function reproducirSonido(animalNombre) {
    const audioElement = document.getElementById(`audio-${animalNombre}`);
    if (audioElement) {
        audioElement.play();
    } else {
        console.error("No se encontró el elemento de audio para:", animalNombre);
    }
}
