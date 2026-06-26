# Portfolio Personal

Sitio web personal con secciones de presentación, sobre mí, proyectos, experiencia y currículum descargable.

## Características

- **Inicio** — Presentación con nombre, título y enlaces sociales
- **Sobre mí** — Biografía, foto y habilidades técnicas
- **Proyectos** — Galería de proyectos con tecnologías y enlaces
- **Experiencia** — Historial laboral y formación académica
- **Contacto** — Información de contacto
- **CV** — Página imprimible/descargable en PDF para tu currículum

## Personalizar tu información

Edita el archivo `src/data/profile.ts` con tus datos reales:

- Nombre, título, email, teléfono y ubicación
- Biografía y párrafos de "Sobre mí"
- Enlaces a GitHub y LinkedIn
- Habilidades por categoría
- Proyectos (título, descripción, tags, URLs)
- Experiencia laboral y educación

Para añadir tu foto, coloca una imagen en `public/` y define `avatar: "/tu-foto.jpg"` en el perfil.

Para un PDF descargable, sube tu CV a `public/cv.pdf` y define `cvUrl: "/cv.pdf"`.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Desplegar

Puedes desplegar gratis en [Vercel](https://vercel.com):

1. Sube el proyecto a GitHub
2. Conecta el repositorio en Vercel
3. Tu portfolio estará online con una URL que puedes poner en tu CV

## Imprimir CV como PDF

Ve a `/cv` y usa el botón **Imprimir / PDF**. En el diálogo de impresión, elige "Guardar como PDF".
