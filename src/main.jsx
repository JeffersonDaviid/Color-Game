import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/AuthProvider'
import { StateFetchContextProvider } from './context/StateFetchContext'
import './index.css'
import { SnackbarProvider } from 'notistack'

const root = createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<StateFetchContextProvider>
			<AuthProvider>
				<SnackbarProvider
					maxSnack={3}
					autoHideDuration={3000}>
					<App />
				</SnackbarProvider>
			</AuthProvider>
		</StateFetchContextProvider>
	</React.StrictMode>
)
