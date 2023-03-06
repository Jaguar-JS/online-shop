import { FC } from 'react'
import styles from './LoginInput.module.scss'
import { BiUser } from 'react-icons/bi'
import { SiMinutemailer } from 'react-icons/si'
import { IoKeyOutline } from 'react-icons/io5'
import { ErrorMessage, useField } from 'formik'

export interface ILoginInput {
	icon: string
	placeholder: string
	type: string
	name: string
	onChange: (e: { target: { name: string; value: string } }) => void
}

export const LoginInput: FC<ILoginInput> = ({
	icon,
	placeholder,
	...props
}) => {
	const [field, meta] = useField(props)
	return (
		<div
			className={`${styles.input} ${
				meta.touched && meta.error ? styles.error : ''
			}`}
		>
			{icon === 'user' ? (
				<BiUser />
			) : icon === 'email' ? (
				<SiMinutemailer />
			) : icon === 'password' ? (
				<IoKeyOutline />
			) : (
				''
			)}
			<input placeholder={placeholder} {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className={styles.error__popup}>
					<span></span>
					<ErrorMessage name={field.name} />
				</div>
			) : (
				''
			)}
		</div>
	)
}
