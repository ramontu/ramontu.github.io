import { Link, useParams } from 'react-router-dom';
import { getProject } from '../data/projects';
import { Prompt } from '../components/Prompt';

export function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <div className="space-y-4">
        <Prompt command={`cat ~/projects/${slug ?? ''}`} />
        <p className="text-term-red">bash: no such project: {slug}</p>
        <Link to="/projects" className="text-term-green hover:underline">
          ← cd ~/projects
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <Prompt command={`./open ~/projects/${project.slug}`} />

      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-term-text sm:text-4xl">{project.title}</h1>
        <p className="text-term-cyan">{project.tagline}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-term-dim">{project.year}</span>
          <span className="text-term-dim">·</span>
          <span className="uppercase tracking-wide text-term-green">{project.type}</span>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded border border-term-border bg-black/30 px-2 py-0.5 text-xs text-term-cyan"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-4 border-l-2 border-term-border pl-5 text-base leading-relaxed text-term-text">
        {project.description.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <section className="space-y-3">
          <Prompt command="cat highlights.txt" />
          <ul className="space-y-1.5 text-sm">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-term-text">
                <span className="text-term-green">▹</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(project.links?.repo || project.links?.demo) && (
        <div className="flex flex-wrap gap-3">
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-term-green/50 px-4 py-2 text-sm text-term-green transition-colors hover:bg-term-green/10"
            >
              ./git clone ↗
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-term-cyan/50 px-4 py-2 text-sm text-term-cyan transition-colors hover:bg-term-cyan/10"
            >
              ./live-demo ↗
            </a>
          )}
        </div>
      )}

      <Link to="/projects" className="inline-block text-sm text-term-dim hover:text-term-green">
        ← cd ~/projects
      </Link>
    </article>
  );
}
