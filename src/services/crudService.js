import { API_PATIENT, API_SESSION, API_THERAPIST, API_TRANSFER } from '../utils/constantes'

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

		console.log(respData)
		return respData
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
		
		console.log("Datos enviados al backend desde crud-service", transfer);
		const response = await fetch(API_TRANSFER + '/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(transfer),
		})

		 const respData = await response.json()
		 console.log("Respuesta del backend:", respData);
		 return respData
	} catch (error) {
		console.error('Error login user:', error)
		throw error
	}
}
