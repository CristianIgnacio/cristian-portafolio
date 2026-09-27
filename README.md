# Cristian Portfolio

Base del portafolio personal de Cristian Fuentes, desarrollada con Angular.

## Requisitos

- Node.js compatible con Angular 22: `^22.22.3 || ^24.15.0 || >=26.0.0`.
- npm (incluido con Node.js).

La base se verificó con Node.js 22.23.3, indicado también en `.nvmrc`.
Si tienes una versión anterior, actualiza Node.js antes de ejecutar los comandos.
Consulta la [compatibilidad oficial de Angular](https://angular.dev/reference/versions).

## Instalar dependencias

Desde la raíz del repositorio:

```bash
npm install
```

## Ejecutar localmente

```bash
npm start
```

Abre `http://localhost:4200/`. El portafolio reúne las cinco secciones en una sola
página, con enlaces internos y una base visual oscura, con acentos verdes,
tipografía del sistema y distribución adaptable a escritorio y móvil.

## Estructura y contenido

1. **Inicio:** nombre, presentación breve, ubicación, disponibilidad y enlaces de contacto.
2. **Experiencia:** trayectoria cronológica desde NIC Chile hasta SENAPRED, con fechas,
   responsabilidades y tecnologías.
3. **Sobre mí:** perfil personal, intereses, formación universitaria e idiomas.
4. **Tecnologías:** frontend, backend, lenguajes, bases de datos, herramientas e IA.
5. **Proyectos:** nueve trabajos personales, académicos, para clientes y de prácticas,
   con su estado, tecnologías y enlaces públicos disponibles.

Los textos y datos se editan en `src/app/portfolio/portfolio.data.ts`. La composición
y el orden de las secciones están en `src/app/portfolio/portfolio-page.html`, y cada
apartado tiene su propio componente en `src/app/portfolio/sections/`.

### Distribución visual

- **Inicio:** presentación y acciones a la izquierda; retrato o iniciales, ubicación y
  disponibilidad a la derecha.
- **Experiencia:** línea de tiempo; organización, rol y fechas en la primera columna,
  aportes y tecnologías en la segunda.
- **Sobre mí:** retrato o iniciales a la izquierda y biografía a la derecha, con formación
  e idiomas debajo.
- **Tecnologías:** cuadrícula de categorías en dos columnas, con icono y nombre
  para cada tecnología.
- **Proyectos:** filas con portada a la izquierda y contexto, título, tecnologías,
  descripción y enlaces disponibles a la derecha.

En móvil, las secciones pasan a una columna y la navegación se distribuye en varias
filas. Los colores, tipografía, botones y espaciados compartidos están en
`src/styles.scss`; la distribución específica está en el SCSS de cada componente.
Los enlaces mantienen foco visible y respetan la preferencia de movimiento reducido.

Las fotos del perfil están en `public/images/`: `cristian-home-004.jpg` se usa en Inicio
y `cristian-about-001.jpg` en Sobre mí. Se configuran por separado en `homePortrait`
y `aboutPortrait`, con `src`, `alt`, `position` y `zoom`. El primer valor de `position`
mueve el contenido horizontalmente al hacer zoom: más de `50%` lo mueve hacia la
izquierda y menos de `50%` hacia la derecha. El segundo valor ajusta la altura.
Por ejemplo, Inicio usa `57% 5%`. El encuadre se ajusta con CSS
para ocultar los bordes del escaneo; los archivos originales se conservan sin cambios.
La foto de Inicio tiene prioridad de carga y la de Sobre mí se carga de forma diferida.

Los logos de tecnologías y redes se cargan desde `public/icons/`. Su relación con
los nombres está en `src/app/portfolio/technology-icons.ts`; las fuentes y licencias
se documentan en `docs/icon-sources.md`. La página no necesita servicios externos
para mostrar estos recursos.

### Referencias de estructura

- [Chirag](https://chiragchrg.netlify.app/): presentación de Inicio y relato de Sobre mí.
- [midudev: experiencia](https://porfolio.dev/#experiencia): entradas cronológicas con
  organización, rol, fechas y aportes.
- [Cristian Orrego: tecnologías](https://cristianorrego.dev/en): tecnologías agrupadas
  por categorías.
- [midudev: proyectos](https://porfolio.dev/#proyectos): fichas con nombre, tecnologías,
  descripción y enlaces cuando estén disponibles.

El contenido personal procede del CV y de los datos proporcionados por Cristian,
no de los portafolios usados como referencia. Los proyectos en desarrollo y las
demos se identifican como tales; no se inventan enlaces ni resultados adicionales.

### Contenido para próximas iteraciones

- Añadir capturas de los proyectos con `image: { src, alt }`, usando rutas públicas.
  Los componentes ya usan `NgOptimizedImage`; mientras no haya imágenes,
  muestran portadas tipográficas.
- Añadir URLs públicas de código o demos para los proyectos que aún no las tienen.
  Los enlaces solo se muestran cuando hay una URL; no se generan botones vacíos.
- Revisar el orden de los nueve proyectos y decidir cuáles destacar primero.
- Si se añade una descarga de CV, preparar el archivo que se quiera ofrecer públicamente.

La página utiliza ciudad y contacto profesional. El PDF original, la dirección
particular, el teléfono y la fecha de nacimiento no se copian a los recursos públicos.

## Generar un build

```bash
npm run build
```

Los archivos se generan en `dist/cristian-portfolio/`.

## Pruebas

```bash
npm test -- --watch=false
```

## Configuración

Proyecto `cristian-portfolio` con componentes standalone, Angular Router, SCSS y
comprobaciones estrictas de TypeScript y plantillas. La ruta principal carga el
portafolio de forma diferida y admite enlaces a secciones; SSR está deshabilitado.
Se conserva la estructura estándar de Angular CLI, con
`public/` para recursos estáticos.

`AGENTS.md` y `.codex/config.toml` contienen la configuración para OpenAI Codex
generada por Angular CLI.
