import * as d3 from 'd3'
import { useEffect, useRef } from 'react'

export function TemperatureLine({ data = [] }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.innerHTML = ''
    const width = el.clientWidth
    const height = 160
    const svg = d3.select(el).append('svg').attr('width', width).attr('height', height)

    const x = d3.scaleLinear().domain([0, data.length - 1]).range([32, width - 16])
    const y = d3.scaleLinear().domain([d3.min(data) - 2, d3.max(data) + 2]).range([height - 24, 16])

    const line = d3.line()
      .x((_, i) => x(i))
      .y((d) => y(d))
      .curve(d3.curveMonotoneX)

    svg.append('path')
      .attr('d', line(data))
      .attr('fill', 'none')
      .attr('stroke', 'url(#grad)')
      .attr('stroke-width', 2)

    const grad = svg.append('defs').append('linearGradient').attr('id', 'grad').attr('x1', '0%').attr('x2', '100%')
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#60a5fa')
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#22d3ee')
  }, [data])
  return <div ref={ref} className="w-full" />
}
