import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { GameRulesProvider } from './context/GameRules'
import Home from './pages/Home'
import MainGame from './pages/mainGame'
import Patient from './pages/Patient'
import ProtectedRouter from './components/ProtectRoute'
import Login from './pages/Login'
import RegisterTherapist from './pages/RegisterTherapist'
import TherapistDashboard from './pages/TherapistDashboard'

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
						path='/register'
						element={<RegisterTherapist />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='dashboard'
						element={<ProtectedRouter element={<TherapistDashboard />} />}
					/>
					<Route
						path='/patient'
						element={<ProtectedRouter element={<Patient />} />}
					/>
				</Routes>
			</div>
		</HashRouter>
	)
}

export default App
