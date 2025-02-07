import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LinesDiagram from '../components/LinesDiagram';
import { getPatientSessionsServ } from '../services/crudService';
import './patient.css';
import { convertTime } from '../utils/utils';

const Patient = () => {
	const navigate = useNavigate();
	const { state } = useLocation();
	const [sessions, setSessions] = useState([]);
	const [patient, setPatient] = useState({});
	const [chartData, setChartData] = useState({
		dates: [],
		times: [],
		correctAnswers: [],
		wrongAnswers: [],
	});
	const [showTransfers, setShowTransfers] = useState(false); // Oculto por defecto

	// Fetch patient information and sessions
	useEffect(() => {
		const fetchPatientData = async () => {
			try {
				if (!state || !state.cedulaP || !state.cedulaT) {
					navigate('/dashboard');
					return;
				}

				// Get patient sessions
				const sessionResponse = await getPatientSessionsServ(state.cedulaP);
				if (sessionResponse?.data) {
					setSessions(sessionResponse.data);

					// Prepare chart data
					const datesSet = [
						...new Set(
							sessionResponse.data.map((session) => session.session_at.split('T')[0])
						),
					];
					const timesByDate = {};
					const correctAnswersByDate = {};
					const wrongAnswersByDate = {};

					sessionResponse.data.forEach((session) => {
						const date = session.session_at.split('T')[0];
						if (!timesByDate[date]) {
							timesByDate[date] = [];
							correctAnswersByDate[date] = [];
							wrongAnswersByDate[date] = [];
						}
						timesByDate[date].push(session.time_total);
						correctAnswersByDate[date].push(session.num_corrects);
						wrongAnswersByDate[date].push(session.num_incorrects);
					});

					const dates = datesSet;
					const times = dates.map((date) => {
						const sum = timesByDate[date].reduce((a, b) => a + b, 0);
						return Number.parseFloat(sum / timesByDate[date].length + '').toFixed(2); // Promedio
					});
					const correctAnswers = dates.map((date) => {
						const sum = correctAnswersByDate[date].reduce((a, b) => a + b, 0);
						return Number.parseInt(sum / correctAnswersByDate[date].length + ''); // Promedio
					});
					const wrongAnswers = dates.map((date) => {
						const sum = wrongAnswersByDate[date].reduce((a, b) => a + b, 0);
						return Number.parseInt(sum / wrongAnswersByDate[date].length + ''); // Promedio
					});

					setChartData({ dates, times, correctAnswers, wrongAnswers });
				}
			} catch (error) {
				console.error('Error fetching patient data or sessions:', error);
			}
		};

		fetchPatientData();
	}, [state, navigate]);

	return (
		<div className='patient-container'>
			<div className='patient-statistics'>
				<div className='button-container'>
					<button
						className='back-button'
						onClick={() => navigate('/dashboard')}>
						Volver al tablero
					</button>
				</div>
				<h2>Paciente: {state?.patientName || 'No disponible'}</h2>
				<div className='chart-container'>
					<h2>Estadísticas de Sesiones</h2>
					<LinesDiagram
						dates={chartData.dates}
						times={chartData.times}
						correctAnswers={chartData.correctAnswers}
						wrongAnswers={chartData.wrongAnswers}
					/>
				</div>
			</div>

			<div className='sessions-history'>
				<h3>Historial de Sesiones</h3>
				<table className='sessions-table'>
					<thead>
						<tr>
							<th>Fecha</th>
							<th>Terapeuta</th>
							<th>Tiempo</th>
							<th>Aciertos</th>
							<th>Errores</th>
						</tr>
					</thead>
					<tbody>
						{sessions.map((session) => (
							<tr key={session.idSesion}>
								<td>{session.session_at.split('T')[0]}</td>
								<td>{session.therapist}</td>
								<td> {convertTime(session.time_total)}</td>
								<td>{session.num_corrects}</td>
								<td>{session.num_incorrects}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Patient;
