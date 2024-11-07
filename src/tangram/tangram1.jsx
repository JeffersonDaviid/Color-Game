import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function Tangram1({ selectedColor, selectedLabel, letters, onComplete }) {
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

  let lettersAleatory = letters;
  useEffect(() => {
    lettersAleatory = letters.sort(() => Math.random() - 0.5);
  }, [letters]);

  useEffect(() => {
    if (numCorrectedColors === 6) {
      alert("¡Felicidades! Has completado el tangram");
      if (onComplete) onComplete();
    }
  }, [numCorrectedColors]);

  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      {/* Techo */}
      <polygon
        points="40,80 100,20 160,80"
        fill="lightgray"
        stroke="black"
        strokeWidth="3"
        data-label={lettersAleatory[0]}
        onClick={handleSectionClick}
      />
      <text x="95" y="55" fontSize="10" fontWeight="bold" fill="black">
        {lettersAleatory[0]}
      </text>

      {/* Chimenea */}
      <rect
        x="130"
        y="35"
        width="15"
        height="30"
        fill="lightgray"
        stroke="black"
        strokeWidth="3"
        data-label={lettersAleatory[1]}
        onClick={handleSectionClick}
      />
      <text x="133" y="50" fontSize="10" fontWeight="bold" fill="black">
        {lettersAleatory[1]}
      </text>

      {/* Paredes */}
      <rect
        x="40"
        y="80"
        width="120"
        height="100"
        fill="lightgray"
        stroke="black"
        strokeWidth="3"
        data-label={lettersAleatory[2]}
        onClick={handleSectionClick}
      />
      <text x="95" y="130" fontSize="10" fontWeight="bold" fill="black">
        {lettersAleatory[2]}
      </text>

      {/* Puerta */}
      <rect
        x="85"
        y="140"
        width="30"
        height="40"
        fill="lightgray"
        stroke="black"
        strokeWidth="3"
        data-label={lettersAleatory[3]}
        onClick={handleSectionClick}
      />
      <text x="93" y="160" fontSize="10" fontWeight="bold" fill="black">
        {lettersAleatory[3]}
      </text>

      {/* Ventana izquierda */}
      <rect
        x="50"
        y="100"
        width="20"
        height="20"
        fill="lightgray"
        stroke="black"
        strokeWidth="3"
        data-label={lettersAleatory[4]}
        onClick={handleSectionClick}
      />
      <text x="57" y="115" fontSize="10" fontWeight="bold" fill="black">
        {lettersAleatory[4]}
      </text>

      {/* Ventana derecha */}
      <rect
        x="130"
        y="100"
        width="20"
        height="20"
        fill="lightgray"
        stroke="black"
        strokeWidth="3"
        data-label={lettersAleatory[5]}
        onClick={handleSectionClick}
      />
      <text x="137" y="115" fontSize="10" fontWeight="bold" fill="black">
        {lettersAleatory[5]}
      </text>
    </svg>
  );
}

export default Tangram1;

Tangram1.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  selectedLabel: PropTypes.string.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onComplete: PropTypes.func,
};
