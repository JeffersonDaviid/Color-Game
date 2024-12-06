import confetti from 'canvas-confetti'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import GameRulesContext from './GameRulesContext'

export const GameRulesProvider = ({ children }) => {
	const [isWrongColor, setIsWrongColor] = useState(false)
	const [isWinner, setIsWinner] = useState(false)

	/**	Manejar color incorrecto */
	useEffect(() => {
		if (isWrongColor) {
			const timeoutId = setTimeout(() => {
				setIsWrongColor(false)
			}, 4000)

			return () => clearTimeout(timeoutId)
		}
	}, [isWrongColor])

	/**	Manejar ganador */
	useEffect(() => {
		if (isWinner) {
			const end = Date.now() + 15 * 1000
			// go Buckeyes!
			const colors = ['#BB0000', '#FFFFFF', '#FFD700', '#4682B4', '#32CD32', '#FF8C00']

			function frame() {
				confetti({
					particleCount: 2,
					angle: 60,
					spread: 55,
					origin: { x: 0 },
					colors: colors,
				})
				confetti({
					particleCount: 2,
					angle: 120,
					spread: 55,
					origin: { x: 1 },
					colors: colors,
				})

				if (Date.now() < end) {
					requestAnimationFrame(frame)
				}
			}
			frame()
		}
	}, [isWinner])

	return (
		<GameRulesContext.Provider
			value={{ isWinner, isWrongColor, setIsWrongColor, setIsWinner }}>
			{children}
		</GameRulesContext.Provider>
	)
}

GameRulesProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
