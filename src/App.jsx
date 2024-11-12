import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { GameRulesProvider } from './context/GameRules'
import Home from './pages/Home'
import MainGame from './pages/mainGame'
import Patient from './pages/Patient'
import ProtectedRouter from './components/ProtectRoute'

function App() {
	return (
		// Aquí se establece el basename para que las rutas funcionen en el contexto de /Color-Game/
		<HashRouter>
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
					<Route
						path='/patient'
						element={<Patient />}
					/>
				</Routes>
			</div>
		</HashRouter>
	)
}

export default App
