import { profile } from '../data/profile';
import { Prompt } from '../components/Prompt';
import { TerminalWindow } from '../components/TerminalWindow';

const channels = [
  { cmd: 'mail', label: 'email', value: profile.links.email, href: `mailto:${profile.links.email}` },
  { cmd: 'curl', label: 'linkedin', value: 'in/ramon-trilla-urteaga', href: profile.links.linkedin },
  { cmd: 'curl', label: 'github', value: '@ramontu', href: profile.links.github },
];

export function Contact() {
  return (
    <div className="space-y-8">
      <Prompt command="./contact.sh" />

      <TerminalWindow title={`${profile.handle}@${profile.host}: ~/contact`}>
        <p className="text-sm text-term-dim">
          <span className="text-term-green">$</span> echo &quot;Open to interesting cloud &amp;
          platform problems. Get in touch:&quot;
        </p>

        <ul className="mt-6 space-y-3">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="group flex flex-wrap items-center gap-x-3 gap-y-1 rounded-md border border-term-border bg-black/20 px-4 py-3 transition-colors hover:border-term-green/50"
              >
                <span className="text-sm text-term-dim">$ {c.cmd}</span>
                <span className="text-sm font-bold text-term-cyan group-hover:text-term-green">
                  {c.label}
                </span>
                <span className="text-sm text-term-text">{c.value}</span>
                <span className="ml-auto text-term-dim transition group-hover:text-term-green">↗</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-term-green">
          <span className="text-term-dim">$ </span>
          <span className="animate-blink">_</span>
        </p>
      </TerminalWindow>
    </div>
  );
}
