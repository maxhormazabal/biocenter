# BIOCENTER — sitio web

Sitio institucional de BIOCENTER, centro clínico de investigación (ensayos clínicos oncológicos y de otras áreas) en Chile. Contenido íntegramente en español. Sitio estático: HTML + CSS + JS sin build ni framework.

## Stack y estructura

No hay build step, no hay `package.json`, no hay `node_modules`. Se editan los archivos directamente y se ven tal cual en el navegador.

Estructura del repo:

```
index.html                    # linktree: selector de sucursal + accesos rápidos de contacto
concepcion.html                # home de la sucursal Concepción
chillan.html                    # home de la sucursal Chillán
concepcion-estudios.html         # estudios clínicos de Concepción
chillan-estudios.html             # estudios clínicos de Chillán
css/
  style.css            # CSS propio del proyecto (~1560 líneas) — aquí van los cambios de estilo
  bootstrap.min.css     # vendor, NO editar
  all.min.css           # Font Awesome, vendor, NO editar
  bootstrap.css          # vendor sin minificar, no se usa desde HTML, no editar
  swiper-bundle.min.css   # vendor, no referenciado desde ningún HTML actualmente
js/
  script.js             # scroll de header, botón "subir"
  team.js                # render del equipo (modales Bootstrap), lee data-sede
  estudios.js            # render de tarjetas de estudios clínicos, lee data-sede
  sede.js                 # inyecta contacto/footer de la sucursal leyendo data-sede
  linktree.js             # dibuja las tarjetas de sucursal del index.html
  data/
    sedes.js               # objeto SEDES { concepcion: {...}, chillan: {...} } — única fuente de estudios/equipo/contacto
  loader.js               # spinner de carga inicial
  estudios_lightbox.js    # inicializa Fancybox sobre elementos [data-fancybox]
  bootstrap.min.js        # vendor, NO editar
  all.min.js               # Font Awesome, vendor, NO editar
img/, webfonts/         # assets estáticos
.github/workflows/deploy.yml  # dispara el deploy a producción (ver más abajo)
design.md               # guía de estilo visual — CONSULTAR antes de tocar CSS o UI
```

`estudios.html` se conserva únicamente como redirección a `concepcion-estudios.html`, que es lo que esa URL mostraba antes de dividir el sitio en sucursales. No añadas contenido ahí.

Vendorizado en `css/` y `js/`: Bootstrap 5 (`bootstrap.min.css` / `bootstrap.min.js`) y Font Awesome (`all.min.css` / `all.min.js`). **Nunca editar estos archivos** — son librerías de terceros pegadas tal cual.

Cargado por CDN (no vendorizado): fuentes Poppins y Material Symbols vía Google Fonts (Poppins se importa desde `css/style.css` con `@import`; Material Symbols se enlaza en el `<head>` de cada HTML). jQuery y Fancybox se cargan por CDN solo en la(s) página(s) de estudios, para el lightbox de imágenes.

## Arquitectura de sucursales (Concepción / Chillán)

El sitio tiene dos sucursales, Concepción y Chillán, con páginas propias pero contenido HTML compartido/duplicado. Todas las páginas viven en la raíz del repo, a profundidad 0 — **no mover páginas a subdirectorios**, porque romperías las rutas relativas `./img/...`, `./css/...`, `./js/...` que están escritas dentro de los archivos de datos JS compartidos.

Páginas:
- `index.html` — selector de sucursal ("linktree"): elegir Concepción o Chillán + accesos rápidos de contacto. No es la home de ninguna sucursal.
- `concepcion.html` / `chillan.html` — home de cada sucursal. Mismo layout y estructura HTML, datos distintos.
- `concepcion-estudios.html` / `chillan-estudios.html` — estudios clínicos de cada sucursal.

Cada página de sucursal declara con qué sede está asociada mediante un atributo en el `<body>`:

```html
<body data-sede="concepcion">
```

Los scripts compartidos (`js/team.js`, `js/estudios.js`, y el nuevo `js/sede.js`) leen `document.body.dataset.sede` para saber qué datos renderizar.

Los datos que varían por sucursal — estudios clínicos, equipo, contacto/dirección — están centralizados en `js/data/sedes.js`, en un objeto `SEDES` con claves `concepcion` y `chillan`.

**Regla clave:** para cambiar estudios, equipo o datos de contacto, edita `js/data/sedes.js`. Nunca edites esos datos directamente en el HTML.

**Contenido compartido duplicado:** el HTML de FAQ, "por qué Biocenter" y otros textos institucionales está duplicado entre `concepcion.html` y `chillan.html` (no hay includes ni templating). Cualquier cambio a ese contenido compartido hay que aplicarlo a mano en ambas páginas.

Antes de tocar estilos o añadir UI, consultar `design.md` (guía de estilo del proyecto).

## Desarrollo local

No hay build ni dev server propio. Sirve la raíz del repo con cualquier servidor estático y ábrelo en el navegador:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

(Abrir los archivos `.html` directamente con `file://` puede fallar por rutas relativas y CORS en algunos navegadores; usar siempre un servidor local.)

## Deploy

**Todo push a `main` publica en producción de inmediato.** `.github/workflows/deploy.yml` se dispara solo con push a `main` y hace `curl` al webhook de deploy de Laravel Forge (`secrets.FORGE_DEPLOY_HOOK_URL`). No hay paso de aprobación intermedio: el push a `main` es el deploy. Existe una rama `dev`, pero no dispara ningún workflow y actualmente está *detrás* de `main` (no se está usando como rama de integración). Verificar los cambios en local antes de hacer push a `main`.

## Convenciones

- Rutas de assets siempre relativas con prefijo `./` (`./img/...`, `./css/...`, `./js/...`), nunca absolutas.
- Todas las páginas HTML en la raíz del repo (profundidad 0).
- Contenido en español; nombres de variables y clases CSS en español, snake_case (ej. `container_ensayos`, `btn_menu`, `container_new_team`).
- No editar los vendor (`bootstrap.min.css/js`, `all.min.css/js`, `swiper-bundle.min.css`).
- Consultar `design.md` antes de cambios de estilo o de UI nueva.

## Pendiente

La sucursal de **Chillán** está creada y funcionando, pero sin datos reales: en `js/data/sedes.js` sus arreglos `equipo` y `estudios` están vacíos y sus campos de contacto son placeholders marcados con `TODO`. Las páginas muestran estados vacíos explícitos mientras tanto. **No inventes personal clínico ni estudios de investigación**: espera los datos reales del cliente.

## Deuda conocida y gotchas

- `js/emergent.js` no existe y ya no se referencia desde ningún HTML (se eliminó el `<script>` al generar las páginas de sucursal). Si lo ves mencionado en documentación antigua, era un 404 inofensivo.
- `js/loader.js` y `css/swiper-bundle.min.css` / `css/bootstrap.css` no se usan desde ningún HTML: vendor y código muerto.
- `concepcion.html` carga además un segundo icon set (`Material Icons` de Google Fonts) aparte de Material Symbols, porque el carrusel de equipo usa `chevron_left`/`chevron_right` de ese set. Es redundante pero funcional.
- Poppins no se carga con un `<link>` en el `<head>`: entra por `@import` en la primera línea de `css/style.css`. Material Symbols sí se enlaza con `<link>` en cada HTML.
- HTML duplicado entre páginas de sucursal (`concepcion.html`/`chillan.html`, y sus `-estudios.html`): no hay templating, así que los cambios de contenido compartido se aplican dos veces, a mano.
