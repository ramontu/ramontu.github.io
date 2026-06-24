import { Lang } from './lang';

interface UIDict {
  bootLines: string[];
  navCards: { about: string; projects: string; skills: string };
  whoamiNav: { about: string; projects: string; skills: string }; // command shown on cards
  projectsIntro: (n: number) => string;
  openInfo: string;
  projectNotFound: string;
  backToProjects: string;
  neofetch: {
    role: string;
    location: string;
    uptime: string;
    shell: string;
    cloud: string;
    certs: string;
    degrees: string;
    roles: string;
  };
  neofetchValues: {
    uptime: string;
    certs: (n: number) => string;
    degrees: (n: number) => string;
    roles: (n: number) => string;
  };
  typeLabels: { personal: string; educational: string; work: string };
  contactIntro: string;
  contactCta: string;
  moreInfo: string;
  verify: string;
}

export const ui: Record<Lang, UIDict> = {
  en: {
    bootLines: [
      'booting ramontu.os ...',
      'loading profile ........ ok',
      'mounting /aws/infrastructure ... ok',
      'starting python runtime ........ ok',
      'ready.',
    ],
    navCards: {
      about: 'Who I am and what I do.',
      projects: 'Things I have built.',
      skills: 'My stack and tooling.',
    },
    whoamiNav: { about: 'cat about.md', projects: 'ls ~/projects', skills: 'neofetch' },
    projectsIntro: (n) => `// ${n} entries — personal & educational work. Click one to read more.`,
    openInfo: './open --info',
    projectNotFound: 'no such project',
    backToProjects: 'cd ~/projects',
    neofetch: {
      role: 'role',
      location: 'location',
      uptime: 'uptime',
      shell: 'shell',
      cloud: 'cloud',
      certs: 'certs',
      degrees: 'degrees',
      roles: 'roles',
    },
    neofetchValues: {
      uptime: '4+ years in cloud',
      certs: (n) => `${n} certifications`,
      degrees: (n) => `${n} CS degrees`,
      roles: (n) => `${n} positions`,
    },
    typeLabels: { personal: 'personal', educational: 'educational', work: 'work' },
    contactIntro: 'Open to interesting cloud & platform problems. Get in touch:',
    contactCta: 'Get in touch',
    moreInfo: 'more info',
    verify: 'verify',
  },
  es: {
    bootLines: [
      'arrancando ramontu.os ...',
      'cargando perfil ........ ok',
      'montando /aws/infrastructure ... ok',
      'iniciando runtime de python ........ ok',
      'listo.',
    ],
    navCards: {
      about: 'Quién soy y a qué me dedico.',
      projects: 'Cosas que he construido.',
      skills: 'Mi stack y herramientas.',
    },
    whoamiNav: { about: 'cat about.md', projects: 'ls ~/projects', skills: 'neofetch' },
    projectsIntro: (n) =>
      `// ${n} entradas — proyectos personales y educativos. Haz clic en uno para leer más.`,
    openInfo: './abrir --info',
    projectNotFound: 'no existe el proyecto',
    backToProjects: 'cd ~/proyectos',
    neofetch: {
      role: 'rol',
      location: 'ubicación',
      uptime: 'actividad',
      shell: 'shell',
      cloud: 'cloud',
      certs: 'certs',
      degrees: 'títulos',
      roles: 'puestos',
    },
    neofetchValues: {
      uptime: '4+ años en cloud',
      certs: (n) => `${n} certificaciones`,
      degrees: (n) => `${n} títulos de informática`,
      roles: (n) => `${n} puestos`,
    },
    typeLabels: { personal: 'personal', educational: 'educativo', work: 'trabajo' },
    contactIntro: 'Abierto a problemas interesantes de cloud y plataforma. Hablemos:',
    contactCta: 'Hablemos',
    moreInfo: 'más info',
    verify: 'verificar',
  },
  ca: {
    bootLines: [
      'arrencant ramontu.os ...',
      'carregant perfil ........ ok',
      'muntant /aws/infrastructure ... ok',
      'iniciant runtime de python ........ ok',
      'llest.',
    ],
    navCards: {
      about: 'Qui sóc i a què em dedico.',
      projects: 'Coses que he construït.',
      skills: 'El meu stack i eines.',
    },
    whoamiNav: { about: 'cat about.md', projects: 'ls ~/projects', skills: 'neofetch' },
    projectsIntro: (n) =>
      `// ${n} entrades — projectes personals i educatius. Fes clic en un per llegir-ne més.`,
    openInfo: './obrir --info',
    projectNotFound: 'no existeix el projecte',
    backToProjects: 'cd ~/projectes',
    neofetch: {
      role: 'rol',
      location: 'ubicació',
      uptime: 'activitat',
      shell: 'shell',
      cloud: 'cloud',
      certs: 'certs',
      degrees: 'títols',
      roles: 'llocs',
    },
    neofetchValues: {
      uptime: '4+ anys al cloud',
      certs: (n) => `${n} certificacions`,
      degrees: (n) => `${n} títols d'informàtica`,
      roles: (n) => `${n} llocs`,
    },
    typeLabels: { personal: 'personal', educational: 'educatiu', work: 'feina' },
    contactIntro: 'Obert a problemes interessants de cloud i plataforma. Parlem-ne:',
    contactCta: 'Parlem-ne',
    moreInfo: 'més info',
    verify: 'verificar',
  },
};
