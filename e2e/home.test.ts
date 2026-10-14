import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	// The live map embed changes with Google's tiles, so snapshots use a blank frame.
	await page.route('https://www.google.com/maps*', (route) =>
		route.fulfill({
			contentType: 'text/html',
			body: '<body style="margin:0;background:#dfe3e8"></body>',
		}),
	)
	await page.goto('/', { waitUntil: 'networkidle' })
	await expect(
		page.getByRole('link', { name: 'Get directions' }).first(),
	).toBeVisible()
})

test('home above the fold', async ({ page }) => {
	await expect(page).toHaveScreenshot('home.png')
})

test('home full page', async ({ page }) => {
	await page.evaluate(async () => {
		for (const image of document.images) image.loading = 'eager'

		await Promise.all(
			Array.from(document.images, (image) =>
				image.decode().catch(() => undefined),
			),
		)
	})
	await expect(page).toHaveScreenshot('home-full.png', { fullPage: true })
})

test('hero leads with directions and does not make the phone number the main action', async ({
	page,
}) => {
	const primary = page.locator('[data-hero-cta]')
	await expect(primary).toHaveText(/Get directions/)
	await expect(primary).toHaveAttribute('href', /google\.com\/maps\/dir/)
	await expect(page.getByText(/control4|30-day|workmanship/i)).toHaveCount(0)
})
