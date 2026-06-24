import { L } from '../../i18n/lang';

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
