// Datos de las tarjetas en formato JSON
const tarjetas = [
  {
    id: "15",
    titulo: "EvoPAR",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio de fase III aleatorizado, de 2 cohortes, doble ciego, controlado con placebo de AZD5305 en combinación con nuevos agentes hormonales elegidos por el médico en pacientes con cáncer de próstata metastásico HRRm y sin HRRm sensible a la castración.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Próstata</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>HRRm:</strong> AZD5305 + ADT + NHA (elección del investigador) / Placebo + ADT + NHA (elección del investigador)</li>\n<li><strong>No-HRRm:</strong> AZD5305 + ADT + NHA (elección del investigador) / Placebo + ADT + NHA (elección del investigador)</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez De Vásquez</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico de fase 3, para pacientes con diagnóstico de Cáncer de Próstata metastásico sensible a la castración. Los pacientes recibirán AZD5305 (droga de estudio) + terapia con nuevos agentes hormonales.</p>',
    etiquetas: ["todos", "prostata"],
    img: "./img/estudios/est16.jpg",
    videoLink: "https://youtu.be/DOfie9PVIOE",
    infoLink:
      "https://clinicaltrials.gov/study/NCT06120491?cond=Prostate%20Cancer&amp;term=evopar&amp;aggFilters=status:rec&amp;rank=1",
  },
  {
    id: "14",
    titulo: "MK1026-010",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio aleatorizado de fase 3 para comparar la eficacia y seguridad de nemtabrutinib frente a quimioinmunoterapia para leucemia linfocítica crónica/linfoma linfocítico pequeño no tratados previamente, sin alteraciones de TP53 (BELLWAVE-008).</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Leucemia Linfocítica Crónica</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>1:</strong> NEMTABRUTINIB</li>\n<li><strong>2:</strong> BENDAMUSTINA + RITUXIMAB</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandía Cabas</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de Leucemia Linfocítica Crónica o Linfoma Linfocítico Pequeño, que no hayan sido tratados previamente. Los pacientes recibirán inhibidor de BTK o quimioinmunoterapia.</p>',
    etiquetas: ["todos", "hematologicos", "leucemia_linfoma"],
    img: "./img/estudios/est15.jpg",
    videoLink: "https://youtu.be/DOfie9PVIOE",
    infoLink:
      "https://www.clinicaltrials.gov/study/NCT05624554?cond=Leukemia%20Lymphocytic%20Chronic%20B-Cell&amp;intr=Nemtabrutinib&amp;rank=1",
  },
  {
    id: "13",
    titulo: "MK1026-008",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio aleatorizado de fase 3 para comparar la eficacia y seguridad de nemtabrutinib frente a quimioinmunoterapia para leucemia linfocítica crónica/linfoma linfocítico pequeño no tratados previamente, sin alteraciones de TP53 (BELLWAVE-008).</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Leucemia Linfocítica Crónica</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>1:</strong> NEMTABRUTINIB</li>\n<li><strong>2:</strong> BENDAMUSTINA + RITUXIMAB</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandía Cabas</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de Leucemia Linfocítica Crónica o Linfoma Linfocítico Pequeño, que no hayan sido tratados previamente. Los pacientes recibirán inhibidor de BTK o quimioinmunoterapia.</p>',
    etiquetas: ["todos", "hematologicos", "leucemia_linfoma"],
    img: "./img/estudios/est14.jpg",
    videoLink: "https://youtu.be/DOfie9PVIOE",
    infoLink:
      "https://www.clinicaltrials.gov/study/NCT05624554?cond=Leukemia%20Lymphocytic%20Chronic%20B-Cell&amp;intr=Nemtabrutinib&amp;rank=1",
  },
  {
    id: "12",
    titulo: "MK3543-007",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio clínico de fase 3, aleatorizado, doble ciego, controlado con comparador activo para evaluar la eficacia y la seguridad de bomedemstat (MK-3543) frente a hidroxiurea en participantes con trombocitemia esencial que nunca han recibido tratamiento citorreductor.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Trombocitemia esencial</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Bomedemstat + Placebo Hidroxiurea</li>\n<li><strong>B:</strong> Hidroxiurea + Placebo Bomedemstat</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandía Cabas</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico, para pacientes diagnosticados con con trombocitemia esencial que nunca han recibido tratamiento citorreductor. Los pacientes recibirán Bomedemstat (MK-3543) o Hidroxiurea por via oral.</p>',
    etiquetas: ["todos", "hematologicos", "trombocitemia_esencial"],
    img: "./img/estudios/est13.jpg",
    videoLink: "https://youtu.be/DOfie9PVIOE",
    infoLink:
      "https://clinicaltrials.gov/study/NCT06456346?term=3543%20007&amp;rank=1",
  },
  {
    id: "11",
    titulo: "MK0616-015",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio clínico de fase 3, aleatorizado, controlado con placebo para evaluar la eficacia y la seguridad de MK-0616 en la reducción de eventos cardiovasculares adversos graves en participantes con alto riesgo cardiovascular</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Eventos Cardiovasculares</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>1:</strong> MK0616 20 mg vo + Tratamiento hipolipemiante optimizado</li>\n<li><strong>2:</strong> Placebo + Tratamiento hipolipemiante optimizado</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Germán Arriagada Suazo</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para evaluar la eficacia y la seguridad de MK-0616 (Enlicitide) en la reducción de eventos cardiovasculares adversos graves en participantes con alto riesgo cardiovascular.</p>',
    etiquetas: ["todos", "cardiologia"],
    img: "./img/estudios/est12.jpg",
    videoLink: "https://youtu.be/DOfie9PVIOE",
    infoLink:
      "https://clinicaltrials.gov/study/NCT06008756?term=0616-015&amp;rank=1",
  },
  {
    id: "10",
    titulo: "ANT-010",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio de fase 3, multicéntrico, aleatorizado, doble ciego, controlado con placebo, con grupos paralelos para evaluar la eficacia y la seguridad de abelacimab en pacientes de riesgo alto con fibrilación auricular que se consideran no aptos para la anticoagulación oral (LILAC).</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Fibrilación auricular</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Abelacimab 150 mg s.c. mensualmente</li>\n<li><strong>B:</strong> Placebo s.c. mensualmente</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Germán Arriagada Suazo</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes diagnosticados con Fibrilación Auricular de riesgo alto que se consideran no aptos para la anticoagulación oral.</p>',
    etiquetas: ["todos", "cardiologia"],
    img: "./img/estudios/est11.jpg",
    videoLink: "https://youtu.be/DOfie9PVIOE",
    infoLink:
      "https://clinicaltrials.gov/study/NCT05712200?term=ANT010&amp;rank=1",
  },
  {
    id: "9",
    titulo: "CA224-1044",
    estado: "RECLUTAMIENTO CERRADO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio de fase II, abierto, de dos cohortes, para evaluar la preferencia del paciente por la combinación de dosis fijas subcutáneas de nivolumab + relatlimab en comparación con la combinación de dosis fijas intravenosas de nivolumab + relatlimab y evaluar el nivolumab subcutáneo en comparación con el nivolumab intravenoso en participantes con melanoma.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Melanoma</li>\n<li><strong>Fase:</strong> 2</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>Cohorte 1:</strong> Melanoma metastásico: Nivolumab + Relatlimab</li>\n<li><strong>Cohorte 2:</strong> Melanoma extirpado: Nivolumab</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de melanoma en el que se evalúa la preferencia del paciente en relación a la vía de administración de Nivolumab, endovenosa o subcutánea.</p>',
    etiquetas: ["todos", "piel"],
    img: "./img/estudios/est10.jpg",
    videoLink: "https://youtu.be/DOfie9PVIOE",
    infoLink:
      "https://www.clinicaltrials.gov/study/NCT06101134?intr=Nivolumab-Relatlimab&amp;locStr=Chile&amp;country=Chile&amp;rank=1",
  },
  {
    id: "8",
    titulo: "SGNTUC-029",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio de fase 3 de etiqueta abierta, aleatorizado para evaluar tucatinib en combinación con trastuzumab y mFOLFOX6 en comparación con mFOLFOX6 administrado de forma independiente o en conjunto con cetuximab o bevacizumab, como tratamiento de primera línea para sujetos con cáncer colorrectal metastásico HER2+.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Cáncer colorectal metastásico</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>1:</strong> Tucatinib + Trastuzumab + mFOLFOX6</li>\n<li><strong>2:</strong> mFOLFOX6 independiente o en conjunto con Bevacizumab o Cetuximab</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico de fase 3, para pacientes con cáncer colorrectal metastásico con mutación HER2+, con dos ramas de tratamiento: medicamentos antiHER2+ (Tucatinib y Trastuzumab) junto a quimioterapia estándar vs quimioterapia y anticuerpos monoclonales.</p>',
    etiquetas: ["todos", "digestivo"],
    img: "./img/estudios/est9.jpg",
    videoLink: "https://youtu.be/aHNdRCToNSg",
    infoLink:
      "https://clinicaltrials.gov/study/NCT05253651?term=SGNTUC-029&amp;rank=1",
  },
  {
    id: "7",
    titulo: "MK1026-010",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio aleatorizado, de etiqueta abierta, de fase 3 para comparar la eficacia y la seguridad de nemtabrutinib (MK-1026) más venetoclax frente a venetoclax más rituximab en participantes con leucemia linfocítica crónica/linfoma linfocítico de células pequeñas recidivantes/refractarios después de al menos 1 tratamiento previo (BELLWAVE-010)</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Leucemia linfocítica crónica/linfoma linfocítico de células pequeñas recidivantes/refractarios</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>1:</strong> Nemtabrutinib (MK-1026) + Venetoclax</li>\n<li><strong>2:</strong> Venetoclax + Rituximab</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandía</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de leucemia linfocítica crónica/linfoma linfocítico de células pequeñas recidivantes o refractarios que no hayan respondido, al menos a 1 tratamiento previo.</p>',
    etiquetas: ["todos", "hematologicos", "leucemia_linfoma"],
    img: "./img/estudios/est8.jpg",
    videoLink: "https://youtu.be/KbPIBDpyJq8",
    infoLink:
      "https://clinicaltrials.gov/study/NCT05947851?intr=Nemtabrutinib&amp;checkSpell=&amp;locStr=Concepci%C3%B3n,%20Chile&amp;country=Chile&amp;state=Bio%20Bio&amp;city=Concepci%C3%B3n&amp;rank=1",
  },
  {
    id: "6",
    titulo: "CAMBRIA-1 - CA MAMA",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio de fase III, abierto, aleatorizado, para evaluar la eficacia y la seguridad de la terapia extendida con camizestrant (AZD9833, un degradador selectivo del receptor de estrógeno oral de nueva generación) en comparación con la terapia endocrina estándar (inhibidor de la aromatasa o tamoxifeno) en pacientes con cáncer de mama temprano ER+/HER2- y un riesgo intermedio o alto de recurrencia que han completado la terapia locorregional definitiva y al menos 2 años de terapia endocrina adyuvante estándar sin recurrencia de la enfermedad.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Cáncer de mama</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Continuarán con la TE estándar de elección del investigador (inhibidores de la aromatasa [AI; exemestano, letrozol, anastrozol], con o sin agonistas de la hormona liberadora de la hormona luteinizante [LHRH], o tamoxifeno, dosis estándar según el investigador, una vez al día).</li>\n<li><strong>B:</strong> Camizestrant (150 mg, una vez al día) con o sin agonistas de la LHRH</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de Cáncer de mama, con riesgo intermedio o alto de recurrencia, que hayan completado la terapia de referencia (cirugía/radioterapia) y al menos dos años de terapia endocrina sin recurrencia de la enfermedad.</p>',
    etiquetas: ["todos", "mama"],
    img: "./img/estudios/est7.jpg",
    videoLink: "https://youtu.be/Qd3YeVIZgtE",
    infoLink:
      "https://clinicaltrials.gov/study/NCT05774951?cond=Breast%20Cancer&amp;intr=Camizestrant&amp;lat=-36.8295992&amp;lng=-73.0524092&amp;locStr=Current%20Location&amp;distance=183&amp;term=D8531C00002&amp;rank=1",
  },
  {
    id: "5",
    titulo: "Estudio MK7684A-006",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio de fase 3, de etiqueta abierta de MK-7684A (coformulación de vibostolimab con pembrolizumab) en combinación con quimiorradioterapia concurrente seguida de MK-7684A frente a quimiorradioterapia concurrente seguida de durvalumab en participantes con NSCLC en estadio III, irresecable, localmente avanzado.</p>\n<p>\n<ul>\n<li><strong>Tumor Primario:</strong> Pulmón</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Vibostolimab/Pembrolizumab + QT +  RT</li>\n<li><strong>B:</strong> QT + RT + Durvalumab</li>\n<li><strong>Nombre del investigador principal:</strong> Dra. Esther Rodríguez De Vásquez</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico de fase 3, para pacientes con diagnóstico de Cáncer de Pulmón de células no pequeñas en estadio III, localmente avanzado no operable. El paciente recibirá inmunoterapia + quimioterapia + radioterapia.</p>',
    etiquetas: ["todos", "pulmon"],
    img: "./img/cover/cover5.jpg",
    videoLink: "https://youtu.be/blGFNF3cobY",
    infoLink:
      "https://www.clinicaltrials.gov/ct2/results?cond=NSCLC%2C+Stage+III&amp;term=&amp;cntry=CL&amp;state=&amp;city=concepcion&amp;dist=",
  },
  {
    id: "4",
    titulo: "Estudio BFAST",
    estado: "RECLUTAMIENTO CERRADO",
    descripcionProfesional:
      "<p class='card-text w-100'>Estudio fase II/III multicéntrico para evaluar la eficacia y seguridad de múltiples terapias dirigidas, como tratamiento para pacientes con cáncer de pulmón de células no pequeñas (CPCNP) avanzado o metastásico portadores de mutaciones somáticas tratables detectadas en sangre (BFAST: blood-first assay screening trial [<i>estudio de selección con valoración inicial en sangre</i>]).</p><p><ul><li><strong>Tumor Primario:</strong> Pulmón</li><li><strong>Fase:</strong> 2/3</li><li><strong>Rama de tratamiento:</strong><ul><li>GDC-6036</li><li>DOCETAXEL</li></ul></li><li><strong>Nombre del investigador principal:</strong> Dra. Esther Rodríguez De Vásquez</li></ul>",
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de Cáncer de Pulmón de células no pequeñas, avanzado o metastásico portador de mutaciones somáticas tratables detectadas en sangre, lo que determinará el tratamiento a seguir.</p>',
    etiquetas: ["todos", "pulmon"],
    img: "./img/cover/cover4.jpg",
    videoLink: "https://youtu.be/evpdSGNsuVI",
    infoLink:
      "https://clinicaltrials.gov/ct2/show/NCT03178552?term=GDC-6036&amp;cond=%22Carcinoma%2C+Non-Small-Cell+Lung%22&amp;draw=2&amp;rank=2",
  },
  {
    id: "3",
    titulo: "Estudio SERENA-4",
    estado: "RECLUTAMIENTO CERRADO",
    descripcionProfesional:
      "<p class='card-text w-100'>Estudio aleatorizado, multicéntrico, doble ciego, fase III de AZD9833 (un SERD oral) más palbociclib comparado con anastrozol más palbociclib para el tratamiento de pacientes con cáncer de mama avanzado receptor estrógenos positivo, HER2-negativo que no han recibido ningún tratamiento sistémico para enfermedad avanzada (SERENA-4).</p><p><ul><li><strong>Tumor Primario:</strong> Mama</li><li><strong>Fase:</strong> 3</li><li><strong>Rama de tratamiento:</strong><ul><li>AZD9833 + PALBOCICLIB + PLACEBO ANASTRAZOL</li><li>PLACEBO AZD9833 + PALBOCICLIB + ANASTRAZOL</li></ul></li><li><strong>Nombre del investigador principal:</strong> Dra. Esther Rodríguez De Vásquez</li></ul>",
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes diagnosticados con cáncer de mama avanzado, que no han recibido ningún tratamiento sistémico para enfermedad avanzada.</p>',
    etiquetas: ["todos", "mama"],
    img: "./img/cover/cover2.jpg",
    videoLink: "https://youtu.be/YrBh6Em1guw",
    infoLink:
      "https://clinicaltrials.gov/ct2/show/NCT04711252?term=AZD9833+SERENA-4&amp;draw=2&amp;rank=1",
  },
  {
    id: "2",
    titulo: "Estudio PTG-300",
    estado: "RECLUTAMIENTO CERRADO",
    descripcionProfesional:
      "<p class='card-text w-100'>Un estudio de Fase 3 del mimético de hepcidina, Rusfertida (PTG-300), en pacientes con policitemia vera.</p><p><ul><li><strong>Patología:</strong> Policitemia Vera</li><li><strong>Fase:</strong> 3</li><li><strong>Rama de tratamiento:</strong><ul><li>RUSFERTIDA/PLACEBO</li></ul></li><li><strong>Nombre del investigador principal:</strong> Dr. Mauricio Chandía Cabas</li></ul>",
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes diagnosticados con Policitemia Vera que requieren la realización de sangrías frecuentes. Los pacientes recibirán medicamento de estudio por vía subcutánea.</p>',
    etiquetas: ["todos", "hematologicos", "policitemia_vera"],
    img: "./img/cover/cover6.jpg",
    videoLink: "https://youtu.be/AvmGJmXFNq4",
    infoLink:
      "https://www.clinicaltrials.gov/study/NCT05210790?cond=Polycythemia%20Vera&amp;term=PTG-300-11&amp;rank=1",
  },
  {
    id: "1",
    titulo: "Estudio MK7684A-007",
    estado: "RECLUTAMIENTO CERRADO",
    descripcionProfesional:
      "<p class='card-text w-100'>Estudio aleatorizado, doble ciego, de fase 3 de MK-7684A más quimioterapia frente a pembrolizumab más quimioterapia como primera línea de tratamiento en participantes con cáncer de pulmón de células no pequeñas metastásico.</p><p><ul><li><strong>Tumor Primario:</strong> Pulmón</li><li><strong>Fase:</strong> 3</li><li><strong>Rama de tratamiento:</strong><ul><li><strong>A:</strong> Vibostolimab / Pembrolizumab + QT</li><li><strong>B:</strong> Pembrolizumab  + QT</li><li><strong>Nombre del investigador principal:</strong> Dra. Esther Rodríguez De Vásquez</li></ul></li></ul>",
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes diagnosticados con Cáncer de Pulmón de células no pequeñas, metastásico. El paciente recibirá quimioterapia e inmunoterapia.</p>',
    etiquetas: ["todos", "pulmon"],
    img: "./img/cover/cover3.jpg",
    videoLink: "https://youtu.be/iFrYwv2fYA8",
    infoLink:
      "https://www.clinicaltrials.gov/ct2/results?cond=Lung+Cancer+Metastatic&amp;term=&amp;cntry=CL&amp;state=&amp;city=Concepci%C3%B3n&amp;dist=",
  },
];

// Estado inicial
let vistaActual = "profesional";
let filtroActual = "todos";

// Función para generar tarjetas
function generarTarjetas() {
  const container = document.getElementById("card-container");
  container.innerHTML = ""; // Limpiar tarjetas anteriores

  // Filtrar tarjetas según el filtro actual
  const tarjetasFiltradas = tarjetas.filter(
    (tarjeta) =>
      filtroActual === "todos" || tarjeta.etiquetas.includes(filtroActual)
  );

  // Si no hay tarjetas que mostrar
  if (tarjetasFiltradas.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center">
        <div class="alert alert-info">
          No se encontraron estudios clínicos con el filtro seleccionado.
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
          <!-- En móviles la imagen ocupa todo el ancho, en tablets/desktop solo 1/3 -->
          <div class="col-12 col-md-4 position-relative">
            <!-- Altura fija en móviles, altura completa en desktop -->
            <div style="position: relative; height: 200px;">
              <img src="${tarjeta.img}" 
                   style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" alt="${
                     tarjeta.titulo
                   }">
              <button class="btn-play position-absolute" style="top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 10;">
                <a href="${tarjeta.videoLink}" data-fancybox>
                  <span class="material-symbols-outlined" style="font-size: 3rem; color: white; text-shadow: 0 0 10px rgba(0,0,0,0.5);">play_circle</span>
                </a>
              </button>
            </div>
          </div>
          <!-- En móviles ocupa todo el ancho, en tablets/desktop 2/3 -->
          <div class="col-12 col-md-8">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${tarjeta.titulo}</h5>
              <h6 class="card-subtitle mb-2 ${
                tarjeta.estado === "RECLUTAMIENTO ACTIVO"
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
  "cardiologia",
  "digestivo",
  "hematologicos",
  "leucemia_linfoma",
  "mama",
  "piel",
  "policitemia_vera",
  "prostata",
  "pulmon",
  "trombocitemia_esencial",
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
    
    .toggle-labels {
      display: flex;
      width: 120px;
      justify-content: space-between;
      font-size: 14px;
      color: #666;
    }
    
    .toggle-label-left {
      margin-right: 10px;
      font-weight: bold;
      color: #28a745;
    }
    
    .toggle-label-right {
      margin-left: 10px;
      color: #666;
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
    
    input:checked ~ .toggle-labels .toggle-label-left {
      font-weight: normal;
      color: #666;
    }
    
    input:checked ~ .toggle-labels .toggle-label-right {
      font-weight: bold;
      color: #28a745;
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

    // Actualizar las clases de las etiquetas
    document.querySelector(".toggle-label-left").style.fontWeight = this.checked
      ? "normal"
      : "bold";
    document.querySelector(".toggle-label-left").style.color = this.checked
      ? "#666"
      : "#28a745";
    document.querySelector(".toggle-label-right").style.fontWeight = this
      .checked
      ? "bold"
      : "normal";
    document.querySelector(".toggle-label-right").style.color = this.checked
      ? "#28a745"
      : "#666";

    generarTarjetas();
  });
}

// Función de inicialización
function inicializar() {
  inicializarFiltros();
  inicializarBotonesVista();

  // Establecer vista profesional como activa por defecto
  document.querySelector('[data-view="profesional"]').classList.add("active");

  // Generar tarjetas iniciales
  generarTarjetas();
}

// Iniciar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", inicializar);
