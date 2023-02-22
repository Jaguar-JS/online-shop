import { FC } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { RiSearch2Line } from 'react-icons/ri'
import { FaOpencart } from 'react-icons/fa'

export interface IMain {}

export const Main: FC<IMain> = () => {
	// const { cart } = useSelector((state) => ({ ...state }))
	return (
		<div className={styles.main}>
			<div className={styles.main__container}>
				<Link href="/" className={styles.logo}>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
						alt=""
					/>
				</Link>
				<div className={styles.search}>
					<input type="text" placeholder="Search..." />
					<div className={styles.search__icon}>
						<RiSearch2Line />
					</div>
				</div>
				<Link href="/cart" className={styles.cart}>
					<FaOpencart />
					<span>0</span>
				</Link>
			</div>
		</div>
	)
}
