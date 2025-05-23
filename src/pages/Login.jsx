import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './login.css';

const Login = () => {
	const navigate = useNavigate();
	const { login, isAuthenticated } = useContext(AuthContext);

	const [cedula, setCedula] = useState('');
	const [error, setError] = useState('');

	const handleCedulaChange = (e) => {
		const value = e.target.value;

		// Permitir solo números y máximo 10 caracteres
		if (/^\d{0,10}$/.test(value)) {
			setCedula(value);
			setError(''); // Limpiar el error si está correcto
		} else {
			setError('La cédula debe contener solo números y un máximo de 10 dígitos.');
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (cedula.length !== 10) {
			setError('La cédula debe contener exactamente 10 dígitos.');
			return;
		}
		await login({
			cedulaT: e.target.cedula.value,
			password: e.target.password.value,
		});

		if (isAuthenticated) navigate('/dashboard');
	};

	useEffect(() => {
		if (isAuthenticated) navigate('/dashboard');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuthenticated]);

	return (
		<div className='login-container'>
			<button
				onClick={() => navigate('/')}
				className='home-button'>
				<i className='fas fa-home'></i> Volver a inicio
			</button>
			<div className='login-box'>
				<h3 className='login-title'>Memoria Artística</h3>
				<p className='login-subtitle'>Inicia sesión como terapista</p>
				<form
					onSubmit={handleSubmit}
					className='login-form'>
					<div className='form-group'>
						<label htmlFor='cedula'>Cédula</label>
						<input
							type='text'
							id='cedula'
							name='cedula'
							placeholder='Introduce tu cédula'
							value={cedula}
							onChange={handleCedulaChange}
							required
						/>
						{error && <p className='error-message'>{error}</p>}
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Contraseña</label>
						<input
							type='password'
							id='password'
							name='password'
							placeholder='Introduce tu contraseña'
							required
						/>
					</div>
					<button
						type='submit'
						className='login-button'>
						Iniciar sesión
					</button>
				</form>
				<div className='register-link'>
					<p>
						¿No tienes cuenta?{' '}
						<i onClick={() => navigate('/register')}>Regístrate aquí</i>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
