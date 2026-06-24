import { profile } from '../data/profile';
import { experience, education, certifications } from '../data/experience';
import { Prompt } from '../components/Prompt';
import { useLang } from '../i18n/LanguageContext';

export function About() {
  const { lang } = useLang();

  return (
    <div className="space-y-14">
      <section className="animate-fadeUp space-y-4">
        <Prompt command="cat about.md" />
        <div className="space-y-4 border-l-2 border-term-border pl-5 text-base leading-relaxed text-term-text">
          {profile.about[lang].map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <Prompt command="cat experience.log" className="animate-fadeUp" />
        <div className="space-y-5">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.start}`}
              className="rounded-lg border border-term-border bg-term-panel/50 p-5 transition-colors hover:border-term-cyan/40"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-term-cyan">{job.role[lang]}</h3>
                <span className="text-xs text-term-dim">
                  {job.start} — {job.end[lang]} · {job.duration[lang]}
                </span>
              </div>
              <p className="text-sm text-term-green">
                {job.company} <span className="text-term-dim">· {job.type[lang]}</span>
              </p>
              <p className="text-xs text-term-dim">{job.location[lang]}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-term-text">
                {job.bullets[lang].map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-term-green">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <Prompt command="ls ~/education" className="animate-fadeUp" />
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((ed) => (
            <article key={`${ed.school}-${ed.start}`} className="rounded-lg border border-term-border bg-term-panel/50 p-5">
              <h3 className="font-bold text-term-text">{ed.degree[lang]}</h3>
              <p className="text-sm text-term-cyan">{ed.school}</p>
              <p className="mt-1 text-xs text-term-dim">
                {ed.start} — {ed.end}
              </p>
              {ed.notes && <p className="mt-2 text-xs text-term-green">// {ed.notes}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <Prompt command="cat certifications.txt" className="animate-fadeUp" />
        <div className="grid gap-3 sm:grid-cols-2">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="flex items-start justify-between gap-3 rounded-md border border-term-border bg-term-panel/40 px-4 py-3"
            >
              <div>
                <p className="text-sm text-term-text">{c.name}</p>
                <p className="text-xs text-term-dim">{c.issuer}</p>
              </div>
              <span className="whitespace-nowrap text-xs text-term-amber">
                {c.date}
                {c.expires ? ` → ${c.expires}` : ''}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
