'use client'
import {useEffect, useRef,useState } from 'react'
import * as d3 from 'd3'
import { LightningElectronSVG } from './LightingMood' 
import { ElectronOrbit } from './ElectronOrbit/page'
import { AtomCore } from './AtomCore/page'

const ElectronicAtom = () => {
	const svgRef = useRef(null)
	const fileInputRef = useRef(null) 
	const [width, setWidth] = useState()
	const [height, setHeight] = useState()
	const handleFileClick = () => {
		fileInputRef.current.click()
	}
	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		})
		if (window.innerWidth !== width || window.innerHeight !== height) {
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}
	}, [height, width])
	useEffect(() => {
		const svg = d3.select(svgRef.current)
		const { width, height } = svg.node().getBoundingClientRect()

		if (svgRef.current) {
			d3.select(svgRef.current).selectAll('*').remove()
		}
		// Call the createLightning method when the progress state changes
		LightningElectronSVG(svg, width, height) 
		ElectronOrbit(svg, width, height)
		AtomCore(svg, width, height, handleFileClick)
	}, [fileInputRef])

	const darkColorRange = [
		'#558aab',
		'#34495e',
		'#323d5e',
		'#34495e',
		'#2c3e50',
		'#34495e',
		'#2c3e50',
		'#34495e',
	]

	// Convert the darkColorRange into a string format
	const darkColorStops = darkColorRange.map((color, index) => {
		const percentage = (index / (darkColorRange.length - 1)) * 100
		return `${color} ${percentage}%`
	})

	const darkRadialGradient = `radial-gradient(circle at 50% 48%, ${darkColorStops.join(
		', '
	)})`


	return (
		<>
			<div
				style={{
					overflowY: 'hidden',
					height: '100vh',
					backgroundImage: darkRadialGradient,
				}}>
				<svg
					width='100%'
					height='100vh'
					ref={svgRef}></svg>
				{<div className='background_gif'> </div>}
				<input
					type='file'
					style={{ display: 'none' }}
					accept='.xlsx, .xls'
					ref={fileInputRef}
				/>
			</div>
		</>
	)
}

export default ElectronicAtom
