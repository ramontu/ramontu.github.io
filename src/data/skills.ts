export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    category: 'Cloud / AWS',
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
    category: 'Platform / DevOps',
    items: ['Platform Architecture', 'Kubernetes', 'Docker', 'Linux', 'Bash', 'SaaS', 'PaaS'],
  },
  {
    category: 'Languages',
    items: ['Python', 'Java', 'Bash'],
  },
  {
    category: 'Tools',
    items: ['Confluence', 'Git'],
  },
  {
    category: 'Languages (spoken)',
    items: ['Spanish (native)', 'Catalan (native)', 'English (B2)'],
  },
];

// Flat list used by the neofetch-style readout.
export const topSkills = ['Amazon S3', 'AWS', 'Amazon RDS'];
