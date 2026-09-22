/* Portada selector de sucursal (index.html).

   Dibuja una tarjeta por cada sucursal definida en js/data/sedes.js, con el
   botón principal hacia su sitio y accesos rápidos de contacto (llamar,
   escribir, cómo llegar). Al añadir una tercera sucursal en SEDES, aparece
   aquí sola: no hay que tocar este archivo ni el HTML.

   Requiere que js/data/sedes.js se cargue ANTES que este archivo. */

(function () {
  /* Un acceso rápido sin dato (p. ej. una sucursal todavía sin teléfono
     propio) no se dibuja, en vez de mostrar el dato de la otra sucursal. */
  function accion(icono, href, etiqueta, titulo, dato, externo) {
    if (!dato) return "";
    return `
      <a ${externo ? 'target="_blank" rel="noopener"' : ""} href="${href}" title="${titulo}">
        <span class="material-symbols-outlined">${icono}</span>
        <small>${etiqueta}</small>
      </a>`;
  }

  function tarjetaSede(sede) {
    const c = sede.contacto;
    return `
      <article class="sede_card">
        <header class="sede_card_head">
          <span class="material-symbols-outlined">apartment</span>
          <h2>${sede.nombre}</h2>
        </header>

        <p class="sede_card_dir">${c.direccion}</p>

        <a class="sede_card_cta" href="${sede.home}">
          Ver sitio de ${sede.nombre}
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>

        <a class="sede_card_link" href="${sede.estudiosPagina}">
          <span class="material-symbols-outlined">clinical_notes</span>
          Estudios clínicos en curso
        </a>

        <div class="sede_card_acciones">
          ${accion("phone_in_talk", "tel:" + c.telefonoHref, c.telefono,
                   `Llamar a ${sede.nombre}`, c.telefono)}
          ${accion("mail", "mailto:" + c.email, "Escribir",
                   c.email, c.email)}
          ${accion("location_on", c.mapsUrl, "Cómo llegar",
                   `Cómo llegar a ${sede.nombre}`, c.mapsUrl, true)}
        </div>
      </article>`;
  }

  function render() {
    const contenedor = document.getElementById("sedes_container");
    if (!contenedor) return;

    if (typeof SEDES === "undefined") {
      console.error("linktree.js: js/data/sedes.js no está cargado.");
      return;
    }

    contenedor.innerHTML = Object.keys(SEDES)
      .map((slug) => tarjetaSede(SEDES[slug]))
      .join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
