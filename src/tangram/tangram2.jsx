import React from 'react';

function Tangram2({ selectedColor, selectedLabel }) {
  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');
    // Si estamos en modo "BORRAR" (selectedColor es 'lightgray'), ignora la etiqueta
    if (selectedColor === 'lightgray' || label === selectedLabel) {
      event.target.style.fill = selectedColor;
    }
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      {/* Tejado */}
      <polygon points="30,40 50,20 70,40" fill="lightgray" stroke="black" strokeWidth="1" data-label="A" onClick={handleSectionClick} />
      <text x="45" y="35" fontSize="5" fill="black">A</text>

      {/* Chimenea */}
      <rect x="55" y="25" width="5" height="10" fill="lightgray" stroke="black" strokeWidth="1" data-label="B" onClick={handleSectionClick} />
      <text x="56" y="30" fontSize="5" fill="black">B</text>

      {/* Paredes */}
      <rect x="30" y="40" width="40" height="40" fill="lightgray" stroke="black" strokeWidth="1" data-label="C" onClick={handleSectionClick} />
      <text x="45" y="60" fontSize="5" fill="black">C</text>

      {/* Puerta */}
      <rect x="45" y="60" width="10" height="20" fill="lightgray" stroke="black" strokeWidth="1" data-label="D" onClick={handleSectionClick} />
      <text x="47" y="70" fontSize="5" fill="black">D</text>

      {/* Ventanas */}
      <rect x="35" y="50" width="8" height="8" fill="lightgray" stroke="black" strokeWidth="1" data-label="E" onClick={handleSectionClick} />
      <text x="36" y="55" fontSize="5" fill="black">E</text>
      
      <rect x="57" y="50" width="8" height="8" fill="lightgray" stroke="black" strokeWidth="1" data-label="F" onClick={handleSectionClick} />
      <text x="58" y="55" fontSize="5" fill="black">F</text>
    </svg>
  );
}

export default Tangram2;
