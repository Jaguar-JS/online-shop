import { FC } from 'react'
import styles from './SingIn.module.scss'

export interface ISingIn {}

export const SingIn: FC<ISingIn> = () => {
	return <div className={styles.container}></div>
}
