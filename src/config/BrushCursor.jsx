import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function BrushCursor({ color = 'black' }) {
	const [position, setPosition] = useState({ x: 0, y: 0 })

	// Manejador para actualizar la posición del cursor
	const handleMouseMove = (event) => {
		setPosition({ x: event.clientX, y: event.clientY })
	}

	// Configurar el listener para el movimiento del mouse al montar el componente
	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove)
		return () => {
			document.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<>
			{/* Estilos para ocultar el cursor nativo */}
			<style>{`
        body {
          cursor: none;
        }
      `}</style>

			{/* Div que representa el pincel personalizado */}
			<div
				style={{
					position: 'fixed',
					top: position.y,
					left: position.x,
					transform: 'translate(-50%, -50%)',
					width: '20px',
					height: '20px',
					backgroundColor: color,
					borderRadius: '50%',
					pointerEvents: 'none', // para que el cursor no interfiera con eventos
				}}
			/>
		</>
	)
}

export default BrushCursor

BrushCursor.propTypes = {
	color: PropTypes.string,
}
