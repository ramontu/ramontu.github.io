export interface Project {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  year: string;
  type: 'personal' | 'educational' | 'work';
  links?: { repo?: string; demo?: string };
  // Markdown-ish paragraphs rendered on the detail page.
  description: string[];
  // Optional bullet highlights.
  highlights?: string[];
}

// ---------------------------------------------------------------------------
// TODO: These are placeholder/example projects. Replace the text, tags and
// links with your real personal & educational projects. The structure is
// ready — just edit the objects below (or add new ones).
// ---------------------------------------------------------------------------
export const projects: Project[] = [
  {
    slug: 'this-site',
    title: 'Terminal Portfolio',
    tagline: 'The site you are looking at right now.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    year: '2026',
    type: 'personal',
    links: {
      repo: 'https://github.com/ramontu/ramontu.github.io',
      demo: 'https://ramontu.github.io',
    },
    description: [
      'A static, terminal-themed personal site built with React, TypeScript and Tailwind, bundled by Vite and deployed to GitHub Pages.',
      'It uses a small typed data layer so all content lives in plain TypeScript files, completely separate from the UI components.',
    ],
    highlights: [
      'Hash-based routing so it works on GitHub Pages with zero server config.',
      'Typewriter and boot-sequence animations that respect prefers-reduced-motion.',
      'neofetch-style skills readout and a fake interactive prompt.',
    ],
  },
  {
    slug: 'aws-infra-sandbox',
    title: 'AWS Infrastructure Sandbox',
    tagline: 'Reusable infrastructure-as-code experiments.',
    tags: ['AWS', 'CloudFormation', 'Python', 'Lambda'],
    year: '2025',
    type: 'educational',
    links: {},
    description: [
      'TODO: Describe a personal/educational project where you experimented with AWS infrastructure as code — what you built, why, and what you learned.',
    ],
    highlights: ['TODO: key highlight 1', 'TODO: key highlight 2'],
  },
  {
    slug: 'python-automation',
    title: 'Python Automation Tooling',
    tagline: 'Scripts and small tools that remove repetitive work.',
    tags: ['Python', 'Automation', 'CLI'],
    year: '2024',
    type: 'personal',
    links: {},
    description: [
      'TODO: Describe a Python tool or automation you built. What problem did it solve and how does it work?',
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
