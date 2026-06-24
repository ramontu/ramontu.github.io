# CLAUDE.md

Guidance for working in this repository.

## What this is

Personal portfolio site for **Ramon Trilla Urteaga** (Cloud / Platform Architect),
served at https://ramontu.github.io. It is a static, terminal-themed single-page app:
**Vite + React 18 + TypeScript + Tailwind**, routed with React Router's `HashRouter`
(so it works on GitHub Pages with no server config), animated with Framer Motion.
The UI ships in three languages: English, Spanish and Catalan (`en` / `es` / `ca`).

## Commands

Node is installed via nvm. If `node`/`npm` are not on `PATH`, prepend:

```bash
export PATH="$HOME/.nvm/versions/node/v24.18.0/bin:$PATH"
```

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # tsc --noEmit && vite build  ->  ./dist
npm run preview  # serve the production build locally
npm run deploy   # build, then push ./dist to the gh-pages branch (gh-pages CLI)
```

GitHub Pages serves from the **`gh-pages`** branch (repo Settings → Pages). `vite.config.ts`
uses `base: '/'` because this is a user site served from the domain root.

## Architecture

- `src/pages/` — one component per route (Home, About, Skills, Projects, ProjectDetail, Contact).
- `src/components/` — shared UI (TerminalWindow, TypeWriter, Layout, LanguageSwitcher, …).
- `src/i18n/` — language context and the `L<T>` type (`Record<'en'|'es'|'ca', T>`). All
  user-facing text is an `L<...>` so every string exists in all three languages.
- `src/data/` — typed content layer, fully separate from components. **Edit content here,
  not in JSX.**

### Content data

| Path | Holds |
| --- | --- |
| `src/data/profile.ts` | Name, role, bio, taglines, social links |
| `src/data/experience.ts` | Work history, education, certifications |
| `src/data/projects/` | One file per project + `index.ts` barrel + `types.ts` |
| `src/data/skills.ts` | Skill groups for the Skills page |

### Adding a project

Projects live in `src/data/projects/`, **one file per project** (this folder structure
replaced the old single `projects.ts` so the list scales as it grows):

1. Create `src/data/projects/<slug>.ts` exporting a `Project` (see `types.ts` for the shape;
   copy an existing file like `iot-ingest-infrastructure.ts` as a template).
2. Import it in `src/data/projects/index.ts` and add it to the `projects` array. Array order
   is the display order (newest / most relevant first).

Every text field (`tagline`, `description`, `highlights`) must be filled in for `en`, `es`
and `ca`. `slug` must be unique — it is the URL of the project's detail page. `links` is
optional; omit or leave `{}` when there is no public repo/demo.

## Conventions & gotchas

- Inside single-quoted TS strings, use the Unicode apostrophe `’` (U+2019), not ASCII `'`,
  to avoid terminating the string — or use double-quoted strings. Existing data follows this.
- Keep content in the data layer and out of components.

## Private / ignored

- `.private/` — source material (e.g. thesis PDFs) the public site is derived from. Git-ignored;
  never commit its contents.
- `.claude/` — local Claude Code settings. Git-ignored.

The two thesis projects (`aws-organization-governance`, `iot-ingest-infrastructure`) were
written from PDFs in `.private/`; the PDFs themselves stay out of the repo.
