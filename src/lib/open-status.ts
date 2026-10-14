import { openDays, shop } from './shop'

const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

const formatHour = (hour: number) =>
	`${hour % 12 === 0 ? 12 : hour % 12} ${hour < 12 ? 'AM' : 'PM'}`

const isOpenDay = (day: number) => openDays.includes(day)

export interface OpenStatus {
	open: boolean
	label: string
}

export function getOpenStatus(now: Date): OpenStatus {
	const parts = new Intl.DateTimeFormat('en-US', {
		timeZone: shop.timeZone,
		weekday: 'long',
		hour: 'numeric',
		hourCycle: 'h23',
	}).formatToParts(now)

	const weekday = parts.find((part) => part.type === 'weekday')?.value ?? ''
	const hour = Number(parts.find((part) => part.type === 'hour')?.value)
	const day = weekdays.indexOf(weekday)

	if (isOpenDay(day) && hour >= shop.opensAt && hour < shop.closesAt) {
		return {
			open: true,
			label: `Open now · until ${formatHour(shop.closesAt)}`,
		}
	}

	if (isOpenDay(day) && hour < shop.opensAt) {
		return {
			open: false,
			label: `Closed · opens today at ${formatHour(shop.opensAt)}`,
		}
	}

	let offset = 1

	while (!isOpenDay((day + offset) % 7)) offset += 1

	const next = (day + offset) % 7
	const when = offset === 1 ? 'tomorrow' : weekdays[next]

	return {
		open: false,
		label: `Closed · opens ${when} at ${formatHour(shop.opensAt)}`,
	}
}
