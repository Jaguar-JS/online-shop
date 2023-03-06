import { FC } from 'react'
import Header from '@/components/header'
import { Footer } from '@/components/footer'
import { Location } from '@/pages'
import { BiLeftArrowAlt } from 'react-icons/bi'
import Link from 'next/link'
import styles from './SignInPage.module.scss'
import { Form, Formik } from 'formik'

export const SignInPage: FC<{ country: Location }> = ({ country }) => {
	return (
		<>
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
				</div>
				<div className={styles.login__form}>
					<h1>Sign In</h1>
					<p>Get access to one of the best shopping service in the world</p>
					<Formik initialValues={}>
						{(form) => (
							<Form>
								<input type="text" />
							</Form>
						)}
					</Formik>
				</div>
			</div>
			<Footer country={country} />
		</>
	)
}
