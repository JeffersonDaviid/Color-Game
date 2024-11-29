import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const ProtectedRouter = ({ element }) => {
	const { isAuthenticated } = useContext(AuthContext)

	useEffect(() => {
		if (!isAuthenticated) sessionStorage.clear()
		console.log(isAuthenticated)
	}, [isAuthenticated])

	return isAuthenticated ? element : <Navigate to='/login' />
}

export default ProtectedRouter
