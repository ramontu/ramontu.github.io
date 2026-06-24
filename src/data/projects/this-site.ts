import { Project } from './types';

export const thisSite: Project = {
  slug: 'this-site',
  title: 'Terminal Portfolio',
  tagline: {
    en: 'The site you are looking at right now.',
    es: 'La web que estás viendo ahora mismo.',
    ca: 'El web que estàs veient ara mateix.',
  },
  tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
  year: '2026',
  type: 'personal',
  links: {
    repo: 'https://github.com/ramontu/ramontu.github.io',
    demo: 'https://ramontu.github.io',
  },
  description: {
    en: [
      'A static, terminal-themed personal site built with React, TypeScript and Tailwind, bundled by Vite and deployed to GitHub Pages.',
      'It uses a small typed data layer so all content lives in plain TypeScript files, completely separate from the UI components, and ships in English, Spanish and Catalan.',
    ],
    es: [
      'Una web personal estática con estética de terminal, hecha con React, TypeScript y Tailwind, empaquetada con Vite y desplegada en GitHub Pages.',
      'Usa una pequeña capa de datos tipada para que todo el contenido viva en archivos TypeScript, totalmente separado de los componentes de la interfaz, y está disponible en inglés, español y catalán.',
    ],
    ca: [
      'Un web personal estàtic amb estètica de terminal, fet amb React, TypeScript i Tailwind, empaquetat amb Vite i desplegat a GitHub Pages.',
      "Fa servir una petita capa de dades tipada perquè tot el contingut visqui en fitxers TypeScript, totalment separat dels components de la interfície, i està disponible en anglès, espanyol i català.",
    ],
  },
  highlights: {
    en: [
      'Hash-based routing so it works on GitHub Pages with zero server config.',
      'Typewriter and boot-sequence animations that respect prefers-reduced-motion.',
      'neofetch-style skills readout and a language switcher (en / es / ca).',
    ],
    es: [
      'Enrutado por hash para que funcione en GitHub Pages sin configuración de servidor.',
      'Animaciones de máquina de escribir y de arranque que respetan prefers-reduced-motion.',
      'Resumen de aptitudes estilo neofetch y un selector de idioma (en / es / ca).',
    ],
    ca: [
      'Enrutament per hash perquè funcioni a GitHub Pages sense configuració de servidor.',
      "Animacions de màquina d'escriure i d'arrencada que respecten prefers-reduced-motion.",
      "Resum d'aptituds estil neofetch i un selector d'idioma (en / es / ca).",
    ],
  },
};
