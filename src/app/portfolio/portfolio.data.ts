import { Experience, Profile, Project, TechnologyGroup } from './portfolio.models';

// Fuente: CV de Cristian Fuentes. Las referencias web solo orientan la estructura.
const email = 'cristianignacio71@gmail.com';

export const profile: Profile = {
  homePortrait: {
    src: '/images/cristian-home-004.jpg',
    alt: 'Cristian Fuentes con traje azul, mirando a la cámara',
    position: '57% 5%',
    zoom: 1.9,
  },
  aboutPortrait: {
    src: '/images/cristian-about-001.jpg',
    alt: 'Cristian Fuentes con traje azul y los brazos cruzados',
    position: '50% 15%',
    zoom: 1.8,
  },
  name: 'Cristian Ignacio Fuentes Gutiérrez',
  shortName: 'Cristian Fuentes',
  role: 'Estudiante de Ingeniería Civil en Computación',
  location: 'Santiago, Chile',
  introduction:
    'Desarrollo aplicaciones web y trabajo con datos para resolver problemas reales. Me interesan el backend, la integración de información y la automatización de procesos.',
  availability: 'Disponibilidad inmediata',
  email,
  links: [
    { label: 'GitHub', url: 'https://github.com/CristianIgnacio', icon: '/icons/github.svg' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cristianignacio1',
      icon: '/icons/linkedin.svg',
    },
    {
      label: 'Enviar correo electrónico',
      url: `mailto:${email}`,
      icon: '/icons/gmail.svg',
    },
  ],
  about: [
    'Soy Cristian, estudiante de Ingeniería Civil en Computación en la Universidad de Chile, con experiencia en desarrollo backend y procesamiento de datos.',
    'Me interesa diseñar sistemas que integren información desde distintas fuentes y automatizar procesos. He trabajado en aplicaciones de gestión interna y visualización de información durante mis prácticas profesionales y mi trabajo de título.',
    'Abordo los desafíos con un enfoque analítico, autonomía para aprender y disposición para trabajar tanto de manera individual como en equipo.',
  ],
  interests: ['Aplicaciones interactivas', 'Bases de datos', 'Optimización de sistemas'],
  education: [
    {
      degree: 'Ingeniería Civil en Computación',
      institution: 'Universidad de Chile',
      period: '2021 – Actualidad',
      details: ['Estudiante destacado en 2021 y 2022, con promedio igual o superior a 5,70.'],
    },
    {
      degree: 'Programa Académico de Bachillerato',
      institution: 'Universidad de Chile',
      period: '2019 – 2020',
      details: [
        'Bachiller con mención en Ciencias Naturales y Exactas.',
        'Graduado con distinción máxima.',
      ],
    },
  ],
  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Básico, lectura técnica' },
  ],
};

export const experiences: readonly Experience[] = [
  {
    id: 'nic-chile',
    role: 'Trabajo de título · Estadísticas públicas de NIC Chile',
    organization: 'NIC Chile',
    start: '2026-01',
    startLabel: 'Enero de 2026',
    end: '2026-03',
    endLabel: 'Marzo de 2026',
    contributions: [
      'Diseñé e implementé una plataforma web para publicar y visualizar estadísticas.',
      'Desarrollé el backend con Java y Spring Boot y el frontend con Angular y TypeScript.',
      'Diseñé y gestioné la base de datos MySQL.',
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'MySQL'],
  },
  {
    id: 'comision-nacional-energia',
    role: 'Práctica profesional',
    organization: 'Comisión Nacional de Energía',
    team: 'Unidad de Información, Innovación Energética y Relaciones Institucionales',
    start: '2025-02',
    startLabel: 'Febrero de 2025',
    end: '2025-04',
    endLabel: 'Abril de 2025',
    contributions: [
      'Desarrollé una aplicación web utilizando Angular.',
      'Implementé funcionalidades frontend para la visualización de información.',
    ],
    technologies: ['Angular'],
  },
  {
    id: 'senapred',
    role: 'Práctica profesional para gabinete',
    organization: 'Servicio Nacional de Prevención y Respuesta ante Desastres (SENAPRED)',
    team: 'Equipo de asesoría en innovación y desarrollo',
    start: '2024-01',
    startLabel: 'Enero de 2024',
    end: '2024-02',
    endLabel: 'Febrero de 2024',
    contributions: [
      'Desarrollé una aplicación web en PHP para la gestión interna.',
      'Diseñé y manejé bases de datos SQL.',
    ],
    technologies: ['PHP', 'SQL'],
  },
];

export const technologyGroups: readonly TechnologyGroup[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    items: ['Angular', 'React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    id: 'backend',
    name: 'Backend',
    items: ['Spring Boot', 'Django', 'Django REST Framework', 'Node.js'],
  },
  {
    id: 'lenguajes',
    name: 'Lenguajes',
    items: ['Python', 'Java', 'C', 'C++', 'Kotlin', 'SQL', 'PHP', 'Racket', 'R', 'GDScript'],
  },
  {
    id: 'bases-de-datos',
    name: 'Bases de datos',
    items: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'herramientas',
    name: 'Herramientas',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'Bash', 'Godot', 'Office', 'LaTeX'],
  },
  {
    id: 'herramientas-ia',
    name: 'Herramientas de IA',
    items: ['ChatGPT', 'Codex', 'Gemini', 'Antigravity', 'Claude Code', 'GitHub Copilot'],
  },
];

export const projects: readonly Project[] = [
  {
    id: 'soloropa',
    name: 'SoloRopa',
    images: [
      { src: '/images/soloropa-catalog.png', alt: 'Catálogo de ropa y accesorios de SoloRopa' },
      {
        src: '/images/soloropa-explorer.png',
        alt: 'Explorador avanzado de SoloRopa con filtros y productos',
      },
      {
        src: '/images/soloropa-home.png',
        alt: 'Página de inicio de SoloRopa con marcas y novedades',
      },
    ],
    context: 'Proyecto personal · En desarrollo',
    description:
      'Plataforma para descubrir ropa y marcas chilenas. Desarrollé un catálogo con scroll infinito y un sistema de posicionamiento basado en visitas, favoritos y recencia. También trabajé en la extracción de productos de tiendas WooCommerce, incluidos precios, imágenes, categorías, tallas y disponibilidad.',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'TypeScript', 'MongoDB'],
    codeUrl: 'https://github.com/CristianIgnacio/SoloRopa',
    demoUrl: 'https://soloropa.vercel.app/',
    demoLabel: 'Ver sitio',
  },
  {
    id: 'estadisticas-nic-chile',
    name: 'Estadísticas públicas de NIC Chile',
    images: [
      { src: '/images/nic-1.png', alt: 'Portada de estadísticas .CL con indicadores y categorías' },
      { src: '/images/nic-2.png', alt: 'Panel de mercado de NIC Chile con gráficos de dominios' },
      { src: '/images/nic-3.png', alt: 'Detalle de la evolución histórica de dominios .CL' },
    ],
    context: 'Trabajo de título · Prototipo funcional',
    description:
      'Diseñé una plataforma para publicar estadísticas del dominio .CL. Organicé 35 indicadores en mercado, geografía, infraestructura y seguridad; 30 se alimentaron con datos reales. Construí el procesamiento de datos, la base de datos, la API y visualizaciones interactivas. El frontend se integró en una rama del nuevo sitio de NIC Chile; la publicación institucional quedó pendiente.',
    technologies: ['Python', 'MySQL', 'Java', 'Spring Boot', 'Angular', 'Apache ECharts'],
  },
  {
    id: 'explorador-precios-cne',
    name: 'Explorador de Precios — Comisión Nacional de Energía',
    images: [
      { src: '/images/cne-1.png', alt: 'Mapa de precios de combustibles con filtros y promedios' },
      {
        src: '/images/cne-2.png',
        alt: 'Tabla de servicentros y precios de gasolina en el explorador',
      },
    ],
    context: 'Práctica profesional · 2025',
    description:
      'Reacondicioné el Explorador de Precios de Energía Abierta para trabajar con Bencina en Línea. La aplicación permite consultar precios de combustibles en un mapa y una tabla, filtrar por ubicación y tipo de atención, y comparar promedios por región, provincia y comuna. Adapté el procesamiento a cambios en la API y distinguí precios de atención asistida y autoservicio.',
    technologies: ['AngularJS', 'JavaScript', 'HTML', 'CSS', 'API de Bencina en Línea', 'Postman'],
    codeUrl: 'https://github.com/CristianIgnacio/VZ12',
  },
  {
    id: 'solofinanzas',
    name: 'SoloFinanzas',
    context: 'Proyecto personal · En desarrollo',
    description:
      'Aplicación de uso personal para organizar cuentas, movimientos y cartolas bancarias. Implementé la importación de cartolas, la normalización y categorización de transacciones y la detección de transferencias entre cuentas. La conexión bancaria automática y las funciones de inteligencia artificial son ideas futuras.',
    technologies: ['React', 'Python', 'FastAPI', 'SQLite'],
    codeUrl: 'https://github.com/CristianIgnacio/SoloFinanzas',
  },
  {
    id: 'pulpullen',
    name: 'Pulpullen',
    image: {
      src: '/images/pulpullen-1.png',
      alt: 'Página de inicio de Pulpullen con maquinaria pesada',
    },
    context: 'Sitio web publicado',
    description:
      'Desarrollé el sitio de Pulpullen para presentar su servicio de arriendo de maquinaria pesada en Chile. Construí las secciones de maquinaria, galería, empresa y contacto, y configuré títulos, descripciones y direcciones canónicas para buscadores.',
    technologies: ['React', 'Vite', 'React Router', 'Vercel'],
    demoUrl: 'https://pulpullen.cl/',
    demoLabel: 'Ver sitio',
  },
  {
    id: 'alertas-eventos-senapred',
    name: 'Sistema de alertas y eventos — SENAPRED',
    image: {
      src: '/images/senapred-1.jpeg',
      alt: 'Tabla de eventos y filtros de la aplicación de SENAPRED',
    },
    context: 'Práctica profesional · 2024',
    description:
      'Participé en el desarrollo de una aplicación web interna para reunir y gestionar reportes y alertas relacionados con emergencias. Trabajé con PHP y en el diseño y manejo de su base de datos.',
    technologies: ['PHP', 'SQL'],
  },
  {
    id: 'dificultad-ramos-dcc',
    name: 'Dificultad de Ramos DCC',
    images: [
      {
        src: '/images/dcc-courses.png',
        alt: 'Lista de ramos con búsqueda y niveles de dificultad',
      },
      {
        src: '/images/dcc-course-detail.png',
        alt: 'Detalle de un ramo con dificultad y comentarios',
      },
    ],
    context: 'Proyecto académico · 2025',
    description:
      'Aplicación para que estudiantes del DCC consulten ramos, compartan opiniones y evalúen su dificultad. Incluye comentarios, reacciones, perfiles, autenticación, administración de ramos y una API conectada a MongoDB. Cuenta con una suite de 43 pruebas de extremo a extremo.',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Playwright'],
  },
  {
    id: 'watersupply',
    name: 'WaterSupply',
    images: [
      {
        src: '/images/watersupply-5.png',
        alt: 'Tabla de pedidos recibidos con estados en WaterSupply',
      },
      {
        src: '/images/watersupply-4.png',
        alt: 'Perfil de vendedor y camiones registrados en WaterSupply',
      },
      { src: '/images/watersupply-3.png', alt: 'Formulario para crear una cuenta en WaterSupply' },
      { src: '/images/watersupply-2.png', alt: 'Pantalla de inicio de sesión de WaterSupply' },
    ],
    context: 'Proyecto para cliente · Demo funcional',
    description:
      'Desarrollé una plataforma para gestionar solicitudes de distribución de agua. La demo permite registrar clientes, crear y verificar direcciones, solicitar agua desde una dirección aprobada y seguir los estados del pedido. Incorporé funciones de revisión en el panel administrativo.',
    technologies: ['Django', 'Django Templates', 'Bootstrap', 'SQLite'],
  },
  {
    id: 'tinna',
    name: 'Tiña',
    images: [
      { src: '/images/tinna-1.png', alt: 'Personajes jugables de Tiña bajo el título del juego' },
      { src: '/images/tinna-2.png', alt: 'Caballero con la bomba dentro de la arena de Tiña' },
      {
        src: '/images/tinna-3.jpg',
        alt: 'Pantalla final que anuncia al ganador de una partida de Tiña',
      },
      { src: '/images/tinna-4.png', alt: 'Menú de pausa durante una partida de Tiña' },
      { src: '/images/tinna-6.jpg', alt: 'Menú principal de Tiña con vista de la arena' },
      { src: '/images/tinna-7.jpg', alt: 'Cuatro personajes compiten por pasar la bomba en Tiña' },
    ],
    context: 'Proyecto académico en equipo · 2023',
    description:
      'Desarrollamos en Godot un juego multijugador de acción y plataformas en primera persona. En cada ronda, un jugador recibe una bomba y debe pasarla antes de que explote; gana quien sobrevive. Incluye cuatro clases con habilidades diferentes y una versión descargable para Windows.',
    technologies: ['Godot', 'GDScript'],
    demoUrl: 'https://vicente-va.itch.io/tinnia',
    demoLabel: 'Jugar o descargar',
  },
];
