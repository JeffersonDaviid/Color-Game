// import Axios from 'axios'
// import { enqueueSnackbar } from 'notistack'

export const handleAPIError = (error) => {
	// if (Axios.isAxiosError(error)) {
	// 	if (error.code === 'ERR_NETWORK')
	// 		enqueueSnackbar('No hay conexión con el servidor', {
	// 			variant: 'error',
	// 			anchorOrigin: {
	// 				vertical: 'top',
	// 				horizontal: 'left',
	// 			},
	// 		})

	// 	if (error.response?.data.status === 401)
	// 		enqueueSnackbar(error.response.data.message, {
	// 			variant: 'warning',
	// 			anchorOrigin: {
	// 				vertical: 'top',
	// 				horizontal: 'left',
	// 			},
	// 		})

	// 	if (error.response?.data.status === 404)
	// 		enqueueSnackbar(error.response.data.message, {
	// 			variant: 'info',
	// 			anchorOrigin: {
	// 				vertical: 'top',
	// 				horizontal: 'left',
	// 			},
	// 		})
	// } else {
	// 	enqueueSnackbar('Error de ', {
	// 		variant: 'error',
	// 		anchorOrigin: {
	// 			vertical: 'top',
	// 			horizontal: 'left',
	// 		},
	// 	})
	// }
}
