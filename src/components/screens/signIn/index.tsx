import { FC, useState } from 'react'
import Header from '@/components/header'
import { Footer } from '@/components/footer'
import { BiLeftArrowAlt } from 'react-icons/bi'
import Link from 'next/link'
import styles from './SignInPage.module.scss'
import { Form, Formik } from 'formik'
import { LoginInput } from '@/components/ui/inputs/loginInput'
import { CircleIconBtn } from '@/components/ui/buttons/circleIconBtn'
import { signIn } from 'next-auth/react'
import {
	initialValues,
	loginValidationSchema,
	registerValidationSchema,
} from '@/components/shared/forms/foms'
import axios from 'axios'
import { DotLoaderSpinner } from '@/components/loaders/dotLoader'
import { useRouter } from 'next/router'
import { ISignIn } from '@/pages/signin'

export const SignInPage: FC<ISignIn> = ({
	country,
	providers,
	callBackUrl,
	crfToken,
}) => {
	const [loading, setLoading] = useState(false)
	let router = useRouter()

	const [user, setUser] = useState(initialValues)
	const {
		login_email,
		login_password,
		confirm_password,
		password,
		email,
		full_name,
		message,
	} = user
	const handleChange = (e: { target: { name: string; value: string } }) => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}

	const singUpHandler = () => {
		try {
			setLoading(true)
			// @ts-ignore
			const { data } = axios.post('/api/auth/signup', {
				name: full_name,
				email,
				password,
			})
			setUser({ ...user, message: data.message })
			setLoading(false)
			setTimeout(() => {
				router.push(callBackUrl || '/')
			}, 2000)
		} catch (err) {
			setLoading(false)
			// @ts-ignore
			setUser({ ...user, message: err.response.data.message })
		}
	}
	const signInHandler = () => {
		setLoading(true)
		let options = {
			redirect: false,
			email: login_email,
			password: login_password,
		}
		const res = signIn('credentials', options)
		setUser({ ...user, message: '' })
		setLoading(false)
		// @ts-ignore
		if (res?.error) {
			setLoading(false)
			setUser({ ...user, message: '' })
		} else {
			router.push(callBackUrl || '/')
		}
	}

	return (
		<>
			{loading && <DotLoaderSpinner loading={loading} />}
			<Header country={country} />
			<div className={styles.login}>
				<div className={styles.login__container}>
					<div className={styles.login__header}>
						<div className={styles.back__svg}>
							<BiLeftArrowAlt />
						</div>
						<span>
							We`d be happy to join us! <Link href="/"> Go to store</Link>
						</span>
					</div>
					<div className={styles.login__form}>
						<h1>Sign In</h1>
						<p>Get access to one of the best shopping service in the world</p>
						<Formik
							enableReinitialize
							initialValues={{ login_email, login_password }}
							onSubmit={() => signInHandler()}
							validationSchema={loginValidationSchema}
						>
							{(form) => (
								<Form>
									<LoginInput
										type="text"
										name="login_email"
										icon="email"
										placeholder="Email address"
										onChange={handleChange}
									/>
									<LoginInput
										type="password"
										name="login_password"
										icon="password"
										placeholder="Enter your password"
										onChange={handleChange}
									/>
									<CircleIconBtn icon={''} type="submit" text="Sign In" />
									<div className={styles.forgot}>
										<Link href="/forgot">Forgot Password ?</Link>
									</div>
								</Form>
							)}
						</Formik>
						<div className={styles.login__socials}>
							<span className={styles.or}>Our Continue with</span>
							<div className={styles.login__socials_wrap}>
								{providers?.map((provider: any, i) => {
									if (provider.name === 'Credentials') {
										return
									} else {
										return (
											<div key={provider.name + i}>
												<button
													className={styles.social__btn}
													onClick={() => signIn(provider.id)}
												>
													<img
														src={`../../icons/${provider.name}.png`}
														alt="links-name"
													/>
													Sing In with {provider.name}
												</button>
											</div>
										)
									}
								})}
							</div>
						</div>
					</div>
				</div>
				<div className={styles.login__container}>
					<div className={styles.login__form}>
						<h1>Sign Up</h1>
						<p>Get access to one of the best shopping service in the world</p>
						<Formik
							enableReinitialize
							initialValues={{ full_name, email, password, confirm_password }}
							onSubmit={() => {
								singUpHandler()
							}}
							validationSchema={registerValidationSchema}
						>
							{(form) => (
								<Form>
									<LoginInput
										type="text"
										name="full_name"
										icon="user"
										placeholder="Full Name"
										onChange={handleChange}
									/>
									<LoginInput
										type="email"
										name="email"
										icon="email"
										placeholder="Enter your email"
										onChange={handleChange}
									/>
									<LoginInput
										type="password"
										name="password"
										icon="password"
										placeholder="Enter your password"
										onChange={handleChange}
									/>
									<LoginInput
										type="password"
										name="confirm_password"
										icon="password"
										placeholder="Re type password"
										onChange={handleChange}
									/>
									<CircleIconBtn icon={''} type="submit" text="Sign Up" />
								</Form>
							)}
						</Formik>
						{message && <span>{message}</span>}
					</div>
				</div>
			</div>
			<Footer country={country} />
		</>
	)
}
