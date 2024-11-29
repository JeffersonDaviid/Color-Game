import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const TherapistDashboard = () => {
	const navigate = useNavigate()
	const { logout } = useContext(AuthContext)
	return (
		<div>
			TherapistDashboard
			<button
				onClick={async () => {
					await logout()
					navigate('/login')
				}}>
				CERRA SESION
			</button>
		</div>
	)
}
export default TherapistDashboard
