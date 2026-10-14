import { defineConfig } from 'vite-plus'

// Vite+ runs formatting and linting only; Astro owns the build.
export default defineConfig({
	fmt: {
		singleQuote: true,
		semi: false,
		useTabs: true,
		experimentalTailwindcss: {},
		experimentalSortImports: {},
		printWidth: 80,
		experimentalSortPackageJson: false,
		proseWrap: 'always',
		ignorePatterns: ['dist/**', '.astro/**', 'pnpm-lock.yaml'],
		overrides: [
			{
				files: ['*.{yaml,yml}'],
				options: { useTabs: false },
			},
		],
	},
	lint: {
		plugins: [
			'eslint',
			'unicorn',
			'typescript',
			'oxc',
			'import',
			'jsx-a11y',
			'node',
			'promise',
		],
		options: {
			maxWarnings: 0,
			typeAware: true,
			typeCheck: true,
		},
		rules: {
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'typescript/consistent-type-assertions': [
				'error',
				{ assertionStyle: 'never' },
			],
			'oxc/no-accumulating-spread': 'error',
		},
		ignorePatterns: ['dist/**', '.astro/**'],
	},
})
