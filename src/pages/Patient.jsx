import { useState } from 'react'
import LinesDiagram from '../components/LinesDiagram'
import './patient.css'

const dates = [
	'2023-12-31',
	'2023-12-30',
	'2023-12-29',
	'2023-12-28',
	'2023-12-27',
	'2023-12-26',
	'2023-12-25',
	'2023-12-24',
	'2023-12-23',
	'2023-12-22',
	'2023-12-21',
	'2023-12-20',
	'2023-12-19',
	'2023-12-18',
	'2023-12-17',
	'2023-12-16',
	'2023-12-15',
	'2023-12-14',
	'2023-12-13',
	'2023-12-12',
	'2023-12-11',
	'2023-12-10',
	'2023-12-09',
	'2023-12-08',
	'2023-12-07',
	'2023-12-06',
	'2023-12-05',
	'2023-12-04',
	'2023-12-03',
	'2023-12-02',
	'2023-12-01',
	'2023-11-30',
	'2023-11-29',
	'2023-11-28',
	'2023-11-27',
	'2023-11-26',
	'2023-11-25',
	'2023-11-24',
	'2023-11-23',
	'2023-11-22',
	'2023-11-21',
	'2023-11-20',
	'2023-11-19',
	'2023-11-18',
	'2023-11-17',
	'2023-11-16',
	'2023-11-15',
	'2023-11-14',
	'2023-11-13',
	'2023-11-12',
]

const times = Array.from({ length: 50 }, () => (Math.random() * 60 + 30).toFixed(2))

const correctAnswers = Array.from(
	{ length: 50 },
	() => Math.floor(Math.random() * 6) + 10
)

const wrongAnswers = Array.from({ length: 50 }, () => Math.floor(Math.random() * 7))

const Patient = () => {
	const [isTransferHistoryActive, setIsTransferHistoryActive] = useState(false)

	const handleClick = () => {
		setIsTransferHistoryActive(!isTransferHistoryActive)
	}

	return (
		<div className='patient-container'>
			<section className='patient-statistics'>
				<h3>Estadísticas del paciente😷</h3>
				<div className='patient-data'>
					<label>
						<strong>Nombre:</strong> Juan Perez
					</label>
					<label>
						<strong>Edad:</strong> 25
					</label>
					<label>
						<strong>Sexo:</strong> Masculino
					</label>
				</div>
				<button
					onClick={handleClick}
					className={isTransferHistoryActive ? 'active' : ''}>
					{isTransferHistoryActive ? 'Ocultar' : 'Mostrar'} historial de transferencias
				</button>
				<button>Tranferir</button>

				<LinesDiagram
					dates={dates}
					times={times}
					correctAnswers={correctAnswers}
					wrongAnswers={wrongAnswers}
				/>

				<div className='sessions-history'>
					<h4>Historial de sesiones</h4>
					<table>
						<thead>
							<tr>
								<th>Fecha</th>
								<th>Terapeuta</th>
								<th>Tiempo</th>
								<th>Número de aciertos</th>
								<th>Número de errores</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>2021-12-12</td>
								<td>Jefferson Macias</td>
								<td>84s</td>
								<td>10</td>
								<td>28</td>
							</tr>
							<tr>
								<td>2021-12-12</td>
								<td>Juan Perez</td>
								<td>65.66s</td>
								<td>15</td>
								<td>17</td>
							</tr>
							<tr>
								<td>2021-12-12</td>
								<td>Juan Perez</td>
								<td>65.66s</td>
								<td>15</td>
								<td>17</td>
							</tr>
							<tr>
								<td>2021-12-12</td>
								<td>Juan Perez</td>
								<td>65.66s</td>
								<td>15</td>
								<td>17</td>
							</tr>
							<tr>
								<td>2021-12-12</td>
								<td>Juan Perez</td>
								<td>65.66s</td>
								<td>15</td>
								<td>17</td>
							</tr>
							<tr>
								<td>2021-12-12</td>
								<td>Juan Perez</td>
								<td>65.66s</td>
								<td>15</td>
								<td>17</td>
							</tr>
							<tr>
								<td>2021-12-12</td>
								<td>Juan Perez</td>
								<td>65.66s</td>
								<td>15</td>
								<td>17</td>
							</tr>
							<tr>
								<td>2021-12-12</td>
								<td>Juan Perez</td>
								<td>65.66s</td>
								<td>15</td>
								<td>17</td>
							</tr>
							<tr>
								<td>2021-12-12</td>
								<td>Juan Perez</td>
								<td>65.66s</td>
								<td>15</td>
								<td>17</td>
							</tr>
							<tr>
								<td>2021-12-12</td>
								<td>Juan Perez</td>
								<td>65.66s</td>
								<td>15</td>
								<td>17</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
			<section
				className={`transfer-history  ${isTransferHistoryActive ? 'show' : 'hidden'}`}>
				<h3>Historial de transferencias</h3>

				<div>
					<br />
					<table>
						<thead>
							<tr>
								<th>Fecha</th>
								<th>De</th>
								<th>Para</th>
								<th>Observación</th>
							</tr>
						</thead>
						<tbody>
							{Array.from({ length: 20 }).map((_, index) => (
								<tr key={index}>
									<td>{`2021-12-${String(index + 1).padStart(2, '0')}`}</td>
									<td>{`Persona ${index + 1}`}</td>
									<td>{`Persona ${index + 21}`}</td>
									<td>{index % 2 === 0 ? 'Completada' : 'Pendiente'}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	)
}
export default Patient
