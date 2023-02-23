import Header from '@/components/header'
import { Footer } from '@/components/footer'
import { LocationService } from '@/services/location-service'

export interface Location {
	name: string
	flag?: string
}

export default function Home({ country }: { country: Location }) {
	debugger
	return (
		<main>
			<Header country={country} />
			<Footer country={country} />
		</main>
	)
}

export async function getServerSideProps() {
	try {
		const { data } = await LocationService.getLocation()
		return {
			props: {
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
