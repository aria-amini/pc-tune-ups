import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
	site: 'https://www.pctuneupsnola.com',
	output: 'static',
	devToolbar: { enabled: true, placement: 'bottom-right' },
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
})
