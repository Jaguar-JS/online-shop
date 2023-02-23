import axios from 'axios'

export const LocationService = {
	async getLocation() {
		return axios.get<any>('https://api.ipregistry.co/?key=d46oao4p1nsuv22l')
	},
}
