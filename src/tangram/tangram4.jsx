import React from 'react';

function Tangram4({ selectedColor, selectedLabel }) {
  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');
    // Si estamos en modo "BORRAR" (selectedColor es 'lightgray'), ignora la etiqueta
    if (selectedColor === 'lightgray' || label === selectedLabel) {
      event.target.style.fill = selectedColor;
    }
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      {/* Cuerpo del pez */}
      <polygon points="20,50 50,30 50,70" fill="lightgray" stroke="black" strokeWidth="1" data-label="A" onClick={handleSectionClick} />
      <text x="30" y="50" fontSize="5" fill="black">A</text>

      <polygon points="50,30 80,50 50,70" fill="lightgray" stroke="black" strokeWidth="1" data-label="B" onClick={handleSectionClick} />
      <text x="60" y="50" fontSize="5" fill="black">B</text>

      {/* Aletas superiores e inferiores */}
      <polygon points="40,30 50,20 60,30" fill="lightgray" stroke="black" strokeWidth="1" data-label="C" onClick={handleSectionClick} />
      <text x="48" y="28" fontSize="5" fill="black">C</text>

      <polygon points="40,70 50,80 60,70" fill="lightgray" stroke="black" strokeWidth="1" data-label="D" onClick={handleSectionClick} />
      <text x="48" y="75" fontSize="5" fill="black">D</text>

      {/* Cola */}
      <polygon points="10,45 20,50 10,55" fill="lightgray" stroke="black" strokeWidth="1" data-label="E" onClick={handleSectionClick} />
      <text x="10" y="52" fontSize="5" fill="black">E</text>
    </svg>
  );
}

export default Tangram4;
