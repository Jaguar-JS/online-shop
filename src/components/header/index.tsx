import { FC } from 'react'

import styles from './styles.module.scss'
import { Top } from '@/components/header/Top'
import { Ad } from '@/components/header/ad'
import { Main } from '@/components/header/Main'
import { Location } from '@/pages'

export interface Header {
	country: Location
}

const Header: FC<Header> = ({ country }) => {
	return (
		<header className={styles.header}>
			<Ad />
			<Top country={country} />
			<Main />
		</header>
	)
}

export default Header
