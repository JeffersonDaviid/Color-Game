import { createContext } from 'react'
import useAuth from '../hooks/useAuth'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const { isAuthenticated, userloged, login, logout } = useAuth()

	return (
		<AuthContext.Provider value={{ isAuthenticated, userloged, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
