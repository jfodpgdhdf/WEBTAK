# website

Marketing site for the AI Consulting + Marketing venture.

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Deployed on Vercel (Hobby tier for MVP)
- Content in MDX
- Sentry + Vercel Analytics

## Local dev
```
pnpm install
pnpm dev
```

## Env vars
Pulled from 1Password via the Vercel CLI:
```
vercel env pull .env.local
```
Never commit `.env*` files. See [../docs/SECRETS.md](../docs/SECRETS.md).

## Deploy
- `main` → production (`ai.webtak.de` or chosen domain)
- PR branches → preview URLs via Vercel
- Required CI checks must pass before merge.

## CI
- Lint + typecheck + build on every PR (`.github/workflows/ci.yml`).
- Branch protection on `main` requires green CI + 1 review.
