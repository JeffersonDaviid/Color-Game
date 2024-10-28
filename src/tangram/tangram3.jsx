import React from 'react';

function Tangram3({ selectedColor, selectedLabel }) {
  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');
    // Si estamos en modo "BORRAR" (selectedColor es 'lightgray'), ignora la etiqueta
    if (selectedColor === 'lightgray' || label === selectedLabel) {
      event.target.style.fill = selectedColor;
    }
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      {/* Hojas superiores */}
      <polygon points="40,20 50,5 60,20" fill="lightgray" stroke="black" strokeWidth="1" data-label="A" onClick={handleSectionClick} />
      <text x="48" y="15" fontSize="5" fill="black">A</text>

      <polygon points="35,35 50,20 65,35" fill="lightgray" stroke="black" strokeWidth="1" data-label="B" onClick={handleSectionClick} />
      <text x="48" y="30" fontSize="5" fill="black">B</text>

      <polygon points="30,50 50,30 70,50" fill="lightgray" stroke="black" strokeWidth="1" data-label="C" onClick={handleSectionClick} />
      <text x="48" y="45" fontSize="5" fill="black">C</text>

      {/* Tronco */}
      <rect x="47" y="50" width="6" height="40" fill="lightgray" stroke="black" strokeWidth="1" data-label="D" onClick={handleSectionClick} />
      <text x="48" y="70" fontSize="5" fill="black">D</text>

      {/* Ramas */}
      <polygon points="35,55 47,50 47,60" fill="lightgray" stroke="black" strokeWidth="1" data-label="E" onClick={handleSectionClick} />
      <text x="38" y="58" fontSize="5" fill="black">E</text>

      <polygon points="65,55 53,50 53,60" fill="lightgray" stroke="black" strokeWidth="1" data-label="F" onClick={handleSectionClick} />
      <text x="58" y="58" fontSize="5" fill="black">F</text>
    </svg>
  );
}

export default Tangram3;
