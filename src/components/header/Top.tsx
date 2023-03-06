import { FC, useState } from 'react'
import { BsSuitHeart } from 'react-icons/bs'
import { MdSecurity } from 'react-icons/md'
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri'

import styles from './styles.module.scss'
import Link from 'next/link'
import { UserMenu } from '@/components/header/UserMenu'
import { Location } from '@/pages'
import { useSession } from 'next-auth/react'

export interface ITop {
	country: Location
}

export const Top: FC<ITop> = ({ country }) => {
	const { data: session } = useSession()
	const [visible, setVisible] = useState<boolean>(false)

	return (
		<div className={styles.top}>
			<div className={styles.top__container}>
				<div></div>
				<ul className={styles.top__list}>
					<li className={styles.li}>
						<img src={country.flag} alt="flag-country" />
						<span>{country.name} / usd</span>
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
						{session ? (
							<li className={styles.li}>
								<div className={styles.flex}></div>
								<img src={`${session.user?.image}`} alt="user image" />
								<span>{session.user?.name}</span>
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
						{visible && <UserMenu session={session} />}
					</li>
				</ul>
			</div>
		</div>
	)
}
