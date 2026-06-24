import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { TypeWriter } from '../components/TypeWriter';
import { TerminalWindow } from '../components/TerminalWindow';
import { Avatar } from '../components/Avatar';
import { useLang } from '../i18n/LanguageContext';
import { ui } from '../i18n/ui';

export function Home() {
  const { lang } = useLang();
  const t = ui[lang];
  const bootLines = t.bootLines;

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
          className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: bootLines.length * 0.25 + 0.2 }}
        >
          <Avatar className="h-28 w-28 sm:h-36 sm:w-36" />
          <div>
            <p className="text-sm text-term-dim">$ whoami</p>
            <h1 className="mt-2 text-3xl font-bold text-term-text sm:text-5xl">{profile.name}</h1>
            <p className="mt-3 text-lg text-term-cyan sm:text-xl">
              {profile.role[lang]} <span className="text-term-dim">@</span> {profile.company}
            </p>
            <p className="mt-1 text-sm text-term-dim">// {profile.location[lang]}</p>
          </div>
        </motion.div>

        <motion.div
          className="mt-6 min-h-[1.75rem] text-base text-term-green sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: bootLines.length * 0.25 + 0.4 }}
        >
          <span className="text-term-dim">$ </span>
          <TypeWriter key={lang} phrases={profile.taglines[lang]} />
        </motion.div>
      </TerminalWindow>

      <motion.div
        className="grid gap-4 sm:grid-cols-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: bootLines.length * 0.25 + 0.5 }}
      >
        <NavCard to="/about" cmd={t.whoamiNav.about} desc={t.navCards.about} />
        <NavCard to="/projects" cmd={t.whoamiNav.projects} desc={t.navCards.projects} />
        <NavCard to="/skills" cmd={t.whoamiNav.skills} desc={t.navCards.skills} />
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
