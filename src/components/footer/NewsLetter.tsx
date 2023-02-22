import { FC } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export interface INewsLetter {}

export const NewsLetter: FC<INewsLetter> = () => {
	return (
		<div className={styles.footer__newsletter}>
			<h3>Sing Up For Our Newsletter</h3>
			<div>
				<input type="text" placeholder="Your Email Address" />
				<button>Subscribe</button>
			</div>
			<p>
				By clicking the Subscribe button , you are agreeing to{' '}
				<Link href="">Our Privacy & Cookie Policy </Link>
			</p>
		</div>
	)
}
