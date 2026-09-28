'use client'
import { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let points: { x: number; y: number; age: number }[] = []
    const accentOrange = '113, 183, 213' // #71B7D5
    let animationFrameId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    window.addEventListener('resize', resize)
    resize() // Initial size setup

    const addPoint = (x: number, y: number) => {
      points.push({ x, y, age: 0 })
    }

    const onMouseMove = (e: MouseEvent) => addPoint(e.clientX, e.clientY)
    const onTouchMove = (e: TouchEvent) => addPoint(e.touches[0].clientX, e.touches[0].clientY)

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Age points and remove old ones (trail length limit)
      points.forEach(p => p.age += 1)
      points = points.filter(p => p.age < 35)

      if (points.length > 1) {
        for (let i = 1; i < points.length; i++) {
          ctx.beginPath()
          ctx.moveTo(points[i - 1].x, points[i - 1].y)
          ctx.lineTo(points[i].x, points[i].y)
          
          const lifePercent = 1 - points[i].age / 35 // 1 (new) down to 0 (old)
          
          ctx.strokeStyle = `rgba(${accentOrange}, ${lifePercent})`
          ctx.lineWidth = 5 * lifePercent
          ctx.shadowBlur = 15 * lifePercent
          ctx.shadowColor = `rgba(${accentOrange}, ${lifePercent})`
          ctx.lineCap = 'round'
          ctx.lineJoin = 'round'
          ctx.stroke()
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      aria-hidden="true"
    />
  )
}