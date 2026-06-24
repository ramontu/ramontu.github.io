import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Prompt } from '../components/Prompt';

const typeColor: Record<string, string> = {
  personal: 'text-term-green',
  educational: 'text-term-cyan',
  work: 'text-term-amber',
};

export function Projects() {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Prompt command="ls -la ~/projects" />
        <p className="text-sm text-term-dim">
          // {projects.length} entries — personal &amp; educational work. Click one to read more.
        </p>
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
            <p className={`text-xs uppercase tracking-wide ${typeColor[p.type]}`}>{p.type}</p>
            <p className="mt-2 flex-1 text-sm text-term-dim">{p.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded border border-term-border bg-black/30 px-2 py-0.5 text-xs text-term-cyan"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="mt-4 text-sm text-term-green opacity-0 transition group-hover:opacity-100">
              ./open --info ▸
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
