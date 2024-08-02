/** @format */

import { createAnimatedCircle } from '../../AnimatedCircle'

export const AtomCore = (svg, width, height, handleFileClick) => {
	const circleRadius = width * 0.15
	if (svg.current) {
		d3.select(svg.current).selectAll('*').remove()
	}
	// Circle generator method for other circles
	function createMainCircle(selection, radius, strokeColor) {
		return createCircle(
			selection,
			width / 2,
			height / 2,
			radius,
			'none',
			strokeColor,
			2
		)
	}

	const Maincircle = createMainCircle(svg, circleRadius, '#36769c')
	Maincircle.attr('stroke', 'rgba(255, 255, 255, 0.9)') // Shadow color (light gray with some transparency)
		.attr('stroke-width', 4) // Adjust the width of the shadow
		.attr('filter', 'blur(7px)') // Apply a blur f

	const circle = createMainCircle(svg, circleRadius, 'yellow')

	const circumference = 2 * Math.PI * circleRadius
	const progressOffset = circumference * (1 / 100)

	circle
		.attr('stroke-dasharray', `${circumference} ${circumference}`)
		.attr('stroke-dashoffset', progressOffset)
		.attr('stroke', '#23fae4') // Shadow color (light gray with some transparency)
		.attr('stroke-width', 4) // Adjust the width of the shadow
		.attr('filter', 'blur(7px)') // Apply a blur f

	function createCircle(selection, cx, cy, radius, fill, stroke, strokeWidth) {
		return selection
			.append('circle')
			.attr('cx', cx)
			.attr('cy', cy)
			.attr('r', radius)
			.attr('fill', fill)
			.attr('stroke', stroke)
			.attr('stroke-width', strokeWidth)
	}
	let borderColor = '#f2c94e'
	const atomCore = createAnimatedCircle(
		svg,
		width / 2,
		height / 2,
		width / 42,
		borderColor,
		3,
		'akbariovich.jpg',
		700
	)
	atomCore.attr('cursor', 'pointer').on('click', handleFileClick)
}
