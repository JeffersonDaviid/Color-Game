import React from 'react';

function TangramTV({ selectedColor, selectedLabel }) {
  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');
    if (selectedColor === 'lightgray' || label === selectedLabel) {
      event.target.style.fill = selectedColor;
    }
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 400 300">
      {/* Marco de la TV (A) */}
      <rect x="20" y="20" width="360" height="260" fill="#d3d3d3" stroke="black" strokeWidth="4" data-label="A" onClick={handleSectionClick} />
      <text x="30" y="35" fontSize="18" fontWeight="bold" fill="black">A</text>

      {/* Pantalla (B) */}
      <rect x="40" y="50" width="320" height="160" fill="#d3d3d3" stroke="black" strokeWidth="4" data-label="B" onClick={handleSectionClick} />
      <text x="50" y="90" fontSize="18" fontWeight="bold" fill="black">B</text>

      {/* Botón superior derecho (C) */}
      <circle cx="360" cy="80" r="20" fill="#d3d3d3" stroke="black" strokeWidth="2" data-label="C" onClick={handleSectionClick} />
      <text x="345" y="85" fontSize="18" fontWeight="bold" fill="black">C</text>

      {/* Botón medio derecho (D) */}
      <circle cx="360" cy="130" r="20" fill="#d3d3d3" stroke="black" strokeWidth="2" data-label="D" onClick={handleSectionClick} />
      <text x="345" y="135" fontSize="18" fontWeight="bold" fill="black">D</text>

      {/* Botón inferior derecho (E) */}
      <circle cx="360" cy="180" r="20" fill="#d3d3d3" stroke="black" strokeWidth="2" data-label="E" onClick={handleSectionClick} />
      <text x="345" y="185" fontSize="18" fontWeight="bold" fill="black">E</text>

      {/* Indicador de encendido (F) */}
      <rect x="180" y="220" width="40" height="40" fill="#d3d3d3" stroke="black" strokeWidth="2" data-label="F" onClick={handleSectionClick} />
      <text x="200" y="245" fontSize="18" fontWeight="bold" fill="black" textAnchor="middle">F</text>
    </svg>
  );
}

export default TangramTV;
