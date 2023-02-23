import { FC } from 'react'
import styles from './styles.module.scss'
import { Links } from '@/components/footer/links'
import { Socials } from '@/components/footer/Socials'
import { NewsLetter } from '@/components/footer/NewsLetter'
import { Payment } from '@/components/footer/Payment'
import { Copyright } from '@/components/footer/Copyright'
import { Location } from '@/pages'
import { copyright, links } from '@/components/shared/data/footer-data'

export interface IFooter {
	country: Location
}

export const Footer: FC<IFooter> = ({ country }) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<Links links={links} />
				<Socials />
				<NewsLetter />
				<Payment />
				<Copyright copyright={copyright} country={country} />
			</div>
		</footer>
	)
}
