import { FC } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { CiLocationOn } from 'react-icons/ci'

export const Copyright: FC<any> = ({ copyright }: any) => {
	return (
		<div className={styles.footer__copyright}>
			<section>©2023 Online Cinema All Rights Reserved.</section>
			<section>
				<ul>
					{copyright.map(({ name, link }: any) => (
						<li>
							<Link href={link}>{name}</Link>
						</li>
					))}
					<li>
						<a href="">
							<CiLocationOn /> Ukraine
						</a>
					</li>
				</ul>
			</section>
		</div>
	)
}
