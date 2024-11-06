import React from 'react';

function AbstractShape({ selectedColor, selectedLabel }) {
  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');
    if (selectedColor === 'lightgray' || label === selectedLabel) {
      event.target.style.fill = selectedColor;
    }
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 400 400">
      {/* Triángulo superior (A) */}
      <polygon points="200,40 160,120 240,120" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="A" onClick={handleSectionClick} />
      <text x="200" y="90" fontSize="18" fontWeight="bold" fill="black" textAnchor="middle">A</text>

      {/* Círculo central (B) */}
      <circle cx="200" cy="200" r="60" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="B" onClick={handleSectionClick} />
      <text x="170" y="220" fontSize="18" fontWeight="bold" fill="black" textAnchor="middle">B</text>

      {/* Rectángulo central vertical (C) */}
      <rect x="180" y="120" width="40" height="160" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="C" onClick={handleSectionClick} />
      <text x="200" y="200" fontSize="18" fontWeight="bold" fill="black" textAnchor="middle">C</text>

      {/* Triángulo inferior (D) */}
      <polygon points="200,360 160,280 240,280" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="D" onClick={handleSectionClick} />
      <text x="200" y="320" fontSize="18" fontWeight="bold" fill="black" textAnchor="middle">D</text>

      {/* Rectángulo izquierdo (E) */}
      <rect x="100" y="160" width="40" height="80" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="E" onClick={handleSectionClick} />
      <text x="120" y="200" fontSize="18" fontWeight="bold" fill="black" textAnchor="middle">E</text>

      {/* Rectángulo derecho (F) */}
      <rect x="260" y="160" width="40" height="80" fill="#d3d3d3" stroke="black" strokeWidth="3" data-label="F" onClick={handleSectionClick} />
      <text x="280" y="200" fontSize="18" fontWeight="bold" fill="black" textAnchor="middle">F</text>
    </svg>
  );
}

export default AbstractShape;
