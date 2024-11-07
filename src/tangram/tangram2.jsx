import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function TangramTV({ selectedColor, selectedLabel, letters, onComplete }) {
	const [numCorrectedColors, setNumCorrectedColors] = useState(0)

	const handleSectionClick = (event) => {
		const label = event.target.getAttribute('data-label')
		if (selectedColor === 'lightgray' || label === selectedLabel) {
			event.target.style.fill = selectedColor

			if (selectedColor !== 'lightgray') {
				setNumCorrectedColors(numCorrectedColors + 1)
			}
			if (selectedColor === 'lightgray') {
				setNumCorrectedColors(numCorrectedColors - 1)
			}
		}
	}

	useEffect(() => {
		if (numCorrectedColors === 6) {
			alert('¡Felicidades! Has completado el tangram')
			if (onComplete) onComplete()
		}
	}, [numCorrectedColors])

	return (
		<svg
			width='100%'
			height='100%'
			viewBox='0 0 400 300'>
			{/* Marco de la TV (A) */}
			<rect
				x='20'
				y='20'
				width='360'
				height='260'
				fill='#d3d3d3'
				stroke='black'
				strokeWidth='4'
				data-label={letters[0]}
				onClick={handleSectionClick}
			/>
			<text
				x='30'
				y='35'
				fontSize='18'
				fontWeight='bold'
				fill='black'>
				{letters[0]}
			</text>

			{/* Pantalla (B) */}
			<rect
				x='40'
				y='50'
				width='320'
				height='160'
				fill='#d3d3d3'
				stroke='black'
				strokeWidth='4'
				data-label={letters[1]}
				onClick={handleSectionClick}
			/>
			<text
				x='50'
				y='90'
				fontSize='18'
				fontWeight='bold'
				fill='black'>
				{letters[1]}
			</text>

			{/* Botón superior derecho (C) */}
			<circle
				cx='360'
				cy='80'
				r='20'
				fill='#d3d3d3'
				stroke='black'
				strokeWidth='2'
				data-label={letters[2]}
				onClick={handleSectionClick}
			/>
			<text
				x='345'
				y='85'
				fontSize='18'
				fontWeight='bold'
				fill='black'>
				{letters[2]}
			</text>

			{/* Botón medio derecho (D) */}
			<circle
				cx='360'
				cy='130'
				r='20'
				fill='#d3d3d3'
				stroke='black'
				strokeWidth='2'
				data-label={letters[3]}
				onClick={handleSectionClick}
			/>
			<text
				x='345'
				y='135'
				fontSize='18'
				fontWeight='bold'
				fill='black'>
				{letters[3]}
			</text>

			{/* Botón inferior derecho (E) */}
			<circle
				cx='360'
				cy='180'
				r='20'
				fill='#d3d3d3'
				stroke='black'
				strokeWidth='2'
				data-label={letters[4]}
				onClick={handleSectionClick}
			/>
			<text
				x='345'
				y='185'
				fontSize='18'
				fontWeight='bold'
				fill='black'>
				{letters[4]}
			</text>

			{/* Indicador de encendido (F) */}
			<rect
				x='180'
				y='220'
				width='40'
				height='40'
				fill='#d3d3d3'
				stroke='black'
				strokeWidth='2'
				data-label={letters[5]}
				onClick={handleSectionClick}
			/>
			<text
				x='200'
				y='245'
				fontSize='18'
				fontWeight='bold'
				fill='black'
				textAnchor='middle'>
				{letters[5]}
			</text>
		</svg>
	)
}

export default TangramTV

TangramTV.propTypes = {
	selectedColor: PropTypes.string.isRequired,
	selectedLabel: PropTypes.string.isRequired,
	letters: PropTypes.arrayOf(PropTypes.string).isRequired,
	onComplete: PropTypes.func,
}
