import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const GameRulesContext = createContext()

export const GameRulesProvider = ({ children }) => {
	const [isCompletedT1, setIsCompletedT1] = useState(false)
	const [isWrongColor, setIsWrongColor] = useState(false)

	const handleWrongColor = () => {
		setIsWrongColor(true)

		const timeoutId = setTimeout(() => {
			setIsWrongColor(false)
		}, 10000)

		// Limpia el temporizador si el componente se desmonta
		return () => clearTimeout(timeoutId)
	}

	/**	Manejar color incorrecto */
	useEffect(() => {
		if (isWrongColor) {
			const timeoutId = setTimeout(() => {
				setIsWrongColor(false)
			}, 8000)

			return () => clearTimeout(timeoutId)
		}
	}, [isWrongColor])

	return (
		<GameRulesContext.Provider value={{ isCompletedT1, isWrongColor, setIsWrongColor }}>
			{children}
		</GameRulesContext.Provider>
	)
}

GameRulesProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
