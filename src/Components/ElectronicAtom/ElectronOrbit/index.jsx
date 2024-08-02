/** @format */

export const ElectronOrbit = (svg, width, height) => {
	const createElectron = (
		svg,
		rx,
		ry,
		cx,
		cy,
		color,
		strokeWidth,
		rotate,
		electronRadius,
		electronSpacing,
		electronCount
	) => {
		if (svg.current) {
			d3.select(svg.current).selectAll('*').remove()
		}
		const orbit = svg
			.append('ellipse')
			.attr('rx', rx)
			.attr('ry', ry)
			.attr('cx', cx)
			.attr('cy', cy)
			.attr('fill', 'none')
			.attr('stroke', color)
			.attr('stroke-width', strokeWidth)
			.attr('transform', `rotate(${rotate} ${cx} ${cy})`)
		const electrons = []
		const farthestPoints = [] // To store the coordinates of the farthest points

		for (let i = 0; i < electronCount; i++) {
			const electron = svg.append('circle').attr('r', electronRadius)
			electrons.push(electron)
		}

		const x1 = cx + rx
		const y1 = cy
		const x2 = cx - rx
		const y2 = cy
		farthestPoints.push({ x1, y1, x2, y2 })

		// Function to update the position and color of the electrons along the orbit path
		const updateElectronPosition = () => {
			const angle = (performance.now() / 100) % 360 // Calculate the angle based on time for continuous rotation
			for (let i = 0; i < electrons.length; i++) {
				const electronAngle = angle + (i * 360) / electronCount // Distribute the electrons evenly along the orbit
				const x = cx + rx * Math.cos((electronAngle + rotate) * (Math.PI / 180))
				const y = cy + ry * Math.sin((electronAngle + rotate) * (Math.PI / 180))
				electrons[i]
					.attr('cx', x)
					.attr('cy', y)
					.attr('transform', `rotate(${rotate} ${cx} ${cy})`)

				// Check if the electron is at one of the farthest points
				const isFarthestPoint = farthestPoints.some(
					(point) =>
						(Math.abs(point.x1 - x) < 1 && Math.abs(point.y1 - y) < 1) ||
						(Math.abs(point.x2 - x) < 1 && Math.abs(point.y2 - y) < 1)
				)

				// Set color to light blue for electrons at farthest points, and initial color otherwise
				electrons[i]
					.attr('fill', isFarthestPoint ? '#7ed0de' : 'white')
					.attr('stroke', isFarthestPoint ? '#010926' : 'none')
			}
			requestAnimationFrame(updateElectronPosition) // Request the next animation frame for smooth rotation
		}

		updateElectronPosition()

		return { orbit, electrons, farthestPoints }
	}
	// Array of Oval configurations (rx, ry, cx, cy, color, strokeWidth, rotate)
	const ovalConfigs = [
		{
			rx: width * 0.14,
			//  : width * 0.083,
			ry: width * 0.037,
			cx: width / 2,
			cy: height / 2,
			color: '#28d7eb',
			strokeWidth: 2,
			rotate: 0, // Rotate the first oval by 45 degrees
			electronRadius: width * 0.003,
			electronSpacing: 20,
			electronCount: 33,
		},
		{
			rx: width * 0.14,
			ry: width * 0.037,
			cx: width / 2,
			cy: height / 2,
			color: '#28d7eb',
			strokeWidth: 2,
			rotate: 135, // Rotate the second oval by 135 degrees
			electronRadius: width * 0.003,
			electronSpacing: 20,
			electronCount: 33,
		},
		{
			rx: width * 0.14,
			ry: width * 0.037,
			cx: width / 2,
			cy: height / 2,
			color: '#28d7eb',
			strokeWidth: 2,
			rotate: 45, // Rotate the third oval by 90 degrees
			electronRadius: width * 0.003,
			electronSpacing: 20,
			electronCount: 33,
		},
		{
			rx: width * 0.14,
			ry: width * 0.037,
			cx: width / 2,
			cy: height / 2,
			color: '#28d7eb',
			strokeWidth: 2,
			rotate: 90, // Rotate the third oval by 90 degrees
			electronRadius: width * 0.003,
			electronSpacing: 20,
			electronCount: 33,
		},
	]
	// Create the ovals based on the array of oval configurations
	const orbits = ovalConfigs.map((config) =>
		createElectron(svg, ...Object.values(config))
	)
	for (const orbit of orbits) {
		const { electrons } = orbit
		const { x1, y1, x2, y2 } = orbit.farthestPoints[0]

		// Find the indexes of the two electrons closest to the farthest points
		let distance1 = Number.MAX_VALUE
		let distance2 = Number.MAX_VALUE
		let index1 = -1
		let index2 = -1

		for (let i = 0; i < electrons.length; i++) {
			const electron = electrons[i]
			const cx = +electron.attr('cx')
			const cy = +electron.attr('cy')
			const distanceToPoint1 = Math.sqrt(
				(cx - x1) * (cx - x1) + (cy - y1) * (cy - y1)
			)
			const distanceToPoint2 = Math.sqrt(
				(cx - x2) * (cx - x2) + (cy - y2) * (cy - y2)
			)

			if (distanceToPoint1 < distance1) {
				distance2 = distance1
				distance1 = distanceToPoint1
				index2 = index1
				index1 = i
			} else if (distanceToPoint2 < distance2) {
				distance2 = distanceToPoint2
				index2 = i
			}
		}

		// Change the color to light blue for the two closest electrons to the farthest points
		electrons[index1].attr('fill', '#8ED6FF')
		electrons[index2].attr('fill', '#8ED6FF')
	}
}
