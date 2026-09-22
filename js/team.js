/* Carrusel del equipo.
   Los integrantes ya NO viven en este archivo: se leen de js/data/sedes.js
   según la sucursal declarada en <body data-sede="...">. Este archivo solo
   contiene la lógica de render. */

const equipo = (typeof sedeActual === "function" ? sedeActual().equipo : []) || [];

function createTeamHTML(equipo, integrantesPorGrupo) {
  let equipoCompleto = [...equipo];
  let html = "";

  // Sucursal sin equipo cargado todavía: mostramos un estado vacío en vez de
  // un carrusel en blanco.
  if (equipoCompleto.length === 0) {
    const carouselVacio = document.querySelector(".carousel-inner-team");
    if (carouselVacio) {
      carouselVacio.innerHTML = `
        <div class="carousel-item active">
          <div class="equipo_vacio">
            <span class="material-symbols-outlined">groups</span>
            <p>Estamos preparando la presentación de nuestro equipo en esta sucursal. Muy pronto encontrarás aquí a todos sus profesionales.</p>
          </div>
        </div>`;
    }
    return;
  }

  let mobileLimit = 790;
  let cardWidthAdjust = "";

  if (window.innerWidth < mobileLimit) {
    cardWidthAdjust = 'style="max-width: 80%; margin:20px; flex: 1;"';
  } else {
    cardWidthAdjust = 'style="max-width: 90%; flex: 1;"';
  }

  // Si la cantidad de integrantes no es múltiplo del número de integrantes por grupo, repetimos los últimos integrantes

  let increment_team = 0;
  if (integrantesPorGrupo == 3) {
    increment_team = 2;
  } else if (integrantesPorGrupo == 2) {
    increment_team = 2;
  }

  while (equipoCompleto.length % integrantesPorGrupo !== 0) {
    equipoCompleto.splice(
      equipo.length - 1,
      0,
      equipo[equipo.length - increment_team]
    );
    increment_team += 1;
  }

  for (let i = 0; i < equipoCompleto.length; i += integrantesPorGrupo) {
    html += `<div class="carousel-item ${i === 0 ? "active" : ""}">
        <div class="row justify-content-center align-items-stretch">`;

    for (let j = 0; j < integrantesPorGrupo; j++) {
      const miembro = equipoCompleto[i + j];
      const colSizeClass = calculateColumnSizeClass(integrantesPorGrupo, j);

      html += `<div class="${colSizeClass}">
            <div class="team_card mx-auto" ${cardWidthAdjust}>
              <img class="img-fluid" src="${miembro.imagen}" alt="${miembro.nombre}">
              <div class="description">
                <p class="cargo">${miembro.cargo}</p>
                <p class="nombre">${miembro.nombre}</p>
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#${miembro.modalId}">Saber más</button>
              </div>
            </div>
          </div>
          
          <!-- ${miembro.nombre} -->
          <div class="modal fade" id="${miembro.modalId}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    Nuestro equipo
                  </h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img class="img-fluid rounded-3" src="${miembro.imagen}" alt="" />
                  <p class="text-capitalize fs-4 px-3 mt-3">${miembro.cargo}</p>
                  <p class="text-capitalize fs-5 px-3">${miembro.nombre}</p>
                  <p class="fs-6 px-3">
                  ${miembro.descripcion}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          `;
    }

    html += `</div>
      </div>`;
  }

  console.log("HTML generated: ", html);
  const carouselInner = document.querySelector(".carousel-inner-team");
  if (carouselInner) {
    carouselInner.innerHTML = html;
    console.log("HTML injected successfully");
  } else {
    console.log("carousel-inner element not found");
  }
}

// Esta función calcula la clase de tamaño de columna Bootstrap según el número de integrantes por grupo y la posición actual.
function calculateColumnSizeClass(integrantesPorGrupo, currentPosition) {
  switch (integrantesPorGrupo) {
    case 2:
      return currentPosition === 0 ? "col-12 col-md-6" : "col-12 col-md-6";
    case 3:
      return currentPosition === 0
        ? "col-12 col-md-4"
        : currentPosition === 1
        ? "col-12 col-md-4"
        : "col-12 col-md-4";
    default:
      return "col-12";
  }
}

// Ejecuta la función para generar el HTML del equipo
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  // Determinar el número de integrantes por grupo según el tamaño de la pantalla
  let integrantesPorGrupo;
  if (window.innerWidth < 992) {
    integrantesPorGrupo = 2;
  } else {
    integrantesPorGrupo = 3;
  }
  createTeamHTML(equipo, integrantesPorGrupo);
});

// Escucha el evento de cambio de tamaño de la ventana para ajustar dinámicamente el número de integrantes por grupo.
window.addEventListener("resize", () => {
  let integrantesPorGrupo;
  if (window.innerWidth < 992) {
    integrantesPorGrupo = 2;
  } else {
    integrantesPorGrupo = 3;
  }
  createTeamHTML(equipo, integrantesPorGrupo);
});

// Font Size de los textos

function adjustFontSize(containerClass, textClass) {
  const cards = document.querySelectorAll(`.${containerClass} .${textClass}`);
  let maxHeight = 0;
  let maxFontSize = 100; // Starting large

  // First pass: find the maximum height needed
  cards.forEach((card) => {
    let fontSize = maxFontSize;
    card.style.fontSize = fontSize + "px";
    card.style.lineHeight = "1.2";
    while (card.scrollHeight > card.clientHeight && fontSize > 0) {
      fontSize--;
      card.style.fontSize = fontSize + "px";
    }

    maxHeight = Math.max(maxHeight, card.scrollHeight);
  });

  // Second pass: adjust all cards to the maximum height
  cards.forEach((card) => {
    card.style.fontSize = maxFontSize + "px";
  });

  // Third pass: ensure all cards fit within the max height
  cards.forEach((card) => {
    while (card.scrollHeight > maxHeight && maxFontSize > 0) {
      maxFontSize--;

      card.style.fontSize = maxFontSize + "px";
    }
  });
}

// Example usage
window.onload = function () {
  adjustFontSize("descripcion", "cargo");
  adjustFontSize("descripcion", "nombre");
};
window.onresize = function () {
  adjustFontSize("descripcion", "cargo");
  adjustFontSize("descripcion", "nombre");
};
