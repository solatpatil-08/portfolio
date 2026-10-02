import { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
  vx: number
  vy: number
  baseX: number
  baseY: number
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      // Draw static, restrained grid background
      ctx.fillStyle = 'rgba(99, 102, 241, 0.15)'
      for (let x = 30; x < width; x += 60) {
        for (let y = 30; y < height; y += 60) {
          ctx.beginPath()
          ctx.arc(x, y, 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      return
    }

    const points: Point[] = []
    const spacing = 55
    const rows = Math.ceil(height / spacing)
    const cols = Math.ceil(width / spacing)

    for (let r = 0; r <= rows; r++) {
      for (let c = 0; c <= cols; c++) {
        const x = c * spacing + (Math.random() - 0.5) * 10
        const y = r * spacing + (Math.random() - 0.5) * 10
        points.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        })
      }
    }

    let mouseX = -1000
    let mouseY = -1000
    let isVisible = true

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }

    const handleResize = () => {
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      height = canvas.height = canvas.parentElement?.clientHeight || 600
    }

    window.addEventListener('resize', handleResize)
    const parent = canvas.parentElement
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove)
      parent.addEventListener('mouseleave', handleMouseLeave)
    }

    // Pause when offscreen
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting
      },
      { threshold: 0.1 },
    )
    observer.observe(canvas)

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, width, height)

      // Update and draw points
      for (let i = 0; i < points.length; i++) {
        const pt = points[i]

        pt.x += pt.vx
        pt.y += pt.vy

        // Gentle oscillation around base
        if (Math.abs(pt.x - pt.baseX) > 12) pt.vx *= -1
        if (Math.abs(pt.y - pt.baseY) > 12) pt.vy *= -1

        // Mouse displacement
        const dx = mouseX - pt.x
        const dy = mouseY - pt.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120
          pt.x -= (dx / dist) * force * 3
          pt.y -= (dy / dist) * force * 3
        }

        ctx.fillStyle = 'rgba(99, 102, 241, 0.28)'
        ctx.beginPath()
        ctx.arc(pt.x, pt.y, 1.2, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw subtle connecting lines between close neighbors
      ctx.lineWidth = 0.6
      for (let i = 0; i < points.length; i += 2) {
        for (let j = i + 1; j < points.length; j += 3) {
          const p1 = points[i]
          const p2 = points[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = dx * dx + dy * dy

          if (dist < 3600) {
            // ~60px
            const alpha = (1 - dist / 3600) * 0.12
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove)
        parent.removeEventListener('mouseleave', handleMouseLeave)
      }
      observer.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60 dark:opacity-75 transition-opacity"
      aria-hidden="true"
    />
  )
}
