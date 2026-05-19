# webtak-ai-website

Marketing site for the AI Consulting + Marketing venture.

## Stack
- Next.js 15 (App Router) + TypeScript
- Static export (`output: 'export'`) — single-page marketing site
- Hosted on Kasserver shared hosting at `ai.webtak.de`
- Deploy via GitHub Actions FTPS push to Kasserver on every `main` push

## Local dev
```
npm install
npm run dev
```

## Build static output
```
npm run build
# writes to out/
```

## Deploy
- Push to `main` → GitHub Actions `deploy.yml` builds and FTPS-uploads `out/` to Kasserver
- Manual: trigger `deploy.yml` from the Actions tab (`workflow_dispatch`)

## CI
`.github/workflows/ci.yml` runs `npm ci && npm run build` on every PR. Branch protection on `main` requires this check to pass.

## Secrets
GitHub Actions secrets (set via repo settings):
- `FTP_HOST` — Kasserver FTP server hostname
- `FTP_USERNAME` — FTP user
- `FTP_PASSWORD` — FTP password

Never commit `.env*`. See `../docs/SECRETS.md` for the full secrets policy.
