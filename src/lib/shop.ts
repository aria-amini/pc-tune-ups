export const shop = {
	name: 'PC Tune-Ups',
	phone: '504-885-1635',
	phoneHref: 'tel:+15048851635',
	email: 'info@afcom-inc.com',
	street: '3943 Veterans Blvd',
	city: 'Metairie',
	region: 'LA',
} as const

export const hours = [
	{ days: 'Mon–Sat', time: '10 AM–6 PM' },
	{ days: 'Sunday', time: 'Closed' },
]

export const hoursSummary = hours
	.map(({ days, time }) => `${days} ${time}`)
	.join(' · ')

export const address = `${shop.street}, ${shop.city}, ${shop.region}`

export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`

// Keyless embed: the maps.google.com output=embed form resolves a plain address.
export const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(address)}&z=16&output=embed`

export const socialLinks = [
	{
		name: 'Facebook',
		href: 'https://www.facebook.com/PCTuneUps365/',
		icon: 'Facebook',
	},
	{ name: 'Twitter', href: 'https://twitter.com/pctuneups', icon: 'Twitter' },
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/pc_tuneups/',
		icon: 'Instagram',
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/company/pctuneups',
		icon: 'Linkedin',
	},
	{
		name: 'YouTube',
		href: 'https://www.youtube.com/channel/UCLBMfHkUR9qu9WyNBGigPlg',
		icon: 'Youtube',
	},
] as const
