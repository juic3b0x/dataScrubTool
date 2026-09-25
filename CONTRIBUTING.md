# Contributing to dataScrubTool

Thanks for helping out! Bug fixes, improvements, tests, and docs are all welcome.

## Setup

You'll need Node.js 22.12.0+, npm, and Git.

```bash
git clone https://github.com/juic3b0x/dataScrubTool.git
cd dataScrubTool
npm ci
npm run dev
```

## Making Changes

1. Create a branch from `main` (e.g. `feature/your-feature` or `fix/your-fix`).
2. Make your changes and add or update tests where it makes sense.
3. Run the checks below.
4. Commit, push, and open a pull request against `main`.

## Before You Submit

Make sure all of these pass (CI runs them too):

```bash
npx tsc --noEmit
npm run lint
npm run test:run
npm run build
```

## Guidelines

- Use TypeScript and avoid `any` unless you have a good reason.
- Follow the existing Next.js App Router structure. Use client components only when needed.
- Tailwind CSS 4: put theme values in `src/app/globals.css` and don't add a `tailwind.config.ts`.
- Keep the UI responsive and accessible.
- Use clear commit messages, like `feat: add X` or `fix: handle Y`.
- Keep pull requests focused, and explain what changed and why.

## Bugs and Security

- **Bugs:** Open an issue with steps to reproduce, expected vs. actual behavior, and your browser/OS. Never include passwords, keys, or tokens.
- **Security issues:** Don't open a public issue. Follow [SECURITY.md](SECURITY.md).

## License

By contributing, you agree your work may be distributed under the project's license.
