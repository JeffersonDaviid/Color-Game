import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import './Home.css'

function Home() {
	const navigate = useNavigate()
	const { isAuthenticated } = useContext(AuthContext)

	const handlePlayClick = () => {
		navigate('/game')
	}

	useEffect(() => {
		if (isAuthenticated) navigate('/dashboard')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated])

	return (
		<div className='home-container'>
			{/* Salpicaduras de pintura */}
			<div className='splash'></div>
			<div className='splash'></div>
			<div className='splash'></div>
			<div className='splash'></div>
			<div className='splash'></div>

			{/* Título y botón de juego */}
			<h4 className='game-title'>MEMORIA ARTÍSTICA</h4>
			<button
				className='play-buttonh'
				onClick={handlePlayClick}>
				JUGAR
			</button>
			
		</div>
	)
}

export default Home
