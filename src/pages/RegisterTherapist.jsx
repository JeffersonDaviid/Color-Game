import { useContext, useEffect, useState } from 'react'
import './registerTherapist.css'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const RegisterTherapist = () => {
	const { isSuccessRegisterTherapist, registerTherapist } = useContext(AuthContext)
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		cedulaT: '',
		name: '',
		lastname: '',
		email: '',
		password: '',
		confirmPassword: '',
		phone: '',
	})

	const [errors, setErrors] = useState({})

	const handleChange = (e) => {
		const { name, value } = e.target

		// Validar campos específicos
		if (name === 'cedulaT' || name === 'phone') {
			// Permitir solo números y máximo de 10 dígitos
			if (/^\d{0,10}$/.test(value)) {
				setFormData({
					...formData,
					[name]: value,
				})
			}
		} else {
			setFormData({
				...formData,
				[name]: value,
			})
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const newErrors = {}

		// Validaciones
		if (formData.cedulaT.length !== 10) newErrors.cedulaT = 'Cédula debe tener 10 dígitos'
		if (formData.password !== formData.confirmPassword)
			newErrors.confirmPassword = 'Las contraseñas no coinciden'
		if (formData.phone.length !== 10)
			newErrors.phone = 'El teléfono debe tener 10 dígitos'

		setErrors(newErrors)
		if (Object.keys(newErrors).length === 0) {
			registerTherapist(formData)
		}
	}

	useEffect(() => {
		if (isSuccessRegisterTherapist) navigate('/login')
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSuccessRegisterTherapist])

	return (
		<div className='register-container'>
			<button
				onClick={() => navigate('/login')}
				className='home-button'>
				<i className='fas fa-user'></i> Volver al Login
			</button>
			<div className='register-box'>
				<h2 className='register-title'>Registrar Terapista</h2>
				<form
					className='register-form'
					onSubmit={handleSubmit}>
					<div className='form-group'>
						<label htmlFor='cedulaT'>Cédula</label>
						<input
							type='text'
							id='cedulaT'
							name='cedulaT'
							placeholder='Introduce tu cédula'
							value={formData.cedulaT}
							onChange={handleChange}
							required
						/>
						{errors.cedulaT && <div className='error-message'>{errors.cedulaT}</div>}
					</div>

					<div className='form-group'>
						<label htmlFor='name'>Nombre</label>
						<input
							type='text'
							id='name'
							name='name'
							placeholder='Introduce tu nombre'
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='lastname'>Apellido</label>
						<input
							type='text'
							id='lastname'
							name='lastname'
							placeholder='Introduce tu apellido'
							value={formData.lastname}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='email'>Correo Electrónico</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Introduce tu correo'
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='phone'>Teléfono</label>
						<input
							type='text'
							id='phone'
							name='phone'
							placeholder='Introduce tu teléfono'
							value={formData.phone}
							onChange={handleChange}
							required
						/>
						{errors.phone && <div className='error-message'>{errors.phone}</div>}
					</div>

					<div className='form-group'>
						<label htmlFor='password'>Contraseña</label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Introduce tu contraseña'
							value={formData.password}
							onChange={handleChange}
							required
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='confirmPassword'>Verificar Contraseña</label>
						<input
							type='password'
							id='confirmPassword'
							name='confirmPassword'
							placeholder='Verifica tu contraseña'
							value={formData.confirmPassword}
							onChange={handleChange}
							required
						/>
						{errors.confirmPassword && (
							<div className='error-message'>{errors.confirmPassword}</div>
						)}
					</div>

					<div className='form-group'>
						<button
							type='submit'
							className='register-button'>
							<i className='fas fa-user-plus'></i> Registrar
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default RegisterTherapist
