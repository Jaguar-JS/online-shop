import { FC } from 'react'
import styles from './styles.module.scss'
import { Links } from '@/components/footer/links'
import { Socials } from '@/components/footer/Socials'
import { NewsLetter } from '@/components/footer/NewsLetter'
import { Payment } from '@/components/footer/Payment'
import { Copyright } from '@/components/footer/Copyright'

export interface IFooter {}

const copyright = [
	{
		name: 'Privacy Center',
		link: '',
	},
	{
		name: 'Privacy & Cookie Policy',
		link: '',
	},
	{
		name: 'Manage Cookies',
		link: '',
	},
	{
		name: 'Privacy Center',
		link: '',
	},
	{
		name: 'Term & Conditions',
		link: '',
	},
	{
		name: 'Copyright & Notice',
		link: '',
	},
]

const links = [
	{
		heading: 'Online-Shop',
		links: [
			{
				name: 'About us',
				link: 'Link 1',
			},
			{
				name: 'Contact us',
				link: 'Link 1',
			},
			{
				name: 'Social Responsibilities ',
				link: 'Link 1',
			},
		],
	},
	{
		heading: 'Help & Support',
		links: [
			{
				name: 'Shopping Info',
				link: 'Link 1',
			},
			{
				name: 'Returns',
				link: 'Link 1',
			},
			{
				name: 'How to Order',
				link: 'Link 1',
			},
			{
				name: 'How to Track',
				link: 'Link 1',
			},
			{
				name: 'Size Guide',
				link: 'Link 1',
			},
		],
	},
	{
		heading: 'Customer Service',
		links: [
			{
				name: 'Customer Service',
				link: 'Link 1',
			},
			{
				name: 'Terms & Conditions',
				link: 'Link 1',
			},
			{
				name: 'Customers (Transactions)',
				link: 'Link 1',
			},
			{
				name: 'Take our feedback',
				link: 'Link 1',
			},
		],
	},
]
export const Footer: FC<IFooter> = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<Links links={links} />
				<Socials />
				<NewsLetter />
				<Payment />
				<Copyright copyright={copyright} />
			</div>
		</footer>
	)
}
