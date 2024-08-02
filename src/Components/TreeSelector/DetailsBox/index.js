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
export const DetailsBox = (group, data, x, y, width, height) => {

	const Rectangle = (X, Y, Width, Height, fill, id) => {
		group
			.append('rect')
			.attr('x', X)
			.attr('y', Y)
			.attr('rx', 7)
			.attr('ry', 7)
			.attr('id', id)
			.attr('width', Width)
			.attr('height', Height)
			.attr('fill', fill)
			.style('stroke', '#ffffff')
			.style('stroke-width', 2)
	}

	const Text = (Width, Height, text, fill) => {
		group
			.append('text')
			.attr('x', Width)
			.attr('y', Height)
			.attr('id', 'DetailsBoxText')
			.attr('text-anchor', 'middle')
			.attr('dominant-baseline', 'middle')
			.attr('fill', fill)
			.attr('font-size', '2vh')
			.text(text)
			.style('cursor', 'pointer')
	}

	//                    first container                                      //
	const firstContainerGradient = Gradient(group,'#0a1b47', '#4c76e0', 'mainBG')
	const firstContainerFont = Gradient(group,'#23517d', '#308596', 'mainFont')
	const detailsContainerGradient = Gradient(group,'#62cdd9', '#b5e5eb', 'detailsBG')
	const detailsFontGradient = Gradient(group,'#210b29', '#2a334d', 'detailsFont')

	const mainBackground = Rectangle(
		x,
		y,
		width,
		height,
		'url(#mainBG)',
		'mainBackground'
	)

	const userBackground = Rectangle(
		x,
		y,
		width,
		width / 10,
		'url(#detailsBG)',
		'userBackground'
	)
	const user = Text(
		x + width / 2,
		y + width / 10 / 2,
		`user : ${data.user}`,
		'url(#detailsFont)'
	)

	const timeBackground = Rectangle(
		x,
		y + height - width / 10,
		width,
		width / 10,
		'url(#detailsBG)',
		'loginBackground'
	)
	const time = Text(
		x + width / 2,
		y + height - width / 10 / 2,
		`date : ${data.time.split('T')[0]}    time:${
			data.time.split('T')[1].split('.')[0]
		}`,
		'url(#detailsFont)'
	)

	const foreignObject = group
		.append('foreignObject')
		.attr('width', height / 11)
		.attr('height', height / 11)
		.attr('x', x + width - height / 11)
		.attr('y', y)

	const assetsForeignObject = group
		.append('foreignObject')
		.attr('width', width)
		.attr('height', height / 2)
		.attr('x', x)
		.attr('y', y + height / 2)
}
//                   END_FIRST_CONTAINER                                      //

//                     second container                                            //
