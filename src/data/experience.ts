import { L } from '../i18n/lang';

export interface Experience {
  role: L<string>;
  company: string;
  type: L<string>;
  start: string;
  end: L<string>;
  duration: L<string>;
  location: L<string>;
  bullets: L<string[]>;
}

export const experience: Experience[] = [
  {
    role: { en: 'Platform Architect', es: 'Platform Architect', ca: 'Platform Architect' },
    company: 'ENGISOFT',
    type: { en: 'Full-time', es: 'Jornada completa', ca: 'Jornada completa' },
    start: 'Sep 2021',
    end: { en: 'Present', es: 'Actualidad', ca: 'Actualitat' },
    duration: { en: '4 yrs 10 mos', es: '4 años 10 meses', ca: '4 anys 10 mesos' },
    location: {
      en: 'Igualada, Catalonia, Spain',
      es: 'Igualada, Cataluña, España',
      ca: 'Igualada, Catalunya, Espanya',
    },
    bullets: {
      en: [
        'Design and implement AWS-based infrastructure for SaaS products.',
        'Build platform functionality and automation in Python.',
        'Work across compute, storage, networking and serverless: EC2, EKS, Lambda, RDS, DynamoDB, S3, VPC, CloudFormation and more.',
      ],
      es: [
        'Diseño e implemento infraestructura basada en AWS para productos SaaS.',
        'Desarrollo funcionalidad de plataforma y automatización en Python.',
        'Trabajo con cómputo, almacenamiento, redes y serverless: EC2, EKS, Lambda, RDS, DynamoDB, S3, VPC, CloudFormation y más.',
      ],
      ca: [
        'Dissenyo i implemento infraestructura basada en AWS per a productes SaaS.',
        'Desenvolupo funcionalitat de plataforma i automatització en Python.',
        'Treballo amb còmput, emmagatzematge, xarxes i serverless: EC2, EKS, Lambda, RDS, DynamoDB, S3, VPC, CloudFormation i més.',
      ],
    },
  },
  {
    role: { en: 'Warehouse Operator', es: 'Operario de almacén', ca: 'Operari de magatzem' },
    company: 'Mercadona',
    type: { en: 'Temporary', es: 'Contrato temporal', ca: 'Contracte temporal' },
    start: 'Jul 2019',
    end: { en: 'Sep 2019', es: 'Sep 2019', ca: 'Set 2019' },
    duration: { en: '3 mos', es: '3 meses', ca: '3 mesos' },
    location: { en: 'Barcelona, Spain', es: 'Barcelona, España', ca: 'Barcelona, Espanya' },
    bullets: {
      en: ['Warehouse operations and logistics support.'],
      es: ['Operativa de almacén y apoyo logístico.'],
      ca: ['Operativa de magatzem i suport logístic.'],
    },
  },
];

export interface Education {
  school: string;
  degree: L<string>;
  start: string;
  end: string;
  notes?: string;
}

export const education: Education[] = [
  {
    school: 'Universitat de Lleida',
    degree: {
      en: "Bachelor's Degree in Computer Engineering",
      es: 'Grado en Ingeniería Informática',
      ca: 'Grau en Enginyeria Informàtica',
    },
    start: 'Sep 2023',
    end: 'Jun 2026',
  },
  {
    school: 'Universitat de Lleida',
    degree: {
      en: 'Degree in Digital Interaction & Computing Techniques',
      es: 'Grado en Técnicas de Interacción Digital y de Computación',
      ca: "Grau en Tècniques d'Interacció Digital i de Computació",
    },
    start: '2019',
    end: '2022',
    notes: 'Java, Python',
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  expires?: string;
}

// Certifications are kept language-neutral (proper nouns).
export const certifications: Certification[] = [
  { name: 'AWS Solutions Architect – Professional', issuer: 'Amazon Web Services', date: 'May 2024', expires: 'May 2027' },
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', date: 'Jan 2023', expires: 'May 2027' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Mar 2022', expires: 'May 2027' },
  { name: 'AWS Partner: Accreditation (Technical)', issuer: 'Amazon Web Services', date: 'Sep 2021' },
  { name: 'AWS Partner: Accreditation (Business)', issuer: 'Amazon Web Services', date: 'Sep 2021' },
  { name: 'Introduction to Model Context Protocol', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Introduction to Agent Skills', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Claude Code in Action', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'Building with the Claude API', issuer: 'Anthropic', date: 'Jun 2026' },
  { name: 'B2 First (English)', issuer: 'Cambridge', date: 'Jan 2022' },
];
