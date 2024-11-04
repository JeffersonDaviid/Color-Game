import React from 'react';

function Tangram1({ selectedColor, selectedLabel }) {
  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');
    if (selectedColor === 'lightgray' || label === selectedLabel) {
      event.target.style.fill = selectedColor;
    }
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      {/* Techo */}
      <polygon points="40,80 100,20 160,80" fill="lightgray" stroke="black" strokeWidth="3" data-label="A" onClick={handleSectionClick} />
      <text x="95" y="55" fontSize="10" fontWeight="bold" fill="black">A</text>

      {/* Chimenea */}
      <rect x="130" y="35" width="15" height="30" fill="lightgray" stroke="black" strokeWidth="3" data-label="B" onClick={handleSectionClick} />
      <text x="133" y="50" fontSize="10" fontWeight="bold" fill="black">B</text>

      {/* Paredes */}
      <rect x="40" y="80" width="120" height="100" fill="lightgray" stroke="black" strokeWidth="3" data-label="C" onClick={handleSectionClick} />
      <text x="95" y="130" fontSize="10" fontWeight="bold" fill="black">C</text>

      {/* Puerta */}
      <rect x="85" y="140" width="30" height="40" fill="lightgray" stroke="black" strokeWidth="3" data-label="D" onClick={handleSectionClick} />
      <text x="93" y="160" fontSize="10" fontWeight="bold" fill="black">D</text>

      {/* Ventana izquierda */}
      <rect x="50" y="100" width="20" height="20" fill="lightgray" stroke="black" strokeWidth="3" data-label="E" onClick={handleSectionClick} />
      <text x="57" y="115" fontSize="10" fontWeight="bold" fill="black">E</text>

      {/* Ventana derecha */}
      <rect x="130" y="100" width="20" height="20" fill="lightgray" stroke="black" strokeWidth="3" data-label="F" onClick={handleSectionClick} />
      <text x="137" y="115" fontSize="10" fontWeight="bold" fill="black">F</text>
    </svg>
  );
}

export default Tangram1;
