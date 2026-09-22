/* ==========================================================================
   BIOCENTER — Datos por sucursal (sede)
   ==========================================================================

   FUENTE ÚNICA DE VERDAD de todo lo que cambia entre sucursales:
     1. estudios  — los estudios clínicos que se listan en *-estudios.html
     2. equipo    — los integrantes del carrusel "Nuestro Equipo"
     3. contacto  — dirección, mapa, correo, teléfono y formulario

   Para cambiar cualquiera de esas tres cosas SE EDITA ESTE ARCHIVO, nunca el
   HTML. Las páginas declaran a qué sucursal pertenecen con el atributo
   data-sede del <body> (p. ej. <body data-sede="concepcion">) y los scripts
   compartidos (js/sede.js, js/team.js, js/estudios.js) leen de aquí.

   Las rutas de imágenes son relativas con prefijo "./" y todas las páginas
   HTML viven en la raíz del repo: no muevas páginas a subcarpetas o estas
   rutas dejarán de resolver.
   ========================================================================== */

const SEDES = {
  /* ------------------------------------------------------------------ */
  /* CONCEPCIÓN                                                          */
  /* ------------------------------------------------------------------ */
  concepcion: {
    slug: "concepcion",
    nombre: "Concepción",
    ciudad: "Concepción, Chile",
    home: "./concepcion.html",
    estudiosPagina: "./concepcion-estudios.html",
    contacto: {
      direccion: "Lincoyán 334, piso 7. Concepción",
      mapsUrl: "https://goo.gl/maps/DLA9LBs4oufcphHK9",
      email: "contacto@biocenter.cl",
      telefono: "+56 41 285 8421",
      telefonoHref: "+56412858421",
      formulario: "https://forms.gle/Gw8bVkeXEmGBjLDq9",
    },

    equipo: [
      {
        nombre: "jorge miranda yáñez",
        cargo: "director ejecutivo",
        imagen: "./img/equipo/jmiranda.jpg",
        modalId: "staticBackdrop1",
        descripcion:
          "Matrón con Maestría en Administración de Negocios (MBA). Con más de 30 años de experiencia en la industria farmacéutica, con conocimientos en el área de la Oncología y Administración de Empresas.",
      },
      {
        nombre: "Esther Rodriguez de Vásquez",
        cargo: "Director Médico y Oncólogo Médico",
        imagen: "./img/equipo/drarodriguez2.jpg",
        modalId: "staticBackdrop2",
        descripcion:
          '<p class="fs-6 px-3"> Médico Cirujano de la Universidad Central de Venezuela. Posteriormente obtiene el título de Medicina Interna en el Hospital Militar Carlos Arvelo y Oncología Médica en el Instituto Oncológico Luis Razetti de Venezuela. <br> Certificada en la Corporación Nacional Autónoma de Especialidades Médicas (CONACEM). <br> Médico Oncólogo del Hospital: Las Higueras, Clínica Sanatorio Alemán y Clínica Biobío, de la ciudad de Concepción. </p>',
      },
      {
        nombre: "Alvaro Compán Jiménez",
        cargo: "Cirujano Cabeza y Cuello",
        imagen: "./img/equipo/drcompan.jpg",
        modalId: "staticBackdrop3",
        descripcion:
          "Médico Cirujano de la Universidad de Chile. Posteriormente obtiene el título de Cirujano General en el Hospital Clínico de la misma Universidad. Cursa la sub especialidad de Cabeza y Cuello, Base de Cráneo, Cirugía Reconstructiva y Micro Reconstructiva en el Instituto de Tumores de Milán, Italia. Docente de Pre y Post grado del Departamento de Cirugía de la Facultad de Medicina de la Universidad de Concepción. Actualmente se desempeña como Sub-Jefe del equipo de Cabeza y Cuello del Hospital Clínico Regional, Guillermo Grant Benavente.",
      },
      {
        nombre: "M. José Sepúlveda Serrano",
        cargo: "Supervisora ensayos clínicos y regulatorio",
        imagen: "./img/equipo/mariajose.jpg",
        modalId: "staticBackdrop4",
        descripcion:
          "Especialista en Cuidados Intensivos del Adulto Universidad de Concepción Diplomada en Gestión y Dirección en Servicios de Enfermería Pontificia Universidad Católica de Chile. <ul> <li>Diplomada en Cuidados Cardiovasculares del Adulto Pontificia Universidad Católica de Chile.</li> <li>15 años de experiencia clínica en Hospitales Públicos de la región en áreas de Urgencias, Pabellón y Cuidados Intensivos del Adulto.</li> <li>11 años de experiencia como Coordinadora de Estudios Clínicos en áreas como: Oncología, Hematología,Cardiología, Nefrología, Broncopulmonar, Gastroenterología y Neurología.</li> </ul>",
      },
      {
        nombre: "Carolina Belmar Caamaño",
        cargo: "Coordinadora estudios clínicos",
        imagen: "./img/equipo/cbelmar.jpg",
        modalId: "staticBackdrop5",
        descripcion:
          "Encargada de brindar atención clínica a los pacientes y velar por el cumplimiento de protocolos e indicadores en salud. <br> <ul> <li>Epidemióloga formada en la Universidad de los Andes, Santiago</li> <li>Diploma en Gestión de Calidad y Seguridad Asistencial Universidad de Chile con experiencia en seguridad clínica, calidad y acreditación.</li> <li>Diplomado en Cuidados de Enfermería del paciente Oncológico Universidad San Sebastián. Con experiencia en la atención de pacientes oncológicos.</li> <li>Diploma en Investigación Clínica y Certificado de Monitor de Ensayos Clínicos, Universidad de Chile.</li> </ul>",
      },
      {
        nombre: "Evelyne Fuenzalida Araneda",
        cargo: "Asistente de coordinación y administración",
        imagen: "./img/equipo/efuenzalida.jpg",
        modalId: "staticBackdrop6",
        descripcion:
          "Técnico Superior de Enfermería, experiencia en Servicio de Unidad de Paciente Crítico, procedimiento cardiológico y pabellón ambulatorio Dental- Médico. <br> 6 años en Servicio de Oncología, Medicina, Cirugía y Unidad de Paciente Critico en la Clínica Sanatorio Alemán. 5 años en Centro Médico RED SALUD en unidad pabellón ambulatorio dental y médico, en la unidad de procedimientos médicos y cardiológicos y vacunatorio.",
      },
      {
        nombre: "Geraldo Pereira Roca",
        cargo: "Oncólogo Médico",
        imagen: "./img/equipo/gpereira.jpg",
        modalId: "staticBackdrop8",
        descripcion:
          'Médico Cirujano egresado de la Universidad de Carabobo 2009. Valencia - Venezuela. <br> Egresado en 2015, de la Especialidad de Oncología Médica realizada en el Instituto de Oncología "Dr. Luis Razetti" a cargo de la Universidad Central de Venezuela. Caracas - Venezuela. Eunacom 2021. <br> 10 años de experiencia, tanto nacional como internacional, en el área de tratamiento de pacientes oncológicos. Amplia experiencia en el área de investigación clínica.',
      },
      {
        nombre: "Mauricio Chandia Cabas",
        cargo: "Medicina Interna y Hematología",
        imagen: "./img/equipo/drchandia.jpg",
        modalId: "staticBackdrop10",
        descripcion:
          "Médico Cirujano titulado de la Universidad de la Frontera en Temuco, Chile. Cursa la especialidad de Medicina Interna en la Universidad Austral de Chile, en Valdivia. Luego hace su espacialidad de Hematología en la Pontificia Universidad Católica de Chile en Santiago. Posteriormente cursa un Master en Biología clínica del cáncer, Citometría de flujo, en la Universidad de Salamanca en Salamanca, España. Desde el año 2013 a la fecha se desempeña como Hematólogo Clínico en el Hospital Regional de Concepción, donde además es encargado del Laboratorio de Citometría de flujo.",
      },
      {
        nombre: "FERNANDA HIDALGO CABEZAS",
        cargo: "Medicina general y Subinvestigadora",
        imagen: "./img/equipo/fernanda.jpg",
        modalId: "staticBackdrop11",
        descripcion:
          "Médico Cirujano de la Universidad San Sebastián, postítulos de Infecciones Asociadas a Atención en Salud y de ACLS en la misma casa de estudios, luego se perfecciona en el Desarrollo de Habilidades y Competencias de Coaching en la Academy Global Coaching. <br> Actualmente es Médico residente del servicio de Hematología y Oncología del Hospital Guillermo Grant Benavente, Médico General del Centro Kinesiosport,  Encargada de gestión de la ONG Contracooltura y ejerce docencia en el Hospital simulado de la UNAB",
      },
      {
        nombre: "DIEGO RICÚ PAZ",
        cargo: " Coordinador estudios clínicos",
        imagen: "./img/equipo/diego.jpg",
        modalId: "staticBackdrop13",
        descripcion:
          "Enfermero de la Universidad San Sebastián de Concepción, Diplomado en cuidados de enfermería en paciente crítico adulto en la Universidad Católica de Chile. Experiencia en Hospitales públicos de la región en áreas de UCI Cardioquirurgica.",
      },
      {
        nombre: "JOSE MAURICIO BARBOSA HERNÁNDEZ",
        cargo: "Oncólogo Médico",
        imagen: "./img/equipo/jbarbosa.jpg",
        modalId: "staticBackdrop14",
        descripcion:
          "Médico Cirujano formado en Universidad Libre de Colombia seccional Barranquilla. <br> Médico Internista de la Universidad de Concepción de Chile y Sub-especialista en Oncología Médica, formado en el Instituto Nacional del Cáncer y Clínica Alemana de Santiago en convenio con la Universidad del Desarrollo de Chile.",
      },
      {
        nombre: "ROCIO SANHUEZA BENAVIDES",
        cargo: "Enfermera",
        imagen: "./img/equipo/rsanhueza.jpg",
        modalId: "staticBackdrop15",
        descripcion:
          "Enfermera de la Universidad de Concepción, Especialista en cuidadosintensivos del adulto de la Universidad de Concepción. Diplomada enCardiología para profesionales de la salud por Medical and ScientificKnowledge. <br> 10 años de experiencia clínica en paciente critico cardiológico.",
      },
      {
        nombre: "CAROLINA NUÑEZ MUÑOZ",
        cargo: "Enfermera",
        imagen: "./img/equipo/cnunez.jpg",
        modalId: "staticBackdrop16",
        descripcion:
          "Enfermera e Ingeniera de Ejecución en Administración, de la Universidad delDesarrollo. Actualmente cursa diplomado en gestión de Estudios Clínicos en laPontificia Universidad Católica de Chile.",
      },
      {
        nombre: "MICHELLE DE GOYENECHE RUVILAR",
        cargo: "Enfermera",
        imagen: "./img/equipo/mgoyeneche.jpg",
        modalId: "staticBackdrop17",
        descripcion:
          "Enfermera titulada de la Universidad San Sebastián de Concepción, Cursando Diplomado De Enfermería Cardiovascular Impartido por Medical & Scientific Knowledege, Capacitación en manejo de paciente crítico. Experiencia en Hospitales públicos de la región en áreas de UCI Cardioquirúrgica y Pabellón de Hemodinamia.",
      },
      {
        nombre: "CAMILA CABRERA CASTILLO",
        cargo: "Enfermera",
        imagen: "./img/equipo/ccabrera.jpg",
        modalId: "staticBackdrop18",
        descripcion:
          "Enfermera de la Universidad del Desarrollo de Concepción, diplomado en Investigación Clínica y certificación de monitoreo de la UNIVERSIDAD DE CHILE, SANTIAGO y diplomado de hemato-oncología traslacional de la Universidad Autónoma de Chile",
      },
    ],

    estudios: [
      {
        titulo: "D702GC00001 - ARTEMIDE LUNG 04",
        estado: "RECLUTAMIENTO ACTIVO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio de fase III, aleatorizado, doble ciego, multicéntrico y global de la monoterapia con rilvegostomig o pembrolizumab como tratamiento de primera línea de pacientes con cáncer de pulmón no microcítico metastásico con PD-L1 alto.</p>\n<p>\n<ul>\n<li><strong>Tumor primario:</strong> Pulmón</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Ramas de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Rilvegostomig 750 mg c/3 semanas (hasta progresión o toxicidad inaceptable)</li>\n<li><strong>B:</strong> Pembrolizumab 200 mg c/3 semanas (hasta progresión o toxicidad inaceptable)</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Geraldo Pereira Roca</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT06868277</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio de fase 3, para pacientes con cáncer de pulmón no microcítico metastásico con PD-L1 alto. El paciente recibirá monoterapia con rilvegostomig o pembrolizumab como tratamiento de primera línea.</p>',
        etiquetas: ["todos", "Oncología"],
        img: "./img/cover/cover1.jpg",
        videoLink: "#",
        infoLink: "https://clinicaltrials.gov/search?term=D702GC00001",
      },
      {
        titulo: "DS8201-793 – DESTINY LUNG 06",
        estado: "RECLUTAMIENTO ACTIVO",
        descripcionProfesional:
          '<p class="card-text w-100">Ensayo abierto, multicéntrico, aleatorizado, de fase III de trastuzumab deruxtecán en combinación con pembrolizumab frente a quimioterapia basada en platino en combinación con pembrolizumab como tratamiento de primera línea en participantes con cáncer de pulmón de células no pequeñas no escamoso, localmente avanzado irresecable o metastático, con sobreexpresión de HER2 y TPS de PD-L1 &lt;50 %.</p>\n<p>\n<ul>\n<li><strong>Tumor primario:</strong> Pulmón</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Ramas de tratamiento:</strong>\n<ul>\n<li><strong>Grupo A:</strong> T-DXd (5,4 mg/kg) + Pembrolizumab (200 mg) c/3 semanas</li>\n<li><strong>Grupo B:</strong> Pemetrexed (500 mg/m2) + quimioterapia con platino (cisplatino de 75 mg/m2 o ABC de carboplatino de 5 mg/ml/min) + Pembrolizumab (200 mg) c/3 semanas</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez De Vásquez</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT06899126</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Ensayo de trastuzumab deruxtecán en combinación con pembrolizumab frente a pembrolizumab con quimioterapia basada en platino en el tratamiento de primera línea del cáncer de pulmón de células no pequeñas con sobreexpresión de HER2.</p>',
        etiquetas: ["todos", "Oncología"],
        img: "./img/cover/cover2.jpg",
        videoLink: "#",
        infoLink: "https://clinicaltrials.gov/search?term=DS8201-793%20",
      },
      {
        titulo: "DS8201-724",
        estado: "RECLUTAMIENTO ACTIVO",
        descripcionProfesional:
          '<p class="card-text w-100">Ensayo de fase 3, multicéntrico, aleatorizado, abierto, de trastuzumab deruxtecán (Enhertu&reg;) más quimioterapia con o sin pembrolizumab frente a quimioterapia más trastuzumab con o sin pembrolizumab como tratamiento de primera línea en participantes con cáncer de estómago o de la unión gastroesofágica (UGE) irresecable, localmente avanzado o metastásico con sobreexpresión de HER2.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Cáncer gástrico</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Ramas de tratamiento:</strong>\n<ul>\n<li><strong>Cohorte principal:</strong> PD-L1 CPS &ge;1:\n<ul>\n<li><strong>Rama M1:</strong> T-DXd + 5-FU o capecitabina + pembrolizumab</li>\n<li><strong>Rama M2:</strong> Trastuzumab + quimioterapia basada en platino (cisplatino + 5-FU u oxaliplatino + capecitabina) + pembrolizumab</li>\n</ul>\n</li>\n<li><strong>Cohorte exploratoria:</strong> PD-L1 CPS &lt;1:\n<ul>\n<li><strong>Rama E1:</strong> T-DXd + 5-FU o capecitabina</li>\n<li><strong>Rama E2:</strong> Trastuzumab + quimioterapia basada en platino (cisplatino + 5-FU u oxaliplatino + capecitabina)</li>\n</ul>\n</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Geraldo Pereira Roca</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT06731478</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Ensayo de fase 3, de trastuzumab deruxtecán (Enhertu&reg;) más quimioterapia con o sin pembrolizumab frente a quimioterapia más trastuzumab con o sin pembrolizumab como tratamiento de primera línea en participantes con cáncer de estómago o de la unión gastroesofágica (UGE) irresecable, localmente avanzado o metastásico con sobreexpresión de HER2.</p>',
        etiquetas: ["todos", "Cardiología"],
        img: "./img/cover/cover3.jpg",
        videoLink: "#",
        infoLink: "https://clinicaltrials.gov/search?term=DS8201-724",
      },
      {
        titulo: "MK2140-003",
        estado: "RECLUTAMIENTO CERRADO",
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
        titulo: "MK2140-010",
        estado: "RECLUTAMIENTO CERRADO",
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
        titulo: "DS7300-203",
        estado: "RECLUTAMIENTO CERRADO",
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
        titulo: "AZURE-Outcomes - D7960C00015",
        estado: "RECLUTAMIENTO ABIERTO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio de fase III, aleatorizado, doble ciego, controlado con placebo y de grupos paralelos para evaluar el efecto de AZD0780 en eventos cardiovasculares adversos mayores en pacientes con enfermedad cardiovascular aterosclerótica establecida (ASCVD) o con alto riesgo de un primer evento ASCVD.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Dislipidemia</li>\n<li><strong>Fase:</strong> III</li>\n<li><strong>Ramas de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> AZD0780 30mg vo 1 vez al día + hipolipemiante de base</li>\n<li><strong>B:</strong> Placebo vo 1 vez al día + hipolipemiante de base</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Jorge Burnás Folch</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT07000357</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio de fase III de AZD0780 sobre eventos adversos cardiovasculares mayores en pacientes con antecedentes de eventos de ASCVD o con alto riesgo de un primer evento.</p>',
        etiquetas: ["todos", "Cardiología"],
        img: "./img/cover/cover1.jpg",
        videoLink: "#",
        infoLink: "https://clinicaltrials.gov/search?term=D7960C00015&amp;viewType=Card",
      },
      {
        titulo: "EvoPAR",
        estado: "RECLUTAMIENTO CERRADO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio de fase III aleatorizado, de 2 cohortes, doble ciego, controlado con placebo de AZD5305 en combinación con nuevos agentes hormonales elegidos por el médico en pacientes con cáncer de próstata metastásico HRRm y sin HRRm sensible a la castración.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Próstata</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>HRRm:</strong> AZD5305 + ADT + NHA (elección del investigador) / Placebo + ADT + NHA (elección del investigador)</li>\n<li><strong>No-HRRm:</strong> AZD5305 + ADT + NHA (elección del investigador) / Placebo + ADT + NHA (elección del investigador)</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico de fase 3, para pacientes con diagnóstico de Cáncer de Próstata metastásico sensible a la castración. Los pacientes recibirán AZD5305 (droga de estudio) + terapia con nuevos agentes hormonales.</p>',
        etiquetas: ["todos", "Oncología"],
        img: "./img/estudios/est16.jpg",
        videoLink: "https://youtu.be/etk8Axx5XZI",
        infoLink:
          "https://clinicaltrials.gov/study/NCT06120491?cond=Prostate%20Cancer&amp;term=evopar&amp;aggFilters=status:rec&amp;rank=1",
      },
      {
        titulo: "MK1026-008",
        estado: "RECLUTAMIENTO CERRADO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio aleatorizado de fase 3 para comparar la eficacia y seguridad de nemtabrutinib frente a quimioinmunoterapia para leucemia linfocítica crónica/linfoma linfocítico pequeño no tratados previamente, sin alteraciones de TP53 (BELLWAVE-008).</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Leucemia Linfocítica Crónica</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>1:</strong> NEMTABRUTINIB</li>\n<li><strong>2:</strong> BENDAMUSTINA + RITUXIMAB</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandía Cabas</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de Leucemia Linfocítica Crónica o Linfoma Linfocítico Pequeño, que no hayan sido tratados previamente. Los pacientes recibirán inhibidor de BTK o quimioinmunoterapia.</p>',
        etiquetas: ["todos", "Hematología"],
        img: "./img/estudios/est14.jpg",
        videoLink: "https://youtu.be/DfYsoOovKww",
        infoLink:
          "https://www.clinicaltrials.gov/study/NCT05624554?cond=Leukemia%20Lymphocytic%20Chronic%20B-Cell&amp;intr=Nemtabrutinib&amp;rank=1",
      },
      {
        titulo: "MK3543-007",
        estado: "RECLUTAMIENTO CERRADO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio clínico de fase 3, aleatorizado, doble ciego, controlado con comparador activo para evaluar la eficacia y la seguridad de bomedemstat (MK-3543) frente a hidroxiurea en participantes con trombocitemia esencial que nunca han recibido tratamiento citorreductor.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Trombocitemia esencial</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Bomedemstat + Placebo Hidroxiurea</li>\n<li><strong>B:</strong> Hidroxiurea + Placebo Bomedemstat</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandía Cabas</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico, para pacientes diagnosticados con con trombocitemia esencial que nunca han recibido tratamiento citorreductor. Los pacientes recibirán Bomedemstat (MK-3543) o Hidroxiurea por via oral.</p>',
        etiquetas: ["todos", "Hematología"],
        img: "./img/estudios/est13.jpg",
        videoLink: "https://youtu.be/huG8hhoNpLY",
        infoLink:
          "https://clinicaltrials.gov/study/NCT06456346?term=3543%20007&amp;rank=1",
      },
      {
        titulo: "MK0616-015",
        estado: "RECLUTAMIENTO CERRADO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio clínico de fase 3, aleatorizado, controlado con placebo para evaluar la eficacia y la seguridad de MK-0616 en la reducción de eventos cardiovasculares adversos graves en participantes con alto riesgo cardiovascular</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Eventos Cardiovasculares</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>1:</strong> MK0616 20 mg vo + Tratamiento hipolipemiante optimizado</li>\n<li><strong>2:</strong> Placebo + Tratamiento hipolipemiante optimizado</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Germán Arriagada Suazo</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico para evaluar la eficacia y la seguridad de MK-0616 (Enlicitide) en la reducción de eventos cardiovasculares adversos graves en participantes con alto riesgo cardiovascular.</p>',
        etiquetas: ["todos", "Cardiología"],
        img: "./img/estudios/est12.jpg",
        videoLink: "https://youtu.be/jg-DXrei0a0",
        infoLink:
          "https://clinicaltrials.gov/study/NCT06008756?term=0616-015&amp;rank=1",
      },
      {
        titulo: "CA224-1044",
        estado: "RECLUTAMIENTO CERRADO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio de fase II, abierto, de dos cohortes, para evaluar la preferencia del paciente por la combinación de dosis fijas subcutáneas de nivolumab + relatlimab en comparación con la combinación de dosis fijas intravenosas de nivolumab + relatlimab y evaluar el nivolumab subcutáneo en comparación con el nivolumab intravenoso en participantes con melanoma.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Melanoma</li>\n<li><strong>Fase:</strong> 2</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>Cohorte 1:</strong> Melanoma metastásico: Nivolumab + Relatlimab</li>\n<li><strong>Cohorte 2:</strong> Melanoma extirpado: Nivolumab</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de melanoma en el que se evalúa la preferencia del paciente en relación a la vía de administración de Nivolumab, endovenosa o subcutánea.</p>',
        etiquetas: ["todos", "Oncología"],
        img: "./img/estudios/est10.jpg",
        videoLink: "https://youtu.be/JVTuwpyWU9Q",
        infoLink:
          "https://www.clinicaltrials.gov/study/NCT06101134?intr=Nivolumab-Relatlimab&amp;locStr=Chile&amp;country=Chile&amp;rank=1",
      },
      {
        titulo: "SGNTUC-029",
        estado: "RECLUTAMIENTO ACTIVO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio de fase 3 de etiqueta abierta, aleatorizado para evaluar tucatinib en combinación con trastuzumab y mFOLFOX6 en comparación con mFOLFOX6 administrado de forma independiente o en conjunto con cetuximab o bevacizumab, como tratamiento de primera línea para sujetos con cáncer colorrectal metastásico HER2+.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Cáncer colorectal metastásico</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>1:</strong> Tucatinib + Trastuzumab + mFOLFOX6</li>\n<li><strong>2:</strong> mFOLFOX6 independiente o en conjunto con Bevacizumab o Cetuximab</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico de fase 3, para pacientes con cáncer colorrectal metastásico con mutación HER2+, con dos ramas de tratamiento: medicamentos antiHER2+ (Tucatinib y Trastuzumab) junto a quimioterapia estándar vs quimioterapia y anticuerpos monoclonales.</p>',
        etiquetas: ["todos", "Oncología"],
        img: "./img/estudios/est9.jpg",
        videoLink: "https://youtu.be/fEyimY1mHb8",
        infoLink:
          "https://clinicaltrials.gov/study/NCT05253651?term=SGNTUC-029&amp;rank=1",
      },
      {
        titulo: "MK1026-010",
        estado: "RECLUTAMIENTO ABIERTO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio aleatorizado, de etiqueta abierta, de fase 3 para comparar la eficacia y la seguridad de nemtabrutinib (MK-1026) más venetoclax frente a venetoclax más rituximab en participantes con leucemia linfocítica crónica/linfoma linfocítico de células pequeñas recidivantes/refractarios después de al menos 1 tratamiento previo (BELLWAVE-010)</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Leucemia linfocítica crónica/linfoma linfocítico de células pequeñas recidivantes/refractarios</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>1:</strong> Nemtabrutinib (MK-1026) + Venetoclax</li>\n<li><strong>2:</strong> Venetoclax + Rituximab</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Mauricio Chandía</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de leucemia linfocítica crónica/linfoma linfocítico de células pequeñas recidivantes o refractarios que no hayan respondido, al menos a 1 tratamiento previo.</p>',
        etiquetas: ["todos", "Hematología"],
        img: "./img/estudios/est8.jpg",
        videoLink: "https://youtu.be/r78EaGCKbiU",
        infoLink:
          "https://clinicaltrials.gov/study/NCT05947851?intr=Nemtabrutinib&amp;checkSpell=&amp;locStr=Concepci%C3%B3n,%20Chile&amp;country=Chile&amp;state=Bio%20Bio&amp;city=Concepci%C3%B3n&amp;rank=1",
      },
      {
        titulo: "CAMBRIA-1 - CA MAMA",
        estado: "RECLUTAMIENTO CERRADO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio de fase III, abierto, aleatorizado, para evaluar la eficacia y la seguridad de la terapia extendida con camizestrant (AZD9833, un degradador selectivo del receptor de estrógeno oral de nueva generación) en comparación con la terapia endocrina estándar (inhibidor de la aromatasa o tamoxifeno) en pacientes con cáncer de mama temprano ER+/HER2- y un riesgo intermedio o alto de recurrencia que han completado la terapia locorregional definitiva y al menos 2 años de terapia endocrina adyuvante estándar sin recurrencia de la enfermedad.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Cáncer de mama</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Continuarán con la TE estándar de elección del investigador (inhibidores de la aromatasa [AI; exemestano, letrozol, anastrozol], con o sin agonistas de la hormona liberadora de la hormona luteinizante [LHRH], o tamoxifeno, dosis estándar según el investigador, una vez al día).</li>\n<li><strong>B:</strong> Camizestrant (150 mg, una vez al día) con o sin agonistas de la LHRH</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico para pacientes con diagnóstico de Cáncer de mama, con riesgo intermedio o alto de recurrencia, que hayan completado la terapia de referencia (cirugía/radioterapia) y al menos dos años de terapia endocrina sin recurrencia de la enfermedad.</p>',
        etiquetas: ["todos", "Oncología"],
        img: "./img/estudios/est7.jpg",
        videoLink: "#",
        infoLink:
          "https://clinicaltrials.gov/study/NCT05774951?cond=Breast%20Cancer&amp;intr=Camizestrant&amp;lat=-36.8295992&amp;lng=-73.0524092&amp;locStr=Current%20Location&amp;distance=183&amp;term=D8531C00002&amp;rank=1",
      },
      {
        titulo: "Estudio MK7684A-006",
        estado: "RECLUTAMIENTO CERRADO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio de fase 3, de etiqueta abierta de MK-7684A (coformulación de vibostolimab con pembrolizumab) en combinación con quimiorradioterapia concurrente seguida de MK-7684A frente a quimiorradioterapia concurrente seguida de durvalumab en participantes con NSCLC en estadio III, irresecable, localmente avanzado.</p>\n<p>\n<ul>\n<li><strong>Tumor Primario:</strong> Pulmón</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Rama de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Vibostolimab/Pembrolizumab + QT +  RT</li>\n<li><strong>B:</strong> QT + RT + Durvalumab</li>\n<li><strong>Nombre del investigador principal:</strong> Dra. Esther Rodríguez De Vásquez</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico de fase 3, para pacientes con diagnóstico de Cáncer de Pulmón de células no pequeñas en estadio III, localmente avanzado no operable. El paciente recibirá inmunoterapia + quimioterapia + radioterapia.</p>',
        etiquetas: ["todos", "Oncología"],
        img: "./img/cover/cover5.jpg",
        videoLink: "#",
        infoLink:
          "https://www.clinicaltrials.gov/ct2/results?cond=NSCLC%2C+Stage+III&amp;term=&amp;cntry=CL&amp;state=&amp;city=concepcion&amp;dist=",
      },
      {
        titulo: "Estudio SERENA-4",
        estado: "RECLUTAMIENTO CERRADO",
        descripcionProfesional:
          "<p class='card-text w-100'>Estudio aleatorizado, multicéntrico, doble ciego, fase III de AZD9833 (un SERD oral) más palbociclib comparado con anastrozol más palbociclib para el tratamiento de pacientes con cáncer de mama avanzado receptor estrógenos positivo, HER2-negativo que no han recibido ningún tratamiento sistémico para enfermedad avanzada (SERENA-4).</p><p><ul><li><strong>Tumor Primario:</strong> Mama</li><li><strong>Fase:</strong> 3</li><li><strong>Rama de tratamiento:</strong><ul><li>AZD9833 + PALBOCICLIB + PLACEBO ANASTRAZOL</li><li>PLACEBO AZD9833 + PALBOCICLIB + ANASTRAZOL</li></ul></li><li><strong>Nombre del investigador principal:</strong> Dra. Esther Rodríguez De Vásquez</li></ul>",
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico para pacientes diagnosticados con cáncer de mama avanzado, que no han recibido ningún tratamiento sistémico para enfermedad avanzada.</p>',
        etiquetas: ["todos", "Oncología"],
        img: "./img/cover/cover2.jpg",
        videoLink: "https://youtu.be/4Ic9X_PncFM",
        infoLink:
          "https://clinicaltrials.gov/ct2/show/NCT04711252?term=AZD9833+SERENA-4&amp;draw=2&amp;rank=1",
      },
      {
        titulo: "Estudio PTG-300",
        estado: "RECLUTAMIENTO CERRADO",
        descripcionProfesional:
          "<p class='card-text w-100'>Un estudio de Fase 3 del mimético de hepcidina, Rusfertida (PTG-300), en pacientes con policitemia vera.</p><p><ul><li><strong>Patología:</strong> Policitemia Vera</li><li><strong>Fase:</strong> 3</li><li><strong>Rama de tratamiento:</strong><ul><li>RUSFERTIDA/PLACEBO</li></ul></li><li><strong>Nombre del investigador principal:</strong> Dr. Mauricio Chandía Cabas</li></ul>",
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico para pacientes diagnosticados con Policitemia Vera que requieren la realización de sangrías frecuentes. Los pacientes recibirán medicamento de estudio por vía subcutánea.</p>',
        etiquetas: ["todos", "Hematología"],
        img: "./img/cover/cover6.jpg",
        videoLink: "https://youtu.be/T0ZpsPM2DJ8",
        infoLink:
          "https://www.clinicaltrials.gov/study/NCT05210790?cond=Polycythemia%20Vera&amp;term=PTG-300-11&amp;rank=1",
      },
      {
        titulo: "D7700C00003",
        estado: "RECLUTAMIENTO ABIERTO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio de fase IIb, aleatorizado, doble ciego, controlado con placebo, paralelo y con dosis múltiples para evaluar la eficacia, la seguridad y la PK de AZD0292 en participantes de mínimo 12 años de edad con bronquiectasia y colonización crónica por pseudomonas aeruginosa.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Bronquiectasia</li>\n<li><strong>Fase:</strong> III</li>\n<li><strong>Ramas de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> AZD0292 450 mg el día 1 seguido de una dosis de mantenimiento de 150 mg cada 4 semanas ev</li>\n<li><strong>B:</strong> AZD0292 150 mg el día 1 seguido de una dosis de mantenimiento de 50 mg cada 4 semanas ev</li>\n<li><strong>C:</strong> Placebo cada 4 semanas ev</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Milenko Grbic Reyes</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT07088926</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio para evaluar la eficacia, la seguridad y la PK de AZD0292 administrado por vía intravenosa en participantes de 12 años de edad como mínimo con bronquiectasias y colonización crónica por pseudomonas aeruginosa.</p>',
        etiquetas: ["todos", "Broncopulmonar"],
        img: "./img/cover/cover1.jpg",
        videoLink: "#",
        infoLink: "https://clinicaltrials.gov/search?term=D7700C00003&amp;viewType=Card",
      },
      {
        titulo: "BalanceD-HF - D6402C00012",
        estado: "RECLUTAMIENTO ABIERTO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio de fase III, aleatorizado y doble ciego para evaluar el efecto de Balcinrenona/dapagliflozina, en comparación con Dapagliflozina, sobre el riesgo de eventos de insuficiencia cardíaca y muerte cardiovascular en pacientes con insuficiencia cardíaca y deterioro de la función renal.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Insuficiencia cardiaca</li>\n<li><strong>Fase:</strong> III</li>\n<li><strong>Ramas de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Balcinrenona 15 mg/Dapagliflozina 10 mg vo 1 vez al día</li>\n<li><strong>B:</strong> Balcinrenona 40 mg/Dapagliflozina 10 mg vo 1 vez al día</li>\n<li><strong>C:</strong> Dapagliflozina 10 mg vo 1 vez al día</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Jorge Burnás Folch</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT06307652</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio de fase III para evaluar el efecto de Balcinrenona/Dapagliflozina en pacientes con insuficiencia cardiaca y deterioro de la función renal.</p>',
        etiquetas: ["todos", "Cardiología"],
        img: "./img/cover/cover2.jpg",
        videoLink: "#",
        infoLink: "https://clinicaltrials.gov/search?term=D6402C00012&amp;viewType=Card",
      },
      {
        titulo: "ANT-010",
        estado: "RECLUTAMIENTO CERRADO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio de fase 3, multicéntrico, aleatorizado, doble ciego, controlado con placebo, con grupos paralelos para evaluar la eficacia y la seguridad de abelacimab en pacientes de riesgo alto con fibrilación auricular que se consideran no aptos para la anticoagulación oral (LILAC).</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Fibrilación auricular</li>\n<li><strong>Fase:</strong> III</li>\n<li><strong>Ramas de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Abelacimab 150 mg s.c. mensualmente</li>\n<li><strong>B:</strong> Placebo s.c. mensualmente</li>\n<li><strong>Nombre del investigador principal</strong> Dr. Germán Arriagada Suazo</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico para pacientes diagnosticados con Fibrilación Auricular de riesgo alto que se consideran no aptos para la anticoagulación oral.</p>',
        etiquetas: ["todos", "Cardiología"],
        img: "./img/cover/cover3.jpg",
        videoLink: "https://youtu.be/OAl4FshEcTk",
        infoLink: "https://clinicaltrials.gov/study/NCT05712200?term=ANT010&amp;rank=1",
      },
      {
        titulo: "EMBOLD - D7260C00015",
        estado: "RECLUTAMIENTO ABIERTO",
        descripcionProfesional:
          '<p class="card-text w-100">Protocolo maestro multicéntrico, aleatorizado, doble ciego y controlado con placebo de fase III para evaluar la eficacia y seguridad de elecogliprón en participantes con obesidad o sobrepeso, con o sin diabetes mellitus tipo 2.</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Obesidad</li>\n<li><strong>Fase:</strong> III</li>\n<li><strong>Ramas de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Elecogliprón 45 mg orales una vez al día durante 72 semanas</li>\n<li><strong>B:</strong> Elecogliprón 65 mg orales una vez al día durante 72 semanas</li>\n<li><strong>C:</strong> Placebo orales una vez al día durante 72 semanas</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Fernanda Hidalgo Cabezas</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT07667803</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Protocolo maestro para investigar la eficacia y la seguridad del elecogliprón en participantes con obesidad o sobrepeso, con o sin diabetes mellitus tipo 2.</p>',
        etiquetas: ["todos", "Medicina"],
        img: "./img/cover/cover4.jpg",
        videoLink: "#",
        infoLink: "https://clinicaltrials.gov/search?term=D7260C00015&amp;viewType=Card",
      },
      {
        titulo: "DS8201-854 – DESTINY ENDOMETRIAL 02",
        estado: "RECLUTAMIENTO ACTIVO",
        descripcionProfesional:
          '<p class="card-text w-100">Ensayo abierto, multicéntrico, aleatorizado, de fase III de trastuzumab deruxtecán comparado con quimioterapia del tratamiento de referencia con o sin radioterapia como tratamiento adyuvante para el cáncer de endometrio con expresión de HER2 (IHC 3+/2+).</p>\n<p>\n<ul>\n<li><strong>Patología:</strong> Cáncer de Endometrio</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Ramas de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> T-DXd 5,4 mg/kg c/3 semanas (17 ciclos) &plusmn; VCB (concomitante o posterior)</li>\n<li><strong>B:</strong> Quimioterapia de Carboplatino con ABC 5 o 6 y paclitaxel 175 mg/m2 c/3 semanas (6 ciclos) &plusmn; VCB (concomitante o posterior)</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez De Vásquez</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT07022483</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio de fase 3, de trastuzumab deruxtecán con o sin radioterapia frente a quimioterapia basada en platino con o sin radioterapia para pacientes con cáncer de endometrio con expresión de HER2+.</p>',
        etiquetas: ["todos", "Oncología"],
        img: "./img/cover/cover5.jpg",
        videoLink: "#",
        infoLink: "https://clinicaltrials.gov/search?term=NCT07022483",
      },
      {
        titulo: "ROSETTA Lung-202 - CA2660002",
        estado: "RECLUTAMIENTO ACTIVO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio aleatorizado, doble ciego, de fase 3, de monoterapia con Pumitamig comparada con pembrolizumab como tratamiento de primera línea en participantes con cáncer de pulmón de células no pequeñas localmente avanzado o metastásico con PD-L1 &ge; 50%.</p>\n<p>\n<ul>\n<li><strong>Tumor primario:</strong> Pulmón</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Ramas de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Pumitamig 1200 mg Q3W &lt;50 kg o 1500 mg Q3W &gt;50 kg i.v.</li>\n<li><strong>B:</strong> Pembrolizumab 200 mg Q3W i.v.</li>\n<li><strong>Nombre del investigador principal</strong> Dr. José Barbosa Hernández</li>\n<li><strong>Código clinicaltrials.gov:</strong> NCT07361510</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio de pumitamig frente a pembrolizumab en participantes con cáncer de pulmón no microcítico avanzado sin tratamiento previo y PD-L1 &ge; 50 %.</p>',
        etiquetas: ["todos", "Oncología"],
        img: "./img/cover/cover6.jpg",
        videoLink: "#",
        infoLink: "https://clinicaltrials.gov/search?term=CA2660002&amp;viewType=Card",
      },
      {
        titulo: "Estudio MK7684A-007",
        estado: "RECLUTAMIENTO CERRADO",
        descripcionProfesional:
          '<p class="card-text w-100">Estudio aleatorizado, doble ciego, de fase 3 de MK-7684A más quimioterapia frente a pembrolizumab más quimioterapia como primera línea de tratamiento en participantes con cáncer de pulmón de células no pequeñas metastásico.</p>\n<p>\n<ul>\n<li><strong>Tumor primario:</strong> Pulmón</li>\n<li><strong>Fase:</strong> 3</li>\n<li><strong>Ramas de tratamiento:</strong>\n<ul>\n<li><strong>A:</strong> Vibostolimab / Pembrolizumab + QT</li>\n<li><strong>B:</strong> Pembrolizumab + QT</li>\n<li><strong>Nombre del investigador principal</strong> Dra. Esther Rodríguez De Vásquez</li>\n</ul>\n</li>\n</ul>\n</p>',
        descripcionPaciente:
          '<p class="card-text w-100">Estudio clínico para pacientes diagnosticados con Cáncer de Pulmón de células no pequeñas, metastásico. El paciente recibirá quimioterapia e inmunoterapia.</p>',
        etiquetas: ["todos", "Oncología"],
        img: "./img/cover/cover1.jpg",
        videoLink: "#",
        infoLink:
          "https://www.clinicaltrials.gov/ct2/results?cond=Lung+Cancer+Metastatic&amp;term=&amp;cntry=CL&amp;state=&amp;city=Concepci%C3%B3n&amp;dist=",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* CHILLÁN                                                             */
  /* ------------------------------------------------------------------ */
  /* TODO: DATOS PENDIENTES DE LA SUCURSAL DE CHILLÁN.
     Los campos de contacto marcados abajo son PLACEHOLDERS y deben ser
     reemplazados por los datos reales antes de publicar. Los arreglos
     `equipo` y `estudios` están intencionalmente vacíos: no se inventa
     personal clínico ni estudios de investigación. Al completarlos, copia
     la misma FORMA de objeto usada en Concepción, pero NO reutilices sus
     valores de `modalId`: cada integrante necesita un id propio dentro de
     su sucursal (usa el prefijo `chillanBackdrop1`, `chillanBackdrop2`, …). */
  chillan: {
    slug: "chillan",
    nombre: "Chillán",
    ciudad: "Chillán, Chile",
    home: "./chillan.html",
    estudiosPagina: "./chillan-estudios.html",
    contacto: {
      // TODO: dirección real de la sucursal de Chillán
      direccion: "Dirección por confirmar. Chillán",
      // TODO: enlace real de Google Maps
      mapsUrl: "https://www.google.com/maps/search/Chill%C3%A1n",
      // TODO: confirmar si Chillán usa un correo propio
      email: "contacto@biocenter.cl",
      // TODO: teléfono real de la sucursal de Chillán
      telefono: "+56 41 285 8421",
      telefonoHref: "+56412858421",
      // TODO: confirmar si Chillán usa un formulario propio
      formulario: "https://forms.gle/Gw8bVkeXEmGBjLDq9",
    },

    // TODO: integrantes del equipo de Chillán (misma forma que Concepción:
    // { nombre, cargo, imagen, modalId, descripcion }). `modalId` debe ser
    // único dentro de este arreglo, p. ej. "chillanBackdrop1".
    equipo: [],

    // TODO: estudios clínicos de Chillán (misma forma que Concepción:
    // { titulo, estado, descripcionProfesional, descripcionPaciente,
    //   etiquetas, img, videoLink, infoLink })
    estudios: [],
  },
};

/* --------------------------------------------------------------------------
   Utilidades compartidas
   -------------------------------------------------------------------------- */

/** Devuelve el slug de la sucursal declarada en <body data-sede="...">. */
function sedeActualSlug() {
  const slug = document.body && document.body.dataset.sede;
  return slug && SEDES[slug] ? slug : "concepcion";
}

/** Devuelve el objeto completo de la sucursal de la página actual. */
function sedeActual() {
  return SEDES[sedeActualSlug()];
}
