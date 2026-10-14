import { fmt, lint, mergeToolkitConfig } from '@aamini/config/vite-plus'
import { defineConfig } from 'vite-plus'

// Vite+ runs formatting and linting only; Astro owns the build.
export default defineConfig(
	mergeToolkitConfig(
		{ fmt, lint: lint('astro') },
		{
			fmt: { ignorePatterns: (preset) => [...preset, '.astro/**'] },
			lint: {
				jsPlugins: ['@shadcn/lint'],
				rules: {
					'shadcn/require-static-classes': 'error',
					'shadcn/no-raw-colors': 'error',
					'shadcn/no-unknown-classes': 'error',
					'shadcn/no-arbitrary-values': ['error', { allow: ['layout'] }],
					'shadcn/no-inline-styles': 'error',
					'shadcn/no-restyle': ['error', { allow: ['layout'] }],
				},
				ignorePatterns: (preset) => [...preset, '.astro/**'],
			},
		},
	),
)
