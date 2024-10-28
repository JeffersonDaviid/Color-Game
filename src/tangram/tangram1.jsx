import React from 'react';

function Tangram1({ selectedColor, selectedLabel }) {
  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');
    // Si estamos en modo "BORRAR" (selectedColor es 'lightgray'), ignora la etiqueta
    if (selectedColor === 'lightgray' || label === selectedLabel) {
      event.target.style.fill = selectedColor;
    }
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      {/* Pétalos superiores */}
      <polygon points="50,10 55,25 45,25" fill="lightgray" stroke="black" strokeWidth="1" data-label="A" onClick={handleSectionClick} />
      <text x="48" y="20" fontSize="5" fill="black">A</text>

      <polygon points="45,25 35,35 50,30" fill="lightgray" stroke="black" strokeWidth="1" data-label="B" onClick={handleSectionClick} />
      <text x="40" y="30" fontSize="5" fill="black">B</text>

      <polygon points="55,25 65,35 50,30" fill="lightgray" stroke="black" strokeWidth="1" data-label="C" onClick={handleSectionClick} />
      <text x="55" y="30" fontSize="5" fill="black">C</text>

      {/* Pétalos laterales */}
      <polygon points="35,35 45,45 50,30" fill="lightgray" stroke="black" strokeWidth="1" data-label="D" onClick={handleSectionClick} />
      <text x="38" y="40" fontSize="5" fill="black">D</text>

      <polygon points="65,35 55,45 50,30" fill="lightgray" stroke="black" strokeWidth="1" data-label="E" onClick={handleSectionClick} />
      <text x="60" y="40" fontSize="5" fill="black">E</text>

      {/* Tallo */}
      <rect x="48" y="50" width="4" height="40" fill="lightgray" stroke="black" strokeWidth="1" data-label="F" onClick={handleSectionClick} />
      <text x="50" y="70" fontSize="5" fill="black">F</text>
      
      {/* Hoja */}
      <polygon points="40,65 48,60 48,70" fill="lightgray" stroke="black" strokeWidth="1" data-label="F" onClick={handleSectionClick} />
      <text x="42" y="68" fontSize="5" fill="black">F</text>
    </svg>
  );
}

export default Tangram1;
