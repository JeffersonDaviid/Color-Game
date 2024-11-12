import React, { useEffect, useRef } from 'react'
import { init } from 'echarts'

const LineDiagram = ({ rows, colums }) => {
	const chartRef = useRef(null)

	useEffect(() => {
		const chartInstance = init(chartRef.current, null, {
			renderer: 'canvas',
			useDirtyRect: false,
		})

		const option = {
			xAxis: {
				type: 'category',
				data: rows,
			},
			yAxis: {
				type: 'value',
			},
			series: [
				{
					data: colums,
					type: 'line',
				},
			],
		}

		chartInstance.setOption(option)

		const handleResize = () => {
			chartInstance.resize()
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
			chartInstance.dispose()
		}
	}, [])

	return (
		<div
			ref={chartRef}
			style={{ width: '100%', height: '400px' }}
		/>
	)
}

export default LineDiagram
