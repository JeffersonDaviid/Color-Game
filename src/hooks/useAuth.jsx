import { useContext, useEffect, useState } from 'react'
import { StateFetchContext } from '../context/StateFetchContext'
import { loginService, logoutService } from '../services/authService'
import { handleAPIError } from '../utils/HandleAPIError'

const useAuth = () => {
	const { setLoading } = useContext(StateFetchContext)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [userloged, setUserLoged] = useState({
		token: '',
		cedulaT: '',
	})

	useEffect(() => {
		const userLoged = window.sessionStorage.getItem('userLoged')
		if (userLoged) {
			setUserLoged(JSON.parse(userLoged))
			setIsAuthenticated(true)
		} else {
			sessionStorage.clear()
		}
	}, [])

	const login = async (data) => {
		setLoading(true)
		try {
			const response = await loginService(data)

			if (response.status === 200) {
				setUserLoged({
					cedulaT: response.data.cedulaT,
					token: response.data.token,
				})
				setIsAuthenticated(true)
				window.sessionStorage.setItem(
					'userLoged',
					JSON.stringify({ cedulaT: response.data.cedulaT, token: response.data.token })
				)
			}
		} catch (error) {
			handleAPIError(error)
		} finally {
			setLoading(false)
		}
	}

	const logout = async () => {
		setLoading(true)
		try {
			await logoutService()
			setUserLoged({ token: '', cedulaT: '' })
			setIsAuthenticated(false)
		} catch (error) {
			handleAPIError(error)
		} finally {
			setLoading(false)
		}
	}

	return { isAuthenticated, userloged, login, logout }
}

export default useAuth
