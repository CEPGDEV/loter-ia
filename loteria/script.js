const cartas = ["bienvenida","carta 1","carta 2","carta 3", "carta 4","carta 5","carta 6","carta 7","carta 8","carta 9","carta 10","carta 11","carta 12","carta 13","carta 14"];
videos = ["cartas/comienzo loteria.mp4","cartas/grupo 1 loteria.mp4","cartas/grupo 2 loteria.mp4","cartas/grupo 3 loteria.mp4","cartas/grupo 4 loteria.mp4"]


function mezclar(cartas) {
  let arrayMezclado = cartas;
  
  // Algoritmo de Fisher-Yates para mezclar, empezando desde el segundo elemento
  for (let i = arrayMezclado.length - 1; i > 1; i--) {
    const j = Math.floor(Math.random() * (i - 1)) + 1; // Solo mezclamos a partir del índice 1
    [arrayMezclado[i], arrayMezclado[j]] = [arrayMezclado[j], arrayMezclado[i]];
  }

  return arrayMezclado;
}




const videosMezclados = mezclar(videos);

    // Referencia al elemento de video en HTML
    const videoPlayer = document.getElementById("videoPlayer");
    
    // Índice para rastrear el video actual en la lista mezclada
    let indiceVideoActual = 0;

    // Función para cargar y reproducir el siguiente video
    function reproducirSiguienteVideo() {
      indiceVideoActual++;
      if (indiceVideoActual < videosMezclados.length) {
        videoPlayer.src = videosMezclados[indiceVideoActual];
        videoPlayer.play();
      }
    }

    // Configurar el primer video y esperar que el usuario inicie
    videoPlayer.src = videosMezclados[indiceVideoActual];

    // Escuchar el evento "ended" para saber cuándo un video ha terminado
    videoPlayer.addEventListener("ended", reproducirSiguienteVideo);
