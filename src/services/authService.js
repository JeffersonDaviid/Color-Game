import { API_AUTH } from '../utils/constantes'

export const loginService = async (user) => {
	try {
		const response = await fetch(API_AUTH + '/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})

		const objData = await response.json()

		return objData
	} catch (error) {
		console.error('Error login user:', error)
		throw error
	}
}

export const registerTherapistService = async (user) => {
	try {
		const response = await fetch(API_AUTH + '/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		})

		const respData = await response.json()
		return respData
	} catch (error) {
		console.error('Error login user:', error)
		throw error
	}
}

// export const logoutService = async (accessToken:string) => {
export const logoutService = async () => {
	try {
		// const response = await Axios.post(API_AUTH + '/logout', {
		// 	accessToken: sessionStorage.getItem('accessToken'),
		// })

		// if (response.data.status === 200) sessionStorage.removeItem('accessToken')
		sessionStorage.clear()

		return 'h'
	} catch (error) {
		console.error('Error logout user:', error)
		throw error
	}
}
