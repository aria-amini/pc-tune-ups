import { expect, test } from '@playwright/test'

// Wednesday 1 PM in New Orleans, so the open-status pill renders the same text on every run.
test.beforeEach(async ({ page }) => {
	await page.clock.setFixedTime(new Date('2026-10-14T18:00:00Z'))
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
	await expect(page.getByText(/control4|30-day|workmanship/i)).toHaveCount(0)
})
