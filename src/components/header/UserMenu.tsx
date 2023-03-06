import { FC } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'

export interface IUserMenu {
	session: any
}

export const UserMenu: FC<IUserMenu> = ({ session }) => {
	return (
		<div className={styles.menu}>
			<h4>Welcome to Online Shop!</h4>
			{session ? (
				<div className={styles.flex}>
					<img
						src={`${session.user.image}`}
						alt="user image"
						className={styles.menu__img}
					/>
					<div className={styles.col}>
						<span>Welcome Back</span>
						<h3>{session.user.name}</h3>
						<span
							onClick={(e) => {
								e.preventDefault()
								signOut()
							}}
						>
							Sing Out
						</span>
					</div>
				</div>
			) : (
				<div className={styles.flex}>
					<button className={styles.btn__first}>Register</button>
					<button className={styles.btn__second} onClick={() => signIn()}>
						Login
					</button>
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
