import { useEffect, useState } from 'react'
import Tangram1 from '../tangram/tangram1'
import Tangram2 from '../tangram/tangram2'
import Tangram3 from '../tangram/tangram3'
import Tangram4 from '../tangram/tangram4'
import Tangram5 from '../tangram/tangram5'
import './mainGame.css'

function getRandomColor() {
	const letters = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}

function getUniqueLetters() {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
	// Barajamos las letras
	for (let i = letters.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[letters[i], letters[j]] = [letters[j], letters[i]]
	}
	return letters.slice(0, 6)
}

const labels = getUniqueLetters()

const colors = [
	{ label: labels[0], color: getRandomColor() },
	{ label: labels[1], color: getRandomColor() },
	{ label: labels[2], color: getRandomColor() },
	{ label: labels[3], color: getRandomColor() },
	{ label: labels[4], color: getRandomColor() },
	{ label: labels[5], color: getRandomColor() },
]

const fondos = [
	'./assets/fondo1.avif',
	'./assets/fondo2.avif',
	'./assets/fondo3.avif',
	'./assets/fondo4.avif',
	'./assets/fondo5.avif',
	'./assets/fondo6.avif',
]

// const tangrams = [Tangram1, Tangram2, Tangram3, Tangram4, Tangram5]
const tangrams = [Tangram1, Tangram2]

function MainGame() {
	const [bgImg, setBgImg] = useState('')

	const [selectedColor, setSelectedColor] = useState(null)
	const [selectedLabel, setSelectedLabel] = useState(null)
	const [selectedTangrams, setSelectedTangrams] = useState([])

	// Función para seleccionar dos tangrams aleatorios
	useEffect(() => {
		const randomTangrams = tangrams
			.sort(() => Math.random() - 0.5) // Mezcla aleatoriamente el arreglo
			.slice(0, 2) // Selecciona los primeros dos elementos
		setSelectedTangrams(randomTangrams)
	}, [])

	// Función para seleccionar un color (incluyendo el "color" de borrar)
	const handleColorSelection = (colorObj) => {
		setSelectedColor(colorObj.color)
		setSelectedLabel(colorObj.label)
	}

	// Función para "borrar" colores de las figuras específicas
	const handleClearSelection = () => {
		setSelectedColor('lightgray') // Configura el color de "borrar" a gris claro
		setSelectedLabel(null) // No se necesita una etiqueta específica para borrar
	}

	useEffect(() => {
		const randomImg = fondos[Math.floor(Math.random() * fondos.length)]
		setBgImg(randomImg)
	}, [])

	const [isCompleted, setIsCompleted] = useState(false)
	const [timePainting, setTimePainting] = useState(0)

	useEffect(() => {
		if (timePainting === 5) {
			setIsCompleted(true)
			console.log('Termino')
		}

		if (!isCompleted) {
			const timer = setInterval(() => {
				setTimePainting((time) => time + 1)
			}, 1000)

			return () => {
				clearInterval(timer)
			}
		}
	}, [])

	return (
		<div className='main-game'>
			<h1>Infinite Quality</h1>
			<h2>{timePainting} segundos</h2>
			<div className='game-layout'>
				<div
					className='tangram-area'
					style={{
						backgroundImage: `url(${bgImg})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					{/* Renderizamos los tangrams seleccionados aleatoriamente */}
					{selectedTangrams.map((TangramComponent, index) => (
						<TangramComponent
							key={index}
							selectedColor={selectedColor}
							selectedLabel={selectedLabel}
							letters={labels}
						/>
					))}
				</div>
				<div className='color-section'>
					<div className='color-columns'>
						<div className='color-column'>
							{colors.slice(0, 3).map((colorObj, index) => (
								<div
									key={index}
									className='color-item'>
									<span className='color-label'>{colorObj.label}</span>
									<button
										className='color-button'
										style={{ backgroundColor: colorObj.color }}
										onClick={() => handleColorSelection(colorObj)}
									/>
								</div>
							))}
						</div>
						<div className='color-column'>
							{colors.slice(3, 6).map((colorObj, index) => (
								<div
									key={index}
									className='color-item'>
									<button
										className='color-button'
										style={{ backgroundColor: colorObj.color }}
										onClick={() => handleColorSelection(colorObj)}
									/>
									<span className='color-label'>{colorObj.label}</span>
								</div>
							))}
						</div>
					</div>
					<button
						className='action-button'
						onClick={handleClearSelection}>
						BORRAR
					</button>
					<button className='action-button'>VOLVER</button>
				</div>
			</div>
		</div>
	)
}

export default MainGame
