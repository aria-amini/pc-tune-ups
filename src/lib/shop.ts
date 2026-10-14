export const shop = {
	name: 'PC Tune-Ups',
	phone: '504-885-1635',
	phoneHref: 'tel:+15048851635',
	email: 'info@afcom-inc.com',
	street: '3943 Veterans Blvd',
	city: 'Metairie',
	region: 'LA',
	mapUrl: 'https://maps.app.goo.gl/HFwuccUoHaHKUXVG9',
	timeZone: 'America/Chicago',
	// Weekday numbers follow Date#getDay: 0 is Sunday.
	openDays: [1, 2, 3, 4, 5, 6],
	openHour: 10,
	closeHour: 18,
} as const

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
