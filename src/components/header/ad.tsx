import { FC } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'


export const Ad: FC = () => {
	return (
		<Link href={'/borwse'}>
			<div className={styles.ad}>
			</div>
		</Link>
	)
}

