import cpu from '@phosphor-icons/core/assets/regular/cpu.svg?raw'
import desktop_tower from '@phosphor-icons/core/assets/regular/desktop-tower.svg?raw'
import device_mobile from '@phosphor-icons/core/assets/regular/device-mobile.svg?raw'
import hard_drives from '@phosphor-icons/core/assets/regular/hard-drives.svg?raw'
import laptop from '@phosphor-icons/core/assets/regular/laptop.svg?raw'
import shield_check from '@phosphor-icons/core/assets/regular/shield-check.svg?raw'
import wifi_high from '@phosphor-icons/core/assets/regular/wifi-high.svg?raw'

export const services = [
	{
		id: 'computer-laptop-repair',
		icon: laptop,
		title: 'Computer & laptop repair',
		description:
			'Hardware replacement, OS reinstalls, cracked screens and hinges, and full tune-ups.',
	},
	{
		id: 'apple-device-repair',
		icon: device_mobile,
		title: 'Apple device repair',
		description:
			'Mac, iPhone, and iPad: battery swaps, memory upgrades, water damage, and logic-board diagnostics.',
	},
	{
		id: 'data-backup-recovery',
		icon: hard_drives,
		title: 'Data backup & recovery',
		description:
			'Recovery from hard drives, flash storage, and memory cards, plus backup planning.',
	},
	{
		id: 'networking-on-site-support',
		icon: wifi_high,
		title: 'Networking & on-site support',
		description:
			'Wi-Fi and router setup, small-business networks, and maintenance visits at your office or home.',
	},
	{
		id: 'virus-spyware-removal',
		icon: shield_check,
		title: 'Virus & spyware removal',
		description: 'Malware cleanup, security audits, and prevention.',
	},
	{
		id: 'hardware-upgrades',
		icon: cpu,
		title: 'Hardware upgrades',
		description:
			'RAM, SSD, GPU, and other upgrades that extend the life of the machine you own.',
	},
	{
		id: 'custom-built-computers',
		icon: desktop_tower,
		title: 'Custom-built computers',
		description:
			'Gaming rigs, creative workstations, and business desktops built to your specs.',
	},
]
