import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/AuthProvider'
import { StateFetchContextProvider } from './context/StateFetchContext'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<StateFetchContextProvider>
			<AuthProvider>
				<App />
			</AuthProvider>
		</StateFetchContextProvider>
	</React.StrictMode>
)
