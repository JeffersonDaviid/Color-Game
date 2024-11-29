import { createContext } from 'react'
import useAuth from '../hooks/useAuth'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const {
		isAuthenticated,
		userloged,
		isSuccessRegisterTherapist,
		registerTherapist,
		login,
		logout,
	} = useAuth()

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				userloged,
				isSuccessRegisterTherapist,
				registerTherapist,
				login,
				logout,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
