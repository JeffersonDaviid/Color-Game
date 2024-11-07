import Tangram1 from "../tangram/tangram1"
import TangramTV from "../tangram/tangram2"
import { getRandomColor, getUniqueLetters } from "./utils"

export const LABELS = getUniqueLetters()

export const COLORS = [
	{ label: LABELS[0], color: getRandomColor() },
	{ label: LABELS[1], color: getRandomColor() },
	{ label: LABELS[2], color: getRandomColor() },
	{ label: LABELS[3], color: getRandomColor() },
	{ label: LABELS[4], color: getRandomColor() },
	{ label: LABELS[5], color: getRandomColor() },
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
]

export const TANGRAMS = [Tangram1, TangramTV]
