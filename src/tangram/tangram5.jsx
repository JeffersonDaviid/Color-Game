import PropTypes from 'prop-types';
import useTangram from './useTangram';

function Tangram5({ selectedColor, selectedLabel, onComplete, updateStats }) {
	const { letters, handleSectionClick } = useTangram({
		selectedColor,
		selectedLabel,
		onComplete,
		updateStats,
	  });

	return (
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 400 600">
			{/* Carcasa del Game Boy */}
			<rect
				x="20"
				y="20"
				width="360"
				height="560"
				rx="30"
				ry="30"
				fill="#d3d3d3"
				stroke="black"
				strokeWidth="6"
				data-label={letters[0]}
				onClick={handleSectionClick}
			/>
			{/* Letra en la Carcasa */}
			<text
				x="200"
				y="45"
				fontSize="24"
				fontWeight="bold"
				fill="black"
				textAnchor="middle"
				style={{ pointerEvents: 'none' }}>
				{letters[0]}
			</text>

			{/* Pantalla */}
			<rect
				x="50"
				y="60"
				width="300"
				height="200"
				fill="lightgray"
				stroke="black"
				strokeWidth="6"
				data-label={letters[1]}
				onClick={handleSectionClick}
			/>
			{/* Letra en la Pantalla */}
			<text
				x="200"
				y="160"
				fontSize="24"
				fontWeight="bold"
				fill="black"
				textAnchor="middle"
				style={{ pointerEvents: 'none' }}>
				{letters[1]}
			</text>

			{/* Botón A */}
			<circle
				cx="300"
				cy="300"
				r="35"
				fill="#d3d3d3"
				stroke="black"
				strokeWidth="4"
				data-label={letters[2]}
				onClick={handleSectionClick}
			/>
			<text
				x="300"
				y="305"
				fontSize="24"
				fontWeight="bold"
				fill="black"
				textAnchor="middle"
				style={{ pointerEvents: 'none' }}>
				{letters[2]}
			</text>

			{/* Botón B */}
			<circle
				cx="240"
				cy="360"
				r="35"
				fill="#d3d3d3"
				stroke="black"
				strokeWidth="4"
				data-label={letters[3]}
				onClick={handleSectionClick}
			/>
			<text
				x="240"
				y="365"
				fontSize="24"
				fontWeight="bold"
				fill="black"
				textAnchor="middle"
				style={{ pointerEvents: 'none' }}>
				{letters[3]}
			</text>

			{/* Cruceta (D-Pad) como una sola figura */}
			<path
				d="M70,300 h60 v-30 h60 v60 h-60 v30 h-60 v-30 h-30 v-60 h30 z"
				fill="#d3d3d3"
				stroke="black"
				strokeWidth="4"
				data-label={letters[4]}
				onClick={handleSectionClick}
			/>
			{/* Letra en la Cruceta */}
			<text
				x="100"
				y="320"
				fontSize="24"
				fontWeight="bold"
				fill="black"
				textAnchor="middle"
				style={{ pointerEvents: 'none' }}>
				{letters[4]}
			</text>

			{/* Botón Start */}
			<rect
				x="150"
				y="450"
				width="120"
				height="40"
				fill="#d3d3d3"
				stroke="black"
				strokeWidth="4"
				data-label={letters[5]}
				onClick={handleSectionClick}
			/>
			<text
				x="210"
				y="475"
				fontSize="24"
				fontWeight="bold"
				fill="black"
				textAnchor="middle"
				style={{ pointerEvents: 'none' }}>
				{letters[5]}
			</text>
		</svg>
	);
}

export default Tangram5;

Tangram5.propTypes = {
	selectedColor: PropTypes.string.isRequired,
	selectedLabel: PropTypes.string.isRequired,
	letters: PropTypes.arrayOf(PropTypes.string).isRequired,
	onComplete: PropTypes.func,
	updateStats: PropTypes.func.isRequired, // Prop para las estadísticas
};
