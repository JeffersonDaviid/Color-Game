import { useContext } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoadingCircle from './components/LoadingCircle'
import ProtectedRouter from './components/ProtectRoute'
import { GameRulesProvider } from './context/GameRulesProvider'
import StateFetchContext from './context/StateFetchContext'
import Home from './pages/Home'
import Login from './pages/Login'
import MainGame from './pages/MainGame'
import Patient from './pages/Patient'
import RegisterTherapist from './pages/RegisterTherapist'
import TherapistDashboard from './pages/TherapistDashboard'

function App() {
	const { loading } = useContext(StateFetchContext)
	return (
		// Aquí se establece el basename para que las rutas funcionen en el contexto de /Color-Game/
		<HashRouter>
			<div className='App'>
				{loading && <LoadingCircle />}
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
