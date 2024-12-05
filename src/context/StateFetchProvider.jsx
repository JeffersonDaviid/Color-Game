import PropTypes from 'prop-types'
import useStateFetch from '../hooks/useStateFetch.jsx'
import StateFetchContext from './StateFetchContext.js'

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

StateFetchContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
