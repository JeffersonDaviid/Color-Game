import React from 'react';

function TurtleTangram({ selectedColor, selectedLabel }) {
  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');
    if (selectedColor === 'lightgray' || label === selectedLabel) {
      event.target.style.fill = selectedColor;
    }
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 200 200">
      {/* Caparazón (A) */}
      <ellipse cx="100" cy="100" rx="50" ry="70" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="A" onClick={handleSectionClick} />
      <text x="100" y="100" fontSize="12" fontWeight="bold" fill="black" textAnchor="middle">A</text>

      {/* Cabeza (B) - Más grande para parecer una cabeza */}
      <circle cx="100" cy="35" r="25" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="B" onClick={handleSectionClick} />
      <text x="100" y="40" fontSize="12" fontWeight="bold" fill="black" textAnchor="middle">B</text>

      {/* Pata izquierda delantera (C) */}
      <ellipse cx="55" cy="70" rx="12" ry="20" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="C" onClick={handleSectionClick} />
      <text x="55" y="75" fontSize="12" fontWeight="bold" fill="black" textAnchor="middle">C</text>

      {/* Pata derecha delantera (D) */}
      <ellipse cx="145" cy="70" rx="12" ry="20" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="D" onClick={handleSectionClick} />
      <text x="145" y="75" fontSize="12" fontWeight="bold" fill="black" textAnchor="middle">D</text>

      {/* Pata izquierda trasera (E) */}
      <ellipse cx="55" cy="140" rx="12" ry="20" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="E" onClick={handleSectionClick} />
      <text x="55" y="145" fontSize="12" fontWeight="bold" fill="black" textAnchor="middle">E</text>

      {/* Pata derecha trasera (F) */}
      <ellipse cx="145" cy="140" rx="12" ry="20" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="F" onClick={handleSectionClick} />
      <text x="145" y="145" fontSize="12" fontWeight="bold" fill="black" textAnchor="middle">F</text>
    </svg>
  );
}

export default TurtleTangram;
