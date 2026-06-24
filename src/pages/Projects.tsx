import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Prompt } from '../components/Prompt';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';

const typeColor: Record<string, string> = {
  personal: 'text-term-green',
  educational: 'text-term-cyan',
  work: 'text-term-amber',
};

export function Projects() {
  const { lang } = useLang();
  const t = ui[lang];

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Prompt command="ls -la ~/projects" />
        <p className="text-sm text-term-dim">{t.projectsIntro(projects.length)}</p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group flex flex-col rounded-lg border border-term-border bg-term-panel/50 p-5 transition-all hover:-translate-y-0.5 hover:border-term-green/50 hover:shadow-lg hover:shadow-term-green/5"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold text-term-text group-hover:text-term-green">
                {p.title}
              </h3>
              <span className="text-xs text-term-dim">{p.year}</span>
            </div>
            <p className={`text-xs uppercase tracking-wide ${typeColor[p.type]}`}>
              {t.typeLabels[p.type]}
            </p>
            <p className="mt-2 flex-1 text-sm text-term-dim">{p.tagline[lang]}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-term-border bg-black/30 px-2 py-0.5 text-xs text-term-cyan"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-4 text-sm text-term-green opacity-0 transition group-hover:opacity-100">
              {t.openInfo} ▸
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
