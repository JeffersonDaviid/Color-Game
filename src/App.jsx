import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import { GameRulesProvider } from './context/GameRules'
import Home from './pages/Home'
import MainGame from './pages/MainGame'

function App() {
	return (
		// Aquí se establece el basename para que las rutas funcionen en el contexto de /Color-Game/
		<Router basename='/Color-Game'>
			<div className='App'>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/game'
						element={
							<GameRulesProvider>
								<MainGame />
							</GameRulesProvider>
						}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App
