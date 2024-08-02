/** @format */

import * as d3 from 'd3'

export const createAnimatedCircle = (
	svg,
	cx,
	cy,
	r,
	strokeColor,
	strokeWidth,
	imageUrl,
	duration,
	onDragEnd
) => {
	const clipId = `clip-${Math.random().toString(36).substring(7)}` // Generate a unique clip ID

	const defs = svg.append('defs')
	const clipPath = defs
		.append('clipPath')
		.attr('id', clipId)
		.append('circle')
		.attr('cx', cx)
		.attr('cy', cy)
		.attr('r', r)

	const group = svg.append('g')

	const circle = group
		.append('circle')
		.attr('cx', cx)
		.attr('cy', cy)
		.attr('r', r)
		.attr('stroke', strokeColor)
		.attr('stroke-width', strokeWidth)
		.style('fill', 'white')
		.style('opacity', 0) // initially hide the circle

	const image = group
		.append('image')
		.attr('x', cx - r)
		.attr('y', cy - r)
		.attr('width', r * 2)
		.attr('height', r * 2)
		.attr('xlink:href', imageUrl)
		.style('opacity', 0)
		.style('clip-path', `url(#${clipId})`)
		.style('transform-origin', 'center')
	let angle = 0
	let isHovered = false
	const animateLoop = () => {
		
		// Calculate the pixel position on the circle
		const x = cx + Math.cos(angle) * r
		const y = cy + Math.sin(angle) * r
		
		// Draw the pixel on the circle
		svg
		.append('circle')
		.attr('cx', x)
		.attr('cy', y)
		.attr('r', 1)
		.attr('stroke', strokeColor)
		.attr('stroke-width', strokeWidth)
		.attr('id','animateCircelo')
		.style('fill', strokeColor)
		.style('opacity', 0) // initially hide the pixel
		.transition()
		.duration(duration)
		.ease(d3.easeLinear)
			.style('opacity', 1) // gradually show the pixel
			.remove() // remove the pixel after the transition is complete

			angle += 1 // Adjust the speed of the animation here
			if (isHovered) {
				angle += 1 // Adjust the speed of the animation here
				image.style('transform', `rotate(${angle}deg)`)
			}
			requestAnimationFrame(animateLoop)
		}
		
		svg.selectAll('#animateCircelo').remove()
		animateLoop()
		group
		.on('mouseenter', () => {
			// When mouse enters the image, enable rotation
			isHovered = true
		})
		.on('mouseleave', () => {
			// When mouse leaves the image, disable rotation
			isHovered = false
			// Reset the rotation angle when not hovered
			image.style('transform', `rotate(0deg)`)
		})
	setTimeout(() => {
		circle.style('opacity', 1) // show the whole circle
		image.style('opacity', 1) // show the image
	}, duration)

	return group
}
