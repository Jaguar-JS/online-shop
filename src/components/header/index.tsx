import { FC } from 'react'

import styles from './styles.module.scss'
import { Top } from '@/components/header/Top'
import { Ad } from '@/components/header/ad'
import { Main } from '@/components/header/Main'

export interface Header {}

const Header: FC<Header> = () => {
	return (
		<header className={styles.header}>
			<Ad />
			<Top />
			<Main />
		</header>
	)
}

export default Header
