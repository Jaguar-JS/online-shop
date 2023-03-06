import * as Yup from 'yup'

export const initialValues = {
	login_email: '',
	login_password: '',
	full_name: '',
	email: '',
	password: '',
	confirm_password: '',
	message: '',
}

export const loginValidationSchema = Yup.object({
	login_email: Yup.string()
		.required('Email address is required')
		.email('Please enter a valid email address'),
	login_password: Yup.string().required('Please enter a  password'),
})
export const registerValidationSchema = Yup.object({
	full_name: Yup.string()
		.required('What`s your name?')
		.min(2, 'First Name must be at least 2 and 16 characters')
		.max(16, 'First Name must be at least 2 and 16 characters')
		.matches(/^[aA-zZ]/, 'Number and special characters are not allowed'),
	email: Yup.string()
		.required('Email address is required')
		.email('Please enter a valid email address'),
	password: Yup.string()
		.required('Please enter a  password')
		.min(6, 'Password must be at at least 6 characters')
		.max(36, 'Password cant be more than  36 characters'),
	confirm_password: Yup.string()
		.required('Confirm your Password ')
		.oneOf([Yup.ref('password')], 'passwords must match'),
})
