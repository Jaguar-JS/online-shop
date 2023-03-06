import nc from 'next-connect'
import { connectDB, disconnectDB } from '../../../../utils/db'
import User from '@/components/models/User-model'
import bcrypt from 'bcrypt'
import { createActivationToken } from '@/components/utils/tokens'
import { sendEmail } from '@/components/utils/sendEmails'

export const validEmail = (email: string) => {
	const regExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return regExp.test(email)
}

const handler = nc({
	onError: (err, req, res, next) => {
		console.error(err.stack)
		res.status(500).end('Something broke!')
	},
	onNoMatch: (req, res) => {
		res.status(404).end('Page is not found')
	},
}).post(async (req, res) => {
	try {
		await connectDB()
		const { name, email, password } = req.body
		if (!name || !email || !password) {
			res.status(400).json({ message: 'Please fill in all fields.' })
		}
		if (!validEmail(email)) {
			res.status(400).json({ message: 'Invalid Email.' })
		}
		const user = await User.findOne({ email })
		if (user) {
			res.status(400).json({ message: 'This Email already exist.' })
		}
		if (password.length < 6) {
			res
				.status(400)
				.json({ message: 'Password must be atleast  6 characters ' })
		}
		const cryptedPassword = await bcrypt.hash(password, 10)
		const newUser = new User({
			name: name,
			email: email,
			password: cryptedPassword,
		})
		const addUser = await newUser.save()
		const activation_token = createActivationToken({
			id: addUser._id.toString(),
		})
		const url = `${process.env.BASE_URL}/activate/${activation_token}`
		sendEmail(email, url, '', 'Activate Your Account')
		await disconnectDB()
		res.json({
			message: 'resister successful ! Please activate your email to start',
		})
	} catch (e) {
		res.status(500).end('Something broke!')
	}
})

export default handler
