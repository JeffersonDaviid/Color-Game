import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Tangram5({ selectedColor, selectedLabel, letters, onComplete }) {
  const [numCorrectedColors, setNumCorrectedColors] = useState(0);

  const handleSectionClick = (event) => {
    const label = event.target.getAttribute("data-label");
    if (selectedColor === "lightgray" || label === selectedLabel) {
      event.target.style.fill = selectedColor;

      if (selectedColor !== "lightgray") {
        setNumCorrectedColors(numCorrectedColors + 1);
      }
      if (selectedColor === "lightgray") {
        setNumCorrectedColors(numCorrectedColors - 1);
      }
    }
  };

  useEffect(() => {
    if (numCorrectedColors === 6) {
      alert("¡Felicidades! Has completado el tangram");
      if (onComplete) onComplete();
    }
  }, [numCorrectedColors]);

  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      {/* Triángulo izquierdo superior */}
      <polygon
        points="40,80 60,40 80,80"
        fill="lightgray"
        stroke="black"
        strokeWidth="2"
        data-label={letters[0]}
        onClick={handleSectionClick}
      />
      <text x="55" y="65" fontSize="10" fontWeight="bold" fill="black">
        {letters[0]}
      </text>

      {/* Cuadrado izquierdo */}
      <rect
        x="40"
        y="80"
        width="40"
        height="40"
        fill="lightgray"
        stroke="black"
        strokeWidth="2"
        data-label={letters[1]}
        onClick={handleSectionClick}
      />
      <text x="55" y="105" fontSize="10" fontWeight="bold" fill="black">
        {letters[1]}
      </text>

      {/* Triángulo izquierdo inferior */}
      <polygon
        points="40,120 60,160 80,120"
        fill="lightgray"
        stroke="black"
        strokeWidth="2"
        data-label={letters[2]}
        onClick={handleSectionClick}
      />
      <text x="55" y="145" fontSize="10" fontWeight="bold" fill="black">
        {letters[2]}
      </text>

      {/* Triángulo derecho superior */}
      <polygon
        points="120,40 100,80 140,80"
        fill="lightgray"
        stroke="black"
        strokeWidth="2"
        data-label={letters[3]}
        onClick={handleSectionClick}
      />
      <text x="110" y="65" fontSize="10" fontWeight="bold" fill="black">
        {letters[3]}
      </text>

      {/* Cuadrado derecho */}
      <rect
        x="100"
        y="80"
        width="40"
        height="40"
        fill="lightgray"
        stroke="black"
        strokeWidth="2"
        data-label={letters[4]}
        onClick={handleSectionClick}
      />
      <text x="115" y="105" fontSize="10" fontWeight="bold" fill="black">
        {letters[4]}
      </text>

      {/* Triángulo derecho inferior */}
      <polygon
        points="100,120 120,160 140,120"
        fill="lightgray"
        stroke="black"
        strokeWidth="2"
        data-label={letters[5]}
        onClick={handleSectionClick}
      />
      <text x="115" y="145" fontSize="10" fontWeight="bold" fill="black">
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
};
