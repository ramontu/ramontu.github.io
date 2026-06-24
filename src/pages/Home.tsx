import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { TypeWriter } from '../components/TypeWriter';
import { TerminalWindow } from '../components/TerminalWindow';

const bootLines = [
  'booting ramontu.os ...',
  'loading profile ........ ok',
  'mounting /aws/infrastructure ... ok',
  'starting python runtime ........ ok',
  'ready.',
];

export function Home() {
  return (
    <section className="space-y-10">
      <TerminalWindow title={`${profile.handle}@${profile.host}: ~/whoami`}>
        <div className="space-y-1 text-sm text-term-dim">
          {bootLines.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.25 }}
            >
              <span className="text-term-green">[ok]</span> {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: bootLines.length * 0.25 + 0.2 }}
        >
          <p className="text-sm text-term-dim">$ whoami</p>
          <h1 className="mt-2 text-3xl font-bold text-term-text sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-term-cyan sm:text-xl">
            {profile.role} <span className="text-term-dim">@</span> {profile.company}
          </p>
          <p className="mt-1 text-sm text-term-dim">// {profile.location}</p>

          <div className="mt-6 min-h-[1.75rem] text-base text-term-green sm:text-lg">
            <span className="text-term-dim">$ </span>
            <TypeWriter phrases={profile.taglines} />
          </div>
        </motion.div>
      </TerminalWindow>

      <motion.div
        className="grid gap-4 sm:grid-cols-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: bootLines.length * 0.25 + 0.5 }}
      >
        <NavCard to="/about" cmd="cat about.md" desc="Who I am and what I do." />
        <NavCard to="/projects" cmd="ls ~/projects" desc="Things I have built." />
        <NavCard to="/skills" cmd="neofetch" desc="My stack and tooling." />
      </motion.div>
    </section>
  );
}

function NavCard({ to, cmd, desc }: { to: string; cmd: string; desc: string }) {
  return (
    <Link
      to={to}
      className="group rounded-lg border border-term-border bg-term-panel/60 p-5 transition-all hover:-translate-y-0.5 hover:border-term-green/50 hover:shadow-lg hover:shadow-term-green/5"
    >
      <p className="text-sm text-term-green">
        <span className="text-term-dim">$ </span>
        {cmd}
        <span className="ml-1 inline-block opacity-0 transition group-hover:opacity-100">▸</span>
      </p>
      <p className="mt-2 text-sm text-term-dim">{desc}</p>
    </Link>
  );
}
