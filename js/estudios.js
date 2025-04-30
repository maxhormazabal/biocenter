// Datos de las tarjetas en formato JSON
const tarjetas = [
  {
    id: "21",
    titulo: "MK2140-003",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio fase 2/3, aleatorizado, etiqueta abierta, con control activo, multicéntrico de zilovertamab vedotina (MK-2140) en combinación con el tratamiento de referencia en participantes con linfoma difuso de células B grandes refractario o recidivante.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Linfoma difuso de células B grandes refractario o recidivante. </li>\n<li><strong>Fase:</strong> 2/3</li>\n<li><strong>Grupos de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> MK 2140 (1,75 mg/kg Q3W) + R GemOx (6 ciclos)</li>\n<li><strong>B:</strong> R – GemOx (6 ciclos)</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandia</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT05139017</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio fase 2 para evaluar la farmacocinética, eficacia y seguridad de pembrolizumab subcutáneo coformulado con hialuronidasa (MK-3475A) en participantes con linfoma de Hodgkin clásico refractario o recidivante (rrcHL) o linfoma mediastínico primario de células B grandes refractario o recidivante (rrPMBCL).</p>',
    etiquetas: ["todos", "Hematología"],
    img: "./img/cover/cover1.jpg",
    videoLink: "#",
    infoLink:
      "https://clinicaltrials.gov/study/NCT05139017?term=zilovertamab&page=2&rank=12",
  },
  {
    id: "20",
    titulo: "MK2140-010",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio fase 3, aleatorizado, etiqueta abierta, multicéntrico de zilovertamab vedotina (MK-2140) en combinación con R-CHP frente a R-CHOP en participantes con linfoma difuso de células B grandes (DLBCL) que no recibieron tratamiento previo.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Linfoma difuso de células B grandes.</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Grupos de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> ZV + R-CHP (Q3W durante 6 ciclos)</li>\n<li><strong>B:</strong> R-CHOP (Q3W durante 6 ciclos)</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandia</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT06717347</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio fase 3, aleatorizado, etiqueta abierta, multicéntrico de zilovertamab vedotina (MK-2140) en combinación con R-CHP frente a R-CHOP en participantes con linfoma difuso de células B grandes (DLBCL) que no recibieron tratamiento previo.</p>',
    etiquetas: ["todos", "Hematología"],
    img: "./img/cover/cover2.jpg",
    videoLink: "#",
    infoLink:
      "https://clinicaltrials.gov/study/NCT06717347?term=zilovertamab&rank=10",
  },
  {
    id: "19",
    titulo: "MK3475A-F65",
    estado: "RECLUTAMIENTO CERRADO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio fase 2 para evaluar la farmacocinética, eficacia y seguridad de pembrolizumab subcutáneo coformulado con hialuronidasa (MK-3475A) en participantes con linfoma de Hodgkin clásico refractario o recidivante (rrcHL) o linfoma mediastínico primario de células B grandes refractario o recidivante (rrPMBCL).</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Linfoma de Hodgkin o linfoma mediastínico primario de células B grandes.</li>\n<li><strong>Fase:</strong> 2</li>\n<li><strong>Grupos de tratamiento:</strong>\n<ul>\n<li>MK-3475A SC 790 mg Q6W</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandia</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT06504394</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio fase 2 para evaluar la farmacocinética, eficacia y seguridad de pembrolizumab subcutáneo coformulado con hialuronidasa (MK-3475A) en participantes con linfoma de Hodgkin clásico refractario o recidivante (rrcHL) o linfoma mediastínico primario de células B grandes refractario o recidivante (rrPMBCL).</p>',
    etiquetas: ["todos", "Hematología"],
    img: "./img/cover/cover3.jpg",
    videoLink: "#",
    infoLink:
      "https://clinicaltrials.gov/study/NCT06504394?term=MK3475A-F65&rank=1",
  },
  {
    id: "18",
    titulo: "DS7300-203",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio de fase 1b/2, pantumoral y abierto para evaluar la eficacia y la seguridad del Ifinatamab deruxtecán (i-dxd) en participantes con tumores sólidos recurrentes o Metastásicos.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> consta de 13 cohortes de tratamiento dirigido a los siguientes tipos de tumores: \n<ol>\n<li>Cáncer de endometrio (2L-4L)</li>\n<li>Carcinoma de células escamosas de cabeza y cuello (HNSCC) (2L/3L)</li>\n<li>Adenocarcinoma ductal pancreático (PDAC) (2L/3L)</li>\n<li>Cáncer colorrectal (CRC) (2L/3L)</li>\n<li>Carcinoma hepatocelular (CHC) (2L/3L)</li>\n<li>Adenocarcinoma de esófago, unión gastroesofágica y estómago (Ad-Eso/UGE/gástrico) (2L/3L)</li>\n<li>Carcinoma urotelial (CU) (2L-4L)</li>\n<li>Cáncer de ovario (CO) (2L+)</li>\n<li>Cáncer de cuello uterino (CCU) (2L+)</li>\n<li>Cáncer de vías biliares (CVB) (2L+)</li>\n<li>Cáncer de mama HER2 bajo (3L/4L)</li>\n<li>Cáncer de mama HER2 IHQ 0 (3L/4L)</li>\n<li>Melanoma (2L+)</li>\n</ol>\n </li>\n<li><strong>Fase:</strong> 1b/2</li>\n<li><strong>Grupos de tratamiento:</strong>\n<ul>\n<li> I-DXd 12 mg/kg c/3 semanas</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT06330064</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio de fase 1b/2, pantumoral y abierto para evaluar la eficacia y la seguridad del Ifinatamab deruxtecán (i-dxd) en participantes con tumores sólidos recurrentes o Metastásicos.</p>',
    etiquetas: ["todos", "Oncología"],
    img: "./img/cover/cover4.jpg",
    videoLink: "#",
    infoLink: "https://clinicaltrials.gov/search?term=DS7300-203",
  },
  {
    id: "17",
    titulo: "MK2870-011",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio fase 3, compara eficacia y seguridad de sacituzumab tirumotecán (sac-TMT, MK-2870) como monoterapia y en combinación con pembrolizumab (MK-3475) frente al tratamiento elegido por el médico en participantes con cáncer de mama triple negativo, sin tratamiento previo, localmente recurrente, metastásico o irresecable, con CPS de PD-L1 menor a 10.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Cáncer de mama Triple Negativo</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Grupos de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> RAMA A:  sac-TMT (4mg/kg q2w)</li>\n<li><strong>B:</strong> sac-TMT (4mg/kg q2w) + Pembrolizumab (400 mg q6w x 18 adm)</li>\n<li><strong>C:</strong> TPC Gemcitabina (1000 mg/m2) D1 y D8 q3w + Carboplatino (AUC 2 mg/ml/min) D1 y D8</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Geraldo Pereira</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT06841354</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio fase 3, compara eficacia y seguridad de sacituzumab tirumotecán (sac-TMT, MK-2870) como monoterapia y en combinación con pembrolizumab (MK-3475) frente al tratamiento elegido por el médico en participantes con cáncer de mama triple negativo, sin tratamiento previo, localmente recurrente, metastásico o irresecable, con CPS de PD-L1 menor a 10.</p>',
    etiquetas: ["todos", "Oncología"],
    img: "./img/cover/cover5.jpg",
    videoLink: "#",
    infoLink: "https://clinicaltrials.gov/search?term=2870%20011&checkSpell=",
  },
  {
    id: "16",
    titulo: "CAMBRIA 2",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio fase 3, para evaluar la eficacia y la seguridad de camizestrant adyuvante (AZD9833, un degradador selectivo del receptor de estrógeno oral de nueva generación) en comparación con TE estándar en pacientes con cáncer de mama temprano ER+/HER2- y un riesgo intermedio-alto o alto de recurrencia que han completado el tratamiento locorregional definitivo y no tienen evidencia de enfermedad.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Cáncer de mama</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Grupos de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> TE estándar (AI o tamoxifeno) + Abemaciclib (+ agonista de la LHRH)</li>\n<li><strong>B:</strong> Camizestrant (75 mg una vez al día) ± Abemaciclib (+ agonista de la LHRH)</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT05952557</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio fase 3, para evaluar la eficacia y la seguridad de camizestrant adyuvante (AZD9833, un degradador selectivo del receptor de estrógeno oral de nueva generación) en comparación con TE estándar en pacientes con cáncer de mama temprano ER+/HER2- y un riesgo intermedio-alto o alto de recurrencia que han completado el tratamiento locorregional definitivo y no tienen evidencia de enfermedad.</p>',
    etiquetas: ["todos", "Oncología"],
    img: "./img/cover/cover6.jpg",
    videoLink: "#",
    infoLink: "https://clinicaltrials.gov/search?intr=CAMBRIA2",
  },
  {
    id: "15",
    titulo: "EvoPAR",
    estado: "RECLUTAMIENTO ACTIVO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio de fase III aleatorizado, de 2 cohortes, doble ciego, controlado con placebo de AZD5305 en combinación con nuevos agentes hormonales elegidos por el médico en pacientes con cáncer de próstata metastásico HRRm y sin HRRm sensible a la castración.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Próstata</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>HRRm:</strong> AZD5305 + ADT + NHA (elección del investigador) / Placebo + ADT + NHA (elección del investigador)</li>\n<li><strong>No-HRRm:</strong> AZD5305 + ADT + NHA (elección del investigador) / Placebo + ADT + NHA (elección del investigador)</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico de fase 3, para pacientes con diagnóstico de Cáncer de Próstata metastásico sensible a la castración. Los pacientes recibirán AZD5305 (droga de estudio) + terapia con nuevos agentes hormonales.</p>',
    etiquetas: ["todos", "Oncología"],
    img: "./img/estudios/est16.jpg",
    videoLink: "https://youtu.be/DOfie9PVIOE",
    infoLink:
      "https://clinicaltrials.gov/study/NCT06120491?cond=Prostate%20Cancer&amp;term=evopar&amp;aggFilters=status:rec&amp;rank=1",
  },
  {
    id: "13",
    titulo: "MK1026-008",
    estado: "RECLUTAMIENTO CERRADO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio aleatorizado de fase 3 para comparar la eficacia y seguridad de nemtabrutinib frente a quimioinmunoterapia para leucemia linfocítica crónica/linfoma linfocítico pequeño no tratados previamente, sin alteraciones de TP53 (BELLWAVE-008).</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Leucemia Linfocítica Crónica</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>1:</strong> NEMTABRUTINIB</li>\n<li><strong>2:</strong> BENDAMUSTINA + RITUXIMAB</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandía Cabas</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de Leucemia Linfocítica Crónica o Linfoma Linfocítico Pequeño, que no hayan sido tratados previamente. Los pacientes recibirán inhibidor de BTK o quimioinmunoterapia.</p>',
    etiquetas: ["todos", "Hematología"],
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
    etiquetas: ["todos", "Hematología"],
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
    etiquetas: ["todos", "Cardiología"],
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
    etiquetas: ["todos", "Cardiología"],
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
    etiquetas: ["todos", "Oncología"],
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
    etiquetas: ["todos", "Oncología"],
    img: "./img/estudios/est9.jpg",
    videoLink: "https://youtu.be/aHNdRCToNSg",
    infoLink:
      "https://clinicaltrials.gov/study/NCT05253651?term=SGNTUC-029&amp;rank=1",
  },
  {
    id: "7",
    titulo: "MK1026-010",
    estado: "RECLUTAMIENTO CERRADO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio aleatorizado, de etiqueta abierta, de fase 3 para comparar la eficacia y la seguridad de nemtabrutinib (MK-1026) más venetoclax frente a venetoclax más rituximab en participantes con leucemia linfocítica crónica/linfoma linfocítico de células pequeñas recidivantes/refractarios después de al menos 1 tratamiento previo (BELLWAVE-010)</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Leucemia linfocítica crónica/linfoma linfocítico de células pequeñas recidivantes/refractarios</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>1:</strong> Nemtabrutinib (MK-1026) + Venetoclax</li>\n<li><strong>2:</strong> Venetoclax + Rituximab</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandía</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de leucemia linfocítica crónica/linfoma linfocítico de células pequeñas recidivantes o refractarios que no hayan respondido, al menos a 1 tratamiento previo.</p>',
    etiquetas: ["todos", "Hematología"],
    img: "./img/estudios/est8.jpg",
    videoLink: "https://youtu.be/KbPIBDpyJq8",
    infoLink:
      "https://clinicaltrials.gov/study/NCT05947851?intr=Nemtabrutinib&amp;checkSpell=&amp;locStr=Concepci%C3%B3n,%20Chile&amp;country=Chile&amp;state=Bio%20Bio&amp;city=Concepci%C3%B3n&amp;rank=1",
  },
  {
    id: "6",
    titulo: "CAMBRIA-1 - CA MAMA",
    estado: "RECLUTAMIENTO CERRADO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio de fase III, abierto, aleatorizado, para evaluar la eficacia y la seguridad de la terapia extendida con camizestrant (AZD9833, un degradador selectivo del receptor de estrógeno oral de nueva generación) en comparación con la terapia endocrina estándar (inhibidor de la aromatasa o tamoxifeno) en pacientes con cáncer de mama temprano ER+/HER2- y un riesgo intermedio o alto de recurrencia que han completado la terapia locorregional definitiva y al menos 2 años de terapia endocrina adyuvante estándar sin recurrencia de la enfermedad.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Cáncer de mama</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Continuarán con la TE estándar de elección del investigador (inhibidores de la aromatasa [AI; exemestano, letrozol, anastrozol], con o sin agonistas de la hormona liberadora de la hormona luteinizante [LHRH], o tamoxifeno, dosis estándar según el investigador, una vez al día).</li>\n<li><strong>B:</strong> Camizestrant (150 mg, una vez al día) con o sin agonistas de la LHRH</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de Cáncer de mama, con riesgo intermedio o alto de recurrencia, que hayan completado la terapia de referencia (cirugía/radioterapia) y al menos dos años de terapia endocrina sin recurrencia de la enfermedad.</p>',
    etiquetas: ["todos", "Oncología"],
    img: "./img/estudios/est7.jpg",
    videoLink: "https://youtu.be/Qd3YeVIZgtE",
    infoLink:
      "https://clinicaltrials.gov/study/NCT05774951?cond=Breast%20Cancer&amp;intr=Camizestrant&amp;lat=-36.8295992&amp;lng=-73.0524092&amp;locStr=Current%20Location&amp;distance=183&amp;term=D8531C00002&amp;rank=1",
  },
  {
    id: "5",
    titulo: "Estudio MK7684A-006",
    estado: "RECLUTAMIENTO CERRADO",
    descripcionProfesional:
      '<p class="card-text w-100">Estudio de fase 3, de etiqueta abierta de MK-7684A (coformulación de vibostolimab con pembrolizumab) en combinación con quimiorradioterapia concurrente seguida de MK-7684A frente a quimiorradioterapia concurrente seguida de durvalumab en participantes con NSCLC en estadio III, irresecable, localmente avanzado.</p>\n<p>\n<ul>\n<li><strong>Tumor Primario:</strong> Pulmón</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Vibostolimab/Pembrolizumab + QT +  RT</li>\n<li><strong>B:</strong> QT + RT + Durvalumab</li>\n<li><strong>Nombre del investigador principal:</strong> Dra. Esther Rodríguez De Vásquez</li>\n</ul>\n</li>\n</ul>\n</p>',
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico de fase 3, para pacientes con diagnóstico de Cáncer de Pulmón de células no pequeñas en estadio III, localmente avanzado no operable. El paciente recibirá inmunoterapia + quimioterapia + radioterapia.</p>',
    etiquetas: ["todos", "Oncología"],
    img: "./img/cover/cover5.jpg",
    videoLink: "https://youtu.be/blGFNF3cobY",
    infoLink:
      "https://www.clinicaltrials.gov/ct2/results?cond=NSCLC%2C+Stage+III&amp;term=&amp;cntry=CL&amp;state=&amp;city=concepcion&amp;dist=",
  },
  {
    id: "3",
    titulo: "Estudio SERENA-4",
    estado: "RECLUTAMIENTO CERRADO",
    descripcionProfesional:
      "<p class='card-text w-100'>Estudio aleatorizado, multicéntrico, doble ciego, fase III de AZD9833 (un SERD oral) más palbociclib comparado con anastrozol más palbociclib para el tratamiento de pacientes con cáncer de mama avanzado receptor estrógenos positivo, HER2-negativo que no han recibido ningún tratamiento sistémico para enfermedad avanzada (SERENA-4).</p><p><ul><li><strong>Tumor Primario:</strong> Mama</li><li><strong>Fase:</strong> 3</li><li><strong>Rama de tratamiento:</strong><ul><li>AZD9833 + PALBOCICLIB + PLACEBO ANASTRAZOL</li><li>PLACEBO AZD9833 + PALBOCICLIB + ANASTRAZOL</li></ul></li><li><strong>Nombre del investigador principal:</strong> Dra. Esther Rodríguez De Vásquez</li></ul>",
    descripcionPaciente:
      '<p class="card-text w-100">Estudio clínico para pacientes diagnosticados con cáncer de mama avanzado, que no han recibido ningún tratamiento sistémico para enfermedad avanzada.</p>',
    etiquetas: ["todos", "Oncología"],
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
    etiquetas: ["todos", "Hematología"],
    img: "./img/cover/cover6.jpg",
    videoLink: "https://youtu.be/AvmGJmXFNq4",
    infoLink:
      "https://www.clinicaltrials.gov/study/NCT05210790?cond=Polycythemia%20Vera&amp;term=PTG-300-11&amp;rank=1",
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
const filtros = ["todos", "Oncología", "Cardiología", "Hematología"];

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

// Función de inicialización
function inicializar() {
  inicializarFiltros();
  inicializarBotonesVista();

  // Establecer valores iniciales
  vistaActual = "profesional";
  (filtroActual = "todos"),
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
`;
document.head.appendChild(cardStyles);
