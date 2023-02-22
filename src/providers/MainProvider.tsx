import { FC, PropsWithChildren } from 'react'
import store from '@/store/store'
import { Provider } from 'react-redux'

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default MainProvider
