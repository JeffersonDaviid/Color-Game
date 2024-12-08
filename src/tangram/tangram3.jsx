import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import GameRulesContext from '../context/GameRulesContext';
import { getSuffleList } from '../utils/utils';
import { LABELS } from '../utils/constantes';

function Tangram3({ selectedColor, selectedLabel, onComplete, updateStats }) {
  const [letters, setLetters] = useState([...LABELS]);
  const { setIsWrongColor } = useContext(GameRulesContext);
  const [paintedSections, setPaintedSections] = useState(new Set());
  const [isTangramCompleted, setIsTangramCompleted] = useState(false);

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
      viewBox="0 0 400 700">
      {/* Carcasa del Nokia */}
      <rect
        x="50"
        y="20"
        width="300"
        height="660"
        rx="40"
        ry="40"
        fill="#d3d3d3"
        stroke="black"
        strokeWidth="6"
        data-label={letters[0]}
        onClick={handleSectionClick}
      />
      <text
        x="200"
        y="50"
        fontSize="24"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}>
        {letters[0]}
      </text>

      {/* Pantalla */}
      <rect
        x="80"
        y="80"
        width="240"
        height="200"
        fill="lightgray"
        stroke="black"
        strokeWidth="6"
        data-label={letters[1]}
        onClick={handleSectionClick}
      />
      <text
        x="200"
        y="180"
        fontSize="24"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}>
        {letters[1]}
      </text>

      {/* Botón de navegación */}
      <circle
        cx="200"
        cy="320"
        r="40"
        fill="#d3d3d3"
        stroke="black"
        strokeWidth="6"
        data-label={letters[2]}
        onClick={handleSectionClick}
      />
      <text
        x="200"
        y="325"
        fontSize="24"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}>
        {letters[2]}
      </text>

      {/* Botón izquierdo */}
      <circle
        cx="120"
        cy="320"
        r="25"
        fill="#d3d3d3"
        stroke="black"
        strokeWidth="6"
        data-label={letters[3]}
        onClick={handleSectionClick}
      />
      <text
        x="120"
        y="325"
        fontSize="18"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}>
        {letters[3]}
      </text>

      {/* Botón derecho */}
      <circle
        cx="280"
        cy="320"
        r="25"
        fill="#d3d3d3"
        stroke="black"
        strokeWidth="6"
        data-label={letters[4]}
        onClick={handleSectionClick}
      />
      <text
        x="280"
        y="325"
        fontSize="18"
        fontWeight="bold"
        fill="black"
        textAnchor="middle"
        style={{ pointerEvents: 'none' }}>
        {letters[4]}
      </text>

      {/* Botón de llamada */}
      <rect
        x="120"
        y="400"
        width="160"
        height="40"
        fill="#d3d3d3"
        stroke="black"
        strokeWidth="4"
        data-label={letters[5]}
        onClick={handleSectionClick}
      />
      <text
        x="200"
        y="425"
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

export default Tangram3;

Tangram3.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  selectedLabel: PropTypes.string.isRequired,
  onComplete: PropTypes.func,
  updateStats: PropTypes.func.isRequired, // Requerido para estadísticas
};
