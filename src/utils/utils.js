export function getRandomColors(numColors = 6) {
	const colors = [];
	const baseSaturation = 80; // Saturación base alta para colores vivos
	const baseLightness = 50; // Brillo base medio para un buen balance

	// Calculamos el espacio entre matices para distribuir los colores en el círculo de colores
	const hueStep = Math.floor(360 / numColors);

	for (let i = 0; i < numColors; i++) {
		// Matiz espaciado regularmente, con una pequeña variación aleatoria
		const hue = (i * hueStep + Math.random() * (hueStep / 3)) % 360;

		// Variación aleatoria en la saturación y el brillo para cada color
		const saturation = baseSaturation + (Math.random() * 20 - 5); // Rango: 70% - 90%
		const lightness = baseLightness + (Math.random() * 20 - 5); // Rango: 40% - 60%

		// Generamos el color en formato HSL
		const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
		colors.push(color);
	}

	return colors;
}

export function getUniqueLetters() {
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	for (let i = letters.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[letters[i], letters[j]] = [letters[j], letters[i]];
	}
	return letters.slice(0, 6);
}

export function getSuffleList(list) {
	for (let i = list.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[list[i], list[j]] = [list[j], list[i]];
	}
	return list;
}

export function convertTime(segundos) {
	// Calcular horas, minutos y segundos
	const horas = Math.floor(segundos / 3600);
	const minutos = Math.floor((segundos % 3600) / 60);
	const segundosRestantes = segundos % 60;

	// Construir el string según los valores
	let tiempoFormateado = '';

	if (horas > 0) {
		tiempoFormateado += `${horas}h `;
	}

	if (minutos > 0) {
		tiempoFormateado += `${minutos}m `;
	}

	if (segundosRestantes > 0 || (horas === 0 && minutos === 0)) {
		tiempoFormateado += `${segundosRestantes}s `;
	}

	return tiempoFormateado.trim();
}
