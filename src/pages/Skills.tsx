import { profile } from '../data/profile';
import { skills } from '../data/skills';
import { experience, education, certifications } from '../data/experience';
import { Prompt } from '../components/Prompt';

export function Skills() {
  const totalYears = '4+';
  const info: [string, string][] = [
    ['role', `${profile.role} @ ${profile.company}`],
    ['location', profile.location],
    ['uptime', `${totalYears} years in cloud`],
    ['shell', 'bash · python'],
    ['cloud', 'AWS (Pro / Associate / CCP)'],
    ['certs', `${certifications.length} certifications`],
    ['degrees', `${education.length} CS degrees`],
    ['roles', `${experience.length} positions`],
  ];

  return (
    <div className="space-y-10">
      <Prompt command="neofetch" />

      <section className="grid gap-6 rounded-lg border border-term-border bg-term-panel/50 p-6 md:grid-cols-[auto_1fr]">
        <pre className="hidden select-none text-xs leading-tight text-term-green md:block" aria-hidden>
{`        _____
       /     \\
      | () () |    aws
       \\  ^  /    ~~~~~
        |||||     python
        |||||     ~~~~~~
   ~ ramontu.os ~`}
        </pre>
        <div className="space-y-1.5 text-sm">
          <p className="text-term-green">
            <span className="font-bold">{profile.handle}</span>
            <span className="text-term-dim">@</span>
            <span className="font-bold text-term-cyan">{profile.host}</span>
          </p>
          <p className="text-term-dim">{'─'.repeat(22)}</p>
          {info.map(([k, v]) => (
            <p key={k}>
              <span className="text-term-amber">{k}</span>
              <span className="text-term-dim">: </span>
              <span className="text-term-text">{v}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <Prompt command="cat ~/.stack" />
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category} className="rounded-lg border border-term-border bg-term-panel/40 p-5">
              <h3 className="mb-3 text-sm font-bold text-term-cyan">
                <span className="text-term-dim"># </span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-term-border bg-black/30 px-2 py-1 text-xs text-term-text transition-colors hover:border-term-green/50 hover:text-term-green"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
