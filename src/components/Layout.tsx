import { NavLink, Outlet } from 'react-router-dom';
import { profile } from '../data/profile';

const nav = [
  { to: '/', label: 'whoami', end: true },
  { to: '/about', label: 'about', end: false },
  { to: '/projects', label: 'projects', end: false },
  { to: '/skills', label: 'skills', end: false },
  { to: '/contact', label: 'contact', end: false },
];

export function Layout() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-term-border bg-term-bg/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <NavLink to="/" className="group flex items-center gap-2 text-sm font-bold">
            <span className="text-term-green text-glow">{profile.handle}</span>
            <span className="text-term-dim">@</span>
            <span className="text-term-cyan">{profile.host}</span>
            <span className="animate-blink text-term-green">_</span>
          </NavLink>
          <ul className="flex flex-wrap items-center gap-1 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `rounded px-2.5 py-1 transition-colors hover:text-term-green ${
                      isActive ? 'text-term-green text-glow' : 'text-term-dim'
                    }`
                  }
                >
                  <span className="text-term-dim">./</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
        <Outlet />
      </main>

      <footer className="border-t border-term-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-term-dim sm:flex-row sm:px-6">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="flex items-center gap-4">
            <a href={profile.links.github} className="hover:text-term-green" target="_blank" rel="noreferrer">
              github
            </a>
            <a href={profile.links.linkedin} className="hover:text-term-green" target="_blank" rel="noreferrer">
              linkedin
            </a>
            <a href={`mailto:${profile.links.email}`} className="hover:text-term-green">
              email
            </a>
          </span>
          <span className="text-term-dim/60">built with react · vite · tailwind</span>
        </div>
      </footer>
    </div>
  );
}
