import PropTypes from 'prop-types'
import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const ProtectedRouter = ({ element }) => {
	const { isAuthenticated } = useContext(AuthContext)

	useEffect(() => {
		if (!isAuthenticated) sessionStorage.clear()
	}, [isAuthenticated])

	return isAuthenticated ? element : <Navigate to='/login' />
}
ProtectedRouter.propTypes = {
	element: PropTypes.element.isRequired,
}

export default ProtectedRouter
