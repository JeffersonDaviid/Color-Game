import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
	const navigate = useNavigate()

	const handlePlayClick = () => {
		navigate('/game') // Redirige a la ruta del juego principal
	}

	return (
		<div className='home-container'>
			{/* Salpicaduras de pintura */}
			<div className='splash'></div>
			<div className='splash'></div>
			<div className='splash'></div>
			<div className='splash'></div>
			<div className='splash'></div>

			{/* Título y botón de juego */}
			<h1 className='game-title'>MEMORIA ARTISTICA</h1>
			<button
				className='play-button'
				onClick={handlePlayClick}>
				Play
			</button>
		</div>
	)
}

export default Home
