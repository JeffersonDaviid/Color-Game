import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import GameRulesContext from '../context/GameRulesContext'
import { LABELS } from '../utils/constantes'
import { getSuffleList } from '../utils/utils'

function Tangram1({ selectedColor, selectedLabel, onComplete }) {
	const [letters, setLetters] = useState([...LABELS])
	const { setIsWrongColor } = useContext(GameRulesContext)
	const [paintedSections, setPaintedSections] = useState(new Set()) // Set para rastrear secciones pintadas
	const [isTangramCompleted, setIsTangramCompleted] = useState(false) // Estado para controlar si el tangram ya está completo

	const handleSectionClick = (event) => {
		const label = event.target.getAttribute('data-label')

		if (selectedColor === 'lightgray') {
			setPaintedSections((prev) => {
				const updated = new Set(prev)
				updated.delete(label)
				event.target.style.fill = 'lightgray'
				return updated
			})
		} else if (label === selectedLabel) {
			setPaintedSections((prev) => {
				const updated = new Set(prev)
				updated.add(label)
				event.target.style.fill = selectedColor
				return updated
			})
		} else {
			setIsWrongColor(true)
		}
	}

	useEffect(() => {
		if (paintedSections.size === letters.length && !isTangramCompleted) {
			setIsTangramCompleted(true)
			if (onComplete) onComplete()
		}
	}, [paintedSections, letters.length, onComplete, isTangramCompleted])

	useEffect(() => {
		const shuffledLetters = getSuffleList(letters)
		setLetters(shuffledLetters)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<svg
			width='100%'
			height='100%'
			viewBox='0 0 200 200'>
			{/* Techo */}
			<polygon
				points='40,80 100,20 160,80'
				fill='lightgray'
				stroke='black'
				strokeWidth='3'
				data-label={letters[0]}
				onClick={handleSectionClick}
			/>
			<text
				x='95'
				y='55'
				fontSize='10'
				fontWeight='bold'
				fill='black'
				style={{ pointerEvents: 'none' }}>
				{letters[0]}
			</text>

			{/* Chimenea */}
			<rect
				x='130'
				y='35'
				width='15'
				height='30'
				fill='lightgray'
				stroke='black'
				strokeWidth='3'
				data-label={letters[1]}
				onClick={handleSectionClick}
			/>
			<text
				x='133'
				y='50'
				fontSize='10'
				fontWeight='bold'
				fill='black'
				style={{ pointerEvents: 'none' }}>
				{letters[1]}
			</text>

			{/* Paredes */}
			<rect
				x='40'
				y='80'
				width='120'
				height='100'
				fill='lightgray'
				stroke='black'
				strokeWidth='3'
				data-label={letters[2]}
				onClick={handleSectionClick}
			/>
			<text
				x='95'
				y='130'
				fontSize='10'
				fontWeight='bold'
				fill='black'
				style={{ pointerEvents: 'none' }}>
				{letters[2]}
			</text>

			{/* Puerta */}
			<rect
				x='85'
				y='140'
				width='30'
				height='40'
				fill='lightgray'
				stroke='black'
				strokeWidth='3'
				data-label={letters[3]}
				onClick={handleSectionClick}
			/>
			<text
				x='93'
				y='160'
				fontSize='10'
				fontWeight='bold'
				fill='black'
				style={{ pointerEvents: 'none' }}>
				{letters[3]}
			</text>

			{/* Ventana izquierda */}
			<rect
				x='45'
				y='95'
				width='30'
				height='30'
				fill='lightgray'
				stroke='black'
				strokeWidth='3'
				data-label={letters[4]}
				onClick={handleSectionClick}
			/>
			<text
				x='55'
				y='115'
				fontSize='10'
				fontWeight='bold'
				fill='black'
				style={{ pointerEvents: 'none' }}>
				{letters[4]}
			</text>

			{/* Ventana derecha */}
			<rect
				x='125'
				y='95'
				width='30'
				height='30'
				fill='lightgray'
				stroke='black'
				strokeWidth='3'
				data-label={letters[5]}
				onClick={handleSectionClick}
			/>
			<text
				x='135'
				y='115'
				fontSize='10'
				fontWeight='bold'
				fill='black'
				style={{ pointerEvents: 'none' }}>
				{letters[5]}
			</text>
		</svg>
	)
}

export default Tangram1

Tangram1.propTypes = {
	selectedColor: PropTypes.string.isRequired,
	selectedLabel: PropTypes.string.isRequired,
	letters: PropTypes.arrayOf(PropTypes.string).isRequired,
	onComplete: PropTypes.func,
}
