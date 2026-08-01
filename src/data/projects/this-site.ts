import { Project } from './types';

export const thisSite: Project = {
  slug: 'this-site',
  title: 'Terminal Portfolio',
  tagline: {
    en: 'The site you are looking at right now.',
    es: 'La web que estás viendo ahora mismo.',
    ca: 'El web que estàs veient ara mateix.',
  },
  tags: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Claude Code'],
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
      'It was built mainly with Claude, and that is part of the point. I use Claude in my day-to-day work to shorten the distance between an architecture decision and a running implementation, and to go back to solutions that are already in production and finish or improve the parts that time constraints had previously ruled out. I set the architecture, the content and the constraints; the model does most of the typing.',
    ],
    es: [
      'Una web personal estática con estética de terminal, hecha con React, TypeScript y Tailwind, empaquetada con Vite y desplegada en GitHub Pages.',
      'Usa una pequeña capa de datos tipada para que todo el contenido viva en archivos TypeScript, totalmente separado de los componentes de la interfaz, y está disponible en inglés, español y catalán.',
      'Está hecha principalmente con Claude, y eso forma parte de la idea. Uso Claude en mi día a día para acortar la distancia entre una decisión de arquitectura y una implementación funcionando, y para volver sobre soluciones que ya están en producción y terminar o mejorar las partes que antes descartaba por falta de tiempo. Yo pongo la arquitectura, el contenido y las restricciones; el modelo escribe la mayor parte del código.',
    ],
    ca: [
      'Un web personal estàtic amb estètica de terminal, fet amb React, TypeScript i Tailwind, empaquetat amb Vite i desplegat a GitHub Pages.',
      "Fa servir una petita capa de dades tipada perquè tot el contingut visqui en fitxers TypeScript, totalment separat dels components de la interfície, i està disponible en anglès, espanyol i català.",
      'Està fet principalment amb Claude, i això forma part de la idea. Faig servir Claude en el meu dia a dia per escurçar la distància entre una decisió d’arquitectura i una implementació funcionant, i per tornar sobre solucions que ja són en producció i acabar o millorar les parts que abans descartava per falta de temps. Jo hi poso l’arquitectura, el contingut i les restriccions; el model escriu la major part del codi.',
    ],
  },
  highlights: {
    en: [
      'Hash-based routing so it works on GitHub Pages with zero server config.',
      'Typewriter and boot-sequence animations that respect prefers-reduced-motion.',
      'neofetch-style skills readout and a language switcher (en / es / ca).',
      'Written mostly by Claude Code — the same tooling I use professionally to accelerate delivery and to pick up improvements on live systems that would otherwise never make it past the backlog.',
    ],
    es: [
      'Enrutado por hash para que funcione en GitHub Pages sin configuración de servidor.',
      'Animaciones de máquina de escribir y de arranque que respetan prefers-reduced-motion.',
      'Resumen de aptitudes estilo neofetch y un selector de idioma (en / es / ca).',
      'Escrita en su mayor parte con Claude Code, la misma herramienta que uso profesionalmente para acelerar las entregas y para abordar mejoras en sistemas ya en marcha que de otro modo nunca saldrían del backlog.',
    ],
    ca: [
      'Enrutament per hash perquè funcioni a GitHub Pages sense configuració de servidor.',
      "Animacions de màquina d'escriure i d'arrencada que respecten prefers-reduced-motion.",
      "Resum d'aptituds estil neofetch i un selector d'idioma (en / es / ca).",
      'Escrit en la seva major part amb Claude Code, la mateixa eina que faig servir professionalment per accelerar els lliuraments i per abordar millores en sistemes ja en marxa que altrament mai no sortirien del backlog.',
    ],
  },
};
