import { FC } from 'react'
import styles from './styles.module.scss'

export interface IPayment {}

export const Payment: FC<IPayment> = () => {
	return (
		<div className={styles.footer__payment}>
			<h3>We Accept</h3>
			<div className={styles.footer__flexWrap}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/989px-Mastercard-logo.svg.png"
					alt=""
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
					alt=""
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1280px-PayPal.svg.png"
					alt=""
				/>
			</div>
		</div>
	)
}
