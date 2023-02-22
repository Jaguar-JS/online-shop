import { FC } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export interface ILinks {
	links: any
}

export const Links: FC<ILinks> = ({ links }) => {
	return (
		<div className={styles.footer__links}>
			{links.map((link: any, index: number) => (
				<ul>
					{index === 0 ? (
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
							alt="logo"
						></img>
					) : (
						<b>{link.heading}</b>
					)}
					{link.links.map((link: any, index: number) => (
						<li>
							<Link href={link.link}>{link.name}</Link>
						</li>
					))}
				</ul>
			))}
		</div>
	)
}
