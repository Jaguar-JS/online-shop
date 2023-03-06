import { FC } from 'react'
import styles from './CircleIconBtn.module.scss'
import { BiRightArrowAlt } from 'react-icons/bi'

export interface ICircleIconBtn {
	type: 'button' | 'submit' | 'reset'
	text: string
	icon: string
}

export const CircleIconBtn: FC<ICircleIconBtn> = ({ type, text, icon }) => {
	return (
		<button type={type} className={styles.button}>
			{text}
			<div className={styles.svg__wrap}>
				<BiRightArrowAlt />
			</div>
		</button>
	)
}
