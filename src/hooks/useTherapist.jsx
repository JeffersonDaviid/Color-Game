import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { StateFetchContext } from '../context/StateFetchContext'
import {
	getPatientSessionsServ,
	getPatientsServ,
	getTherapistServ,
	registerPatientService,
	registerSessionServ,
	transferPatientService,
} from '../services/crudService'
import { handleAPIError } from '../utils/HandleAPIError'

const useTherapist = () => {
	const { userloged } = useContext(AuthContext)
	const { setLoading } = useContext(StateFetchContext)

	const [therapistData, setTherapistData] = useState({
		cedulaT: '',
		name: '',
		lastname: '',
	})
	const [patientsData, setPatientsData] = useState([
		{ cedulaP: '', name: '', lastname: '' },
	])
	const [patientSessions, setPatientSessions] = useState([
		{
			date: '',
			therapisth: '',
			time: 0,
			correctAnswers: 0,
			wrongAnswers: 0,
		},
	])
	const [patientHistoryTransfer, setPatientHistoryTransfer] = useState([
		{
			date: '',
			therapist_from: '',
			therapist_to: '',
			observation: '',
		},
	])

	const getTherapistData = async () => {
		setLoading(true)
		try {
			const responseTherapist = await getTherapistServ(userloged.cedulaT)
			const responsePatients = await getPatientsServ(userloged.cedulaT)
			setTherapistData(responseTherapist) //para pruebas
			setPatientsData(responsePatients) //para pruebas

			if (responsePatients.status === 200 && responseTherapist.status === 200) {
				// setTherapistData(responseTherapist.data)
				// setTherapistData(responseTherapist.data)
			}
		} catch (error) {
			handleAPIError(error)
		} finally {
			setLoading(false)
		}
	}
	const getPatientSessions = async (cedulaP) => {
		setLoading(true)
		try {
			const response = await getPatientSessionsServ(cedulaP)
			setPatientSessions(response) //para probar

			if (response.status === 200) {
				// setTherapistData(response.data)
			}
		} catch (error) {
			handleAPIError(error)
		} finally {
			setLoading(false)
		}
	}
	const getPatientHistoryTransfer = async (cedulaP) => {
		setLoading(true)
		try {
			const response = await getTherapistServ(cedulaP)
			setPatientHistoryTransfer(response)

			if (response.status === 200) {
				setPatientHistoryTransfer(response.data)
			}
		} catch (error) {
			handleAPIError(error)
		} finally {
			setLoading(false)
		}
	}
	const createPatient = async (patient) => {
		setLoading(true)
		try {
			const data = {
				cedulaP: patient.cedulaP,
				name: patient.name,
				lastname: patient.lastname,
			}

			const response = await registerPatientService(data)
			setPatientHistoryTransfer(response)

			if (response.status === 200) {
				setPatientHistoryTransfer(response.data)
			}
		} catch (error) {
			handleAPIError(error)
		} finally {
			setLoading(false)
		}
	}
	const transferPatient = async (transfer) => {
		setLoading(true)
		try {
			const data = {
				cedulaP: transfer.cedulaP,
				therapist_from: transfer.cedulaT_from,
				therapist_to: transfer.cedulaT_to,
				observation: transfer.observation,
			}
			const response = await transferPatientService(data)
			setPatientHistoryTransfer(response)

			if (response.status === 200) {
				setPatientHistoryTransfer(response.data)
			}
		} catch (error) {
			handleAPIError(error)
		} finally {
			setLoading(false)
		}
	}
	const registerSession = async (session) => {
		setLoading(true)
		try {
			const data = {
				cedulaP: session.cedulaP,
				therapist: session.cedulaT,
				time: session.time,
				correctAnswers: session.correctAnswers,
				wrongAnswers: session.wrongAnswers,
			}
			const response = await registerSessionServ(data)
			setPatientHistoryTransfer(response)

			if (response.status === 200) {
				setPatientHistoryTransfer(response.data)
			}
		} catch (error) {
			handleAPIError(error)
		} finally {
			setLoading(false)
		}
	}

	return {
		therapistData,
		patientsData,
		patientSessions,
		patientHistoryTransfer,
		getTherapistData,
		getPatientSessions,
		getPatientHistoryTransfer,
		createPatient,
		transferPatient,
		registerSession,
	}
}

export default useTherapist
