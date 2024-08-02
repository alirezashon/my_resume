/** @format */

import * as d3 from 'd3'

export const LightningElectronSVG = (svg, width, height) => {
	const randomBetween = (min, max) => Math.random() * (max - min) + min

	const createLightning = (direction, color) => {
		const points = []
		if (svg.current) {
			d3.select(svg.current).selectAll('*').remove()
		}
		const innerSpaceFromCenter = 0.047 * Math.min(width, height)
		const innerSpaceFromCenterSubDirections = 0.033 * Math.min(width, height)

		// Define the x and y coordinates for the starting point and the angle based on the direction
		let x, y, angle, length
		const rx = width * 0.14

		const cx = width / 2
		const cy = height / 2

		switch (direction) {
			case 'east':
				x = cx + rx
				y = cy
				angle = 0
				length = 130 // Specify the length for the east direction
				break
			case 'north':
				x = cx
				y = cy - rx
				angle = -Math.PI / 2
				length = 38
				break
			case 'west':
				x = cx - rx
				y = cy
				angle = Math.PI
				length = 130
				break
			case 'south':
				x = cx
				y = cy + rx
				angle = Math.PI / 2
				length = 35
				break
			case 'west-south':
				x = cx + rx / 1.4
				y = cy + rx / 1.4
				angle = Math.PI / 4
				length = 90
				break
			case 'east-south':
				x = cx - rx / 1.4
				y = cy + rx / 1.4
				angle = (3 * Math.PI) / 4
				length = 110
				break
			case 'west-north':
				x = cx - rx / 1.4
				y = cy - rx / 1.4
				angle = (-3 * Math.PI) / 4
				length = 100
				break
			case 'east-north':
				x = cx + rx / 1.4
				y = cy - rx / 1.4
				angle = -Math.PI / 4
				length = 120
				break

			case 'inner-east':
				x = width / 2 + innerSpaceFromCenter
				y = height / 2
				angle = 0
				length = 5

				break
			case 'inner-north':
				x = width / 2
				y = height / 2 - innerSpaceFromCenter
				angle = -Math.PI / 2
				length = 5

				break
			case 'inner-west':
				x = width / 2 - innerSpaceFromCenter
				y = height / 2
				angle = Math.PI
				length = 5

				break
			case 'inner-south':
				x = width / 2
				y = height / 2 + innerSpaceFromCenter
				angle = Math.PI / 2
				length = 5

				break
			case 'inner-west-south':
				x = width / 2 + innerSpaceFromCenterSubDirections
				y = height / 2 + innerSpaceFromCenterSubDirections
				angle = Math.PI / 4
				length = 5

				break
			case 'inner-east-south':
				x = width / 2 - innerSpaceFromCenterSubDirections
				y = height / 2 + innerSpaceFromCenterSubDirections
				angle = (3 * Math.PI) / 4
				length = 5

				break
			case 'inner-west-north':
				x = width / 2 - innerSpaceFromCenterSubDirections
				y = height / 2 - innerSpaceFromCenterSubDirections
				angle = (-3 * Math.PI) / 4
				length = 5

				break
			case 'inner-east-north':
				x = width / 2 + innerSpaceFromCenterSubDirections
				y = height / 2 - innerSpaceFromCenterSubDirections
				angle = -Math.PI / 4
				length = 5

				break
		}

		points.push([x, y])

		// Generate the lightning path with multiple segments
		for (let i = 0; i < 7; i++) {
			x += length * 0.77 * Math.cos(angle)
			y += length * 0.77 * Math.sin(angle)
			points.push([x, y])
			angle += randomBetween(-Math.PI / 4, Math.PI / 4)
		}

		// Draw the lightning path
		const lineGenerator = d3.line()
		svg
			.append('path')
			.datum(points)
			.attr('d', lineGenerator)
			.attr('fill', 'none')
			.attr('stroke', color ? color : '#f0f0f0')
			.attr('stroke-width', 1)
	}

	const clearLightningPaths = () => {
		svg.selectAll('path').remove()
	}

	// Create lightning paths for each direction
	const createMultipleLightnings = () => {
		const directions = [
			{
				direction: 'inner-east',
				color: '#f0f0f0',
			},
			{
				direction: 'inner-north',
				color: '#f0f0f0',
			},
			{
				direction: 'inner-west',
				color: '#f0f0f0',
			},
			{
				direction: 'inner-south',
				color: '#f0f0f0',
			},
			{
				direction: 'inner-west-south',
				color: '#f0f0f0',
			},
			{
				direction: 'inner-east-south',
				color: '#f0f0f0',
			},
			{
				direction: 'inner-west-north',
				color: '#f0f0f0',
			},
			{
				direction: 'inner-east-north',
				color: '#f0f0f0',
			},
			{ direction: 'east', color: '#acd3fa' },
			{ direction: 'north', color: '#e0f0ff' },
			{ direction: 'west', color: '#acd3fa' },
			{ direction: 'south', color: '#e0f0ff' },
			{ direction: 'west-south', color: '#c5e0fa' },
			{ direction: 'east-south', color: '#c5e0fa' },
			{ direction: 'west-north', color: '#c5e0fa' },
			{ direction: 'east-north', color: '#c5e0fa' },
		]

		clearLightningPaths()
		directions.forEach((directionInfo, i) => {
			for (let j = 0; j < 3; j++) {
				setTimeout(
					() => createLightning(directionInfo.direction, directionInfo.color),
					i * 220 + j * 300
				)
			}
		})
		setTimeout(createMultipleLightnings, directions.length * 220 + 3 * 300)
	}

	createMultipleLightnings()
}
