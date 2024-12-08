import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import GameRulesContext from '../context/GameRulesContext';
import { getSuffleList } from '../utils/utils';
import { LABELS } from '../utils/constantes';

function Tangram4({ selectedColor, selectedLabel, onComplete, updateStats }) {
  const [letters, setLetters] = useState([...LABELS]);
  const { setIsWrongColor } = useContext(GameRulesContext);
  const [paintedSections, setPaintedSections] = useState(new Set()); // Set para rastrear secciones pintadas
  const [isTangramCompleted, setIsTangramCompleted] = useState(false); // Estado para controlar si el tangram ya está completo

  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');

    // Verifica si la sección ya ha sido pintada correctamente
    if (paintedSections.has(label)) {
        return; // Si la sección ya está pintada, no hacer nada
    }

    if (selectedColor === 'lightgray') {
        setPaintedSections((prev) => {
            const updated = new Set(prev);
            updated.delete(label);
            event.target.style.fill = 'lightgray';
            return updated;
        });
    } else if (label === selectedLabel) {
        setPaintedSections((prev) => {
            const updated = new Set(prev);
            updated.add(label); // Agrega la etiqueta a las pintadas
            event.target.style.fill = selectedColor;
            updateStats({ correct: true });
            return updated;
        });
    } else {
        setIsWrongColor(true);
        updateStats({ correct: false });
    }
};

  useEffect(() => {
    if (paintedSections.size === letters.length && !isTangramCompleted) {
      setIsTangramCompleted(true);
      if (onComplete) onComplete();
    }
  }, [paintedSections, letters.length, onComplete, isTangramCompleted]);

  useEffect(() => {
    const shuffledLetters = getSuffleList(letters);
    setLetters(shuffledLetters);
  }, []);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300">
      {/* Carcasa redondeada */}
      <rect
        x="20"
        y="20"
        width="360"
        height="260"
        rx="40"
        ry="40"
        fill="#d3d3d3"
        stroke="black"
        strokeWidth="4"
        data-label={letters[0]}
        onClick={handleSectionClick}
      />
      <text
        x="200"
        y="50"
        fontSize="18"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}>
        {letters[0]}
      </text>

      {/* Rejilla del altavoz */}
      <rect
        x="60"
        y="80"
        width="200"
        height="140"
        fill="#d3d3d3"
        stroke="black"
        strokeWidth="4"
        data-label={letters[1]}
        onClick={handleSectionClick}
      />
      {/* Líneas horizontales */}
      <line x1="70" y1="100" x2="250" y2="100" stroke="black" strokeWidth="2" />
      <line x1="70" y1="130" x2="250" y2="130" stroke="black" strokeWidth="2" />
      <line x1="70" y1="160" x2="250" y2="160" stroke="black" strokeWidth="2" />
      <line x1="70" y1="190" x2="250" y2="190" stroke="black" strokeWidth="2" />
      <text
        x="150"
        y="160"
        fontSize="18"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}>
        {letters[1]}
      </text>

      {/* Botón superior derecho */}
      <circle
        cx="320"
        cy="120"
        r="20"
        fill="#d3d3d3"
        stroke="black"
        strokeWidth="3"
        data-label={letters[2]}
        onClick={handleSectionClick}
      />
      <text
        x="320"
        y="125"
        fontSize="18"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}>
        {letters[2]}
      </text>

      {/* Botón inferior derecho */}
      <circle
        cx="320"
        cy="180"
        r="20"
        fill="#d3d3d3"
        stroke="black"
        strokeWidth="3"
        data-label={letters[3]}
        onClick={handleSectionClick}
      />
      <text
        x="320"
        y="185"
        fontSize="18"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}>
        {letters[3]}
      </text>

      {/* Indicador de frecuencia */}
      <rect
        x="120"
        y="240"
        width="160"
        height="20"
        fill="#d3d3d3"
        stroke="black"
        strokeWidth="2"
        data-label={letters[4]}
        onClick={handleSectionClick}
      />
      <text
        x="200"
        y="255"
        fontSize="18"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}>
        {letters[4]}
      </text>

      {/* Antena con círculo más grande */}
      <line
        x1="200"
        y1="20"
        x2="200"
        y2="-10"
        stroke="black"
        strokeWidth="4"
      />
      <circle
        cx="200"
        cy="-10"
        r="20"
        fill="#d3d3d3"
        stroke="black"
        strokeWidth="2"
        data-label={letters[5]}
        onClick={handleSectionClick}
      />
      <text
        x="200"
        y="-5"
        fontSize="18"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ pointerEvents: 'none' }}>
        {letters[5]}
      </text>
    </svg>
  );
}

export default Tangram4;

Tangram4.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  selectedLabel: PropTypes.string.isRequired,
  onComplete: PropTypes.func,
  updateStats: PropTypes.func.isRequired, // Prop para las estadísticas
};
