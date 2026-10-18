import { expect, test } from '@playwright/test'

test('serves the home page', async ({ page }) => {
	const response = await page.goto('/')

	expect(response?.status()).toBe(200)
	await expect(page).toHaveTitle(/PC Tune-Ups/)
	await expect(
		page.getByRole('link', { name: 'Get directions' }).first(),
	).toBeVisible()
})
