/* Inyección de los datos de contacto de la sucursal.

   El footer y la sección de contacto se repiten en las dos páginas de cada
   sucursal (home y estudios). En vez de duplicar dirección, correo y teléfono
   en cuatro archivos HTML, el markup deja contenedores marcados con
   data-sede-render y este script los rellena leyendo js/data/sedes.js.

   Requiere que js/data/sedes.js se cargue ANTES que este archivo. */

(function () {
  function render() {
    if (typeof sedeActual !== "function") {
      console.error("sede.js: js/data/sedes.js no está cargado.");
      return;
    }

    const sede = sedeActual();
    const c = sede.contacto;

    // Nombre de la sucursal (títulos, encabezados)
    document.querySelectorAll("[data-sede-nombre]").forEach((el) => {
      el.textContent = sede.nombre;
    });

    // Bloque de dirección / correo / teléfono del footer
    document
      .querySelectorAll('[data-sede-render="contacto-footer"]')
      .forEach((el) => {
        el.innerHTML = `
          <div class="footer_row">
            <span class="material-symbols-outlined">location_on</span>
            <a target="_blank" href="${c.mapsUrl}">${c.direccion}</a>
          </div>
          <div class="footer_row">
            <span class="material-symbols-outlined">mail</span>
            <a href="mailto:${c.email}">${c.email}</a>
          </div>
          <div class="footer_row">
            <span class="material-symbols-outlined">phone_in_talk</span>
            <a href="tel:${c.telefonoHref}">${c.telefono}</a>
          </div>`;
      });

    // Enlace al formulario de contacto
    document
      .querySelectorAll('[data-sede-render="formulario"]')
      .forEach((el) => {
        el.setAttribute("href", c.formulario);
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
