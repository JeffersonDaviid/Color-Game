import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const LinesDiagram = ({ dates, times, correctAnswers, wrongAnswers }) => {
	const chartRef = useRef(null)

	useEffect(() => {
		// Iniciamos el gráfico solo cuando el contenedor de referencia está montado
		const chartInstance = echarts.init(chartRef.current, null, {
			renderer: 'canvas',
			useDirtyRect: false,
		})

		const options = {
			title: {
				text: 'Promedio por día',
			},
			tooltip: {
				trigger: 'axis',
			},
			legend: {
				data: ['Tiempo promedio', 'Número de aciertos', 'Número de errores'],
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true,
			},
			toolbox: {
				feature: {
					saveAsImage: {},
				},
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: dates,
			},
			yAxis: {
				type: 'value',
			},
			series: [
				{
					name: 'Tiempo promedio',
					type: 'line',
					// stack: 'Total',
					data: times,
				},
				{
					name: 'Número de aciertos',
					type: 'line',
					// stack: 'Total',
					data: correctAnswers,
				},
				{
					name: 'Número de errores',
					type: 'line',
					// stack: 'Total',
					data: wrongAnswers,
				},
			],
		}

		// Configuramos el gráfico con las opciones definidas
		chartInstance.setOption(options)

		// Redimensionamos el gráfico si la ventana cambia de tamaño
		const handleResize = () => {
			chartInstance.resize()
		}
		window.addEventListener('resize', handleResize)

		// Limpiar al desmontar
		return () => {
			window.removeEventListener('resize', handleResize)
			chartInstance.dispose()
		}
	}, [])

	return (
		// Creamos un contenedor para el gráfico y le asignamos un tamaño
		<div
			ref={chartRef}
			style={{ width: '100%', height: '400px' }}
		/>
	)
}

export default LinesDiagram
