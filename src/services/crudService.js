import { API_HISTORY_TRANSFER, API_PATIENT, API_SESSION, API_THERAPIST } from '../utils/constantes'

export const getTherapistServ = async (cedulaT) => {
	try {
		const response = await fetch(API_THERAPIST + '/' + cedulaT)
		const respData = await response.json()
			
		console.log(respData)
		return respData
	} catch (error) {
		console.error('Error login user:', error)
		throw error
	}
}

export const getPatientsServ = async (cedulaT) => {
	try {
		const response = await fetch(API_PATIENT + '/' + cedulaT)
		const respData = await response.json()

		console.log(respData)
		return respData
	} catch (error) {
		console.error('Error login user:', error)
		throw error
	}
}

export const getPatientSessionsServ = async (cedulaP) => {
	try {
		const response = await fetch(API_SESSION + '/' + cedulaP)
		const respData = await response.json()

		//TODO: JEFF - ver la respuesta
		console.log(respData)
		return [
			{
				date: '2021-10-15',
				therapisth: 'Manolo Perez',
				time: 15,
				correctAnswers: 5,
				wrongAnswers: 3,
			},
			{
				date: '2021-10-15',
				therapisth: 'Juanito Perez',
				time: 15,
				correctAnswers: 5,
				wrongAnswers: 3,
			},
			{
				date: '2021-10-15',
				therapisth: 'Juanito Perez',
				time: 15,
				correctAnswers: 5,
				wrongAnswers: 3,
			},
		]
	} catch (error) {
		console.error('Error login user:', error)
		throw error
	}
}

export const getHistoryPatientTransferServ = async (cedulaP) => {
	try {
		const response = await fetch(API_HISTORY_TRANSFER + '/' + cedulaP)
		const respData = await response.json()

		//TODO: JEFF - ver la respuesta
		console.log(respData)
		return [
			{
				date: '2025-12-10',
				therapist_from: 'Juanito Perez',
				therapist_to: 'Pedrito Perez',
				Observation: '',
			},
			{
				date: '2025-12-10',
				therapist_from: 'Juanito Perez',
				therapist_to: 'Pedrito Perez',
				Observation: 'Medico suplente',
			},
			{
				date: '2025-12-10',
				therapist_from: 'Juanito Perez',
				therapist_to: 'Pedrito Perez',
				Observation: '',
			},
		]
	} catch (error) {
		console.error('Error login user:', error)
		throw error
	}
}

//TODO:implementar
export const registerSessionServ = async (session) => {
	try {
		console.log("Datos enviados al backend desde crud-service", session);
		const response = await fetch(API_SESSION + '/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(session),
		})
		const respData = await response.json();
    	console.log("Respuesta del backend:", respData);
	} catch (error) {
		console.error('Error register session', error)
		throw error
	}
}
//TODO:implementar
export const registerPatientService = async (patient) => {
	try {
		console.log("Datos enviados al backend desde crud-service", patient);
		const response = await fetch(API_PATIENT + '/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(patient),
		})

		 if (!response.ok) {
            const errorData = await response.json();
            console.error("Error en la solicitud POST:", errorData);
            throw new Error(errorData.msg || "Error desconocido");
        }

		const respData = await response.json();
        console.log("Respuesta del backend:", respData);
        return respData;
	} catch (error) {
		console.error('Error login user:', error)
		throw error
	}
}

//TODO:implementar
export const transferPatientService = async (transfer) => {
	try {
		

		// const response = await fetch(API_PATIENT + '/transer', {
			// method: 'PATCH',
		// 	headers: {
		// 		'Content-Type': 'Aplication/json',
		// 	},
		// 	body: JSON.stringify(data),
		// })

		// const respData = await response.json()

		//TODO: JEFF - ver la respuesta
		console.log(transfer)
		return {
			token: 'superToken',
			cedulaT: '1777777777',
		}
	} catch (error) {
		console.error('Error login user:', error)
		throw error
	}
}
