import PropTypes from 'prop-types'
import { useMemo } from 'react'
import AuthContext from '../context/AuthContext' // Correct import for default export
import useAuth from '../hooks/useAuth'

export const AuthProvider = ({ children }) => {
	const {
		isAuthenticated,
		userloged,
		isSuccessRegisterTherapist,
		registerTherapist,
		login,
		logout,
	} = useAuth()

	const authContextValue = useMemo(
		() => ({
			isAuthenticated,
			userloged,
			isSuccessRegisterTherapist,
			registerTherapist,
			login,
			logout,
		}),
		[
			isAuthenticated,
			userloged,
			isSuccessRegisterTherapist,
			registerTherapist,
			login,
			logout,
		]
	)

	return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
