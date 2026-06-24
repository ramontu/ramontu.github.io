import { Lang } from '../i18n/lang';

export interface SkillGroup {
  category: string;
  items: string[];
}

const categoryLabels: Record<string, Record<Lang, string>> = {
  cloud: { en: 'Cloud / AWS', es: 'Cloud / AWS', ca: 'Cloud / AWS' },
  platform: { en: 'Platform / DevOps', es: 'Plataforma / DevOps', ca: 'Plataforma / DevOps' },
  languages: { en: 'Languages', es: 'Lenguajes', ca: 'Llenguatges' },
  tools: { en: 'Tools', es: 'Herramientas', ca: 'Eines' },
  spoken: { en: 'Spoken languages', es: 'Idiomas', ca: 'Idiomes' },
};

const spokenItems: Record<Lang, string[]> = {
  en: ['Spanish (native)', 'Catalan (native)', 'English (B2)'],
  es: ['Español (nativo)', 'Catalán (nativo)', 'Inglés (B2)'],
  ca: ['Espanyol (nadiu)', 'Català (nadiu)', 'Anglès (B2)'],
};

/** Skill groups localised for the given language. Tech names stay as-is. */
export function getSkills(lang: Lang): SkillGroup[] {
  return [
    {
      category: categoryLabels.cloud[lang],
      items: [
        'AWS',
        'EC2',
        'EKS',
        'Lambda',
        'S3',
        'RDS',
        'DynamoDB',
        'VPC',
        'EBS',
        'SQS',
        'Kinesis',
        'Elastic Beanstalk',
        'CloudFormation',
      ],
    },
    {
      category: categoryLabels.platform[lang],
      items: ['Platform Architecture', 'Kubernetes', 'Docker', 'Linux', 'Bash', 'SaaS', 'PaaS'],
    },
    {
      category: categoryLabels.languages[lang],
      items: ['Python', 'Java', 'Bash'],
    },
    {
      category: categoryLabels.tools[lang],
      items: ['Confluence', 'Git'],
    },
    {
      category: categoryLabels.spoken[lang],
      items: spokenItems[lang],
    },
  ];
}
