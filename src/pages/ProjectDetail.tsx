import { Link, useParams } from 'react-router-dom';
import { getProject } from '../data/projects';
import { Prompt } from '../components/Prompt';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';

export function ProjectDetail() {
  const { slug } = useParams();
  const { lang } = useLang();
  const t = ui[lang];
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <div className="space-y-4">
        <Prompt command={`cat ~/projects/${slug ?? ''}`} />
        <p className="text-term-red">
          bash: {t.projectNotFound}: {slug}
        </p>
        <Link to="/projects" className="text-term-green hover:underline">
          ← {t.backToProjects}
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <Prompt command={`./open ~/projects/${project.slug}`} />

      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-term-text sm:text-4xl">{project.title}</h1>
        <p className="text-term-cyan">{project.tagline[lang]}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-term-dim">{project.year}</span>
          <span className="text-term-dim">·</span>
          <span className="uppercase tracking-wide text-term-green">{t.typeLabels[project.type]}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-term-border bg-black/30 px-2 py-0.5 text-xs text-term-cyan"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-4 border-l-2 border-term-border pl-5 text-base leading-relaxed text-term-text">
        {project.description[lang].map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {project.highlights && project.highlights[lang].length > 0 && (
        <section className="space-y-3">
          <Prompt command="cat highlights.txt" />
          <ul className="space-y-1.5 text-sm">
            {project.highlights[lang].map((h, i) => (
              <li key={i} className="flex gap-2 text-term-text">
                <span className="text-term-green">▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Link to="/projects" className="inline-block text-sm text-term-dim hover:text-term-green">
        ← {t.backToProjects}
      </Link>
    </article>
  );
}
