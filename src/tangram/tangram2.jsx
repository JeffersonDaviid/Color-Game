import PropTypes from 'prop-types';
import useTangram from './useTangram';

function Tangram2({ selectedColor, selectedLabel, onComplete, updateStats }) {
	const { letters, handleSectionClick } = useTangram({
		selectedColor,
		selectedLabel,
		onComplete,
		updateStats,
	  });
	
	  
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
				fill='black'
				style={{ pointerEvents: 'none' }}>
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
				fill='black'
				style={{ pointerEvents: 'none' }}>
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
				fill='black'
				style={{ pointerEvents: 'none' }}>
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
				fill='black'
				style={{ pointerEvents: 'none' }}>
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
				fill='black'
				style={{ pointerEvents: 'none' }}>
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
				textAnchor='middle'
				style={{ pointerEvents: 'none' }}>
				{letters[5]}
			</text>
		</svg>
	)
}

Tangram2.propTypes = {
	selectedColor: PropTypes.string.isRequired,
	selectedLabel: PropTypes.string.isRequired,
	onComplete: PropTypes.func,
	updateStats: PropTypes.func.isRequired,
}

export default Tangram2
