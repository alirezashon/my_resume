'use client'

import styles from './index.module.css'
import * as d3 from 'd3'
import { useRef, useEffect, useState } from 'react'
import { Gradient } from './Gradient'
const StarSelector = () => {
  const svgRef = useRef(null)
  const [data, setData] = useState([])
  const [width, setWidth] = useState()
  const [height, setHeight] = useState()

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
    const month = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
    ]
    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()
    const halfWidth = width / 2
    const halfHeight = height / 2

    const radius = width / 7
    const angle = (2 * Math.PI) / month.length

    if (svgRef.current) {
      d3.select(svgRef.current).selectAll('*').remove()
    }
    const treeItems = svg.append('g')

    Gradient(treeItems, '#186ca3', '#23517d', 'treeRects')

    const createStarelector = () => {
      // Initial lines for not displaying inside the main circle
      const lines = svg.append('g').selectAll('line').data(month).enter()

      // Create the main circle and attach the image to it
      const userImg = svg
        .append('defs')
        .append('clipPath')
        .attr('id', 'circle-clips')
        .append('circle')
        .attr('cx', halfWidth)
        .attr('cy', halfHeight)
        .attr('r', width / 25)
        .attr('id', 'image')

      svg
        .append('circle')
        .attr('cx', halfWidth)
        .attr('cy', halfHeight)
        .attr('r', width / 25)
        .attr('fill', 'white')
        .attr('stroke', '#84d3f5')
        .attr('stroke-width', '.6vh')
        .style('stroke-dasharray', '2vh .4vh')

      svg
        .append('g')
        .attr('clip-path', 'url(#circle-clips)')
        .append('image')
        .attr('href', '/akbariovich.jpg')
        .attr('x', halfWidth - width / 25)
        .attr('y', halfHeight - width / 25)
        .attr('width', width / 12.5) // Adjusted the size to match the circle size
        .attr('height', width / 12.5) // Adjusted the size to match the circle size

      lines
        .append('line')
        .attr('x1', halfWidth)
        .attr('x2', halfWidth)
        .attr('y1', halfHeight)
        .attr('y2', halfHeight)
        .transition()
        .duration(2555)
        .attr('x1', halfWidth)
        .attr('x2', (d, i) => halfWidth + radius * Math.cos(i * angle))
        .attr('y1', halfHeight)
        .attr('y2', (d, i) => halfHeight + radius * Math.sin(i * angle))
        .style('stroke', '#ffffff')
        .style('stroke-dasharray', '1vh .2vh')

      const monthBox = svg
        .append('g')
        .selectAll('circle')
        .data(month)
        .enter()
        .append('circle')
        .attr('cx', (d, i) => halfWidth + radius * Math.cos(i * angle))
        .attr('cy', (d, i) => halfHeight + radius * Math.sin(i * angle))
        .attr('r', (d, i) =>
          [2, 3, 4, 5, 6].includes(i)
            ? width / 60
            : [0, 1, 7, 9].includes(i)
            ? width / 44
            : width / 33
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
            `rotate(0, ${halfWidth}, ${halfHeight})`, // Start from 0 degrees
            `rotate(360, ${halfWidth}, ${halfHeight})` // Rotate to 360 degrees
          )
        })

      const datasName = svg
        .append('g')
        .selectAll('text')
        .data(month)
        .enter()
        .append('text')
        .attr('x', (d, i) => halfWidth + radius * Math.cos(i * angle))
        .attr('y', (d, i) => halfHeight * 1.01 + radius * Math.sin(i * angle))
        .attr('text-anchor', 'middle')
        .attr('font-size', width > height ? '1vw' : '1.3vw')
        .attr('treeModelgnment-baseline', 'middle')
        .style('fill', '#e3efff')
        .text((d) => d)
        .style('cursor', 'pointer')
        .style('opacity', 0)
        .on('click', (d, i) => {
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
        })

      setTimeout(() => {
        datasName.style('opacity', 1)
      }, 1111)
    }
    createStarelector()
  }, [width, height, data])
  return (
    <>
      <div className={styles.container}>
        <svg
          className={styles.treeSelector}
          width={'100vw'}
          height={'100vh'}
          ref={svgRef}
        />
      </div>
    </>
  )
}

export default StarSelector
