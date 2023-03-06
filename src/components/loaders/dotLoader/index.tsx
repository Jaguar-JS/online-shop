import { FC } from 'react'
import styles from './styles.module.scss'
import DotLoader from 'react-spinners/DotLoader'

export const DotLoaderSpinner: FC<{ loading: boolean }> = ({ loading }) => {
	return (
		<div className={styles.loader}>
			<DotLoader loading={loading} color="#2f82ff" />
		</div>
	)
}
