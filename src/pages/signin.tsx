import { LocationService } from '@/services/location-service'
import { Location } from '@/pages/index'
import { NextPage } from 'next'
import { SignInPage } from '@/components/screens/signIn'
import { getCsrfToken, getProviders, getSession } from 'next-auth/react'

export interface ISignIn {
	country: Location
	providers: any
	crfToken: any
	callBackUrl: any
}

const SignIn: NextPage<ISignIn> = ({
	country,
	providers,
	crfToken,
	callBackUrl,
}) => {
	return (
		<SignInPage
			country={country}
			providers={providers}
			callBackUrl={callBackUrl}
			crfToken={crfToken}
		/>
	)
}

export async function getServerSideProps(context: any) {
	try {
		const { req, query } = context
		const { callBackUrl } = query
		const session = await getSession({ req })
		const { data } = await LocationService.getLocation()
		if (session) {
			return {
				redirect: {
					destination: callBackUrl,
				},
			}
		}
		const crfToken = await getCsrfToken(context)
		const providers = Object.values(await getProviders())

		return {
			props: {
				providers,
				crfToken,
				callBackUrl,
				country: {
					name: data.location.country.name,
					flag: data.location.country.flag.emojitwo,
				},
			},
		}
	} catch (e) {
		return {
			props: {},
			notFound: true,
		}
	}
}

export default SignIn
