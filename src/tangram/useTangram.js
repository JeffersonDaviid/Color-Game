// src/tangram/useTangram.js
import { useContext, useEffect, useState } from 'react';
import GameRulesContext from '../context/GameRulesContext';
import { LABELS } from '../utils/constantes';
import { getSuffleList } from '../utils/utils';

function useTangram({ selectedColor, selectedLabel, onComplete, updateStats }) {
  const [letters, setLetters] = useState([...LABELS]);
  const { setIsWrongColor } = useContext(GameRulesContext);
  const [paintedSections, setPaintedSections] = useState(new Set());
  const [isTangramCompleted, setIsTangramCompleted] = useState(false);

  const handleSectionClick = (event) => {
    const label = event.target.getAttribute('data-label');

    // Verifica si ya está pintada
    if (paintedSections.has(label)) {
      return;
    }

    // Manejo de 'lightgray' para "borrar" la sección
    if (selectedColor === 'lightgray') {
      setPaintedSections((prev) => {
        const updated = new Set(prev);
        updated.delete(label);
        event.target.style.fill = 'lightgray';
        return updated;
      });
      return;
    }

    // Pintar con el color correcto
    if (label === selectedLabel) {
      setPaintedSections((prev) => {
        const updated = new Set(prev);
        updated.add(label);
        event.target.style.fill = selectedColor;
        updateStats({ correct: true });
        return updated;
      });
    } else {
      // Color incorrecto
      setIsWrongColor(true);
      updateStats({ correct: false });
    }
  };

  // Efecto para ver si se han pintado todas las secciones
  useEffect(() => {
    if (paintedSections.size === letters.length && !isTangramCompleted) {
      setIsTangramCompleted(true);
      if (onComplete) onComplete();
    }
  }, [paintedSections, letters.length, onComplete, isTangramCompleted]);

  // Barajar letras una sola vez al montar el componente
  useEffect(() => {
    const shuffledLetters = getSuffleList(letters);
    setLetters(shuffledLetters);
  }, []);

  return { letters, handleSectionClick };
}

export default useTangram;
