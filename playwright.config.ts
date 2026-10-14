import { playwrightConfig } from '@aamini/config/playwright'

const port = Number(process.env.APP_PORT ?? '4321')

const baseURL = process.env.BASE_URL?.trim() || `http://localhost:${port}`

const webServer = {
	command: `pnpm build && pnpm wrangler dev --port ${port}`,
	url: baseURL,
	reuseExistingServer: !process.env.CI,
}

export default {
	...playwrightConfig({
		testDir: './e2e',
		baseURL,
		webServer: process.env.BASE_URL ? undefined : webServer,
	}),
	// One baseline set for every base URL, so the live site and the local build
	// compare against the same images.
	snapshotPathTemplate:
		'{testDir}/__screenshots__/{testFilePath}/{arg}-{projectName}{ext}',
}
