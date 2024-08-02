/** @format */

export const Gradient = (group,firstColor, secondColor, id) => {
	const radialGradient = group
		.append('defs')
		.append('radialGradient')
		.attr('id', id)
		.attr('x1', '0%')
		.attr('y1', '0%')
		.attr('x2', '100%')
		.attr('y2', '0%')

	radialGradient
		.append('stop')
		.attr('offset', '20%')
		.attr('stop-color', firstColor)

	radialGradient
		.append('stop')
		.attr('offset', '100%')
		.attr('stop-color', secondColor)
}