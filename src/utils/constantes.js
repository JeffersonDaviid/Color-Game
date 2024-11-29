import Tangram1 from '../tangram/tangram1'
import TangramTV from '../tangram/tangram2'
import { getRandomColors, getSuffleList, getUniqueLetters } from './utils'

export const API_AUTH = 'http://localhost:8000/api/v1/auth'
export const API_HISTORY_TRANSFER = 'http......'
export const API_PATIENT = 'HTTTPASDJF'
export const API_SESSION = 'HTTTP'
export const API_THERAPIST = ''

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
	'./assets/fondo1.avif',
	'./assets/fondo2.avif',
	'./assets/fondo3.avif',
	'./assets/fondo4.avif',
	'./assets/fondo5.avif',
	'./assets/fondo6.avif',
	'./assets/JAPAN.avif',
	'./assets/POP.avif',
]

export const PERSONAJES = [
	'./assets/personaje-mujer-ok.png',
	'./assets/personaje-hombre-feliz.png',
	'./assets/personaje-hombre-descanso.png',
	'./assets/personaje-mujer-descanso.png',
	'./assets/personaje-mujer-comienzo.png',
]

export const TANGRAMS = [Tangram1, TangramTV]
