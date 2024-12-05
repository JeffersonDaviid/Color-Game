import React from 'react'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/material'

export default function LoadingCircle() {
	return (
		<Box
			sx={{
				display: 'flex',
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'rgba(255, 255, 255, 0.10)',
				zIndex: 1000,
			}}>
			<CircularProgress color='primary' />
		</Box>
	)
}
