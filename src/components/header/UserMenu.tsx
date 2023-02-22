import { FC } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export interface IUserMenu {
	loggedIn: boolean
}

export const UserMenu: FC<IUserMenu> = ({ loggedIn }) => {
	return (
		<div className={styles.menu}>
			<h4>Welcome to Online Shop!</h4>
			{loggedIn ? (
				<div className={styles.flex}>
					<img
						src="https://image.pngaaa.com/689/2189689-middle.png"
						alt=""
						className={styles.menu__img}
					/>
					<div className={styles.col}>
						<span>Welcome Back</span>
						<h3>UserName</h3>
						<span>sing out</span>
					</div>
				</div>
			) : (
				<div className={styles.flex}>
					<button className={styles.btn__first}>Register</button>
					<button className={styles.btn__second}>Login</button>
				</div>
			)}
			<ul>
				<li>
					<Link href="/profile">Account</Link>
				</li>
				<li>
					<Link href="/profile/orders">My Orders</Link>
				</li>
				<li>
					<Link href="/profile/message">Message Center</Link>
				</li>
				<li>
					<Link href="/profile/address">Address</Link>
				</li>
				<li>
					<Link href="/profile/wishlist">Wishlist</Link>
				</li>
			</ul>
		</div>
	)
}
