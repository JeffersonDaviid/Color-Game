import { API_AUTH } from '../utils/constantes'

export const loginService = async (user) => {
	try {
		const data = {
			username: user.username,
			password: user.password,
		}

		// const response = await fetch(API_AUTH + '/login', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'Aplication/json',
		// 	},
		// 	body: JSON.stringify(data),
		// })

		// const respData = await response.json()

		//TODO: JEFF - ver la respuesta
		console.log(data)
		return {
			token: 'superToken',
			cedulaT: '1777777777',
		}
	} catch (error) {
		console.error('Error login user:', error)
		throw error
	}
}

//TODO:implementar
export const registerService = async (user) => {
	try {
		const data = {
			username: user.username,
			password: user.password,
		}

		// const response = await fetch(API_AUTH + '/login', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'Aplication/json',
		// 	},
		// 	body: JSON.stringify(data),
		// })

		// const respData = await response.json()

		//TODO: JEFF - ver la respuesta
		console.log(data)
		return {
			token: 'superToken',
			cedulaT: '1777777777',
		}
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
