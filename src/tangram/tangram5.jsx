import React from 'react';

function Tangram5({ selectedColor, selectedLabel }) {
  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');
    // Si estamos en modo "BORRAR" (selectedColor es 'lightgray'), ignora la etiqueta
    if (selectedColor === 'lightgray' || label === selectedLabel) {
      event.target.style.fill = selectedColor;
    }
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <polygon points="50,10 55,30 70,30 58,40 65,55 50,45 35,55 42,40 30,30 45,30" fill="lightgray" stroke="black" strokeWidth="1" data-label="A" onClick={handleSectionClick} />
      <text x="48" y="25" fontSize="5" fill="black">A</text>
      
      {/* Puntos adicionales para completar la estrella */}
      <polygon points="50,45 55,55 45,55" fill="lightgray" stroke="black" strokeWidth="1" data-label="B" onClick={handleSectionClick} />
      <text x="48" y="52" fontSize="5" fill="black">B</text>

      <polygon points="42,40 50,50 58,40" fill="lightgray" stroke="black" strokeWidth="1" data-label="C" onClick={handleSectionClick} />
      <text x="48" y="44" fontSize="5" fill="black">C</text>
    </svg>
  );
}

export default Tangram5;
