import { L } from '../i18n/lang';

export const profile = {
  name: 'Ramon Trilla Urteaga',
  handle: 'ramontu',
  host: 'cloud',
  company: 'ENGISOFT',
  // Photo lives in /public. Falls back to initials until the file exists.
  photo: '/profile.jpg',
  role: {
    en: 'Cloud / Platform Architect',
    es: 'Arquitecto Cloud / de Plataforma',
    ca: 'Arquitecte Cloud / de Plataforma',
  } as L<string>,
  location: {
    en: 'Igualada, Catalonia, Spain',
    es: 'Igualada, Cataluña, España',
    ca: 'Igualada, Catalunya, Espanya',
  } as L<string>,
  taglines: {
    en: [
      'I design and build AWS infrastructure.',
      'I write the Python that makes it run.',
      'Not afraid to try new things.',
    ],
    es: [
      'Diseño y construyo infraestructura en AWS.',
      'Escribo el Python que la hace funcionar.',
      'Sin miedo a probar cosas nuevas.',
    ],
    ca: [
      'Dissenyo i construeixo infraestructura a AWS.',
      'Escric el Python que la fa funcionar.',
      'Sense por de provar coses noves.',
    ],
  } as L<string[]>,
  about: {
    en: [
      "I'm someone who isn't afraid to try new things and who enjoys finding solutions to problems, no matter how uphill they get.",
      'Right now my work is best described as Platform Architect: I design and implement AWS-based infrastructure and program the functionality it needs to run, in Python.',
    ],
    es: [
      'Soy una persona a la que no le da miedo probar cosas nuevas y a la que le gusta encontrar soluciones a los problemas por muy cuesta arriba que se pongan.',
      'Actualmente, mi trabajo se podría definir como Platform Architect: me dedico a diseñar e implementar infraestructuras basadas en AWS y a programar en Python las funcionalidades que debe realizar.',
    ],
    ca: [
      'Sóc una persona a qui no fa por provar coses noves i a qui li agrada trobar solucions als problemes per molt costeruts que es posin.',
      'Actualment, la meva feina es podria definir com a Platform Architect: em dedico a dissenyar i implementar infraestructures basades en AWS i a programar en Python les funcionalitats que ha de dur a terme.',
    ],
  } as L<string[]>,
  links: {
    github: 'https://github.com/ramontu',
    linkedin: 'https://www.linkedin.com/in/ramon-trilla-urteaga/',
    email: 'ramontu2001@gmail.com',
  },
};

export type Profile = typeof profile;
