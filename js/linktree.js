/* Portada selector de sucursal (index.html).

   Dibuja una tarjeta por cada sucursal definida en js/data/sedes.js, con el
   botón principal hacia su sitio y accesos rápidos de contacto (llamar,
   escribir, cómo llegar). Al añadir una tercera sucursal en SEDES, aparece
   aquí sola: no hay que tocar este archivo ni el HTML.

   Requiere que js/data/sedes.js se cargue ANTES que este archivo. */

(function () {
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
          <a href="tel:${c.telefonoHref}" title="Llamar a ${sede.nombre}">
            <span class="material-symbols-outlined">phone_in_talk</span>
            <small>${c.telefono}</small>
          </a>
          <a href="mailto:${c.email}" title="Escribir a ${sede.nombre}">
            <span class="material-symbols-outlined">mail</span>
            <small>${c.email}</small>
          </a>
          <a target="_blank" rel="noopener" href="${c.mapsUrl}" title="Cómo llegar a ${sede.nombre}">
            <span class="material-symbols-outlined">location_on</span>
            <small>Cómo llegar</small>
          </a>
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
