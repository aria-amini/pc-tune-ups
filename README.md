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

## Development

Run `mise run bootstrap` to install packages, register the checkout URL, and
start Pitchfork. Use `vp run dev` to run Astro directly.

Import the Bootstrap action from `t3.json` in T3 project Actions settings. Its
`async: false` setting holds the agent until bootstrap exits in a new worktree.

## Validation

```sh
vp run check
vp test run
vp run build
BASE_URL=<site url> vp run e2e
```

Playwright starts no server. `BASE_URL` is required: use the dev URL from
`mise run bootstrap`, or a Cloudflare Preview URL.

Vite+ checks TypeScript. Prettier formats Astro files. ESLint checks Astro
markup. `astro check` validates templates and component props.

## Screenshot baselines

The baselines come from the original TanStack Start site at
`https://pctuneupsnola.com`. To record baselines from a deployed URL, run
`BASE_URL=<url> pnpm e2e:update`.

## Production

Cloudflare Workers serves `dist/` as static assets. Connect the repository in
Workers & Pages, then set the Workers Builds commands:

- Build command: `pnpm run build`
- Deploy command: `pnpm exec wrangler deploy`
- Non-production branch deploy command: `pnpm exec wrangler preview`

Workers Builds deploys `main` and gives each pull request a Preview URL. The E2E
workflow runs Playwright against the Preview, and against the live domain after
a merge. `vp run deploy` deploys from your machine with `wrangler login`.

Change the production URL in `astro.config.ts` and the routes in
`wrangler.jsonc`.
