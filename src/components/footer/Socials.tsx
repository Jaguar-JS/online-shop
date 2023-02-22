import { FC } from 'react'
import styles from './styles.module.scss'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'
import {
	BsInstagram,
	BsPinterest,
	BsSnapchat,
	BsTwitter,
	BsYoutube,
} from 'react-icons/bs'

export interface ISocials {}

export const Socials: FC<ISocials> = () => {
	return (
		<div className={styles.footer__socials}>
			<section>
				<h1>Stay Connected</h1>
				<ul>
					<li>
						<a href="/" target="_blank" rel="noopener noreferrer"></a>
						<FaFacebookF />
					</li>
					<li>
						<a href="/" target="_blank" rel="noopener noreferrer"></a>
						<BsInstagram />
					</li>
					<li>
						<a href="/" target="_blank" rel="noopener noreferrer"></a>
						<BsTwitter />
					</li>
					<li>
						<a href="/" target="_blank" rel="noopener noreferrer"></a>
						<BsYoutube />
					</li>
					<li>
						<a href="/" target="_blank" rel="noopener noreferrer"></a>
						<BsPinterest />
					</li>
					<li>
						<a href="/" target="_blank" rel="noopener noreferrer"></a>
						<BsSnapchat />
					</li>
					<li>
						<a href="/" target="_blank" rel="noopener noreferrer"></a>
						<FaTiktok />
					</li>
				</ul>
			</section>
		</div>
	)
}
