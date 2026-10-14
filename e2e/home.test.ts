import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
	await page.goto('/', { waitUntil: 'networkidle' })
	await expect(page.getByRole('button', { name: 'Next slide' })).toBeEnabled()
})

test('home above the fold', async ({ page }) => {
	await expect(page).toHaveScreenshot('home.png')
})

test('home full page', async ({ page }) => {
	await expect(page).toHaveScreenshot('home-full.png', { fullPage: true })
})
