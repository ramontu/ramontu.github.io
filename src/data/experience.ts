export interface Experience {
  role: string;
  company: string;
  type: string;
  start: string;
  end: string;
  duration: string;
  location: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: 'Platform Architect',
    company: 'ENGISOFT',
    type: 'Full-time',
    start: 'Sep 2021',
    end: 'Present',
    duration: '4 yrs 10 mos',
    location: 'Igualada, Catalonia, Spain',
    bullets: [
      'Design and implement AWS-based infrastructure for SaaS products.',
      'Build platform functionality and automation in Python.',
      'Work across compute, storage, networking and serverless: EC2, EKS, Lambda, RDS, DynamoDB, S3, VPC, CloudFormation and more.',
    ],
  },
  {
    role: 'Warehouse Operator',
    company: 'Mercadona',
    type: 'Temporary',
    start: 'Jul 2019',
    end: 'Sep 2019',
    duration: '3 mos',
    location: 'Barcelona, Spain',
    bullets: ['Warehouse operations and logistics support.'],
  },
];

export interface Education {
  school: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  notes?: string;
}

export const education: Education[] = [
  {
    school: 'Universitat de Lleida',
    degree: "Bachelor's Degree in Computer Engineering",
    field: 'Ingeniería Informática',
    start: 'Sep 2023',
    end: 'Jun 2026',
  },
  {
    school: 'Universitat de Lleida',
    degree: 'Degree in Digital Interaction & Computing Techniques',
    field: 'Computer Science',
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
