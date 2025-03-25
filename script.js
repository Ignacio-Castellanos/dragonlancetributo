

document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.getElementById("titulo");
    const descripcion = document.getElementById("descripcion");
    const textoTitulo = "Bienvenido al códice de la Dragonlance...";
    const textoDescripcion = "Explora el mundo de Krynn, conoce a sus héroes y sumérgete en la épica historia de la Dragonlance.";
    
    let index = 0;
    function escribirTitulo() {
        if (index < textoTitulo.length) {
            titulo.textContent += textoTitulo.charAt(index);
            index++;
            setTimeout(escribirTitulo, 100);
        } else {
            escribirDescripcion();
        }
    }
    
    let indexDesc = 0;
    function escribirDescripcion() {
        if (indexDesc < textoDescripcion.length) {
            descripcion.textContent += textoDescripcion.charAt(indexDesc);
            indexDesc++;
            setTimeout(escribirDescripcion, 50);
        }
    }
    
    escribirTitulo();
});



const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');


playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "❚❚"; 
    } else {
        audio.pause();
        playPauseBtn.textContent = "►"; 
    }
});


audio.addEventListener('timeupdate', function() {
    const value = (audio.currentTime / audio.duration) * 100;
    progress.value = value;
});


progress.addEventListener('input', function() {
    const value = progress.value * audio.duration / 100;
    audio.currentTime = value;
});


volume.addEventListener('input', function() {
    audio.volume = volume.value / 100;
});
