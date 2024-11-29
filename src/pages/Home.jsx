import { useNavigate } from 'react-router-dom'
import './Home.css'
import { AuthContext } from '../context/AuthProvider'
import { useContext } from 'react'

function Home() {
	const navigate = useNavigate()
	const { isAuthenticated } = useContext(AuthContext)

	const handlePlayClick = () => {
		navigate('/game')
	}

	return isAuthenticated ? (
		navigate('/dashboard')
	) : (
		<>
			<div className='home-container'>
				{/* Salpicaduras de pintura */}
				<div className='splash'></div>
				<div className='splash'></div>
				<div className='splash'></div>
				<div className='splash'></div>
				<div className='splash'></div>

				{/* Título y botón de juego */}
				<h1 className='game-title'>MEMORIA ARTÍSTICA</h1>
				<button
					className='play-button'
					onClick={handlePlayClick}>
					Play
				</button>

				<button
					type='submit'
					className='login-button login-icon'
					onClick={() => navigate('/login')}>
					<i className='fas fa-user'></i> Iniciar sesión
				</button>
			</div>
		</>
	)
}

export default Home
