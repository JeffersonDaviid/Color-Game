import Tangram1 from '../tangram/tangram1'
import TangramTV from '../tangram/tangram2'
import Tangram3 from '../tangram/tangram3'
import Tangram4 from '../tangram/tangram4'
import Tangram5 from '../tangram/tangram5'
import { getRandomColors, getSuffleList, getUniqueLetters } from './utils'

export const API_AUTH = 'https://back-color-game.onrender.com/api/v1/auth'
export const API_TRANSFER = 'https://back-color-game.onrender.com/api/v1/transfer'
export const API_PATIENT = 'https://back-color-game.onrender.com/api/v1/patient'
export const API_SESSION = 'https://back-color-game.onrender.com/api/v1/session'
export const API_THERAPIST = 'https://back-color-game.onrender.com/api/v1/therapist'

export const LABELS = getUniqueLetters()
const COLORS_HSL = getSuffleList(getRandomColors())

export const COLORS = [
	{ label: LABELS[0], color: COLORS_HSL[0] },
	{ label: LABELS[1], color: COLORS_HSL[1] },
	{ label: LABELS[2], color: COLORS_HSL[2] },
	{ label: LABELS[3], color: COLORS_HSL[3] },
	{ label: LABELS[4], color: COLORS_HSL[4] },
	{ label: LABELS[5], color: COLORS_HSL[5] },
]

export const WALLPAPERS = [
	'./assets/fondos/fondo16.avif',
	'./assets/fondos/fondo17.avif',
	'./assets/fondos/fondo18.avif',
	'./assets/fondos/fondo19.avif',
	'./assets/fondos/fondo20.avif',
	'./assets/fondos/fondo21.avif',
	'./assets/fondos/fondo22.avif',
]

export const PERSONAJES = [
	'./assets/personaje-mujer-ok.png',
	'./assets/personaje-hombre-feliz.png',
	'./assets/personaje-hombre-descanso.png',
	'./assets/personaje-mujer-descanso.png',
	'./assets/personaje-mujer-comienzo.png',
]

export const TANGRAMS = [Tangram1, TangramTV, Tangram3, Tangram4, Tangram5]
