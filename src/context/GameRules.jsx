import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const GameRulesContext = createContext()

export const GameRulesProvider = ({ children }) => {
	const [isCompletedT1, setIsCompletedT1] = useState(false)

	return (
		<GameRulesContext.Provider value={{ isCompletedT1, setIsCompletedT1 }}>
			{children}
		</GameRulesContext.Provider>
	)
}

GameRulesProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
