import { defineConfig, devices } from '@playwright/test'

const port = Number(process.env.APP_PORT ?? '4321')
const baseURL = process.env.BASE_URL?.trim() || `http://localhost:${port}`

const launchOptions = { args: ['--disable-lcd-text', '--headless=new'] }

export default defineConfig({
	testDir: './e2e',
	outputDir: '.playwright/test-results',
	// One baseline set for every base URL, so the live site and the local build
	// compare against the same images.
	snapshotPathTemplate:
		'{testDir}/__screenshots__/{testFilePath}/{arg}-{projectName}{ext}',
	fullyParallel: true,
	workers: process.env.CI ? 1 : '50%',
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: [['html', { open: 'never', outputFolder: '.playwright/report' }]],
	use: {
		baseURL,
		channel: 'chromium',
		trace: 'retain-on-first-failure',
		screenshot: 'only-on-failure',
	},
	timeout: 30_000,
	projects: [
		{
			name: 'desktop',
			use: { ...devices['Desktop Chrome'], launchOptions },
		},
		{
			name: 'mobile',
			use: {
				...devices['Desktop Chrome'],
				viewport: { width: 320, height: 800 },
				launchOptions,
			},
		},
	],
	...(process.env.BASE_URL
		? {}
		: {
				webServer: {
					command: `pnpm build && pnpm wrangler dev --port ${port}`,
					url: baseURL,
					reuseExistingServer: !process.env.CI,
				},
			}),
})
