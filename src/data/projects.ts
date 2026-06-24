import { L } from '../i18n/lang';

export interface Project {
  slug: string;
  title: string;
  tagline: L<string>;
  tags: string[];
  year: string;
  type: 'personal' | 'educational' | 'work';
  links?: { repo?: string; demo?: string };
  description: L<string[]>;
  highlights?: L<string[]>;
}

// ---------------------------------------------------------------------------
// TODO: Projects 2 and 3 are placeholder/example projects. Replace the text and
// links with your real personal & educational projects. Each text field has an
// `en` / `es` / `ca` variant — fill in all three (or copy the same text).
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
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
  },
  {
    slug: 'aws-infra-sandbox',
    title: 'AWS Infrastructure Sandbox',
    tagline: {
      en: 'Reusable infrastructure-as-code experiments.',
      es: 'Experimentos reutilizables de infraestructura como código.',
      ca: "Experiments reutilitzables d'infraestructura com a codi.",
    },
    tags: ['AWS', 'CloudFormation', 'Python', 'Lambda'],
    year: '2025',
    type: 'educational',
    links: {},
    description: {
      en: [
        'TODO: Describe a personal/educational project where you experimented with AWS infrastructure as code — what you built, why, and what you learned.',
      ],
      es: [
        'TODO: Describe un proyecto personal/educativo en el que experimentaste con infraestructura como código en AWS: qué construiste, por qué y qué aprendiste.',
      ],
      ca: [
        'TODO: Descriu un projecte personal/educatiu on vas experimentar amb infraestructura com a codi a AWS: què vas construir, per què i què vas aprendre.',
      ],
    },
    highlights: {
      en: ['TODO: key highlight 1', 'TODO: key highlight 2'],
      es: ['TODO: punto clave 1', 'TODO: punto clave 2'],
      ca: ['TODO: punt clau 1', 'TODO: punt clau 2'],
    },
  },
  {
    slug: 'python-automation',
    title: 'Python Automation Tooling',
    tagline: {
      en: 'Scripts and small tools that remove repetitive work.',
      es: 'Scripts y pequeñas herramientas que eliminan el trabajo repetitivo.',
      ca: 'Scripts i petites eines que eliminen la feina repetitiva.',
    },
    tags: ['Python', 'Automation', 'CLI'],
    year: '2024',
    type: 'personal',
    links: {},
    description: {
      en: [
        'TODO: Describe a Python tool or automation you built. What problem did it solve and how does it work?',
      ],
      es: [
        'TODO: Describe una herramienta o automatización en Python que hayas creado. ¿Qué problema resolvía y cómo funciona?',
      ],
      ca: [
        'TODO: Descriu una eina o automatització en Python que hagis creat. Quin problema resolia i com funciona?',
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
