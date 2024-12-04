import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameRulesContext } from '../context/GameRules'
import { COLORS, LABELS, PERSONAJES, TANGRAMS, WALLPAPERS } from '../utils/constantes'
import './mainGame.css'
import { AuthContext } from '../context/AuthProvider'

function MainGame() {
	const { isWrongColor, isWinner, setIsWinner } = useContext(GameRulesContext)
	const { isAuthenticated } = useContext(AuthContext)
	const navigate = useNavigate()
	const [bgImg, setBgImg] = useState('')
	const [selectedColor, setSelectedColor] = useState(null)
	const [selectedLabel, setSelectedLabel] = useState(null)
	const [selectedTangrams, setSelectedTangrams] = useState([])
	const [startTime, setStartTime] = useState(null)
	const [tangramTimes, setTangramTimes] = useState([])
	const [completedTangrams, setCompletedTangrams] = useState(0)
	const [totalTime, setTotalTime] = useState(null)
	const [showResume, setShowResume] = useState(false)
	const [isPaused, setIsPaused] = useState(false)

	useEffect(() => {
		const randomTangrams = TANGRAMS.sort(() => Math.random() - 0.5).slice(0, 2)
		setSelectedTangrams(randomTangrams)
		setStartTime(Date.now())
	}, [])

	const handleColorSelection = (colorObj) => {
		setSelectedColor(colorObj.color)
		setSelectedLabel(colorObj.label)
	}

	const handleClearSelection = () => {
		setSelectedColor('lightgray')
		setSelectedLabel(null)
	}

	useEffect(() => {
		const randomImg = WALLPAPERS[Math.floor(Math.random() * WALLPAPERS.length)]
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isCompleted])

	const handleCompleteTangram = () => {
		const endTime = Date.now()
		const timeTaken = Math.round((endTime - startTime) / 1000)

		setTangramTimes((prevTimes) => [...prevTimes, timeTaken])
		setCompletedTangrams((prevCompleted) => prevCompleted + 1)

		if (completedTangrams + 1 === selectedTangrams.length) {
			const total = tangramTimes.reduce((sum, time) => sum + time, timeTaken)
			setTotalTime(Math.round(total))
			setIsWinner(true)
			// if (isAuthenticated)
			setTimeout(() => {
				setShowResume(true)
			}, 5000)
		} else {
			setStartTime(Date.now())
		}
	}

	return (
		<div className='main-game'>
			<h1>MEMORIA ARTÍSTICA</h1>
			<div className='game-layout'>
				<div
					className='tangram-area'
					style={{
						backgroundImage: `url(${bgImg})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}>
					{selectedTangrams.map((TangramComponent, index) => (
						<TangramComponent
							key={index}
							selectedColor={selectedColor}
							selectedLabel={selectedLabel}
							letters={LABELS}
							onComplete={handleCompleteTangram}
						/>
					))}
				</div>
				<div className='color-section'>
					{/* Frase encima del color seleccionado */}
					<div className="color-selected-text">Color Seleccionado</div>

					{/* Mostrar el color seleccionado */}
					<div className="selected-color-box" style={{ backgroundColor: selectedColor }}>
						{selectedLabel}
					</div>

					<div className='color-columns'>
						<div className='color-column'>
							{COLORS.slice(0, 3).map((colorObj, index) => (
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
							{COLORS.slice(3, 6).map((colorObj, index) => (
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
						onClick={() => {
							setIsPaused(true)
						}}>
						PAUSAR
					</button>
					<button
						className='action-button'
						onClick={() => navigate('/')}>
						VOLVER
					</button>
				</div>
			</div>
			{isPaused && (
				<div className='paused'>
					<div className='personajes'>
						<h1>¡Recarguemos energías! </h1>
						<img src={PERSONAJES[2]} />
						<img src={PERSONAJES[3]} />
					</div>
					<button
						className='action-button'
						onClick={() => {
							setIsPaused(false)
						}}>
						CONTINUAR
					</button>
				</div>
			)}
			{showResume && <section className='resume'>AQUI VAN LAS ESTADISTICAS</section>}
			<div className='feedback'>
				{isWrongColor && (
					<>
						<h2 className='incorrect-txt'>¡Ups! Ese color no es correcto</h2>
						<img
							src={PERSONAJES[0]}
							className='incorrect'
						/>
					</>
				)}

				{isWinner && (
					<>
						<h2 className='winner-txt'>
							¡GANASTE! <br /> ¡FELICITACIONES!
						</h2>
						<img
							src={PERSONAJES[1]}
							className='winner-img'
						/>
					</>
				)}
			</div>
		</div>
	)
}

export default MainGame
