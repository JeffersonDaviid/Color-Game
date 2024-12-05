import { enqueueSnackbar } from 'notistack'

export const handleAPIError = (error) => {
	if (error instanceof TypeError) {
		enqueueSnackbar('No hay conexión con el servidor', {
			variant: 'error',
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'center',
			},
		})
	} else {
		enqueueSnackbar('Error desconocido', {
			variant: 'error',
			anchorOrigin: {
				vertical: 'top',
				horizontal: 'center',
			},
		})
	}
}

export const handleAPIMessages = (code, message) => {
	switch (code) {
		case 200:
			return enqueueSnackbar(message, {
				variant: 'success',
				style: { backgroundColor: '#4caf50', color: '#ffffff' },
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'center',
				},
			})
		case 201:
			return enqueueSnackbar(message, {
				variant: 'success',
				style: { backgroundColor: '#66bb6a', color: '#ffffff' },
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'center',
				},
			})
		case 400:
			return enqueueSnackbar(message, {
				variant: 'error',
				style: { backgroundColor: '#f44336', color: '#ffffff' },
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'center',
				},
			})
		case 401:
			return enqueueSnackbar(message, {
				variant: 'warning',
				style: { backgroundColor: '#ff9800', color: '#ffffff' },
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'center',
				},
			})
		case 403:
			return enqueueSnackbar(message, {
				variant: 'warning',
				style: { backgroundColor: '#ff5722', color: '#ffffff' },
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'center',
				},
			})
		case 404:
			return enqueueSnackbar(message, {
				variant: 'info',
				style: { backgroundColor: '#2196f3', color: '#ffffff' },
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'center',
				},
			})
		case 409:
			return enqueueSnackbar(message, {
				variant: 'warning',
				style: { backgroundColor: '#ff5722', color: '#ffffff' },
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'center',
				},
			})
		case 500:
			return enqueueSnackbar(message, {
				variant: 'error',
				style: { backgroundColor: '#d32f2f', color: '#ffffff' },
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'center',
				},
			})
		case 503:
			return enqueueSnackbar(message, {
				variant: 'warning',
				style: { backgroundColor: '#ffb74d', color: '#ffffff' },
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'center',
				},
			})
		default:
			return enqueueSnackbar(message, {
				variant: 'default',
				style: { backgroundColor: '#9e9e9e', color: '#ffffff' },
				anchorOrigin: {
					vertical: 'top',
					horizontal: 'center',
				},
			})
	}
}
