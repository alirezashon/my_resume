'use client'

import styles from './index.module.css'
import * as d3 from 'd3'
import { useRef, useEffect, useState } from 'react'
import { DetailsBox, Gradient } from './DetailsBox'
const TreeSelector = () => {
	const svgRef = useRef(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [data, setData] = useState([])
	const [width, setWidth] = useState()
	const [height, setHeight] = useState()
	const [selectedMonth, setSelectedMonth] = useState([])
	const [assetronerchVisibility, setAssetronerchVisibility] = useState(false)

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

	const paginationCount = 18
	const totalPages = Math.ceil(data.length / paginationCount)
	const startIndex = (currentPage - 1) * paginationCount
	const endIndex = startIndex + paginationCount
	const pageData = data.slice(startIndex, endIndex)
	const generateSequence = (n, arr) => {
		if (n === 0) return arr
		const last = arr[arr.length - 1]
		const next = last === 1 ? 2 : 1
		return generateSequence(n - 1, [...arr, next])
	}
	const numberOfLog = data.length
	const treeData = generateSequence(numberOfLog, [])

	useEffect(() => {
		const month = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'Augest',
			'September',
			'October',
			'November',
			'December',
		]
		const svg = d3.select(svgRef.current)
		svg.selectAll('*').remove()
		const quarterWidth = width / 4
		const quarterHeight = height / 4

		const radius = width / 7
		const angle = (2 * Math.PI) / month.length
		const RightBranch = quarterWidth / 2.8
		const LeftBranch = quarterWidth * 1.3
		const datesRectWidth = width / 11
		const datesRectHeight = width / 33
		let paddingY = width / 38
		let lineY1 = width / 44
		let lineY2 = width / 44

		if (svgRef.current) {
			d3.select(svgRef.current).selectAll('*').remove()
		}
		const treeItems = svg.append('g')

		Gradient(treeItems, '#186ca3', '#23517d', 'treeRects')

		const createStarelector = () => {
			//  ایجاد اولیه خطوط برای عدم نمایش داخل دایره اصلی
			const lines = svg.append('g').selectAll('line').data(month).enter()
			// ایجاد دایره اصلی و پیوست تصویر به آن
			const userImg = svg
				.append('defs')
				.append('clipPath')
				.attr('id', 'circle-clips')
				.append('circle')
				.attr('cx', 2.8 * quarterWidth || 0)
				.attr('cy', quarterHeight * 2 || 0)
				.attr('r', (width / 14) * 0.28 || 0)
				.attr('id', 'image')
			svg
				.attr('id', 'borderCenterImage')
				.append('circle')
				.attr('cx', 2.8 * quarterWidth || 0)
				.attr('cy', quarterHeight * 2 || 0)
				.attr('r', (width / 14) * 0.28 || 0)
				.attr('fill', 'white')
				.attr('stroke', '#84d3f5')
				.attr('stroke-width', '.6vh')
				.style('stroke-dasharray', '2vh .4vh')

			const userImgBox = svg
				.append('g')
				.attr('clip-path', 'url(#circle-clips)')
				.append('image')
				.attr('href', '/images/logo.jpg')
				.attr('x', 2.8 * quarterWidth - (width / 18) * 0.5 || 0)
				.attr('y', quarterHeight * 2 - (width / 18) * 0.5 || 0)
				.attr('width', width / 18 || 0)
				.attr('height', width / 18 || 0)

			lines
				.append('line')
				.attr('x1', 2.8 * quarterWidth || 0)
				.attr('x2', 2.8 * quarterWidth || 0)
				.attr('y1', quarterHeight * 2 || 0)
				.attr('y2', quarterHeight * 2 || 0)
				.transition()
				.duration(2555)
				.attr('x1', 2.8 * quarterWidth || 0)
				.attr(
					'x2',
					(d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle) || 0
				)
				.attr('y1', quarterHeight * 2 || 0)
				.attr(
					'y2',
					(d, i) => quarterHeight * 2 + radius * Math.sin(i * angle) || 0
				)
				.style('stroke', '#ffffff')
				.style('stroke-dasharray', '1vh .2vh')

		

			const monthBox = svg
				.append('g')
				.selectAll('circle')
				.data(month)
				.enter()
				.append('circle')
				.attr(
					'cx',
					(d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle) || 0
				)
				.attr(
					'cy',
					(d, i) => quarterHeight * 2 + radius * Math.sin(i * angle) || 0
				)
				.attr('r', (d, i) =>
					[2, 3, 4, 5, 6].includes(i)
						? width / 60 || 0
						: [0, 1, 7, 9].includes(i)
						? width / 44 || 0
						: width / 33 || 0
				)
				.attr('fill', 'url(#treeRects)')
				.style('stroke', '#ffd3f5')
				.style('stroke-width', '.2vh')
				.style('stroke-dasharray', '1vh .2vh')

			monthBox
				.transition()
				.duration(700)
				.attrTween('transform', function (d, i) {
					return d3.interpolateString(
						`rotate(${i * (360 / data.length) || 0}, ${
							2.8 * quarterWidth || 0
						}, ${quarterHeight * 2 || 0})`,
						`rotate(${i * (0 / data.length) + 360 || 0}, ${
							2.8 * quarterWidth || 0
						}, ${quarterHeight * 2 || 0})`
					)
				})

			const datasName = svg
				.append('g')
				.selectAll('text')
				.data(month)
				.enter()
				.append('text')
				.attr(
					'x',
					(d, i) => 2.8 * quarterWidth + radius * Math.cos(i * angle) || 0
				)
				.attr(
					'y',
					(d, i) => quarterHeight * 2.02 + radius * Math.sin(i * angle) || 0
				)
				.attr('text-anchor', 'middle')
				.attr('font-size', width > height ? '1vw' : '1.3vw')
				.attr('treeModelgnment-baseline', 'middle')
				.style('fill', '#e3efff')
				.text((d) => d)
				.style('cursor', 'pointer')
				.style('opacity', 0)
				.on('click', (d, i) => {
					console.log()
					const matchedMonth = data.filter(
						(log) =>
							parseInt(log.time.split('T')[0].split('-')[1]) ===
							month.findIndex((index) => index === i) + 1
					)
					const noneMatchedMonth = data.filter(
						(log) =>
							parseInt(log.time.split('T')[0].split('-')[1]) !==
							month.findIndex((index) => index === i) + 1
					)
					setData([...matchedMonth, ...noneMatchedMonth])
					console.log(matchedMonth)
				})

			setTimeout(() => {
				datasName.style('opacity', 1)
			}, 1111)
		}
		createStarelector()
	}, [
		width,
		height,
		data,
		currentPage,
		paginationCount,
		pageData,
		treeData,
	])

	const handleNext = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handlePageClick = (e) => {
		setCurrentPage(parseInt(e.target.value))
	}

	const pages = []

	for (let i = 1; i <= totalPages; i++) {
		pages.push(i)
	}

	return (
		<>
			<div className={styles.container}>
				
				<svg
					className={styles.treeSelector}
					width={'100vw'}
					height={'100vh'}
					ref={svgRef}
				/>
				<div className={styles.paginationContainer}>
					<div className={styles.pagination}>
						<button
							className={styles.button}
							onClick={handlePrev}
							disabled={currentPage === 1}>
							Previous
						</button>

						<div className={styles.pagesContainer}>
							{pages.map((page) => (
								<input
									key={page}
									value={page}
									type='button'
									onClick={handlePageClick}
									className={styles.input}
								/>
							))}
						</div>

						<button
							className={styles.button}
							onClick={handleNext}
							disabled={currentPage === totalPages}>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default TreeSelector
