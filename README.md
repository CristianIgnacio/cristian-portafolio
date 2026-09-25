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

Abre `http://localhost:4200/`. La página está vacía intencionalmente.

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
comprobaciones estrictas de TypeScript y plantillas. Las rutas están vacías y SSR
está deshabilitado. Se conserva la estructura estándar de Angular CLI, con
`public/` para recursos estáticos.

`AGENTS.md` y `.codex/config.toml` contienen la configuración para OpenAI Codex
generada por Angular CLI.
