import confetti from 'canvas-confetti';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import GameRulesContext from './GameRulesContext';

export const GameRulesProvider = ({ children }) => {
	// Estados principales
	const [isWrongColor, setIsWrongColor] = useState(false);
	const [isWinner, setIsWinner] = useState(false);

	// Estados para estadísticas
	const [numCorrects, setNumCorrects] = useState(0);
	const [numIncorrects, setNumIncorrects] = useState(0);
	const [attempts, setAttempts] = useState(0);
	const [totalTime, setTotalTime] = useState(0);

	// Tiempos
	const [gameStartTime, setGameStartTime] = useState(null); // Marca del inicio del juego
	const [pauseStartTime, setPauseStartTime] = useState(null); // Marca del inicio de la pausa
	const [pausedTime, setPausedTime] = useState(0); // Tiempo total pausado

	// Pausar el juego
	const pauseGameTimer = () => {
		setPauseStartTime(Date.now());
	};

	// Reanudar el juego
	const resumeGameTimer = () => {
		if (pauseStartTime) {
			const pauseDuration = Date.now() - pauseStartTime;
			setPausedTime((prev) => prev + pauseDuration);
			setPauseStartTime(null);
		}
	};

	// Iniciar el temporizador global al comienzo del juego
	const startGameTimer = () => {
		setGameStartTime(Date.now());
		setPausedTime(0); // Reinicia el tiempo pausado
	};

	// Detener el temporizador global al final del juego
	const stopGameTimer = () => {
		if (gameStartTime) {
			const endTime = Date.now();
			const elapsed = Math.round((endTime - gameStartTime - pausedTime) / 1000); // Tiempo en segundos excluyendo pausas
			setTotalTime(elapsed);
		}
	};

	// Actualizar los aciertos
	const updateCorrects = () => {
		setNumCorrects((prev) => prev + 1);
		setAttempts((prev) => prev + 1);
	};

	// Actualizar los errores
	const updateIncorrects = () => {
		setNumIncorrects((prev) => prev + 1);
		setAttempts((prev) => prev + 1);
	};

	/** Manejar color incorrecto */
	useEffect(() => {
		if (isWrongColor) {
			const timeoutId = setTimeout(() => {
				setIsWrongColor(false);
			}, 4000);

			return () => clearTimeout(timeoutId);
		}
	}, [isWrongColor]);

	/** Manejar ganador */
	useEffect(() => {
		if (isWinner) {
			const end = Date.now() + 15 * 1000;
			const colors = ['#BB0000', '#FFFFFF', '#FFD700', '#4682B4', '#32CD32', '#FF8C00'];

			function frame() {
				confetti({
					particleCount: 2,
					angle: 60,
					spread: 55,
					origin: { x: 0 },
					colors: colors,
				});
				confetti({
					particleCount: 2,
					angle: 120,
					spread: 55,
					origin: { x: 1 },
					colors: colors,
				});

				if (Date.now() < end) {
					requestAnimationFrame(frame);
				}
			}
			frame();
		}
	}, [isWinner]);

	return (
		<GameRulesContext.Provider
			value={{
				isWinner,
				isWrongColor,
				setIsWrongColor,
				setIsWinner,
				numCorrects,
				numIncorrects,
				attempts,
				totalTime,
				startGameTimer,
				stopGameTimer,
				pauseGameTimer,
				resumeGameTimer,
			}}>
			{children}
		</GameRulesContext.Provider>
	);
};

GameRulesProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
