import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await page.clock.install({ time: new Date('2026-01-14T17:00:00Z') })
	await page.goto('/', { waitUntil: 'networkidle' })
	await expect(page.getByText('Open now')).toBeVisible()
	await page.evaluate(async () => {
		const images = [...document.images]

		for (const image of images) image.loading = 'eager'
		await Promise.all(images.map((image) => image.decode()))
	})
})

test('home above the fold', async ({ page }) => {
	await expect(page).toHaveScreenshot('home.png')
})

test('home full page', async ({ page }) => {
	await expect(page).toHaveScreenshot('home-full.png', { fullPage: true })
})
