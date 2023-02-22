import { FC, useState } from 'react'
import { BsSuitHeart } from 'react-icons/bs'
import { MdSecurity } from 'react-icons/md'
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri'

import styles from './styles.module.scss'
import Link from 'next/link'
import { UserMenu } from '@/components/header/UserMenu'

export interface ITop {}

export const Top: FC<ITop> = () => {
	const [loggedIn, setLoggedIn] = useState<boolean>(true)
	const [visible, setVisible] = useState<boolean>(false)
	return (
		<div className={styles.top}>
			<div className={styles.top__container}>
				<div></div>
				<ul className={styles.top__list}>
					<li className={styles.li}>
						<img
							src="https://static.vecteezy.com/system/resources/previews/006/204/926/original/ukraine-realistic-wavy-flag-free-vector.jpg"
							alt=""
						/>
						<span>Ukraine / usd</span>
					</li>
					<li className={styles.li}>
						<MdSecurity />
						<span>Bayer Protection</span>
					</li>
					<li className={styles.li}>
						<span>Customer Service</span>
					</li>
					<li className={styles.li}>
						<span>Help</span>
					</li>
					<li className={styles.li}>
						<BsSuitHeart />
						<Link href="/profile/wishlist">
							<span>Wishlist</span>
						</Link>
					</li>
					<li
						className={styles.li}
						onMouseOver={() => setVisible(true)}
						onMouseLeave={() => setVisible(false)}
					>
						{loggedIn ? (
							<li className={styles.li}>
								<div className={styles.flex}></div>
								<img
									src="https://image.pngaaa.com/689/2189689-middle.png"
									alt=""
								/>
								<span>фывфывфывфыв</span>
								<RiArrowDropDownFill />
							</li>
						) : (
							<li className={styles.li}>
								<div className={styles.flex}></div>
								<RiAccountPinCircleLine />
								<span>Account</span>
								<RiArrowDropDownFill />
							</li>
						)}
						{visible && <UserMenu loggedIn={loggedIn} />}
					</li>
				</ul>
			</div>
		</div>
	)
}
