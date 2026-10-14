# pc-tune-ups

Static Astro site for PC Tune-Ups, served by Cloudflare Workers static assets.

## Commands

| Command           | Action                                              |
| ----------------- | --------------------------------------------------- |
| `pnpm dev`        | Start the Astro dev server.                         |
| `pnpm build`      | Build the static site into `dist/`.                 |
| `pnpm preview`    | Serve `dist/` with `wrangler dev`.                  |
| `pnpm check`      | Run Vite+ format, lint, and type checks.            |
| `pnpm e2e`        | Compare screenshots against `e2e/__screenshots__/`. |
| `pnpm e2e:update` | Record new screenshot baselines.                    |
| `pnpm deploy`     | Build and deploy to Cloudflare.                     |

## Screenshot baselines

The baselines come from the original TanStack Start site at
`https://pctuneupsnola.com`. To record baselines from a deployed URL, run
`BASE_URL=<url> pnpm e2e:update`.
