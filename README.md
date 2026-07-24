# Portafolio Profesional 2026 — Wilson Rodolfo Soc Morales

Portafolio profesional de desarrollo web con una sección dedicada a **Inteligencia Artificial**.

**Sitio en vivo:** https://wilsonmoralesofficial.github.io/official_briefcase/

## Estructura

```
├── index.html     Página principal
├── style.css      Estilos (CSS puro, variables, responsive)
├── main.js        Navegación, filtros y animaciones
└── img/           Imágenes de proyectos y perfil
```

## Secciones

| # | Sección | Contenido |
|---|---------|-----------|
| 01 | Sobre mí | Perfil profesional y datos clave |
| 02 | Stack técnico | Frontend, backend, IA y herramientas |
| 03 | **Inteligencia Artificial** | Línea de trabajo dedicada: pilares y proyectos en desarrollo |
| 04 | Proyectos publicados | Grid filtrable por categoría |
| 05 | Contacto | LinkedIn, WhatsApp, GitHub y email |

## Cómo agregar un proyecto de IA

En `index.html`, dentro de `<div class="ia__grid">`, duplica un bloque `<article class="ia__project">` y edita el título, la descripción y las etiquetas. Cambia el estado con la clase correspondiente:

- `status--wip` → En desarrollo
- `status--soon` → Próximamente
- `status--next` → Siguiente

Cuando el proyecto esté publicado, muévelo a la sección **Proyectos** con `data-cat="ia"` y su enlace real.

## Tecnologías

HTML5 · CSS3 (Grid, Flexbox, custom properties) · JavaScript ES6 (IntersectionObserver) · Google Fonts

Sin frameworks ni dependencias externas.

## Desarrollo local

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python -m http.server 8000
```

---

Wilson Rodolfo Soc Morales · [LinkedIn](https://www.linkedin.com/in/wilson-morales-0b5015212/) · [GitHub](https://github.com/wilsonmoralesofficial)
