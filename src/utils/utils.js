export function getRandomColor() {
	const letters = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}
	return color
}

export function getUniqueLetters() {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
	for (let i = letters.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[letters[i], letters[j]] = [letters[j], letters[i]]
	}
	return letters.slice(0, 6)
}
