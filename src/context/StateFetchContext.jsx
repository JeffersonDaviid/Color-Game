import { createContext } from 'react'

import useStateFetch from '../hooks/useStateFetch.jsx'

export const StateFetchContext = createContext()

export const StateFetchContextProvider = ({ children }) => {
	const { loading, setLoading } = useStateFetch()

	return (
		<StateFetchContext.Provider
			value={{
				loading,

				setLoading,
			}}>
			{children}
		</StateFetchContext.Provider>
	)
}
