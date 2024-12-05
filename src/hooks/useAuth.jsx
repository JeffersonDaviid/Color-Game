import { useContext, useEffect, useState } from 'react'
import { StateFetchContext } from '../context/StateFetchContext'
import {
	loginService,
	logoutService,
	registerTherapistService,
} from '../services/authService'
import { handleAPIError, handleAPIMessages } from '../utils/HandleAPIError'

const useAuth = () => {
	const { setLoading } = useContext(StateFetchContext)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [isSuccessRegisterTherapist, setIsSuccessRegisterTherapist] = useState(false)
	const [userloged, setUserLoged] = useState({
		token: '',
		therapist: {
			cedulaT: '',
			nombre: '',
			apellido: '',
			telefono: '',
			correo: '',
		},
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

	const registerTherapist = async (data) => {
		setLoading(true)
		try {
			const response = await registerTherapistService(data)
			if (response.status === 201) {
				setIsSuccessRegisterTherapist(true)
			}

			handleAPIMessages(response.status, response.message)
		} catch (error) {
			handleAPIError(error)
		} finally {
			setLoading(false)
		}
	}

	const login = async (data) => {
		setLoading(true)
		try {
			const response = await loginService(data)
			if (response.status === 200) {
				setUserLoged({
					therapist: response.data.therapist,
					token: response.data.token,
				})
				setIsAuthenticated(true)
				window.sessionStorage.setItem(
					'userLoged',
					JSON.stringify({ cedulaT: response.data.therapist, token: response.data.token })
				)
			}
			handleAPIMessages(response.status, response.message)
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

	return {
		isAuthenticated,
		userloged,
		isSuccessRegisterTherapist,
		registerTherapist,
		login,
		logout,
	}
}

export default useAuth
