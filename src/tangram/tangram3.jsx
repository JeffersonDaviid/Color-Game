import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Tangram3({ selectedColor, selectedLabel, letters, onComplete }) {
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
      {/* Cuerpo del pez (triángulo grande) */}
      <polygon
        points="50,100 150,100 100,150"
        fill="lightgray"
        stroke="black"
        strokeWidth="3"
        data-label={letters[0]}
        onClick={handleSectionClick}
      />
      <text x="90" y="120" fontSize="10" fontWeight="bold" fill="black">
        {letters[0]}
      </text>

      {/* Aleta superior (triángulo mediano) */}
      <polygon
        points="50,100 80,70 110,100"
        fill="lightgray"
        stroke="black"
        strokeWidth="3"
        data-label={letters[1]}
        onClick={handleSectionClick}
      />
      <text x="75" y="90" fontSize="10" fontWeight="bold" fill="black">
        {letters[1]}
      </text>

      {/* Aleta inferior (triángulo mediano) */}
      <polygon
        points="50,100 80,130 110,100"
        fill="lightgray"
        stroke="black"
        strokeWidth="3"
        data-label={letters[2]}
        onClick={handleSectionClick}
      />
      <text x="75" y="110" fontSize="10" fontWeight="bold" fill="black">
        {letters[2]}
      </text>

      {/* Cola (triángulo pequeño) */}
      <polygon
        points="10,100 30,90 30,110"
        fill="lightgray"
        stroke="black"
        strokeWidth="3"
        data-label={letters[3]}
        onClick={handleSectionClick}
      />
      <text x="20" y="105" fontSize="10" fontWeight="bold" fill="black">
        {letters[3]}
      </text>

      {/* Ojo (círculo pequeño) */}
      <circle
        cx="120"
        cy="90"
        r="5"
        fill="lightgray"
        stroke="black"
        strokeWidth="2"
        data-label={letters[4]}
        onClick={handleSectionClick}
      />
      <text x="115" y="85" fontSize="10" fontWeight="bold" fill="black">
        {letters[4]}
      </text>

      {/* Boca (triángulo pequeño) */}
      <polygon
        points="130,105 140,100 130,95"
        fill="lightgray"
        stroke="black"
        strokeWidth="3"
        data-label={letters[5]}
        onClick={handleSectionClick}
      />
      <text x="125" y="100" fontSize="10" fontWeight="bold" fill="black">
        {letters[5]}
      </text>
    </svg>
  );
}

export default Tangram3;

Tangram3.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  selectedLabel: PropTypes.string.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onComplete: PropTypes.func,
};
