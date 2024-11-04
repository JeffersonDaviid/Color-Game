import React from 'react';

function Tangram4({ selectedColor, selectedLabel }) {
  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');
    if (selectedColor === 'lightgray' || label === selectedLabel) {
      event.target.style.fill = selectedColor;
    }
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      {/* Cuerpo del pez (Triángulos A y B más grandes) */}
      <polygon points="18,50 52,26 52,74" fill="lightgray" stroke="black" strokeWidth="1" data-label="A" onClick={handleSectionClick} />
      <text x="30" y="50" fontSize="5" fill="black">A</text>

      <polygon points="52,26 84,50 52,74" fill="lightgray" stroke="black" strokeWidth="1" data-label="B" onClick={handleSectionClick} />
      <text x="62" y="50" fontSize="5" fill="black">B</text>

      {/* Aletas superiores e inferiores (Triángulos C y D más grandes) */}
      <polygon points="38,26 52,14 66,26" fill="lightgray" stroke="black" strokeWidth="1" data-label="C" onClick={handleSectionClick} />
      <text x="48" y="24" fontSize="5" fill="black">C</text>

      <polygon points="38,74 52,86 66,74" fill="lightgray" stroke="black" strokeWidth="1" data-label="D" onClick={handleSectionClick} />
      <text x="48" y="78" fontSize="5" fill="black">D</text>

      {/* Cola (Triángulo E más grande) */}
      <polygon points="8,44 20,50 8,56" fill="lightgray" stroke="black" strokeWidth="1" data-label="E" onClick={handleSectionClick} />
      <text x="10" y="52" fontSize="5" fill="black">E</text>
    </svg>
  );
}

export default Tangram4;
