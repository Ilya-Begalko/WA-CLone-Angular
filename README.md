# WhatsApp Clone (Angular)

A WhatsApp Web–style chat UI built with Angular. It runs entirely in the browser with mock data — there is no backend.

## Features

- Conversation list with search by contact name or latest message
- Chat view with incoming/outgoing message bubbles
- Sending messages with <kbd>Enter</kbd>
- Emoji picker powered by [`@ctrl/ngx-emoji-mart`](https://github.com/scttcper/ngx-emoji-mart)
- Responsive layout:
  - **> 1440px** — centered window, WhatsApp Web style
  - **≤ 1440px** — wider window
  - **≤ 1024px** — full-screen layout
  - **≤ 768px** — mobile mode: either the conversation list or the open chat is shown, with a back button in the chat header

## Tech stack

- [Angular](https://angular.dev) 22 — standalone components, built-in control flow, zoneless change detection
- `@angular/build` (esbuild + Vite) for builds and the dev server
- [Vitest](https://vitest.dev) with jsdom for unit tests
- SCSS

## Getting started

Requirements: Node.js `^22.22.3`, `^24.15.0` or `>=26` (see [`.nvmrc`](.nvmrc)).

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200). The app reloads automatically when source files change.

## Scripts

| Command         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `npm start`     | Start the dev server                                     |
| `npm run build` | Production build into `dist/whathsapp-clone/browser`     |
| `npm run watch` | Development build in watch mode                          |
| `npm test`      | Run unit tests with Vitest (`npm test -- --watch=false` for a single run) |

## Project structure

```
src/
├── main.ts                  # Application bootstrap
├── styles.scss              # Global styles + emoji picker styles
├── assets/                  # Icons and images
└── app/
    ├── app.component.*      # Layout: sidebar + chat area
    ├── sidebar/             # Conversation list and search
    └── chat/                # Messages, input and emoji picker
public/                      # Static files copied as-is (favicon)
```

## Deploying to Netlify

The repository includes a [`netlify.toml`](netlify.toml), so no manual configuration is needed — just connect the repository in Netlify. It sets:

- build command: `npm run build`
- publish directory: `dist/whathsapp-clone/browser`
- Node.js version: 24
- an SPA fallback redirecting all routes to `index.html`

Settings in `netlify.toml` take precedence over the ones entered in the Netlify UI.
