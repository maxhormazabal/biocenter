// Función para abrir la Lightbox y cargar el video
function openLightbox(videoURL) {
  const videoIframe = document.getElementById("videoIframe");
  videoIframe.src = videoURL;

  const lightbox = document.getElementById("videoLightbox");
  lightbox.style.display = "block";
}

// Función para cerrar la Lightbox y detener el video
function closeLightbox() {
  const videoIframe = document.getElementById("videoIframe");
  videoIframe.src = "";

  const lightbox = document.getElementById("videoLightbox");
  lightbox.style.display = "none";
}

// Evento para abrir la Lightbox al hacer clic en el botón de reproducción
const playButtons = document.querySelectorAll(".btn-play");
playButtons.forEach((button) => {
  button.addEventListener("click", function() {
    const videoURL = button.getAttribute("data-video-link");
    openLightbox(videoURL);
  });
});
