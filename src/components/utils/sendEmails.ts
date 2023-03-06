import * as process from 'process'
import nodemailer from 'nodemailer'
import { activateEmailTemplate } from '@/components/emails/activateEmail'
import { google } from 'googleapis'

const { OAuth2 } = google.auth
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground'
const {
	MAILING_SERVICE_CLIEND_ID,
	MAILING_SERVICE_SECRET,
	MAILING_SERVICE_CLIEND_REFRESH_TOKEN,
	SENDER_EMAIL_ADDRES,
} = process.env

const oauth2Client = new OAuth2(
	MAILING_SERVICE_CLIEND_ID,
	MAILING_SERVICE_SECRET,
	MAILING_SERVICE_CLIEND_REFRESH_TOKEN,
	// @ts-ignore
	OAUTH_PLAYGROUND
)

export const sendEmail = (
	to: string,
	url: string,
	txt: string,
	subject: string
) => {
	oauth2Client.setCredentials({
		refresh_token: MAILING_SERVICE_CLIEND_REFRESH_TOKEN,
	})
	const accessToken = oauth2Client.getAccessToken()
	const smtpTransport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: `${SENDER_EMAIL_ADDRES}`,
			clientId: `${MAILING_SERVICE_CLIEND_ID}`,
			clientSecret: `${MAILING_SERVICE_SECRET}`,
			refreshToken: `${MAILING_SERVICE_CLIEND_REFRESH_TOKEN}`,
			accessToken: `${accessToken}`,
		},
	})
	const mailOptions = {
		from: SENDER_EMAIL_ADDRES,
		to: to,
		subject: subject,
		html: activateEmailTemplate(to, url),
	}
	smtpTransport.sendMail(mailOptions, (err, infos) => {
		if (err) return err
		return infos
	})
}
