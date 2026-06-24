# ramontu.github.io

Personal site for **Ramon Trilla Urteaga** — Cloud / Platform Architect.
A static, terminal-themed portfolio built with React + TypeScript + Tailwind, bundled by Vite.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) (HashRouter, GitHub-Pages friendly)
- [Framer Motion](https://www.framer.com/motion/) for animations

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to ./dist
npm run preview  # serve the production build locally
```

## Deploy (GitHub Pages — `gh-pages` branch)

```bash
npm run deploy   # builds and pushes ./dist to the gh-pages branch
```

Then, in the repo settings → **Pages**, set the source to the **`gh-pages`** branch (root).
The site goes live at https://ramontu.github.io.

## Editing content

All content lives in plain TypeScript under `src/data/` — no need to touch components:

| File | What it holds |
| --- | --- |
| `src/data/profile.ts` | Name, role, bio, taglines, social links |
| `src/data/experience.ts` | Work history, education, certifications |
| `src/data/projects/` | Personal & educational projects, one file per project (each has a detail page) |
| `src/data/skills.ts` | Skill groups shown on the Skills page |

> To add a project, create a new file in `src/data/projects/` that exports a `Project`,
> then import it into `src/data/projects/index.ts` and add it to the `projects` array.
