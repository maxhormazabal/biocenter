/* Listado de estudios clínicos.
   Los estudios ya NO viven en este archivo: se leen de js/data/sedes.js
   según la sucursal declarada en <body data-sede="...">. Este archivo solo
   contiene la lógica de filtrado, orden y render. */

const tarjetas = (typeof sedeActual === "function" ? sedeActual().estudios : []) || [];

// Asignar IDs autoincrementales automáticamente (de mayor a menor)
tarjetas.forEach((tarjeta, index) => {
  tarjeta.id = (tarjetas.length - index).toString();
});

// Estado inicial
let vistaActual = "profesional";
let filtroActual = "todos";
let ordenActivosPrimero = true;

// Un estudio se considera "abierto" (en reclutamiento) salvo que su estado sea explícitamente CERRADO
function esReclutamientoAbierto(estado) {
  return estado !== "RECLUTAMIENTO CERRADO";
}

// Función para generar tarjetas
function generarTarjetas() {
  const container = document.getElementById("card-container");
  container.innerHTML = ""; // Limpiar tarjetas anteriores

  // Filtrar tarjetas según el filtro actual
  let tarjetasFiltradas = tarjetas.filter(
    (tarjeta) =>
      filtroActual === "todos" || tarjeta.etiquetas.includes(filtroActual)
  );

  // Ordenar tarjetas por estado (Activos primero por defecto)
  tarjetasFiltradas.sort((a, b) => {
    if (esReclutamientoAbierto(a.estado) === esReclutamientoAbierto(b.estado))
      return 0;
    if (ordenActivosPrimero) {
      // Activo primero
      return esReclutamientoAbierto(a.estado) ? -1 : 1;
    } else {
      // Activo al final
      return esReclutamientoAbierto(a.estado) ? 1 : -1;
    }
  });

  // Si no hay tarjetas que mostrar
  if (tarjetasFiltradas.length === 0) {
    // Distinguimos "la sucursal aún no tiene estudios cargados" de "el filtro
    // no devolvió resultados": el mensaje del filtro confunde en el primer caso.
    const mensaje =
      tarjetas.length === 0
        ? "Aún no hay estudios clínicos publicados para esta sucursal. Si quieres saber si puedes participar en alguno, escríbenos a través del formulario de contacto."
        : "No se encontraron estudios clínicos con el filtro seleccionado.";

    container.innerHTML = `
      <div class="col-12 text-center">
        <div class="alert alert-info">
          ${mensaje}
        </div>
      </div>
    `;
    return;
  }

  // Generar tarjetas filtradas
  tarjetasFiltradas.forEach((tarjeta) => {
    const card = document.createElement("div");
    card.classList.add("col-md-6", "mb-4"); // Usar sistema de columnas de Bootstrap

    card.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="row g-0 h-100">
          <!-- Contenedor de imagen con clases responsivas -->
          <div class="col-12 col-md-4 position-relative card-img-container">
            <div class="card-img-wrapper">
              <img src="${tarjeta.img}" class="card-study-img" alt="${
      tarjeta.titulo
    }">
              <button class="btn-play position-absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10;">
                <a href="${tarjeta.videoLink}" data-fancybox>
                  <span class="material-symbols-outlined" style="font-size: 3rem; color: white; text-shadow: 0 0 10px rgba(0,0,0,0.5);">play_circle</span>
                </a>
              </button>
            </div>
          </div>
          <!-- Contenedor de texto -->
          <div class="col-12 col-md-8">
            <div class="card-body h-100 d-flex flex-column">
              <h5 class="card-title">${tarjeta.titulo}</h5>
              <h6 class="card-subtitle mb-2 ${
                esReclutamientoAbierto(tarjeta.estado)
                  ? "text-success"
                  : "text-danger"
              }">${tarjeta.estado}</h6>
              <div class="card-text flex-grow-1 overflow-auto" style="max-height: 300px;">
                ${
                  vistaActual === "profesional"
                    ? tarjeta.descripcionProfesional
                    : tarjeta.descripcionPaciente
                }
              </div>
              <a href="${
                tarjeta.infoLink
              }" target="_blank" class="btn btn-outline-primary mt-2">
                Más información
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Inicializar Fancybox para los nuevos elementos
  $("[data-fancybox]").fancybox({
    youtube: {
      controls: 1,
      showinfo: 0,
    },
  });
}

// Definir filtros disponibles
const filtros = [
  "todos",
  "Oncología",
  "Cardiología",
  "Hematología",
  "Broncopulmonar",
  "Medicina",
];

// Función para formatear strings (convertir snake_case a Title Case)
function formatString(str) {
  return str
    .replace(/_/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Inicializar el selector de filtros
function inicializarFiltros() {
  const filterSelect = document.getElementById("filterSelect");
  filterSelect.innerHTML = ""; // Limpiar opciones existentes

  filtros.forEach((filtro) => {
    const option = document.createElement("option");
    option.value = filtro;
    option.textContent = formatString(filtro);
    filterSelect.appendChild(option);
  });

  // Manejar cambio de filtro
  filterSelect.addEventListener("change", function () {
    filtroActual = this.value;
    generarTarjetas();
  });
}

// Inicializar botones de vista
function inicializarBotonesVista() {
  // Crear el nuevo toggle switch
  const viewSelectorContainer = document.getElementById(
    "viewSelectorContainer"
  );
  viewSelectorContainer.innerHTML = `
    <div class="toggle-view-container">
      <div class="toggle-view-text mb-2">
        <span id="viewText">Vista: <strong>Profesionales</strong></span>
      </div>
      <label class="switch">
        <input type="checkbox" id="viewToggle">
        <span class="slider round"></span>
      </label>
    </div>
  `;

  // Añadir estilos CSS para el toggle
  const style = document.createElement("style");
  style.textContent = `
    .toggle-view-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
    
    .toggle-view-text {
      font-size: 18px;
      color: #333;
    }
    
    /* The switch - the box around the slider */
    .switch {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 34px;
    }

    /* Hide default HTML checkbox */
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* The slider */
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
    }

    input:checked + .slider {
      background-color: #28a745;
    }

    input:focus + .slider {
      box-shadow: 0 0 1px #28a745;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  `;
  document.head.appendChild(style);

  // Manejar el cambio del toggle
  const viewToggle = document.getElementById("viewToggle");
  const viewText = document.getElementById("viewText");

  viewToggle.addEventListener("change", function () {
    vistaActual = this.checked ? "paciente" : "profesional";

    // Actualizar el texto que muestra la vista actual
    viewText.innerHTML = `Vista: <strong>${
      this.checked ? "Pacientes" : "Profesionales"
    }</strong>`;

    generarTarjetas();
  });
}

// Inicializar el ordenamiento
function inicializarOrden() {
  const sortBtn = document.getElementById("sortBtn");
  const sortIcon = document.getElementById("sortIcon");

  if (sortBtn) {
    sortBtn.addEventListener("click", function () {
      ordenActivosPrimero = !ordenActivosPrimero;
      sortIcon.textContent = ordenActivosPrimero
        ? "arrow_upward"
        : "arrow_downward";
      generarTarjetas();
    });
  }
}

// Función de inicialización
function inicializar() {
  inicializarFiltros();
  inicializarBotonesVista();
  inicializarOrden();

  // Establecer valores iniciales
  vistaActual = "profesional";
  filtroActual = "todos";
  // Generar tarjetas iniciales
  generarTarjetas();
}

// Iniciar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", inicializar);

// Añadir estilos CSS para las tarjetas responsivas
const cardStyles = document.createElement("style");
cardStyles.textContent = `
  /* Estilos para el contenedor de la imagen */
  .card-img-container {
    height: auto;
  }
  
  /* Estilos para el wrapper de la imagen */
  .card-img-wrapper {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  /* Estilos para la imagen */
  .card-study-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Media query para pantallas medianas y grandes */
  @media (min-width: 768px) {
    .card-img-container {
      height: 100%;
    }
    
    .card-img-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  /* Estilos para el botón de ordenar */
  .btn-sort {
    background: none;
    border: none;
    border-radius: 8px;
    padding: 6px 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #495057;
  }

  .btn-sort:hover {
    background-color: #f0f0f0;
    color: #212529;
  }

  .sort-letter {
    font-weight: 500;
    font-family: inherit;
    font-size: 1.1rem;
    margin-right: 2px;
  }

  .btn-sort .material-symbols-outlined {
    font-size: 1.2rem;
  }
`;
document.head.appendChild(cardStyles);
